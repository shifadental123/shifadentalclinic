import { useEffect, useState, FormEvent } from 'react';
import { User } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, db, loginWithGoogle, logout, handleFirestoreError, OperationType } from '../lib/firebase';
import { Calendar, Clock, FileText, Phone, Mail, User as UserIcon, LogOut } from 'lucide-react';

export default function PatientPortal() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'profile' | 'appointments' | 'treatments'>('appointments');

  // Data states
  const [patientInfo, setPatientInfo] = useState<any>(null);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [treatments, setTreatments] = useState<any[]>([]);
  
  // Edit Profile Form
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserData(currentUser);
      } else {
        setLoading(false);
        setPatientInfo(null);
        setAppointments([]);
        setTreatments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (currentUser: User) => {
    setLoading(true);
    try {
      // 1. Check if user document exists, if not create base user
      const userRef = doc(db, 'users', currentUser.uid);
      let userSnap;
      try {
        userSnap = await getDoc(userRef);
      } catch (e) {
        handleFirestoreError(e, OperationType.GET, `users/${currentUser.uid}`);
      }
      
      if (userSnap && !userSnap.exists()) {
        try {
          await setDoc(userRef, {
            role: 'patient',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
        } catch (e) {
          handleFirestoreError(e, OperationType.CREATE, `users/${currentUser.uid}`);
        }
      }

      // 2. Fetch or create private info
      const infoRef = doc(db, 'users', currentUser.uid, 'private', 'info');
      let infoSnap;
      try {
        infoSnap = await getDoc(infoRef);
      } catch (e) {
         handleFirestoreError(e, OperationType.GET, `users/${currentUser.uid}/private/info`);
      }
      
      if (infoSnap && infoSnap.exists()) {
        const data = infoSnap.data();
        setPatientInfo(data);
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          phone: data.phone || ''
        });
      } else {
        // Initialize private info
        const initialInfo = {
          email: currentUser.email || '',
          firstName: currentUser.displayName?.split(' ')[0] || '',
          lastName: currentUser.displayName?.split(' ').slice(1).join(' ') || '',
          phone: '',
          updatedAt: serverTimestamp()
        };
        try {
          await setDoc(infoRef, initialInfo);
        } catch(e) {
          handleFirestoreError(e, OperationType.CREATE, `users/${currentUser.uid}/private/info`);
        }
        setPatientInfo(initialInfo);
        setFormData({
          firstName: initialInfo.firstName,
          lastName: initialInfo.lastName,
          phone: ''
        });
      }

      // 3. Fetch Appointments
      const apptsRef = collection(db, 'appointments');
      const qAppts = query(apptsRef, where('userId', '==', currentUser.uid));
      let apptsSnap;
      try {
        apptsSnap = await getDocs(qAppts);
      } catch (e) {
        handleFirestoreError(e, OperationType.LIST, 'appointments');
      }
      if (apptsSnap) {
        setAppointments(apptsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      }

      // 4. Fetch Treatment Summaries
      const treatmentsRef = collection(db, 'treatment_summaries');
      const qTreatments = query(treatmentsRef, where('userId', '==', currentUser.uid));
      let treatmentsSnap;
      try {
        treatmentsSnap = await getDocs(qTreatments);
      } catch (e) {
         handleFirestoreError(e, OperationType.LIST, 'treatment_summaries');
      }
      if (treatmentsSnap) {
        setTreatments(treatmentsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setSaving(true);
    try {
      const infoRef = doc(db, 'users', user.uid, 'private', 'info');
      try {
        await updateDoc(infoRef, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          updatedAt: serverTimestamp()
        });
      } catch (e) {
        handleFirestoreError(e, OperationType.UPDATE, `users/${user.uid}/private/info`);
      }
      
      setPatientInfo((prev: any) => ({ ...prev, ...formData }));
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-12 bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-blue-50 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <UserIcon size={32} />
          </div>
          <h1 className="text-2xl font-heading font-bold text-text-dark mb-2">Patient Portal</h1>
          <p className="text-text-muted mb-8">Access your appointment history, treatment summaries, and update your profile.</p>
          <button 
            onClick={loginWithGoogle}
            className="w-full bg-primary-blue text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <UserIcon size={20} />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-text-dark">Welcome, {patientInfo?.firstName || user.displayName?.split(' ')[0]}</h1>
            <p className="text-text-muted">Manage your dental care securely.</p>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <nav className="flex flex-col">
                <button 
                  onClick={() => setTab('appointments')}
                  className={`flex items-center gap-3 px-6 py-4 text-left font-medium transition-colors border-l-4 ${tab === 'appointments' ? 'border-primary-blue bg-blue-50/50 text-primary-blue' : 'border-transparent text-text-dark hover:bg-gray-50'}`}
                >
                  <Calendar size={20} />
                  Appointments
                </button>
                <button 
                  onClick={() => setTab('treatments')}
                  className={`flex items-center gap-3 px-6 py-4 text-left font-medium transition-colors border-l-4 border-t border-t-gray-50 ${tab === 'treatments' ? 'border-l-primary-blue bg-blue-50/50 text-primary-blue' : 'border-l-transparent text-text-dark hover:bg-gray-50'}`}
                >
                  <FileText size={20} />
                  Treatment History
                </button>
                <button 
                  onClick={() => setTab('profile')}
                  className={`flex items-center gap-3 px-6 py-4 text-left font-medium transition-colors border-l-4 border-t border-t-gray-50 ${tab === 'profile' ? 'border-l-primary-blue bg-blue-50/50 text-primary-blue' : 'border-l-transparent text-text-dark hover:bg-gray-50'}`}
                >
                  <UserIcon size={20} />
                  My Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
              
              {/* Appointments Tab */}
              {tab === 'appointments' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-text-dark mb-6">Appointments</h2>
                  {appointments.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                      <Calendar className="mx-auto text-gray-400 mb-3" size={32} />
                      <p className="text-text-muted">No appointments found.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appointments.map(appt => (
                        <div key={appt.id} className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border border-gray-100 rounded-lg hover:border-blue-100 transition-colors">
                          <div className="mb-4 sm:mb-0">
                            <h3 className="font-bold text-text-dark text-lg mb-1">{appt.treatment}</h3>
                            <div className="flex items-center gap-4 text-sm text-text-muted">
                              <span className="flex items-center gap-1"><Calendar size={14} /> {appt.date}</span>
                              <span className="flex items-center gap-1"><Clock size={14} /> {appt.time}</span>
                            </div>
                            {appt.notes && <p className="text-sm text-gray-500 mt-2 italic">"{appt.notes}"</p>}
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                              appt.status === 'scheduled' ? 'bg-blue-100 text-blue-700' : 
                              appt.status === 'completed' ? 'bg-green-100 text-green-700' : 
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {appt.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Treatment Summaries Tab */}
              {tab === 'treatments' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-text-dark mb-6">Treatment History</h2>
                  {treatments.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                      <FileText className="mx-auto text-gray-400 mb-3" size={32} />
                      <p className="text-text-muted">No treatment summaries available yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {treatments.map(treatment => (
                        <div key={treatment.id} className="p-6 border border-gray-100 rounded-lg bg-gray-50/50">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-text-dark text-lg">{treatment.procedure}</h3>
                            <span className="flex items-center gap-1 text-sm text-text-muted bg-white px-2 py-1 rounded border border-gray-200">
                              <Calendar size={14} /> {treatment.date}
                            </span>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Notes</h4>
                              <p className="text-text-dark text-sm">{treatment.notes}</p>
                            </div>
                            {treatment.aftercare && (
                              <div>
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Aftercare Instructions</h4>
                                <div className="bg-blue-50 p-3 rounded text-sm text-blue-900 border border-blue-100">
                                  {treatment.aftercare}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Profile Tab */}
              {tab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-heading font-bold text-text-dark">My Profile</h2>
                    {!isEditing && (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="text-primary-blue text-sm font-medium hover:underline"
                      >
                        Edit Information
                      </button>
                    )}
                  </div>

                  {!isEditing ? (
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">First Name</p>
                          <p className="font-medium text-text-dark">{patientInfo?.firstName || '-'}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Last Name</p>
                          <p className="font-medium text-text-dark">{patientInfo?.lastName || '-'}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Mail size={12} /> Email
                          </p>
                          <p className="font-medium text-text-dark">{patientInfo?.email}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Phone size={12} /> Phone
                          </p>
                          <p className="font-medium text-text-dark">{patientInfo?.phone || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input 
                            autoFocus
                            type="text" 
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input 
                            type="text" 
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none"
                          placeholder="+91 "
                        />
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <button 
                          type="submit" 
                          disabled={saving}
                          className="bg-primary-blue text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {saving ? 'Saving...' : 'Save Profile'}
                        </button>
                        <button 
                          type="button"
                          onClick={() => {
                            setIsEditing(false);
                            setFormData({
                              firstName: patientInfo?.firstName || '',
                              lastName: patientInfo?.lastName || '',
                              phone: patientInfo?.phone || ''
                            });
                          }}
                          className="px-5 py-2 rounded-md font-medium text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
