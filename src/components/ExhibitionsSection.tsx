import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UploadCloud, X, ZoomIn } from 'lucide-react';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';

interface ExhibitionsSectionProps {
  onOpenWorkshopModal: () => void;
  onOpenContactModal: () => void;
}

const STORAGE_KEY_STUDIO_NEWS = 'youngkyoung_studio_news_frames_v10';

const DEFAULT_NEWS_FRAMES = [
  '/gallery/news/frame1.jpg',
  '/gallery/news/frame2.jpg',
  '/gallery/news/frame3.jpg',
  '/gallery/news/frame4.jpg',
  '/gallery/news/frame5.jpg',
  '/gallery/news/frame6.png',
  '/gallery/news/frame7.jpg',
];

export default function ExhibitionsSection({ onOpenWorkshopModal, onOpenContactModal }: ExhibitionsSectionProps) {
  const { exhibitions, updateImage } = useStudioData();
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [newsFrames, setNewsFrames] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STUDIO_NEWS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 7) return parsed;
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
                  className="aspect-[4/5] rounded-[30px] overflow-hidden bg-white shadow-xl relative group cursor-pointer"
                >
                  <div
                    onClick={() => ex.posterImage && setSelectedImage({ url: ex.posterImage, title: ex.title || `Exhibition Poster ${index + 1}` })}
                    className="w-full h-full relative"
                  >
                    <img
                      src={ex.posterImage}
                      alt="Exhibition Poster"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 pointer-events-none">
                      <ZoomIn className="w-8 h-8" />
                      <span className="text-[11px] font-black tracking-wider uppercase">크게 보기</span>
                    </div>
                  </div>
                </DragDropDropzone>
              </motion.div>
            ))}
          </div>

          {/* Sidebar News - 7 Image Frames */}
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
                      <div
                        onClick={() => setSelectedImage({ url: imgUrl, title: `STUDIO NEWS FRAME ${index + 1}` })}
                        className="w-full h-full relative"
                      >
                        <img
                          src={imgUrl}
                          alt={`Studio News Frame ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 pointer-events-none">
                          <ZoomIn className="w-6 h-6" />
                          <span className="text-[10px] font-bold">확대 보기</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-black/30 gap-2 p-4">
                        <UploadCloud className="w-8 h-8 group-hover:text-[#B7102A] transition-colors" />
                        <span className="text-xs font-bold">이미지 올리기 (프레임 {index + 1})</span>
                      </div>
                    )}

                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[9px] font-black tracking-widest rounded-full pointer-events-none z-10">
                      FRAME {index + 1}
                    </div>

                    {index === 6 && (
                      <a
                        href="/gallery/news/toyostudio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#B7102A] text-white text-[10px] font-black tracking-wider rounded-full shadow-lg hover:bg-black transition-colors flex items-center gap-1 z-20"
                      >
                        📄 PDF 전문 열기/다운로드
                      </a>
                    )}
                  </DragDropDropzone>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Image Expansion Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center bg-transparent cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white bg-black/40 hover:bg-black p-2 rounded-full transition-colors cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 max-h-[82vh] flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[82vh] object-contain"
                />
              </div>

              {selectedImage.title && (
                <div className="mt-3 px-4 py-1.5 bg-black/60 backdrop-blur-md text-white/90 text-xs font-bold rounded-full tracking-wider">
                  {selectedImage.title}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
