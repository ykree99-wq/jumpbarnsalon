import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { ARTIST_PROFILE } from '../data/artistData';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';
import { motion } from 'motion/react';

export default function AuthorSection() {
  const { portraitImage, updateImage } = useStudioData();

  return (
    <section className="py-24 bg-[#F5F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <header className="mb-20 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="korean-seal text-[8px] w-6 h-6">작가</div>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#B7102A] uppercase">
              ARTIST PROFILE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tighter text-[#1C1C18]">
            YOUNG-KYOUNG LEE
          </h2>
          <p className="text-black/50 text-sm max-w-xl leading-relaxed italic">
            "한국 전통의 해학을 현대적 색채로 빚어내는 그림책 작가"
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <DragDropDropzone
                onImageDropped={(dataUrl) => updateImage('portrait', 'artist-portrait', dataUrl)}
                className="aspect-[4/5] rounded-[60px] overflow-hidden bg-white shadow-2xl relative"
              >
                <img
                  src={portraitImage}
                  alt={ARTIST_PROFILE.name}
                  className="w-full h-full object-cover"
                />
              </DragDropDropzone>
              
              <div className="absolute -bottom-6 -right-6 bg-[#B7102A] text-white p-8 rounded-[40px] shadow-2xl">
                <p className="text-3xl font-black font-serif leading-none mb-1">{ARTIST_PROFILE.experienceYears}Y</p>
                <p className="text-[10px] font-black tracking-widest uppercase opacity-70">Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#1C1C18] border-b border-black/10 pb-4">
                Biography
              </h3>
              <div className="text-black/80 text-base leading-relaxed whitespace-pre-line font-medium space-y-4">
                <EditableText
                  category="profile"
                  id="artist"
                  field="bio"
                  value={ARTIST_PROFILE.bio}
                  tagName="p"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#B7102A]">
                  <Award className="w-5 h-5" />
                  <h4 className="text-xs font-black tracking-widest uppercase">Awards & Honors</h4>
                </div>
                <ul className="space-y-4">
                  {ARTIST_PROFILE.awards.map((award, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-black/60 font-bold leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B7102A] shrink-0 mt-0.5" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-black/40">
                  <div className="w-5 h-5 border-2 border-black/10 rounded-full" />
                  <h4 className="text-xs font-black tracking-widest uppercase">Career Stats</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/5 rounded-3xl">
                    <p className="text-xl font-serif font-black">{ARTIST_PROFILE.stats.translatedLanguages}</p>
                    <p className="text-[9px] font-black text-black/40 uppercase tracking-tighter">Languages</p>
                  </div>
                  <div className="p-4 bg-black/5 rounded-3xl">
                    <p className="text-xl font-serif font-black">{ARTIST_PROFILE.stats.exhibitionCount}</p>
                    <p className="text-[9px] font-black text-black/40 uppercase tracking-tighter">Exhibitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
