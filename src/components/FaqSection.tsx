import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles, Send } from 'lucide-react';
import { FAQS } from '../data/artistData';

interface FaqSectionProps {
  onOpenContactModal: () => void;
}

export default function FaqSection({ onOpenContactModal }: FaqSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-[#E6E2DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="korean-seal">안내</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7102A] font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1C1C18]">
            자주 묻는 질문 <span className="font-sans text-[#755700] text-lg font-normal block md:inline">| FAQ & Guide</span>
          </h2>

          <p className="text-sm text-[#5B403F] font-sans">
            도서 출판, 원화 기획전시, IP 캐릭터 콜라보레이션 및 아틀리에 오방색 워크숍 문의 답변입니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E6E2DC] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-[#1C1C18] hover:text-[#B7102A] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#FFF8E1] text-[#755700] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#755700] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#B7102A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-[#5B403F] leading-relaxed border-t border-[#F1EDE7] pt-4 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-[#E6E2DC] text-center space-y-4 shadow-2xs">
          <h3 className="font-serif font-bold text-lg text-[#1C1C18]">
            더 궁금하신 점이나 특별한 스튜디오 제안이 있으신가요?
          </h3>
          <p className="text-xs text-[#5B403F] max-w-md mx-auto">
            이영경 창작스튜디오 팀이 친절하고 신속하게 답변해 드립니다.
          </p>
          <button
            onClick={onOpenContactModal}
            className="px-6 py-3 bg-[#B7102A] hover:bg-[#92001C] text-white font-bold text-xs rounded-xl transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>스튜디오에 문의 남기기</span>
          </button>
        </div>

      </div>
    </section>
  );
}

