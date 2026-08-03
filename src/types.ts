export interface GalleryWork {
  id: string;
  title: string;
  image: string;
  category: string;
  technique?: string;
  size?: string;
  price?: string;
  description?: string;
}

export interface PictureBook {
  id: string;
  number?: number;
  genre: '시 그림책' | '드라마' | '옛이야기' | '우화와 생활' | '근간';
  title: string;
  englishTitle: string;
  year?: string;
  authorText?: string;
  badge?: string;
  tag?: string;
  price?: string;
  description: string;
  summary?: string;
  characters?: string[];
  colorPalette?: { name: string; hex: string }[];
  coverImage: string;
  samplePages?: string[];
  awards?: string[];
  isUpcoming?: boolean;
}

export interface IPCharacter {
  id: string;
  name: string;
  englishName: string;
  bookTitle: string;
  personality: string;
  description: string;
  traditionalRole: string;
  kCutyTraits: string;
  colorHex: string;
  image: string;
}

export interface WorkshopSchedule {
  id: string;
  title: string;
  type: '작가 직강 아틀리에' | '어린이&가족 민화 그림책 클래스' | '온라인 그림책 라이브';
  duration: string;
  location: string;
  status: '모집중' | '마감임박' | '마감';
  price: string;
  dateList: string[];
  description: string;
  target: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  highlight: string;
  bookOrWorkshopName: string;
  date: string;
  avatar: string;
  workImage?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'books' | 'ip' | 'workshop' | 'general';
}

export interface Exhibition {
  id: string;
  title: string;
  englishTitle: string;
  venue: string;
  location: string;
  period: string;
  status: '현재 전시중' | '예정 전시' | '전시 아카이브';
  posterImage: string;
  description: string;
  highlights: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: '전시소식' | '출간소식' | '수상소식' | '워크숍' | '미디어';
  title: string;
  summary: string;
  linkText?: string;
  image?: string;
}

export interface SketchbookNote {
  id: string;
  title: string;
  date: string;
  noteText: string;
  sketchImage: string;
  colorPalette: string[];
}

export interface ObangsaekColor {
  name: string;
  koreanName: string;
  direction: string;
  element: string;
  meaning: string;
  hex: string;
  bgHex: string;
  textColor: string;
  characterExample: string;
  witStory: string;
}
