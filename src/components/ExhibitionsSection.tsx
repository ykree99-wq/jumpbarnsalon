import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { NEWS_ITEMS } from '../data/artistData';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';

interface ExhibitionsSectionProps {
  onOpenWorkshopModal: () => void;
  onOpenContactModal: () => void;
}

export default function ExhibitionsSection({ onOpenWorkshopModal, onOpenContactModal }: ExhibitionsSectionProps) {
  const { exhibitions, updateImage } = useStudioData();

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
          <p className="text-black/50 text-sm max-w-xl leading-relaxed">
            국내외 미술관 및 갤러리에서 진행되는 이영경 작가의 기획 전시와 소식을 가장 먼저 확인하세요.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Exhibitions */}
          <div className="lg:col-span-8 space-y-16">
            {exhibitions.map((ex, index) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <DragDropDropzone
                  onImageDropped={(dataUrl) => updateImage('exhibition', ex.id, dataUrl)}
                  className="aspect-[4/5] rounded-[40px] overflow-hidden bg-white shadow-xl relative"
                >
                  <img
                    src={ex.posterImage}
                    alt={ex.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-black text-white text-[10px] font-black tracking-widest rounded-full pointer-events-none">
                    {ex.status}
                  </div>
                </DragDropDropzone>

                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[#B7102A]">
                      <MapPin className="w-4 h-4" />
                      <EditableText
                        category="exhibition"
                        id={ex.id}
                        field="venue"
                        value={ex.venue}
                        className="text-xs font-bold tracking-widest"
                      />
                    </div>
                  
                    <div className="space-y-2">
                      <h3 className="text-3xl font-serif font-bold text-[#1C1C18] leading-tight">
                        <EditableText
                          category="exhibition"
                          id={ex.id}
                          field="title"
                          value={ex.title}
                          tagName="span"
                        />
                      </h3>
                      <div className="text-black/40 font-mono text-xs font-bold uppercase">
                        <EditableText
                          category="exhibition"
                          id={ex.id}
                          field="period"
                          value={ex.period}
                          tagName="p"
                        />
                      </div>
                    </div>

                   <div className="text-black/60 text-sm leading-relaxed">
                      <EditableText
                        category="exhibition"
                        id={ex.id}
                        field="description"
                        value={ex.description}
                        tagName="p"
                      />
                    </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenWorkshopModal}
                      className="inline-flex items-center gap-2 text-xs font-black tracking-widest border-b-2 border-black pb-1 hover:text-[#B7102A] hover:border-[#B7102A] transition-all cursor-pointer"
                    >
                      LEARN MORE
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar News */}
          <div className="lg:col-span-4 space-y-12">
            <h3 className="text-xl font-serif font-black border-b border-black/10 pb-4">
              STUDIO NEWS
            </h3>
            
            <div className="space-y-10">
              {NEWS_ITEMS.map((news) => (
                <div key={news.id} className="space-y-3 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-[#B7102A] tracking-widest">{news.date}</span>
                    <span className="text-[9px] font-bold text-black/30 tracking-tighter uppercase">{news.category}</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-black group-hover:text-[#B7102A] transition-colors leading-snug">
                    {news.title}
                  </h4>
                  <p className="text-xs text-black/50 leading-relaxed line-clamp-2">
                    {news.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-12">
              <div className="bg-black p-8 rounded-[40px] text-white space-y-6">
                <h4 className="text-xl font-serif font-bold leading-tight">
                  Interested in collaborating?
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  작가와의 협업 및 전시 대여 문의는 언제든 환영합니다.
                </p>
                <button
                  onClick={onOpenContactModal}
                  className="w-full py-4 bg-white text-black text-[10px] font-black tracking-[0.2em] rounded-full hover:bg-[#B7102A] hover:text-white transition-all cursor-pointer"
                >
                  CONTACT STUDIO
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
