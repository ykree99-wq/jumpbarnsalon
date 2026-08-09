import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ViewType } from '../App';
import { useStudioData } from '../context/StudioDataContext';

interface HeaderProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  onOpenContactModal: () => void;
}

export default function Header({ activeView, onViewChange, onOpenContactModal }: HeaderProps) {
  const { isStudioMode, setIsStudioMode } = useStudioData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: ViewType }[] = [
    { label: 'HOME', view: 'home' },
    { label: 'GALLERY', view: 'gallery' },
    { label: 'EXHIBITIONS', view: 'exhibitions' },
    { label: 'BOOKS', view: 'books' },
    { label: 'CHARACTERS', view: 'characters' },
    { label: 'DOWNLOAD PLAYGROUND', view: 'sketchbook' },
    { label: 'PROFILE', view: 'profile' },
    { label: 'CONTACT', view: 'profile' }, // I'll use profile for now, or just handle it as a modal trigger
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || activeView !== 'home'
          ? 'bg-white/40 backdrop-blur-sm py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
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

        {/* Minimal Desktop Nav - Centered items look more like Ryoji Arai */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.label === 'CONTACT') {
                  onOpenContactModal();
                } else {
                  onViewChange(item.view);
                }
              }}
              className={`text-[10px] font-black tracking-[0.25em] transition-all cursor-pointer py-1 uppercase ${
                activeView === item.view
                  ? 'text-[#0047AB] underline underline-offset-4 decoration-2 scale-105'
                  : 'text-[#0047AB]/80 hover:text-[#0047AB] hover:scale-105'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsStudioMode(!isStudioMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer group ${
              isStudioMode
                ? 'bg-[#B7102A] border-[#B7102A] text-white shadow-lg'
                : 'border-[#0047AB]/30 text-[#0047AB] hover:border-[#0047AB] hover:bg-[#0047AB]/5'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${isStudioMode ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="text-[10px] font-black tracking-tighter uppercase">
              {isStudioMode ? 'Studio On' : 'Studio'}
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full transition-colors text-[#0047AB]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-black/5 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.label === 'CONTACT') {
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
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
