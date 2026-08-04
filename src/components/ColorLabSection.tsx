import React from 'react';
import { Download, UploadCloud, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import DragDropDropzone from './DragDropDropzone';
import EditableText from './EditableText';
import { useStudioData } from '../context/StudioDataContext';

export default function ColorLabSection() {
  const { downloadMaterials, updateImage, notify } = useStudioData();

  const triggerDownload = (title: string, imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/[^a-zA-Z0-9가-힣]/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (notify) notify(`[${title}] 다운로드가 시작되었습니다.`, 'success');
  };

  return (
    <section className="py-24 bg-[#F5F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <header className="mb-20 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="korean-seal text-[8px] w-6 h-6">다운</div>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#B7102A] uppercase">
              DOWNLOAD & RESOURCES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tighter text-[#1C1C18]">
            DOWNLOAD PLAYGROUND
          </h2>
          <p className="text-black/50 text-sm max-w-xl leading-relaxed">
            방문자들이 이영경 작가의 원화 스케치, 활동지, 색칠놀이 고화질 자료를 자유롭게 다운로드받을 수 있는 공간입니다. 프레임에 이미지를 드래그하여 새로운 다운로드 자료를 등록해 보세요.
          </p>
        </header>

        {/* Downloadable Material Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {downloadMaterials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[36px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-black/5 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame with Drag & Drop */}
                <div className="relative overflow-hidden bg-[#F9F8F4]">
                  <DragDropDropzone
                    onImageDropped={(dataUrl) => updateImage('material', item.id, dataUrl)}
                    className="aspect-[4/3] w-full relative flex items-center justify-center overflow-hidden cursor-pointer group"
                    label={`자료 프레임 ${index + 1}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 font-bold text-xs p-4 text-center">
                      <UploadCloud className="w-6 h-6" />
                      <span>이미지 드래그 / 클릭 변경</span>
                    </div>
                  </DragDropDropzone>

                  {/* Frame Badge */}
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1 bg-[#B7102A] text-white text-[10px] font-black tracking-widest rounded-full uppercase shadow-md">
                      FRAME 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-[#B7102A] uppercase flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <EditableText
                        category="material"
                        id={item.id}
                        field="category"
                        value={item.category}
                        tagName="span"
                      />
                    </span>
                    <span className="text-[10px] font-mono text-black/40">
                      {item.fileSize}
                    </span>
                  </div>

                  <EditableText
                    category="material"
                    id={item.id}
                    field="title"
                    value={item.title}
                    tagName="h3"
                    className="text-lg font-serif font-bold text-[#1C1C18] leading-snug"
                  />

                  <EditableText
                    category="material"
                    id={item.id}
                    field="description"
                    value={item.description}
                    tagName="p"
                    className="text-xs text-black/60 leading-relaxed"
                  />
                </div>
              </div>

              {/* Download Action Button */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => triggerDownload(item.title, item.image)}
                  className="w-full py-4 bg-[#1C1C18] hover:bg-[#B7102A] text-white text-xs font-black tracking-[0.2em] uppercase rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  자료 다운로드 (DOWNLOAD)
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
