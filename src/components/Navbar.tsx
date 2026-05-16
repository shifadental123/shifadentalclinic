import { Phone, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const NavLink = ({ href, children, ...props }: any) => {
    if (isHome) {
      return <a href={href} {...props}>{children}</a>;
    }
    return <Link to={`/${href}`} {...props}>{children}</Link>;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <img src="/logo.jpg" alt="Shifa Dental Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-sm flex-shrink-0" />
            <div className="flex flex-col justify-center">
              <span className="font-heading font-bold text-sm sm:text-lg lg:text-xl text-primary-blue leading-tight tracking-tight">
                SHIFA DENTAL CLINIC
              </span>
              <span className="font-heading font-semibold text-[10px] sm:text-xs lg:text-sm text-primary-blue/80 leading-none mt-0.5">
                & IMPLANT CENTER
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="#about" className="text-text-dark hover:text-primary-blue font-medium transition-colors">About</NavLink>
            <NavLink href="#services" className="text-text-dark hover:text-primary-blue font-medium transition-colors">Services</NavLink>
            <NavLink href="#doctors-guide" className="text-text-dark hover:text-primary-blue font-medium transition-colors">Guide</NavLink>
            <NavLink href="#testimonials" className="text-text-dark hover:text-primary-blue font-medium transition-colors">Reviews</NavLink>
            
            <Link to="/portal" className="flex items-center gap-1 text-text-dark hover:text-primary-blue font-medium transition-colors">
              <User size={18} />
              Portal
            </Link>

            <a href="tel:+917878290682" className="flex items-center gap-2 text-accent-teal font-semibold hover:text-green-700 transition-colors">
              <Phone size={18} />
              +91-7878290682
            </a>
            
            <NavLink href="#appointment" className="bg-primary-blue text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Book Appointment
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary-blue p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <NavLink href="#about" className="block text-text-dark hover:text-primary-blue font-medium py-2" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#services" className="block text-text-dark hover:text-primary-blue font-medium py-2" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink href="#doctors-guide" className="block text-text-dark hover:text-primary-blue font-medium py-2" onClick={() => setIsOpen(false)}>Guide</NavLink>
          <NavLink href="#testimonials" className="block text-text-dark hover:text-primary-blue font-medium py-2" onClick={() => setIsOpen(false)}>Reviews</NavLink>
          
          <Link to="/portal" className="flex items-center gap-2 text-text-dark hover:text-primary-blue font-medium py-2" onClick={() => setIsOpen(false)}>
            <User size={18} />
            Patient Portal
          </Link>

          <a href="tel:+917878290682" className="flex items-center gap-2 text-accent-teal font-semibold py-2" onClick={() => setIsOpen(false)}>
            <Phone size={18} />
            +91-7878290682
          </a>
          
          <NavLink href="#appointment" className="block bg-primary-blue text-white px-4 text-center py-3 rounded-md font-medium" onClick={() => setIsOpen(false)}>
            Book Appointment
          </NavLink>
        </div>
      )}
    </nav>
  );
}
