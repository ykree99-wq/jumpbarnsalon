import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { ViewType } from '../App';
import { useStudioData } from '../context/StudioDataContext';

interface HeaderProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  onOpenContactModal: () => void;
}

export default function Header({ activeView, onViewChange, onOpenContactModal }: HeaderProps) {
  const { isStudioMode, setIsStudioMode, language, setLanguage, t } = useStudioData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { labelKo: string; labelEn: string; key: string; view: ViewType }[] = [
    { labelKo: '홈', labelEn: 'HOME', key: 'HOME', view: 'home' },
    { labelKo: '갤러리', labelEn: 'GALLERY', key: 'GALLERY', view: 'gallery' },
    { labelKo: '전시', labelEn: 'EXHIBITIONS', key: 'EXHIBITIONS', view: 'exhibitions' },
    { labelKo: '그림책', labelEn: 'BOOKS', key: 'BOOKS', view: 'books' },
    { labelKo: '캐릭터', labelEn: 'CHARACTERS', key: 'CHARACTERS', view: 'characters' },
    { labelKo: '자료실', labelEn: 'PLAYGROUND', key: 'DOWNLOAD PLAYGROUND', view: 'sketchbook' },
    { labelKo: '프로필', labelEn: 'PROFILE', key: 'PROFILE', view: 'profile' },
    { labelKo: '문의하기', labelEn: 'CONTACT', key: 'CONTACT', view: 'profile' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || activeView !== 'home'
          ? 'bg-white/60 backdrop-blur-md py-4 shadow-sm border-b border-black/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <button
          onClick={() => onViewChange('home')}
          className="flex flex-col items-start gap-0.5 group cursor-pointer shrink-0"
        >
          <img 
            src="/assets/logo-stamp.png" 
            alt="쩜반살롱 로고" 
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="text-[8px] sm:text-[9px] font-serif font-bold tracking-tight text-[#B7102A] leading-tight text-left">
            <div>The Color lab of</div>
            <div>YOUNG-KYOUNG LEE</div>
          </div>
        </button>

        {/* Minimal Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.key === 'CONTACT') {
                  onOpenContactModal();
                } else {
                  onViewChange(item.view);
                }
              }}
              className={`text-[10px] sm:text-[11px] font-black tracking-[0.2em] transition-all cursor-pointer py-1 uppercase ${
                activeView === item.view
                  ? 'text-[#0047AB] underline underline-offset-4 decoration-2 scale-105'
                  : 'text-[#0047AB]/80 hover:text-[#0047AB] hover:scale-105'
              }`}
            >
              {language === 'en' ? item.labelEn : item.labelKo}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <div className="flex items-center bg-[#0047AB]/10 p-0.5 rounded-full border border-[#0047AB]/20 backdrop-blur-md">
            <button
              onClick={() => setLanguage('ko')}
              className={`px-2.5 py-1 text-[10px] font-black rounded-full transition-all cursor-pointer ${
                language === 'ko'
                  ? 'bg-[#0047AB] text-white shadow-sm scale-105'
                  : 'text-[#0047AB]/70 hover:text-[#0047AB]'
              }`}
              title="한국어"
            >
              KR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-[10px] font-black rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#0047AB] text-white shadow-sm scale-105'
                  : 'text-[#0047AB]/70 hover:text-[#0047AB]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Studio Mode Button */}
          <button
            onClick={() => setIsStudioMode(!isStudioMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer group ${
              isStudioMode
                ? 'bg-[#B7102A] border-[#B7102A] text-white shadow-lg'
                : 'border-[#0047AB]/30 text-[#0047AB] hover:border-[#0047AB] hover:bg-[#0047AB]/5'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${isStudioMode ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="text-[10px] font-black tracking-tighter uppercase">
              {isStudioMode ? t('스튜디오 켜짐', 'Studio On') : t('스튜디오', 'Studio')}
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors text-[#0047AB] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-black/5 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-black/5">
            <span className="text-[10px] font-bold text-black/50 uppercase tracking-widest">
              {t('언어 선택 / Language', 'Language Switcher')}
            </span>
            <div className="flex items-center gap-1 bg-[#0047AB]/10 p-0.5 rounded-full border border-[#0047AB]/20">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 text-xs font-black rounded-full transition-all ${
                  language === 'ko' ? 'bg-[#0047AB] text-white' : 'text-[#0047AB]/70'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-black rounded-full transition-all ${
                  language === 'en' ? 'bg-[#0047AB] text-white' : 'text-[#0047AB]/70'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.key === 'CONTACT') {
                  onOpenContactModal();
                } else {
                  onViewChange(item.view);
                }
                setMobileMenuOpen(false);
              }}
              className={`text-xs font-black tracking-[0.2em] text-left uppercase ${
                activeView === item.view ? 'text-[#0047AB] underline underline-offset-4' : 'text-[#0047AB]/80'
              }`}
            >
              {language === 'en' ? item.labelEn : item.labelKo}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
