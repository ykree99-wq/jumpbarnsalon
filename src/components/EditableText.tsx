import React, { useRef, useEffect } from 'react';
import { useStudioData } from '../context/StudioDataContext';

interface EditableTextProps {
  category: 'slide' | 'exhibition' | 'book' | 'sketchbook' | 'character';
  id: string;
  field: string;
  value: string;
  className?: string;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export default function EditableText({
  category,
  id,
  field,
  value,
  className = '',
  tagName = 'div',
}: EditableTextProps) {
  const { isStudioMode, updateText } = useStudioData();
  const elementRef = useRef<HTMLElement>(null);

  const handleBlur = () => {
    if (!elementRef.current) return;
    const newValue = elementRef.current.innerText.trim();
    if (newValue !== value) {
      updateText(category, id, field, newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      elementRef.current?.blur();
    }
  };

  // Keep text in sync with state if external changes happen
  useEffect(() => {
    if (elementRef.current && elementRef.current.innerText !== value) {
      elementRef.current.innerText = value;
    }
  }, [value]);

  const Tag = tagName as any;

  return (
    <Tag
      ref={elementRef}
      contentEditable={isStudioMode}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning={true}
      className={`${className} ${
        isStudioMode 
          ? 'outline-none ring-1 ring-[#B7102A]/20 hover:ring-[#B7102A]/40 focus:ring-[#B7102A] px-1 rounded transition-all cursor-text' 
          : ''
      }`}
    >
      {value}
    </Tag>
  );
}
