import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useStudioData } from '../context/StudioDataContext';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';
import { motion } from 'motion/react';

interface CharactersSectionProps {
  onOpenContactModal: () => void;
}

export default function CharactersSection({
  onOpenContactModal,
}: CharactersSectionProps) {
  const { characters, updateImage } = useStudioData();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header with different style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#B7102A]" />
              <span className="text-[10px] font-black tracking-[0.4em] text-[#B7102A] uppercase">
                Characters Spotlight
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#1C1C18]">
              K-CUTY FOLK IP
            </h2>
            <p className="text-black/50 text-sm max-w-xl leading-relaxed">
              전통 민화 속 해학적 주인공들을 현대적인 감각으로 재탄생시켰습니다. 
              이영경 작가만의 독창적인 캐릭터 IP를 통해 특별한 협업의 가능성을 만나보세요.
            </p>
          </div>
          
          <button
            onClick={onOpenContactModal}
            className="group px-8 py-4 bg-black text-white text-[10px] font-black tracking-widest rounded-full hover:bg-[#B7102A] transition-all cursor-pointer flex items-center gap-3 self-start lg:self-auto"
          >
            IP LICENSING & COLLABORATION
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Character Bento Grid or Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <DragDropDropzone
                onImageDropped={(dataUrl) => updateImage('character', char.id, dataUrl)}
                className="aspect-square rounded-[48px] overflow-hidden bg-[#F5F5F0] relative border border-black/5"
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white backdrop-blur-sm pointer-events-none">
                  <span className="text-[9px] font-bold text-[#B7102A] tracking-[0.2em] mb-2 uppercase">{char.bookTitle}</span>
                  <h4 className="text-2xl font-serif font-bold mb-2">{char.name}</h4>
                  <p className="text-[10px] text-white/60 leading-relaxed font-medium">
                    {char.personality}
                  </p>
                </div>
              </DragDropDropzone>
              
              <div className="mt-6 text-center lg:text-left px-4">
                <h4 className="text-lg font-serif font-bold text-[#1C1C18]">
                  <EditableText
                    category="character"
                    id={char.id}
                    field="name"
                    value={char.name}
                    tagName="span"
                  />
                </h4>
                <div className="text-[10px] text-black/30 font-mono tracking-widest uppercase mt-1">
                  <EditableText
                    category="character"
                    id={char.id}
                    field="englishName"
                    value={char.englishName}
                    tagName="p"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
