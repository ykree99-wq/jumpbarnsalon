import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStudioData } from '../context/StudioDataContext';
import { ChevronRight } from 'lucide-react';
import DragDropDropzone from './DragDropDropzone';

interface HeroSectionProps {
  onOpenBookModal: () => void;
  onOpenWorkshopModal: () => void;
  onOpenContactModal: () => void;
}

export default function HeroSection({ onOpenBookModal, onOpenWorkshopModal, onOpenContactModal }: HeroSectionProps) {
  const { slides, updateImage } = useStudioData();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Listen for slide index reset events from the editor
  React.useEffect(() => {
    const handleReset = (e: any) => {
      const targetId = e.detail?.targetSlideId;
      if (targetId) {
        const index = slides.findIndex(s => s.id === targetId);
        if (index !== -1) {
          setCurrentSlide(index);
        }
      }
    };
    window.addEventListener('reset-slide-index', handleReset);
    return () => window.removeEventListener('reset-slide-index', handleReset);
  }, [slides]);

  // Auto-play slideshow
  React.useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full bg-[#F5F5F0] overflow-hidden flex items-center justify-center">
      {/* Slideshow background */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <DragDropDropzone
            onImageDropped={(dataUrl) => updateImage('slide', slides[currentSlide]?.id, dataUrl)}
            className="w-full h-full"
            label="슬라이드 이미지 교체"
          >
            <img 
              src={slides[currentSlide]?.image || 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1920&q=80'} 
              alt={`Slide ${currentSlide + 1}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5" />
          </DragDropDropzone>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators - Very subtle dots */}
      <div className="absolute bottom-10 left-10 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === idx ? 'bg-white w-6' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Very minimal text overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-white text-3xl sm:text-5xl font-serif font-black tracking-tighter drop-shadow-2xl opacity-80">
            Young-Kyoung Lee
          </h1>
          <div className="w-8 h-0.5 bg-white/30 mx-auto" />
        </motion.div>
      </div>

      {/* Scroll indicator - very subtle */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-[1px] h-12 bg-white/40 relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
