/**
 * Utility to generate Google Calendar Event URL for Baking Classes
 */

interface CalendarEventOptions {
  title: string;
  dateStr: string;
  durationStr: string;
  location: string;
  userName?: string;
  userPhone?: string;
  userNote?: string;
  price?: string;
}

export function generateGoogleCalendarUrl(options: CalendarEventOptions): string {
  const currentYear = 2026;
  let month = 7;
  let day = 25;
  let startHour = 10;
  let startMin = 30;

  // Extract month, day, time from dateStr like "7월 25일 (토) 10:30 (잔여 1석)"
  const monthMatch = options.dateStr.match(/(\d+)월/);
  const dayMatch = options.dateStr.match(/(\d+)일/);
  const timeMatch = options.dateStr.match(/(\d{1,2}):(\d{2})/);

  if (monthMatch) month = parseInt(monthMatch[1], 10);
  if (dayMatch) day = parseInt(dayMatch[1], 10);

  if (timeMatch) {
    startHour = parseInt(timeMatch[1], 10);
    startMin = parseInt(timeMatch[2], 10);
  } else {
    if (options.dateStr.includes('저녁')) {
      startHour = 19;
      startMin = 0;
    } else {
      startHour = 10;
      startMin = 0;
    }
  }

  // Calculate duration in minutes
  let durationMinutes = 210; // Default 3.5 hours
  const hoursMatch = options.durationStr.match(/(\d+)\s*시간/);
  const minsMatch = options.durationStr.match(/(\d+)\s*분/);

  if (hoursMatch) {
    durationMinutes = parseInt(hoursMatch[1], 10) * 60;
    if (minsMatch) {
      durationMinutes += parseInt(minsMatch[1], 10);
    }
  } else if (minsMatch) {
    durationMinutes = parseInt(minsMatch[1], 10);
  }

  // Create start time in KST (UTC+9)
  // To format in UTC for Google Calendar: UTC = KST - 9 hours
  const startDateKSTMs = Date.UTC(currentYear, month - 1, day, startHour, startMin);
  const startDateUTC = new Date(startDateKSTMs - 9 * 60 * 60 * 1000);
  const endDateUTC = new Date(startDateUTC.getTime() + durationMinutes * 60 * 1000);

  const formatUTC = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
  };

  const datesParam = `${formatUTC(startDateUTC)}/${formatUTC(endDateUTC)}`;

  const eventTitle = `[메종 드 픽처북] ${options.title}`;
  const detailsLines = [
    `🍞 메종 드 픽처북 (Maison de Picturebook) 베이킹 클래스`,
    `----------------------------------------`,
    `• 수강 과목: ${options.title}`,
    `• 수강 일시: ${options.dateStr}`,
    `• 소요 시간: ${options.durationStr}`,
    `• 장소: ${options.location}`,
    options.price ? `• 수강료: ${options.price}` : '',
    options.userName ? `• 신청자 성함: ${options.userName}` : '',
    options.userPhone ? `• 연락처: ${options.userPhone}` : '',
    options.userNote ? `• 요청사항/비고: ${options.userNote}` : '',
    `----------------------------------------`,
    `서울 성수동 스튜디오 / 윤소담 베이커`,
    `문의: 카카오톡 채널 '메종드픽처북'`,
  ].filter(Boolean).join('\n');

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', eventTitle);
  url.searchParams.set('dates', datesParam);
  url.searchParams.set('details', detailsLines);
  url.searchParams.set('location', options.location);

  return url.toString();
}
