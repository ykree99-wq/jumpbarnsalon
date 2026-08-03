import React from 'react';
import { Palette, Mail, MapPin, Phone, Instagram, ArrowUp, Sparkles } from 'lucide-react';
import { ARTIST_PROFILE } from '../data/artistData';

interface FooterProps {
  onOpenContactModal: () => void;
  onOpenBookModal: () => void;
}

export default function Footer({ onOpenContactModal, onOpenBookModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C18] text-[#E6E2DC] pt-16 pb-12 border-t border-black/20 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="korean-seal scale-90 border-[#FFB3B1] text-[#FFB3B1] bg-transparent">영경</span>
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  The Color Lab of Young-Kyoung Lee
                </span>
                <span className="text-[11px] text-[#FFB3B1] font-semibold font-mono">
                  이영경의 창작스튜디오 • K-Cuty Folk Art
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-sans">
              한국 전통색채와 현대적 위트를 결합한 K-Cuty Folk Art IP 스튜디오. 
              그림책 출판, 원화 전시, 캐릭터 라이선싱 및 전통 색채 스케치 아틀리에를 운영합니다.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/60 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FFB3B1]" />
                서울 성수동 스튜디오
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#FFB3B1]" />
                contact@jbsalon.art
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider font-mono">
              WORK ARCHIVE
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={onOpenBookModal} className="hover:text-white transition-colors cursor-pointer">
                  아씨방 일곱 동무 (The Seven Friends)
                </button>
              </li>
              <li>
                <button onClick={onOpenBookModal} className="hover:text-white transition-colors cursor-pointer">
                  넉 점 반 (Half Past Four)
                </button>
              </li>
              <li>
                <button onClick={onOpenBookModal} className="hover:text-white transition-colors cursor-pointer">
                  주먹이 (Jumeoki)
                </button>
              </li>
              <li>
                <a href="#sketchbook-section" className="hover:text-white transition-colors">
                  스케치북 & 오방색 디지털 캔버스
                </a>
              </li>
              <li>
                <a href="#exhibitions-section" className="hover:text-white transition-colors">
                  원화 전시 & 스튜디오 소식
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-4 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-serif font-bold text-sm text-white">
              스튜디오 제안 및 원화 기획전 문의
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              그림책 출판, 강연, 미술관 원화 초대전 및 IP 캐릭터 라이선싱 제안을 환영합니다.
            </p>
            <button
              onClick={onOpenContactModal}
              className="w-full py-2.5 bg-[#B7102A] hover:bg-[#92001C] text-white font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer text-center"
            >
              IP & 라이선싱 문의 접수하기
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-mono">
          <div>
            © 2026 The Color Lab of Young-Kyoung Lee. All rights reserved. • www.jbsalon.art
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <span>맨 위로 이동</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

