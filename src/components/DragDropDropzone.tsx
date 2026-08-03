import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, Check, Sparkles } from 'lucide-react';
import { compressImageFile } from '../utils/imageCompressor';
import { useStudioData } from '../context/StudioDataContext';

interface DragDropDropzoneProps {
  children: React.ReactNode;
  onImageDropped: (dataUrl: string) => void;
  onFilesDropped?: (files: FileList) => void;
  label?: string;
  className?: string;
  showOverlayAlways?: boolean;
  key?: React.Key;
  onClick?: () => void;
}

export default function DragDropDropzone({
  children,
  onImageDropped,
  onFilesDropped,
  label = '이미지 Drag & Drop',
  className = '',
  showOverlayAlways = false,
  onClick,
}: DragDropDropzoneProps) {
  const { notify, isStudioMode } = useStudioData();
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dragCounterRef = useRef<number>(0);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current += 1;
    if (dragCounterRef.current === 1) {
      setIsDraggingOver(true);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
    if (!isDraggingOver) setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current -= 1;
    if (dragCounterRef.current <= 0) {
      setIsDraggingOver(false);
      dragCounterRef.current = 0;
    }
  };

  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      notify('이미지 파일(JPG, PNG, WEBP 등)만 업로드하실 수 있습니다.', 'error');
      return;
    }

    // 1. Immediate Preview via Object URL
    const objectUrl = URL.createObjectURL(file);
    onImageDropped(objectUrl);

    // 2. Background Compression for Persistence
    try {
      const compressedDataUrl = await compressImageFile(file);
      onImageDropped(compressedDataUrl); // Replace blob URL with persistent Data URL
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);
      // Wait a bit before revoking to ensure the UI has switched to the data URL
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (err) {
      console.error('Image upload failed:', err);
      notify('이미지 업로드 처리 중 오류가 발생했습니다.', 'error');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    dragCounterRef.current = 0;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      if (onFilesDropped) {
        onFilesDropped(files);
      } else {
        processFile(files[0]);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (onFilesDropped) {
        onFilesDropped(files);
      } else {
        processFile(files[0]);
      }
      e.target.value = '';
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    if (isStudioMode) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      className={`relative group overflow-hidden transition-all duration-300 ${className} ${
        isDraggingOver ? 'ring-4 ring-[#B7102A] ring-inset scale-[0.98]' : ''
      } ${isStudioMode ? 'cursor-pointer ring-1 ring-[#B7102A]/20 hover:ring-[#B7102A]/40' : ''}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={!!onFilesDropped}
        onChange={handleFileChange}
        className="hidden"
      />
      
      <div className={`relative z-0 h-full w-full transition-all duration-500 ${isDraggingOver ? 'blur-[1px]' : 'scale-100'}`}>
        {children}
      </div>

      {isStudioMode && !isDraggingOver && (
        <div className="absolute top-2 right-2 z-10 p-1.5 bg-white/90 rounded-full border border-[#B7102A]/20 text-[#B7102A] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      )}

      {isDraggingOver && (
        <div className="absolute inset-0 z-[110] bg-[#B7102A]/80 text-white backdrop-blur-xs flex flex-col items-center justify-center p-4 transition-all animate-in fade-in zoom-in duration-200 pointer-events-none">
          <UploadCloud className="w-10 h-10 animate-bounce mb-2" />
          <span className="font-serif font-bold text-base text-center">
            여기에 놓으세요!
          </span>
          <span className="text-[10px] opacity-80 uppercase tracking-widest font-mono mt-1">
            Instant Update
          </span>
        </div>
      )}

      {isSuccess && (
        <div className="absolute inset-0 z-[120] bg-[#00658D]/95 text-white flex flex-col items-center justify-center p-4 transition-all animate-in fade-in zoom-in-95 duration-200 pointer-events-none">
          <Check className="w-10 h-10 mb-1" />
          <span className="font-bold text-sm">업로드 완료!</span>
        </div>
      )}

      {isStudioMode && (
        <div className="absolute bottom-2 right-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-[10px] px-2.5 py-1 rounded-lg font-bold shadow-md flex items-center gap-1 pointer-events-none border border-white/20">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>REPLACE</span>
        </div>
      )}
    </div>
  );
}
