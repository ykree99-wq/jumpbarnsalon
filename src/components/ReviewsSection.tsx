import React from 'react';
import { Star, Quote, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/artistData';

export default function ReviewsSection() {
  return (
    <section id="reviews-section" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-[#E6E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="korean-seal">후기</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7102A] font-bold">
              REVIEWS & TESTIMONIALS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1C1C18]">
            독자 & 수강생 후기 <span className="font-sans text-[#755700] text-lg font-normal block md:inline">| Reader Impressions</span>
          </h2>

          <p className="text-sm md:text-base text-[#5B403F] font-sans">
            어린 시절 추억의 한 편부터 전통 미학의 깊은 감동까지, 세대를 넘어 전해지는 다정한 시선들입니다.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-2xs border border-[#E6E2DC] flex flex-col justify-between hover:shadow-md transition-all text-left group"
            >
              <div className="space-y-4">
                {/* Header Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D99B00]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#755700] font-mono">{review.date}</span>
                </div>

                {/* Highlight Title */}
                <h3 className="font-serif font-bold text-base text-[#1C1C18] group-hover:text-[#B7102A] transition-colors">
                  {review.highlight}
                </h3>

                {/* Quote Content */}
                <p className="text-xs md:text-sm text-[#5B403F] leading-relaxed font-serif italic">
                  “{review.content}”
                </p>
              </div>

              {/* Author Footer Info */}
              <div className="pt-6 mt-6 border-t border-[#E6E2DC] flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#E6E2DC]"
                />
                <div>
                  <div className="text-xs font-bold text-[#1C1C18] flex items-center gap-1">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7102A]" />
                  </div>
                  <div className="text-[11px] text-[#755700]">
                    {review.role} • <span className="font-semibold text-[#00658D]">{review.bookOrWorkshopName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

