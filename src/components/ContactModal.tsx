import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail, MapPin, Sparkles, Building2 } from 'lucide-react';
import { ARTIST_PROFILE } from '../data/artistData';
import { useStudioData } from '../context/StudioDataContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { notify, t } = useStudioData();
  const [category, setCategory] = useState<'ip' | 'lecture' | 'exhibition' | 'book'>('ip');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      notify(t('성함, 이메일, 문의 내용을 입력해 주세요.', 'Please enter your name, email, and message.'), 'error');
      return;
    }
    setIsSent(true);
  };

  const handleReset = () => {
    setIsSent(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FDF9F3] rounded-3xl shadow-2xl border border-[#E6E2DC] overflow-hidden max-h-[90vh] flex flex-col text-left">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E6E2DC] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FFDAD8] text-[#92001C] flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#1C1C18]">
                {t('이영경 창작스튜디오 제안 및 문의', 'Young-Kyoung Lee Studio Contact')}
              </h3>
              <p className="text-[11px] text-[#755700]">
                {ARTIST_PROFILE.studioName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#5B403F] hover:bg-[#F1EDE7] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isSent ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#E6F4FA] text-[#00658D] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#1C1C18]">
                {t('문의가 정상적으로 전달되었습니다.', 'Your inquiry has been submitted successfully.')}
              </h4>
              <p className="text-xs text-[#5B403F] max-w-xs mx-auto leading-relaxed">
                {t('작성해주신 이메일(', 'We will respond to your email (')}
                <strong className="text-[#1C1C18]">{email}</strong>
                {t(')로 스튜디오 담당자가 영업일 기준 24시간 이내에 답변드리겠습니다.', ') within 24 business hours.')}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-3 bg-[#B7102A] text-white font-bold text-xs rounded-xl hover:bg-[#92001C] transition-colors cursor-pointer"
              >
                {t('확인 및 창 닫기', 'Confirm & Close')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category selector */}
              <div>
                <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                  {t('문의 분야 선택 *', 'Select Inquiry Category *')}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setCategory('ip')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      category === 'ip' ? 'bg-[#B7102A] text-white border-[#B7102A]' : 'bg-white text-[#5B403F] border-[#E6E2DC]'
                    }`}
                  >
                    {t('IP 라이선싱 / 콜라보', 'IP Licensing / Collab')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategory('lecture')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      category === 'lecture' ? 'bg-[#B7102A] text-white border-[#B7102A]' : 'bg-white text-[#5B403F] border-[#E6E2DC]'
                    }`}
                  >
                    {t('작가 강연 / 북토크', 'Lectures & Talks')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategory('exhibition')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      category === 'exhibition' ? 'bg-[#B7102A] text-white border-[#B7102A]' : 'bg-white text-[#5B403F] border-[#E6E2DC]'
                    }`}
                  >
                    {t('원화 전시 / 미술관', 'Exhibitions & Museums')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCategory('book')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      category === 'book' ? 'bg-[#B7102A] text-white border-[#B7102A]' : 'bg-white text-[#5B403F] border-[#E6E2DC]'
                    }`}
                  >
                    {t('친필 서명 도서 구매', 'Signed Book Purchase')}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                  {t('성함 / 담당자명 *', 'Your Name / Contact Person *')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("홍길동", "John Doe")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                  {t('이메일 주소 *', 'Email Address *')}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                  {t('소속 기관 / 회사명 (선택)', 'Organization / Company (Optional)')}
                </label>
                <input
                  type="text"
                  placeholder={t("예: 비룡소 출판사, 서울시립미술관", "e.g. Publisher, Art Museum")}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                  {t('제안 및 문의 내용 *', 'Message & Details *')}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={t("일정, 제안 개요 및 세부 문의 사항을 편하게 적어주세요.", "Please specify your proposal, schedule, or inquiry details.")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#B7102A] hover:bg-[#92001C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#FFDAD8]" />
                <span>{t('스튜디오 문의 전송하기', 'Send Inquiry')}</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
