import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, CheckCircle, Sparkles, Send, ExternalLink, CalendarPlus } from 'lucide-react';
import { WORKSHOP_SCHEDULES } from '../data/artistData';
import { generateGoogleCalendarUrl } from '../utils/calendarUtils';
import { useStudioData } from '../context/StudioDataContext';

interface WorkshopBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkshopBookingModal({ isOpen, onClose }: WorkshopBookingModalProps) {
  const { notify, t } = useStudioData();
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string>(WORKSHOP_SCHEDULES[0]?.id || 'atelier-master');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNote, setUserNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentWorkshop = WORKSHOP_SCHEDULES.find((w) => w.id === selectedWorkshopId) || WORKSHOP_SCHEDULES[0];

  const calendarUrl = generateGoogleCalendarUrl({
    title: currentWorkshop.title,
    dateStr: selectedDate || currentWorkshop.dateList[0] || '일정 협의',
    durationStr: currentWorkshop.duration,
    location: currentWorkshop.location,
    userName,
    userPhone,
    userNote,
    price: currentWorkshop.price,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !userName || !userPhone) {
      notify(t('수강 날짜, 신청자 성함, 연락처를 입력해 주세요.', 'Please fill in date, your name, and phone number.'), 'error');
      return;
    }
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSelectedDate('');
    setUserName('');
    setUserPhone('');
    setUserNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDF9F3] rounded-3xl shadow-2xl border border-[#E6E2DC] overflow-hidden max-h-[90vh] flex flex-col text-left">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E6E2DC] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FFDAD8] text-[#92001C] flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#1C1C18]">
                {t('이영경 창작스튜디오 워크숍 & 클래스 신청', 'Young-Kyoung Lee Studio Workshop Booking')}
              </h3>
              <p className="text-[11px] text-[#755700]">
                {currentWorkshop.title}
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
          {isSubmitted ? (
            /* Submission Success Screen with Google Calendar Link */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-[#E6F4FA] text-[#00658D] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-[#1C1C18]">
                  워크숍 신청이 성공적으로 접수되었습니다!
                </h4>
                <p className="text-xs text-[#5B403F] max-w-md mx-auto leading-relaxed">
                  신청해주신 연락처(<strong className="text-[#1C1C18]">{userPhone}</strong>)로 
                  수시 입금 및 오시는 길 안내 문자가 발송될 예정입니다.
                </p>
              </div>

              {/* Reserved Summary Box */}
              <div className="p-4 bg-white rounded-2xl border border-[#E6E2DC] max-w-md mx-auto text-xs text-left space-y-2">
                <div className="font-bold text-[#1C1C18] border-b border-[#E6E2DC] pb-2 flex justify-between">
                  <span>신청 내역 요약</span>
                  <span className="text-[#B7102A]">{currentWorkshop.price}</span>
                </div>
                <div>• 클래스: {currentWorkshop.title}</div>
                <div>• 일시: {selectedDate} ({currentWorkshop.duration})</div>
                <div>• 장소: {currentWorkshop.location}</div>
                <div>• 신청자: {userName} 님</div>
              </div>

              {/* Google Calendar Instant Link Box */}
              <div className="p-5 bg-blue-50/90 border border-blue-200 rounded-2xl text-xs text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <CalendarPlus className="w-4 h-4 text-blue-600" />
                  <span>내 구글 캘린더에 클래스 일정 추가하기</span>
                </div>
                <p className="text-blue-800 text-[11px] leading-relaxed">
                  아래 버튼을 클릭하시면 구글 캘린더에 워크숍 장소, 시간, 상세 내용이 자동으로 세팅된 이벤트 등록 화면이 열립니다.
                </p>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>구글 캘린더 일정에 바로 등록하기</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetForm}
                  className="w-full max-w-md mx-auto px-6 py-3.5 bg-[#1C1C18] text-white font-bold text-xs rounded-xl hover:bg-black transition-colors cursor-pointer"
                >
                  확인 및 창 닫기
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Workshop Select Buttons */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#1C1C18] uppercase">
                  1. 워크숍 과목 선택
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {WORKSHOP_SCHEDULES.map((ws) => (
                    <button
                      key={ws.id}
                      type="button"
                      onClick={() => {
                        setSelectedWorkshopId(ws.id);
                        setSelectedDate('');
                      }}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        selectedWorkshopId === ws.id
                          ? 'bg-white border-[#B7102A] shadow-xs'
                          : 'bg-[#FAF7F2] border-[#E6E2DC] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#B7102A]">{ws.type}</span>
                        <span className="text-xs font-bold text-[#1C1C18]">{ws.price}</span>
                      </div>
                      <div className="font-serif font-bold text-sm text-[#1C1C18] mt-1">
                        {ws.title}
                      </div>
                      <div className="text-[11px] text-[#5B403F] mt-1 flex items-center gap-3">
                        <span><Clock className="w-3 h-3 inline mr-1 text-[#D99B00]" />{ws.duration}</span>
                        <span><MapPin className="w-3 h-3 inline mr-1 text-[#00658D]" />{ws.location}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Select */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#1C1C18] uppercase">
                  2. 수강 일정 선택
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentWorkshop.dateList.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-left cursor-pointer ${
                        selectedDate === d
                          ? 'bg-[#B7102A] text-white border-[#B7102A] shadow-2xs'
                          : 'bg-white text-[#31302D] border-[#E6E2DC] hover:border-[#B7102A]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <div className="mt-2 text-right">
                    <a
                      href={calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#4285F4] hover:text-[#3367D6] font-semibold underline underline-offset-2 transition-colors"
                    >
                      <CalendarPlus className="w-3.5 h-3.5" />
                      <span>[선택한 {selectedDate}] 구글 캘린더 생성 링크 미리보기</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* User Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                    신청자 성함 *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                    휴대폰 연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1C18] mb-1">
                  요청사항 또는 질문 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="동반 수강자 정보나 특별히 원하시는 과목 질문을 적어주세요."
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2DC] rounded-xl text-xs text-[#1C1C18] focus:outline-hidden focus:border-[#B7102A]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#B7102A] hover:bg-[#92001C] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#FFDAD8]" />
                  <span>수강 신청 완료하기 ({currentWorkshop.price})</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
