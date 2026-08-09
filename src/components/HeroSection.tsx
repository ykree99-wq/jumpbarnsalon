import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStudioData } from '../context/StudioDataContext';
import { ChevronRight, Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import DragDropDropzone from './DragDropDropzone';

interface HeroSectionProps {
  onOpenBookModal: () => void;
  onOpenWorkshopModal: () => void;
  onOpenContactModal: () => void;
}

export default function HeroSection({ onOpenBookModal, onOpenWorkshopModal, onOpenContactModal }: HeroSectionProps) {
  const { slides, updateImage } = useStudioData();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Audio Player State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Listen for slide index reset events from the editor
  useEffect(() => {
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
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full bg-[#F5F5F0] overflow-hidden flex items-center justify-center">
      {/* Hidden Audio Tag */}
      <audio
        ref={audioRef}
        src="/audio/home-song.m4a"
        preload="metadata"
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

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

      {/* Elegant Music Player Floating Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 right-10 z-30 flex items-center gap-3 bg-white/85 backdrop-blur-md border border-[#0047AB]/20 shadow-2xl rounded-full px-4 py-2.5 text-[#0047AB] group transition-all duration-300 hover:bg-white"
      >
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md cursor-pointer"
          aria-label={isPlaying ? "일시정지" : "재생"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
        </button>

        <div className="flex flex-col pr-2">
          <div className="flex items-center gap-1.5">
            <Music className={`w-3.5 h-3.5 text-[#0047AB] ${isPlaying ? 'animate-bounce' : ''}`} />
            <span className="text-[11px] font-black tracking-tight text-[#0047AB]">
              집으로 송 (Sing-Along)
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-20 h-1 bg-[#0047AB]/20 rounded-lg appearance-none cursor-pointer accent-[#0047AB]"
            />
            <span className="text-[9px] font-mono text-[#0047AB]/70 font-semibold">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-[#0047AB]/10 transition-colors text-[#0047AB] cursor-pointer"
          aria-label={isMuted ? "음소거 해제" : "음소거"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </motion.div>

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
