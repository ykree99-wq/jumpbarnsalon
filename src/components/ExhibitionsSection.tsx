import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud } from 'lucide-react';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';

interface ExhibitionsSectionProps {
  onOpenWorkshopModal: () => void;
  onOpenContactModal: () => void;
}

const STORAGE_KEY_STUDIO_NEWS = 'youngkyoung_studio_news_frames_v1';

const DEFAULT_NEWS_FRAMES = [
  '/gallery/IMG_1836.JPG',
  '/gallery/IMG_1837.JPG',
  '/gallery/IMG_1838.JPG',
  '/gallery/IMG_1839.JPG',
  '/gallery/IMG_1840.JPG',
];

export default function ExhibitionsSection({ onOpenWorkshopModal, onOpenContactModal }: ExhibitionsSectionProps) {
  const { exhibitions, updateImage } = useStudioData();
  const [newsFrames, setNewsFrames] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STUDIO_NEWS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 5) return parsed;
      }
    } catch (e) {
      console.warn('Failed to load studio news frames from localStorage', e);
    }
    return DEFAULT_NEWS_FRAMES;
  });

  const handleFrameImageDrop = (index: number, dataUrl: string) => {
    setNewsFrames((prev) => {
      const next = [...prev];
      next[index] = dataUrl;
      try {
        localStorage.setItem(STORAGE_KEY_STUDIO_NEWS, JSON.stringify(next));
      } catch (e) {
        console.warn('Failed to save studio news frames to localStorage', e);
      }
      return next;
    });
  };

  return (
    <section className="py-24 bg-[#F5F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <header className="mb-20 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="korean-seal text-[8px] w-6 h-6">전시</div>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#B7102A] uppercase">
              NEWS & EXHIBITIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tighter text-[#1C1C18]">
            LATEST EVENTS
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Exhibitions */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {exhibitions.map((ex, index) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <DragDropDropzone
                  onImageDropped={(dataUrl) => updateImage('exhibition', ex.id, dataUrl)}
                  className="aspect-[4/5] rounded-[30px] overflow-hidden bg-white shadow-xl relative group"
                >
                  <img
                    src={ex.posterImage}
                    alt="Exhibition Poster"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </DragDropDropzone>
              </motion.div>
            ))}
          </div>

          {/* Sidebar News - 5 Image Frames */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-serif font-black border-b border-black/10 pb-4">
              STUDIO NEWS
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {newsFrames.map((imgUrl, index) => (
                <motion.div
                  key={`news-frame-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <DragDropDropzone
                    onImageDropped={(dataUrl) => handleFrameImageDrop(index, dataUrl)}
                    className="aspect-[16/9] rounded-[24px] overflow-hidden bg-white shadow-md relative group border-2 border-dashed border-black/10 hover:border-[#B7102A] transition-all cursor-pointer"
                    label={`뉴스 프레임 ${index + 1}`}
                  >
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={`Studio News Frame ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-black/30 gap-2 p-4">
                        <UploadCloud className="w-8 h-8 group-hover:text-[#B7102A] transition-colors" />
                        <span className="text-xs font-bold">이미지 올리기 (프레임 {index + 1})</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[9px] font-black tracking-widest rounded-full pointer-events-none">
                      FRAME {index + 1}
                    </div>
                  </DragDropDropzone>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
