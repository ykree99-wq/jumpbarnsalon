import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Tag, Maximize2, Palette, Ruler, DollarSign, Sparkles, X } from 'lucide-react';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';
import { GalleryWork } from '../types';

export default function WorkGallerySection() {
  const { galleryWorks, updateImage, t, language } = useStudioData();
  const [selectedLightboxWork, setSelectedLightboxWork] = useState<GalleryWork | null>(null);

  const getWorkDisplayTitle = (work: GalleryWork, index: number) => {
    if (language === 'en') {
      if (work.title && work.title.includes('작품')) {
        const numStr = (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`);
        return `Artwork ${numStr} (Title pending)`;
      }
      if (work.title === '황혼의 사파리') return 'Twilight Safari';
    }
    return work.title;
  };

  const getTechnique = (tech?: string) => {
    if (!tech || tech === '재료 입력' || tech.startsWith('재료 입력')) {
      return t('재료 입력 (예: 한지 위 석채 및 수묵)', 'Medium info (e.g. Hanji & Ink)');
    }
    return tech;
  };

  const getSize = (s?: string) => {
    if (!s || s === '사이즈 입력' || s.startsWith('사이즈 입력')) {
      return t('사이즈 입력 (예: 60 × 45 cm)', 'Size info (e.g. 60 × 45 cm)');
    }
    return s;
  };

  const getPrice = (p?: string) => {
    if (!p || p === '가격 입력' || p.startsWith('가격 입력')) {
      return t('가격 입력 (예: 가격 문의)', 'Inquire Price');
    }
    return p;
  };

  const getDescription = (desc?: string) => {
    if (!desc || desc.includes('작품에 대한 서정적 해설') || desc.includes('작품 설명 입력란')) {
      return t(
        '작품에 대한 서정적 해설이나 제작 의도를 입력하는 공간입니다.',
        'A space to describe artistic notes and inspirations for this artwork.'
      );
    }
    return desc;
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="mb-20 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B7102A]" />
            <span className="text-[11px] font-black tracking-[0.35em] text-[#B7102A] uppercase">
              Original Artworks & Collections
            </span>
            <span className="w-8 h-[1px] bg-[#B7102A]" />
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#1C1C18]">
            WORK GALLERY
          </h2>
          <div className="w-16 h-1 bg-[#B7102A] mx-auto rounded-full mt-2" />

          <p className="text-xs sm:text-sm text-black/60 font-medium leading-relaxed max-w-xl mx-auto pt-2">
            {t(
              '이영경 작가의 소중한 원화 및 예술 작품 아카이브입니다. 아래 각 작품의 캡션(제목, 재료, 사이즈, 가격)은 텍스트를 클릭하여 바로 수정/입력하실 수 있습니다.',
              'Precious original artworks and collection archive of artist Young-Kyoung Lee. Click on any caption text (Title, Medium, Size, Price) to edit directly.'
            )}
          </p>
        </header>

        {/* Gallery Works Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {galleryWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-black/5 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with DragDrop dropzone */}
                <div className="relative overflow-hidden bg-[#F9F8F4]">
                  <DragDropDropzone
                    onImageDropped={(dataUrl) => updateImage('gallery', work.id, dataUrl)}
                    className="aspect-[4/3] w-full relative flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={work.image}
                      alt={getWorkDisplayTitle(work, index)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </DragDropDropzone>

                  {/* Lightbox Zoom Button */}
                  <button
                    onClick={() => setSelectedLightboxWork(work)}
                    className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 hover:bg-white text-[#1C1C18] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
                    title={t("원본 크게 보기", "View Full Image")}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#1C1C18]/80 backdrop-blur-md text-white text-[10px] font-black tracking-widest rounded-full uppercase shadow-md">
                      #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Structured Caption & Metadata Form */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Header & Title */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-[#B7102A] uppercase block">
                      {work.category || 'ORIGINAL ARTWORK'}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1C1C18] group-hover:text-[#B7102A] transition-colors leading-snug">
                      <EditableText
                        category="gallery"
                        id={work.id}
                        field="title"
                        value={getWorkDisplayTitle(work, index)}
                        tagName="span"
                      />
                    </h3>
                  </div>

                  {/* Caption Blank Fields Grid: 재료, 사이즈, 가격 */}
                  <div className="p-4 bg-[#F9F8F4] rounded-2xl border border-black/5 space-y-2.5 text-xs">
                    {/* 재료 (Medium / Technique) */}
                    <div className="flex items-center gap-2.5">
                      <Palette className="w-3.5 h-3.5 text-[#B7102A] shrink-0" />
                      <span className="font-bold text-black/40 w-14 shrink-0">{t('재료:', 'Medium:')}</span>
                      <div className="font-medium text-black/80 flex-1 truncate">
                        <EditableText
                          category="gallery"
                          id={work.id}
                          field="technique"
                          value={getTechnique(work.technique)}
                          tagName="span"
                        />
                      </div>
                    </div>

                    {/* 사이즈 (Size) */}
                    <div className="flex items-center gap-2.5">
                      <Ruler className="w-3.5 h-3.5 text-[#00658D] shrink-0" />
                      <span className="font-bold text-black/40 w-14 shrink-0">{t('사이즈:', 'Size:')}</span>
                      <div className="font-medium text-black/80 flex-1 truncate">
                        <EditableText
                          category="gallery"
                          id={work.id}
                          field="size"
                          value={getSize(work.size)}
                          tagName="span"
                        />
                      </div>
                    </div>

                    {/* 가격 (Price) */}
                    <div className="flex items-center gap-2.5 pt-1 border-t border-black/5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-bold text-black/40 w-14 shrink-0">{t('가격:', 'Price:')}</span>
                      <div className="font-bold text-emerald-700 flex-1 truncate">
                        <EditableText
                          category="gallery"
                          id={work.id}
                          field="price"
                          value={getPrice(work.price)}
                          tagName="span"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description field */}
                  <div className="text-xs text-black/60 leading-relaxed font-normal pt-1">
                    <EditableText
                      category="gallery"
                      id={work.id}
                      field="description"
                      value={getDescription(work.description)}
                      tagName="p"
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedLightboxWork(work)}
                  className="w-full py-3 bg-[#F5F5F0] hover:bg-[#1C1C18] text-[#1C1C18] hover:text-white rounded-xl text-xs font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  작품 크게 보기
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedLightboxWork && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLightboxWork(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative z-10 w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedLightboxWork(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 hover:bg-white text-black rounded-full shadow-md transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Large Image */}
                <div className="w-full md:w-2/3 bg-black flex items-center justify-center p-6 min-h-[300px]">
                  <img
                    src={selectedLightboxWork.image}
                    alt={selectedLightboxWork.title}
                    className="max-w-full max-h-[75vh] object-contain shadow-2xl"
                  />
                </div>

                {/* Right Metadata Caption Drawer */}
                <div className="w-full md:w-1/3 p-8 bg-[#F9F8F4] overflow-y-auto flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <span className="text-[10px] font-black text-[#B7102A] uppercase tracking-widest">
                      {selectedLightboxWork.category || 'ORIGINAL ARTWORK'}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1C18]">
                      {selectedLightboxWork.title}
                    </h3>

                    <div className="space-y-3 p-4 bg-white rounded-2xl border border-black/5 text-xs">
                      <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-[#B7102A]" />
                        <span className="font-bold text-black/40">재료:</span>
                        <span className="font-medium text-black">{selectedLightboxWork.technique || '미입력'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-[#00658D]" />
                        <span className="font-bold text-black/40">사이즈:</span>
                        <span className="font-medium text-black">{selectedLightboxWork.size || '미입력'}</span>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-black/5">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-black/40">가격:</span>
                        <span className="font-bold text-emerald-700">{selectedLightboxWork.price || '미입력'}</span>
                      </div>
                    </div>

                    <p className="text-sm text-black/70 leading-relaxed font-sans">
                      {selectedLightboxWork.description || '소장 문의 및 작품에 관한 자세한 상담은 스튜디오로 연락 부탁드립니다.'}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <button
                      onClick={() => setSelectedLightboxWork(null)}
                      className="w-full py-3 bg-[#1C1C18] text-white rounded-xl text-xs font-black hover:bg-[#B7102A] transition-colors cursor-pointer"
                    >
                      닫기
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer Notice */}
        <div className="mt-28 text-center max-w-xl mx-auto">
          <p className="text-xs text-black/40 font-serif italic">
            "모든 원화 및 아트워크는 이영경 작가의 소중한 창작 자산입니다."
          </p>
        </div>

      </div>
    </section>
  );
}
