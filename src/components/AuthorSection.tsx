import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { ARTIST_PROFILE } from '../data/artistData';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';
import { motion } from 'motion/react';

export default function AuthorSection() {
  const { portraitImage, updateImage, artistProfile, t, language } = useStudioData();

  const englishBio = `Young-Kyoung Lee began her journey in picture book illustration in 1993. Inspired by Korean classical literature, she published her flagship picture book "The Seven Friends of the Lady's Chamber" in 1998, followed by renowned works such as "Half Past Four" and "What is a Cat's Life?".

In addition to publishing picture books, she actively engages with readers through art exhibitions, one-person theatrical performances, and lectures. She recently opened "Jumban Salon", a creative studio and character branding space. She was nominated as the Astrid Lindgren Memorial Award (ALMA) candidate representing Korea in 2023 and 2024, and served as President of the Picture Book Association from 2020 to 2024.

She pursues 'fun' and 'delight' as essential values in both life and art.`;

  const englishAwards = [
    '2023 & 2024 Astrid Lindgren Memorial Award (ALMA) Candidate for Korea',
    'President of the Picture Book Association (2020 ~ 2024)',
    'Featured in Elementary School National Language Textbooks (thru 2025)',
    'Recommended Book by Children\'s Book Research Society ("Half Past Four", "Jumeoki")',
    'BIB (Bratislava Illustration Biennial) Official Korean Entry'
  ];

  return (
    <section className="py-24 bg-[#F5F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <header className="mb-20 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="korean-seal text-[8px] w-6 h-6">{t('작가', 'ARTIST')}</div>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#B7102A] uppercase">
              ARTIST PROFILE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tighter text-[#1C1C18]">
            YOUNG-KYOUNG LEE
          </h2>
          <p className="text-black/50 text-sm max-w-xl leading-relaxed italic">
            {t(
              '"한국 전통의 해학을 현대적 색채로 빚어내는 그림책 작가"',
              '"Picture book artist crafting Korean traditional humor with modern color palette"'
            )}
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
                  alt={artistProfile.name}
                  className="w-full h-full object-cover"
                />
              </DragDropDropzone>
              
              <div className="absolute -bottom-6 -right-6 bg-[#B7102A] text-white p-8 rounded-[40px] shadow-2xl">
                <p className="text-3xl font-black font-serif leading-none mb-1">{artistProfile.experienceYears}Y</p>
                <p className="text-[10px] font-black tracking-widest uppercase opacity-70">{t('작품 경력', 'Experience')}</p>
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
                {language === 'en' ? (
                  <p>{englishBio}</p>
                ) : (
                  <EditableText
                    category="profile"
                    id="artist"
                    field="bio"
                    value={artistProfile.bio}
                    tagName="p"
                  />
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#B7102A]">
                <Award className="w-5 h-5" />
                <h4 className="text-xs font-black tracking-widest uppercase">Awards & Honors</h4>
              </div>
              <ul className="space-y-4">
                {(language === 'en' ? englishAwards : artistProfile.awards).map((award, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-black/60 font-bold leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#B7102A] shrink-0 mt-0.5" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Promotion Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-16 border-t border-black/10 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="korean-seal text-[8px] w-6 h-6">영상</div>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#B7102A] uppercase">
              ARTIST PROMOTION VIDEO
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-black/10 aspect-video max-w-4xl mx-auto group">
            <video
              src="/video/promo-video.mov"
              controls
              controlsList="nodownload"
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
