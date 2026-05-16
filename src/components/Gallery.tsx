import { useState } from 'react';
import { Camera, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Replace these placeholders by adding your uploaded images/videos
// to the public folder and referencing them like '/gallery-1.jpeg' or '/video.mp4'
const galleryItems = [
  { type: 'video', src: '123.mp4' },
  { type: 'image', src: "/gallery1.jpg" },
  { type: 'image', src: "/gallery2.jpg" },
  { type: 'image', src: "/gallery3.jpg" },
  { type: 'image', src: "/gallery4.jpg" },
  { type: 'image', src: "/gallery5.jpg" },
  { type: 'image', src: "/gallery6.jpg" },
  { type: 'image', src: "/gallery7.jpg" },
  { type: 'image', src: "/gallery8.jpg" },
  { type: 'image', src: "/gallery9.png" },
  { type: 'image', src: "/gallery10.jpg" },
  { type: 'image', src: "/gallery11.jpg" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-wider text-accent-teal uppercase mb-2">Our Facility</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            A Glimpse Into SHIFA DENTAL CLINIC & IMPLANT CENTER
          </h3>
          <p className="text-lg text-text-muted">
            State-of-the-art equipment in a welcoming, hygienic, and friendly environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm border border-gray-100 group cursor-pointer bg-gray-100"
              onClick={() => setSelectedIndex(idx)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={`Clinic image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              )}
              <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/30 transition-colors duration-300 flex items-center justify-center">
                {item.type === 'image' ? (
                  <Camera size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
                ) : (
                  <Play size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeModal}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-50"
            >
              <X size={32} />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
            >
              <ChevronRight size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] px-4 flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems[selectedIndex].type === 'image' ? (
                <img 
                  src={galleryItems[selectedIndex].src} 
                  alt={`Gallery item ${selectedIndex + 1}`} 
                  className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl object-contain bg-black/50"
                />
              ) : (
                <video
                  src={galleryItems[selectedIndex].src}
                  className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl bg-black/50"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
