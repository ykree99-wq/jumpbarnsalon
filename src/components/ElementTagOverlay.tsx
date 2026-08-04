import React, { useState, useEffect } from 'react';
import { Tag, Check, Eye, EyeOff } from 'lucide-react';
import { useStudioData } from '../context/StudioDataContext';

export default function ElementTagOverlay() {
  const { isStudioMode, notify } = useStudioData();
  const [showTags, setShowTags] = useState(false);
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  // Automatically enable tags when Studio Mode is activated
  useEffect(() => {
    setShowTags(isStudioMode);
  }, [isStudioMode]);

  useEffect(() => {
    if (!isStudioMode || !showTags) {
      document.querySelectorAll('.element-id-badge').forEach((b) => b.remove());
      return;
    }

    const updateBadges = () => {
      // Clear existing badges before updating
      document.querySelectorAll('.element-id-badge').forEach((b) => b.remove());

      let tCount = 1;
      let imgCount = 1;
      let btnCount = 1;
      let secCount = 1;

      // 1. Scan Main Sections
      const sections = document.querySelectorAll('section, main, header, footer');
      sections.forEach((sec) => {
        const tagId = `SEC-${secCount++}`;
        attachBadge(sec as HTMLElement, tagId, 'bg-[#1C1C18] text-white border border-white/20');
      });

      // 2. Scan Headings and Core Text Paragraphs
      const textElements = document.querySelectorAll('h1, h2, h3, h4, p');
      textElements.forEach((el) => {
        const text = el.textContent?.trim();
        if (!text || text.length === 0) return;
        if (el.closest('.element-id-badge') || el.closest('button')) return;

        const tagId = `T-${tCount++}`;
        attachBadge(el as HTMLElement, tagId, 'bg-[#B7102A] text-white border border-rose-300');
      });

      // 3. Scan Images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (img.closest('.element-id-badge')) return;

        const tagId = `IMG-${imgCount++}`;
        const parent = img.parentElement || img;
        attachBadge(parent as HTMLElement, tagId, 'bg-[#00658D] text-white border border-cyan-300');
      });

      // 4. Scan Action Buttons
      const buttons = document.querySelectorAll('button');
      buttons.forEach((btn) => {
        if (btn.closest('.element-id-badge') || btn.classList.contains('element-tag-toggle')) return;

        const tagId = `BTN-${btnCount++}`;
        attachBadge(btn as HTMLElement, tagId, 'bg-amber-600 text-white border border-amber-300');
      });
    };

    const attachBadge = (target: HTMLElement, tagId: string, colorStyle: string) => {
      if (target.querySelector(`.badge-${tagId}`)) return;

      const badge = document.createElement('span');
      badge.className = `element-id-badge badge-${tagId} inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shadow-md cursor-pointer select-none z-50 transition-all hover:scale-110 active:scale-95 ${colorStyle}`;
      badge.style.position = 'relative';
      badge.style.marginLeft = '6px';
      badge.style.marginRight = '6px';
      badge.style.verticalAlign = 'middle';
      badge.title = `클릭하면 [${tagId}] 태그가 클립보드에 복사됩니다`;
      badge.innerText = `[${tagId}]`;

      badge.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const snippet = target.textContent?.replace(/\[.*?\]/g, '').trim().slice(0, 25) || '';
        const copyText = `[${tagId}] ${snippet ? `"${snippet}"` : ''}`;
        navigator.clipboard.writeText(copyText);
        setCopiedTag(tagId);
        if (notify) {
          notify(`태그 [${tagId}] 가 클립보드에 복사되었습니다!`, 'success');
        }
        setTimeout(() => setCopiedTag(null), 2500);
      });

      if (['H1', 'H2', 'H3', 'H4', 'P', 'SPAN', 'BUTTON'].includes(target.tagName)) {
        target.appendChild(badge);
      } else if (target.firstChild) {
        target.insertBefore(badge, target.firstChild);
      } else {
        target.appendChild(badge);
      }
    };

    const timer = setTimeout(updateBadges, 400);
    const observer = new MutationObserver(() => {
      setTimeout(updateBadges, 400);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.querySelectorAll('.element-id-badge').forEach((b) => b.remove());
    };
  }, [isStudioMode, showTags, notify]);

  // If Studio Mode is OFF, do not render floating button or badges
  if (!isStudioMode) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {copiedTag && (
        <div className="bg-emerald-600 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl animate-bounce flex items-center gap-2 border border-emerald-400 font-bold">
          <Check className="w-4 h-4 text-white" />
          <span>태그 [{copiedTag}] 복사완료! 채팅에 붙여넣어 수정을 지시하세요.</span>
        </div>
      )}

      <button
        onClick={() => setShowTags(!showTags)}
        className={`element-tag-toggle flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs shadow-2xl transition-all border cursor-pointer ${
          showTags
            ? 'bg-[#B7102A] border-[#B7102A] text-white ring-4 ring-rose-600/30 scale-105'
            : 'bg-[#1C1C18]/90 border-stone-700 text-stone-200 hover:bg-black'
        }`}
      >
        <Tag className="w-4 h-4" />
        <span>식별 태그 {showTags ? 'ON [T-1, IMG-1]' : 'OFF'}</span>
        {showTags ? <Eye className="w-3.5 h-3.5 ml-1" /> : <EyeOff className="w-3.5 h-3.5 ml-1" />}
      </button>
    </div>
  );
}
