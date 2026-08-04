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
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className={`korean-seal text-[6px] w-5 h-5 transition-colors ${
             activeView === 'home' && !isScrolled ? 'border-white/40 text-white' : 'border-black/10 text-black/40'
          }`}>영경</div>
          <span className={`font-serif font-black text-[10px] tracking-widest uppercase transition-colors ${
            activeView === 'home' && !isScrolled ? 'text-white' : 'text-black'
          }`}>
            Young-Kyoung Lee
          </span>
        </button>

        {/* Minimal Desktop Nav - Centered items look more like Ryoji Arai */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
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
              className={`text-[9px] font-black tracking-[0.3em] transition-all cursor-pointer py-1 uppercase ${
                activeView === item.view
                  ? 'text-[#B7102A]'
                  : activeView === 'home' && !isScrolled 
                    ? 'text-white/60 hover:text-white' 
                    : 'text-black/30 hover:text-black'
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
                : activeView === 'home' && !isScrolled
                  ? 'border-white/20 text-white hover:border-white/60'
                  : 'border-black/10 text-black/60 hover:border-black/20 hover:bg-black/5'
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
            className={`md:hidden p-2 rounded-full transition-colors ${
              activeView === 'home' && !isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/5 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
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
                activeView === item.view ? 'text-[#B7102A]' : 'text-black/40'
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
