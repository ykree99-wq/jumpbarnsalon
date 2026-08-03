import React, { useState, useRef, useEffect } from 'react';
import { Palette, Download, RotateCcw, PenTool } from 'lucide-react';
import { OBANGSAEK_COLORS, SKETCHBOOK_NOTES } from '../data/artistData';
import { motion, AnimatePresence } from 'motion/react';

export default function ColorLabSection() {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const activeColor = OBANGSAEK_COLORS[activeColorIndex];

  // Canvas State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#B7102A');
  const [brushSize, setBrushSize] = useState(4);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `artist-sketch-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="py-24 bg-[#F5F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <header className="mb-20 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="korean-seal text-[8px] w-6 h-6">스케치</div>
            <span className="text-[10px] font-black tracking-[0.3em] text-[#B7102A] uppercase">
              SKETCH & COLOR LAB
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tighter text-[#1C1C18]">
            COLOR PLAYGROUND
          </h2>
          <p className="text-black/50 text-sm max-w-xl leading-relaxed">
            전통 오방색의 의미를 배우고, 이영경 작가의 스케치북을 보며 직접 나만의 캐릭터를 그려보세요.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sketchbook Diary */}
          <div className="lg:col-span-4 space-y-12">
            <h3 className="text-xl font-serif font-black border-b border-black/10 pb-4">
              ARTIST DIARY
            </h3>
            <div className="space-y-12">
              {SKETCHBOOK_NOTES.map((note) => (
                <div key={note.id} className="space-y-6">
                  <div className="aspect-square rounded-[40px] overflow-hidden bg-white shadow-xl">
                    <img
                      src={note.sketchImage}
                      alt={note.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-[#B7102A] tracking-widest">{note.date}</span>
                    <h4 className="text-lg font-serif font-bold">{note.title}</h4>
                    <p className="text-xs text-black/50 leading-relaxed italic">"{note.noteText}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="lg:col-span-8 space-y-12">
             <div className="bg-white rounded-[60px] p-8 lg:p-12 shadow-2xl space-y-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-black/5 pb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 p-1 bg-black/5 rounded-full">
                      {[
                        { name: '적', hex: '#B7102A' },
                        { name: '청', hex: '#00658D' },
                        { name: '황', hex: '#D99B00' },
                        { name: '흑', hex: '#231F20' },
                        { name: '백', hex: '#E6E2DC' },
                      ].map((c) => (
                        <button
                          key={c.hex}
                          onClick={() => setBrushColor(c.hex)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            brushColor === c.hex ? 'scale-110 border-black' : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={clearCanvas}
                      className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={downloadDrawing}
                      className="px-6 py-3 bg-black text-white text-[10px] font-black tracking-widest rounded-full hover:bg-[#B7102A] transition-all flex items-center gap-2"
                    >
                      DOWNLOAD
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="aspect-[16/9] rounded-[40px] overflow-hidden border border-black/5 bg-white relative">
                  <canvas
                    ref={canvasRef}
                    width={1000}
                    height={560}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-full cursor-crosshair touch-none"
                  />
                  <div className="absolute top-6 right-6 opacity-10 pointer-events-none select-none">
                     <PenTool className="w-12 h-12" />
                  </div>
                </div>
             </div>

             {/* Color Theory */}
             <div className="space-y-8">
                <h3 className="text-xl font-serif font-black border-b border-black/10 pb-4">
                  THE COLOR LAB
                </h3>
                <div className="flex flex-wrap gap-4">
                   {OBANGSAEK_COLORS.map((c, idx) => (
                      <button
                        key={c.name}
                        onClick={() => setActiveColorIndex(idx)}
                        className={`px-6 py-3 rounded-full text-xs font-black tracking-widest transition-all ${
                          activeColorIndex === idx 
                            ? 'bg-black text-white shadow-xl' 
                            : 'bg-white text-black/40 hover:bg-black/5'
                        }`}
                      >
                        {c.name}
                      </button>
                   ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeColorIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 rounded-[40px] shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                    style={{ backgroundColor: activeColor.bgHex }}
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div 
                        className="w-32 h-32 rounded-full shadow-2xl border-4 border-white/40"
                        style={{ backgroundColor: activeColor.hex }}
                      />
                      <p className="text-xl font-serif font-black" style={{ color: activeColor.textColor }}>
                        {activeColor.koreanName}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm font-serif italic leading-relaxed" style={{ color: activeColor.textColor }}>
                        "{activeColor.witStory}"
                      </p>
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest opacity-60">
                        <span>방위: {activeColor.direction}</span>
                        <span>오행: {activeColor.element}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
