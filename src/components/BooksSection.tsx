import React, { useState } from 'react';
import { BookOpen, Sparkles, Tag, ChevronRight, Feather, Heart, Compass, Smile, Clock } from 'lucide-react';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';
import { motion, AnimatePresence } from 'motion/react';
import { PictureBook } from '../types';

interface BooksSectionProps {
  onOpenBookModal: (book?: PictureBook) => void;
}

type GenreFilter = '전체' | '시 그림책' | '드라마' | '옛이야기' | '우화와 생활' | '근간';

const GENRE_CONFIG: Record<GenreFilter, {
  icon: React.ReactNode;
  color: string;
  badgeBg: string;
  badgeText: string;
  description: string;
}> = {
  '전체': {
    icon: <Sparkles className="w-4 h-4" />,
    color: '#B7102A',
    badgeBg: 'bg-[#B7102A]',
    badgeText: 'text-[#B7102A]',
    description: '이영경 작가의 전체 16권 그림책 및 근간 3권 작품집'
  },
  '시 그림책': {
    icon: <Feather className="w-4 h-4" />,
    color: '#00658D',
    badgeBg: 'bg-[#00658D]',
    badgeText: 'text-[#00658D]',
    description: '거장 시인들의 맑고 순수한 시어에 정겨운 민화풍 원화를 결합한 시 그림책'
  },
  '드라마': {
    icon: <Heart className="w-4 h-4" />,
    color: '#92001C',
    badgeBg: 'bg-[#92001C]',
    badgeText: 'text-[#92001C]',
    description: '존중, 사랑, 가족, 역사적 아픔을 따뜻한 서사로 아우르는 창작 드라마'
  },
  '옛이야기': {
    icon: <Compass className="w-4 h-4" />,
    color: '#C87D55',
    badgeBg: 'bg-[#C87D55]',
    badgeText: 'text-[#C87D55]',
    description: '규중칠우, 전우치, 티베트·마오족 민담 등 교과서 수록 명작과 고전 옛이야기'
  },
  '우화와 생활': {
    icon: <Smile className="w-4 h-4" />,
    color: '#27AE60',
    badgeBg: 'bg-[#27AE60]',
    badgeText: 'text-[#27AE60]',
    description: '맨발체조, 떡타령, 묘생 철학, 숲속 소풍 등 삶의 이치와 유머를 전하는 우화'
  },
  '근간': {
    icon: <Clock className="w-4 h-4" />,
    color: '#8E44AD',
    badgeBg: 'bg-[#8E44AD]',
    badgeText: 'text-[#8E44AD]',
    description: '몽당연필 올림픽, 새둥지 부추전, 그동네 국수집 등 새롭게 만날 차기 예정작'
  }
};

export default function BooksSection({ onOpenBookModal }: BooksSectionProps) {
  const { books, updateImage, t, language } = useStudioData();
  const [selectedGenre, setSelectedGenre] = useState<GenreFilter>('전체');

  // Filter books based on active tab
  const filteredBooks = selectedGenre === '전체' 
    ? books 
    : books.filter(b => b.genre === selectedGenre);

  // Group books by genre for categorical presentation when "전체" is selected
  const genresList: GenreFilter[] = ['시 그림책', '드라마', '옛이야기', '우화와 생활', '근간'];

  const getGenreLabel = (g: GenreFilter) => {
    switch (g) {
      case '전체': return t('전체', 'ALL');
      case '시 그림책': return t('시 그림책', 'POETRY BOOKS');
      case '드라마': return t('드라마', 'DRAMA');
      case '옛이야기': return t('옛이야기', 'FOLK TALES');
      case '우화와 생활': return t('우화와 생활', 'FABLES & LIFE');
      case '근간': return t('근간', 'UPCOMING');
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F0] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <header className="mb-20 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B7102A]" />
            <span className="text-[11px] font-black tracking-[0.35em] text-[#B7102A] uppercase">
              Representative Picture Books
            </span>
            <span className="w-8 h-[1px] bg-[#B7102A]" />
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#1C1C18]">
            {t('이영경의 그림책 모음', 'Picture Books Archive')}
          </h2>

          {/* Inspirational Quote Box */}
          <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-black/5 shadow-sm max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-[#1C1C18] font-serif italic leading-relaxed mb-3">
              “세상을 향한 조용한 속삭임, 이웃에게 건네는 작은 수다, 나를 위한 비움과 채움”
            </p>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-medium">
              우리 누구나 갖고 있는 본래의 모습과 여유, 다정함, 그리고 엉뚱함을 그림책 속에 담아 독자들과 나누고자 합니다.
              <br className="hidden sm:block" />
              아름다운 색깔과 재미난 이야기를 찾아 펼쳐진 쟝르별 그림책 아카이브를 탐색해보세요.
            </p>
          </div>
        </header>

        {/* Genre Tabs Filter Navigation */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {(['전체', ...genresList] as GenreFilter[]).map((genre) => {
            const count = genre === '전체' 
              ? books.length 
              : books.filter(b => b.genre === genre).length;
            const isActive = selectedGenre === genre;
            const config = GENRE_CONFIG[genre];

            return (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#1C1C18] text-white shadow-md scale-105'
                    : 'bg-white text-black/70 hover:bg-black/5 hover:text-black border border-black/5'
                }`}
              >
                <span className={isActive ? 'text-white' : config.badgeText}>
                  {config.icon}
                </span>
                <span>{genre}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-black/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Genre Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGenre}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-24"
          >
            {selectedGenre === '전체' ? (
              // Display Grouped by Genre
              genresList.map((genre) => {
                const genreBooks = books.filter(b => b.genre === genre);
                if (genreBooks.length === 0) return null;
                const config = GENRE_CONFIG[genre];

                return (
                  <div key={genre} className="space-y-8">
                    {/* Genre Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black/10 pb-5 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className={`p-2 rounded-xl text-white shadow-md ${config.badgeBg}`}>
                            {config.icon}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#1C1C18]">
                            {genre}
                          </h3>
                          <span className="px-3 py-1 bg-black/5 text-black/60 rounded-full text-xs font-bold">
                            {genreBooks.length}권
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-black/50 font-medium">
                          {config.description}
                        </p>
                      </div>
                    </div>

                    {/* Book Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {genreBooks.map((book) => (
                        <BookCard
                          key={book.id}
                          book={book}
                          config={config}
                          onOpenBookModal={onOpenBookModal}
                          updateImage={updateImage}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Display Single Selected Genre Grid
              <div className="space-y-8">
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-black/5 flex items-center gap-4">
                  <span className={`p-3 rounded-2xl text-white shadow-md ${GENRE_CONFIG[selectedGenre].badgeBg}`}>
                    {GENRE_CONFIG[selectedGenre].icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-serif font-black text-[#1C1C18]">
                      {selectedGenre} 작품 리스트
                    </h3>
                    <p className="text-xs sm:text-sm text-black/50 font-medium">
                      {GENRE_CONFIG[selectedGenre].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      config={GENRE_CONFIG[selectedGenre]}
                      onOpenBookModal={onOpenBookModal}
                      updateImage={updateImage}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note & SNS Reference */}
        <div className="mt-28 text-center max-w-2xl mx-auto">
          <div className="p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-black/5 space-y-4 shadow-sm">
            <h4 className="text-lg font-serif font-bold text-[#1C1C18]">이영경 작가 소식 및 소통</h4>
            <p className="text-xs text-black/60 leading-relaxed font-medium">
              그림출처: 그림책 &lt;넉 점 반&gt; (&lsquo;넉 점 반&rsquo;은 &lsquo;네 시 반&rsquo;, 윤석중 시 이영경 그림)
            </p>
            <div className="flex items-center justify-center gap-6 pt-2 text-xs font-black text-[#B7102A]">
              <span>Instagram: @youngkyounglee</span>
              <span>Salon: @jumpbarn_salon</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

interface BookCardProps {
  key?: React.Key;
  book: PictureBook;
  config: typeof GENRE_CONFIG[GenreFilter];
  onOpenBookModal: (book?: PictureBook) => void;
  updateImage: (category: 'slide' | 'exhibition' | 'book' | 'sketchbook' | 'character' | 'portrait' | 'gallery', id: string, imageDataUrl: string) => void;
}

function BookCard({ book, config, onOpenBookModal, updateImage }: BookCardProps) {
  const { t, language } = useStudioData();

  const displayTitle = (language === 'en' && book.englishTitle) ? book.englishTitle : book.title;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col justify-between bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border ${
        book.isUpcoming ? 'border-dashed border-purple-300 bg-purple-50/20' : 'border-black/5'
      }`}
    >
      <div>
        {/* Cover Image Container */}
        <div className="relative mb-6">
          <DragDropDropzone
            onImageDropped={(dataUrl) => updateImage('book', book.id, dataUrl)}
            className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F9F8F4] relative border border-black/5 flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow"
          >
            <img
              src={book.coverImage}
              alt={displayTitle}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Number Tag */}
            {book.number && (
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#1C1C18] text-white flex items-center justify-center text-xs font-black shadow-md z-10">
                {book.number}
              </div>
            )}

            {/* Badge overlay */}
            {book.badge && (
              <div className="absolute top-3 right-3 z-10 max-w-[70%]">
                <span className={`px-3 py-1 text-white text-[10px] font-black tracking-wider rounded-full uppercase shadow-md block truncate ${config.badgeBg}`}>
                  {book.badge}
                </span>
              </div>
            )}
          </DragDropDropzone>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-md bg-black/5 ${config.badgeText}`}>
              {book.genre}
            </span>
            {book.year && (
              <span className="text-[10px] font-bold text-black/40">
                {book.year}{t('년 출간', ' Published')}
              </span>
            )}
          </div>

          <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1C18] group-hover:text-[#B7102A] transition-colors leading-snug">
            <EditableText
              category="book"
              id={book.id}
              field="title"
              value={displayTitle}
              tagName="span"
            />
          </h4>

          {book.englishTitle && language !== 'en' && (
            <p className="text-[11px] font-mono font-medium text-black/40 truncate">
              {book.englishTitle}
            </p>
          )}

          {book.authorText && (
            <p className="text-xs text-black/60 font-medium">
              <EditableText
                category="book"
                id={book.id}
                field="authorText"
                value={book.authorText}
                tagName="span"
              />
            </p>
          )}

          <p className="text-xs text-black/50 leading-relaxed font-normal line-clamp-3 pt-1">
            <EditableText
              category="book"
              id={book.id}
              field="description"
              value={book.description}
              tagName="span"
            />
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
        {book.isUpcoming ? (
          <span className="text-xs font-bold text-purple-600 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {t('출간 준비 중', 'Coming Soon')}
          </span>
        ) : (
          <button
            onClick={() => onOpenBookModal(book)}
            className="inline-flex items-center gap-2 text-xs font-black tracking-wider text-[#1C1C18] hover:text-[#B7102A] transition-all cursor-pointer group/btn"
          >
            {t('작품 상세 정보', 'EXPLORE WORK')}
            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#B7102A]" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
