import React from 'react';
import { X, ExternalLink, Calendar, BookOpen, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PictureBook } from '../types';

interface BookPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderClick?: () => void;
  book?: PictureBook | null;
}

export default function BookPreviewModal({ isOpen, onClose, onOrderClick, book }: BookPreviewModalProps) {
  if (!isOpen) return null;

  const displayBook = book || {
    id: 'seven-friends',
    title: '아씨방 일곱 동무',
    englishTitle: "The Seven Friends in the Lady's Room",
    genre: '옛이야기',
    year: '1998',
    authorText: '이영경 글·그림 | 비룡소',
    badge: '★ 초등 3학년 교과서 수록',
    description: "'규중칠우쟁론기'라는 옛수필로 만든 그림책. 바늘, 실, 골무, 다리미, 가위, 자, 인두들은 서로 자기가 제일 중요하다고 뽐내다가 결국 모두가 함께 소중하다는 것을 깨닫는답니다.",
    summary: '아씨가 잠든 사이 일곱 바느질 도구들이 각자 자신이 으뜸이라 자랑하지만, 서로가 합쳐져야 예쁜 옷이 완성됨을 깨닫는 유쾌한 해학극.',
    coverImage: '/slides/slide-1.png',
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#F9F8F4] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          {/* Left: Image Container */}
          <div className="w-full md:w-1/2 h-72 md:h-auto bg-white flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-black/5 relative">
            <div className="relative group w-full h-full flex items-center justify-center">
              <img
                src={displayBook.coverImage}
                alt={displayBook.title}
                className="max-w-full max-h-[380px] object-contain shadow-2xl rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {displayBook.badge && (
              <span className="absolute top-6 left-6 px-3.5 py-1.5 bg-[#B7102A] text-white text-[10px] font-black tracking-widest rounded-full uppercase shadow-lg">
                {displayBook.badge}
              </span>
            )}
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#B7102A]">
                <BookOpen className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  {displayBook.genre || '그림책'} ARCHIVE
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {displayBook.number && (
                    <span className="w-8 h-8 rounded-full bg-[#B7102A] text-white flex items-center justify-center text-xs font-black shrink-0">
                      {displayBook.number}
                    </span>
                  )}
                  <h2 className="text-3xl md:text-4xl font-serif font-black text-[#1C1C18] leading-tight">
                    {displayBook.title}
                  </h2>
                </div>
                {displayBook.englishTitle && (
                  <p className="text-black/40 font-mono text-xs font-bold uppercase tracking-widest">
                    {displayBook.englishTitle}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-black/5">
                {displayBook.genre && (
                  <div className="flex flex-col">
                    <span className="text-[10px] text-black/30 font-bold uppercase mb-1">Genre</span>
                    <span className="text-sm font-bold text-[#B7102A] flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      {displayBook.genre}
                    </span>
                  </div>
                )}
                {displayBook.year && (
                  <div className="flex flex-col">
                    <span className="text-[10px] text-black/30 font-bold uppercase mb-1">Published</span>
                    <span className="text-sm font-bold text-black flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B7102A]" />
                      {displayBook.year}
                    </span>
                  </div>
                )}
                {displayBook.authorText && (
                  <div className="flex flex-col">
                    <span className="text-[10px] text-black/30 font-bold uppercase mb-1">Author / Publisher</span>
                    <span className="text-xs font-bold text-black/70">
                      {displayBook.authorText}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-sm text-black/80 leading-relaxed font-sans font-medium">
                  {displayBook.description}
                </p>
                {displayBook.summary && (
                  <div className="p-4 bg-white/70 rounded-2xl border border-black/5 text-xs text-black/60 leading-relaxed">
                    <span className="font-bold text-[#B7102A] block mb-1">주요 줄거리</span>
                    {displayBook.summary}
                  </div>
                )}
              </div>

              {displayBook.characters && displayBook.characters.length > 0 && (
                <div className="pt-2">
                  <span className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-2">등장 캐릭터</span>
                  <div className="flex flex-wrap gap-1.5">
                    {displayBook.characters.map((char, i) => (
                      <span key={i} className="px-2.5 py-1 bg-black/5 rounded-full text-xs font-medium text-black/70">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOrderClick}
                  className="flex-1 px-8 py-4 bg-[#B7102A] hover:bg-[#92001C] text-white rounded-2xl font-black text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  소장 및 구매 문의
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-4 bg-white border border-black/10 hover:bg-black/5 text-black rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
