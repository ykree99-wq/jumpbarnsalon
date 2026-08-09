import { PictureBook, IPCharacter, WorkshopSchedule, Testimonial, FAQItem, ObangsaekColor, Exhibition, NewsItem, SketchbookNote, GalleryWork } from '../types';

export const SLIDESHOW_ARTWORKS = [
  {
    id: 'slide-1',
    title: '아씨방 일곱 동무 - 가위 각시의 따짐',
    bookTitle: '아씨방 일곱 동무 (1998)',
    technique: '한지 위 세채 & 수묵',
    image: '/slides/slide-1.png',
    caption: '“아니, 형님 지금 무슨 소릴 하고 있어요? 네 덕은 물러가라...”',
  },
  {
    id: 'slide-2',
    title: '넉 점 반 - 분꽃밭 속의 아기',
    bookTitle: '넉 점 반 (2004)',
    technique: '한지 위 석채 및 세채',
    image: '/slides/slide-2.png',
    caption: '“시방 몇 시냐 물어보고 개미 구경하느라 저녁이 되었네”',
  },
  {
    id: 'slide-3',
    title: '전우치 - 호랑이와 전우치 신선',
    bookTitle: '전우치 (2018)',
    technique: '먹선과 오방색 전통 수묵채색',
    image: '/slides/slide-3.png',
    caption: '“옛날 옛적 산 속에 전우치라는 신통한 도사가 살았단다”',
  },
  {
    id: 'slide-4',
    title: '봉지랑 봉투들의 춤 - 은하수 강가',
    bookTitle: '봉투 아가씨 (2022)',
    technique: '수채화 및 한지 꼴라주',
    image: '/slides/slide-4.png',
    caption: '“노래합시다, 헤이헤이! 모두들 웃고 떠들며 춤을 추었어요”',
  },
  {
    id: 'slide-5',
    title: '초원의 목동 - 양떼와 푸른 하늘',
    bookTitle: '초원 아카이브 (2025)',
    technique: '한지 위 투명 수채 채색',
    image: '/slides/slide-5.png',
    caption: '“광활한 몽골 대초원과 뭉게구름 아래 노니는 양떼와 목동”',
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-orig-1',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/exhibition-1.png',
    description: '',
    highlights: []
  },
  {
    id: 'ex-orig-2',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/exhibition-2.png',
    description: '',
    highlights: []
  },
  {
    id: 'ex-1',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/ex-1.jpg',
    description: '',
    highlights: []
  },
  {
    id: 'ex-2',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/ex-2.jpg',
    description: '',
    highlights: []
  },
  {
    id: 'ex-3',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/ex-3.jpg',
    description: '',
    highlights: []
  },
  {
    id: 'ex-4',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/ex-4.jpg',
    description: '',
    highlights: []
  },
  {
    id: 'ex-5',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/ex-5.jpg',
    description: '',
    highlights: []
  },
  {
    id: 'ex-6',
    title: '',
    englishTitle: '',
    venue: '',
    location: '',
    period: '',
    status: '전시 아카이브',
    posterImage: '/exhibitions/ex-6.jpg',
    description: '',
    highlights: []
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    date: '2026.07.20',
    category: '전시소식',
    title: '성수 스튜디오 [오방색과 일곱 동무] 개인전 오픈',
    summary: '8월 1일부터 10월 15일까지 성수동 아틀리에에서 이영경 작가의 30년 작가 인생 원화전이 펼쳐집니다. 사전 예약 시 친필 서명 엽서 증정.',
    linkText: '전시 상세보기',
    image: '/gallery/IMG_1787.JPG'
  },
  {
    id: 'news-2',
    date: '2026.06.12',
    category: '출간소식',
    title: '<아씨방 일곱 동무> 프랑스어판 & 스페인어판 동시 출간',
    summary: '유럽 유수 아동 출판사를 통해 <The Seven Friends>가 정식 번역 출간되어 유럽 현지 독자들과 만납니다.',
    linkText: '해외 출판 소식',
    image: '/gallery/IMG_1788.JPG'
  },
  {
    id: 'news-3',
    date: '2026.05.02',
    category: '워크숍',
    title: '여름 시즌 [오방색 채색 아틀리에 워크숍] 일정 개설',
    summary: '작가 직강으로 진행되는 전통 분채 및 닥종이 한지 채색 원데이 클래스가 8월 토요일에 오픈됩니다.',
    linkText: '워크숍 신청하기',
    image: '/gallery/IMG_1789.JPG'
  }
];

export const SKETCHBOOK_NOTES: SketchbookNote[] = [
  {
    id: 'sketch-1',
    title: '오방색 붓끝에서 태어난 가위 각시의 미소',
    date: '2026.07.10 스케치북 노트',
    noteText: '다홍빛 물감과 청록빛 먹선을 번갈아 그으며, 바느질함 속 싹둑싹둑 가위 각시의 앙증맞은 입매를 다듬는다. 전통 색은 시간이 지날수록 종이에 그윽하게 안착한다.',
    sketchImage: '/gallery/IMG_1790.JPG',
    colorPalette: ['#D9381E', '#008B8B', '#F2A900', '#F9F6EE']
  },
  {
    id: 'sketch-2',
    title: '넉 점 반 아기의 신나는 들길 발걸음',
    date: '2026.06.28 스케치북 노트',
    noteText: '“엄마, 시방 넉 점 반이래!” 순진무구한 목소리가 여름 들녘 개나리 꽃빛처럼 온 동네를 가득 채우는 정경을 한지 위에 옅은 채색으로 담아본다.',
    sketchImage: '/gallery/IMG_1791.JPG',
    colorPalette: ['#F9D835', '#E91E63', '#556B2F']
  }
];

export const GALLERY_WORKS: GalleryWork[] = [
  {
    id: 'gallery-1787',
    title: '작품 01 (제목 미입력)',
    image: '/gallery/IMG_1787.JPG',
    category: 'Original Artwork',
    technique: '재료 입력 (예: 한지 위 석채 및 수묵)',
    size: '사이즈 입력 (예: 60 × 45 cm)',
    price: '가격 입력 (예: 가격 문의)',
    description: '작품에 대한 서정적 해설이나 제작 의도를 입력하는 공간입니다.'
  },
  {
    id: 'gallery-1788',
    title: '작품 02 (제목 미입력)',
    image: '/gallery/IMG_1788.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1789',
    title: '작품 03 (제목 미입력)',
    image: '/gallery/IMG_1789.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1790',
    title: '작품 04 (제목 미입력)',
    image: '/gallery/IMG_1790.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1791',
    title: '작품 05 (제목 미입력)',
    image: '/gallery/IMG_1791.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1792',
    title: '작품 06 (제목 미입력)',
    image: '/gallery/IMG_1792.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1836',
    title: '작품 07 (제목 미입력)',
    image: '/gallery/IMG_1836.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1837',
    title: '작품 08 (제목 미입력)',
    image: '/gallery/IMG_1837.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1838',
    title: '작품 09 (제목 미입력)',
    image: '/gallery/IMG_1838.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1839',
    title: '작품 10 (제목 미입력)',
    image: '/gallery/IMG_1839.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  },
  {
    id: 'gallery-1840',
    title: '작품 11 (제목 미입력)',
    image: '/gallery/IMG_1840.JPG',
    category: 'Original Artwork',
    technique: '재료 입력',
    size: '사이즈 입력',
    price: '가격 입력',
    description: '작품 설명 입력란입니다.'
  }
];

export const ARTIST_PROFILE = {
  name: '이영경 (Young-Kyoung Lee)',
  title: '그림책 작가 & K-Cuty Folk Art 아티스트',
  studioName: 'The Color Lab of Young-Kyoung Lee (이영경의 창작스튜디오)',
  experienceYears: 30,
  introQuote: '“한국 옛이야기의 해학을 현대적 감각으로 살려내는 그림책 작가 이영경의 아카이브 - jbsalon.art”',
  bio: `1993년부터 그림책 일러스트레이션을 시작했다. 청소년기 학교 교과목에서 접한 고전문학작품을 모티브로 하여 기획, 1998년 그림책 <아씨방 일곱 동무>를 출간했으며 이후 <넉 점 반>, <묘생이란 무엇인가> 등 다수의 그림책에 글과 그림으로 작품활동을 해오고 있다.

그림책 출판 이외에 전시회와 1인극 공연 및 강연 등으로 관객과 독자들을 만나고 있으며 최근 '쩜반살롱'이라는 공간을 열었다. '쩜반'은 <넉 점 반>에서 뒷글자를 따온 이름이고 각종 이벤트 공간을 갖춘 작업 스튜디오이며 캐릭터 브랜딩 회사이기도 하다. 2023년과 2024년 아스트리드 린드그렌 상 한국후보로 추천되었다. 2020년부터 2024년까지 그림책협회 회장에 재임했다.

'재미'와 '유쾌함'을 생활과 작품활동의 중요가치로서 추구하고 있다. 삶을 마감하는 순간에 아기처럼 방긋 웃고 세상을 떠나는 것이 목표이고 어린이들과 어울려 춤추고 노래하는 율동할머니가 장래의 꿈이다. 이른 아침 '넉 점 반'이라는 시각을 사랑하고 '아침'이라는 선물에 늘 감사하며 하루를 시작한다.`,
  awards: [
    '2023년·2024년 아스트리드 린드그렌 상 (ALMA) 한국 대표 후보 추천',
    '그림책협회 회장 재임 (2020년 ~ 2024년)',
    '초등학교 국어교과서 수록(~2025년)',
    '어린이도서연구회 추천도서 선정 (<넉 점 반>, <주먹이>)',
    'BIB (브라티슬라바 일러스트레이션 비엔날레) 한국 대표 출품',
  ],
  stats: {
    totalBooksSold: '150만부+',
    translatedLanguages: '8개국 번역 출간',
    workshopStudents: '5,000명+',
    exhibitionCount: '40여 회 전시',
  },
  images: {
    portrait: '/profile-portrait.jpg',
    studio: '/gallery/IMG_1836.JPG',
    artwork: '/gallery/IMG_1837.JPG',
  }
};

export const PICTURE_BOOKS: PictureBook[] = [
  // --- 시 그림책 ---
  {
    id: 'nuk-jeom-ban',
    number: 1,
    genre: '시 그림책',
    title: '넉 점 반',
    englishTitle: 'Half Past Four',
    year: '2004',
    authorText: '윤석중 시 | 이영경 그림 | 창비',
    badge: '★ 시 그림책 명작',
    tag: '윤석중 동시 그림책',
    price: '13,000원',
    description: '거장 윤석중 시인의 동시에 그림책의 언어를 가미했어요. 소박하고 정겨운 옛 모습과 자기만의 놀이에 몰입하는 아이를 따라 그 시절로 돌아가 보아요.',
    summary: '“엄마 시방 넉 점 반이래!” 가게에 가서 시방 몇 시냐 물어보고 개미 구경, 꽃 구경하느라 저녁이 되어서야 돌아온 아기의 순진무구한 이야기.',
    characters: ['시계 보러 간 아기', '점빵 주인 할아버지'],
    colorPalette: [
      { name: '개나리 노랑 (Yellow)', hex: '#F9D835' },
      { name: '진분홍 (Pink Flower)', hex: '#E91E63' },
    ],
    coverImage: '/books/[IMG-1].jpg',
    samplePages: ['/books/[IMG-1].jpg'],
    awards: ['한국어린이도서상 수상', '교과서 수록작']
  },
  {
    id: 'yun-dong-ju-poems',
    number: 2,
    genre: '시 그림책',
    title: '윤동주 시집',
    englishTitle: 'Selected Poems of Yun Dong-ju',
    year: '2017',
    authorText: '윤동주 시 | 이영경 그림',
    badge: '탄생 100주년 기념',
    tag: '맑은 영혼의 시선',
    price: '15,000원',
    description: '윤동주 탄생 100주년을 기념하여 54편의 시에 해설과 삽화를 가미한 아름다운 시집. 암울한 일제강점기에 맑은 영혼으로 빚어낸 시어로 희망의 등불을 켰던 윤동주 시인을 만나보아요.',
    summary: '하늘과 바람과 별과 시... 맑고 순수한 영혼이 깃든 윤동주 시인의 명시 54편을 따뜻한 일러스트와 함께 읽는 그림책.',
    characters: ['윤동주 시인'],
    colorPalette: [
      { name: '밤하늘 묵색 (Deep Midnight)', hex: '#1B263B' },
      { name: '별빛 황금 (Star Gold)', hex: '#E0A96D' }
    ],
    coverImage: '/books/[IMG-2].jpg',
    samplePages: ['/books/[IMG-2].jpg']
  },

  // --- 드라마 ---
  {
    id: 'plastic-bag-princess',
    number: 3,
    genre: '드라마',
    title: '봉지공주와 봉투왕자',
    englishTitle: 'Plastic Bag Princess & Paper Bag Prince',
    year: '2019',
    authorText: '이영경 글·그림 | 사계절',
    badge: '★ 대표 창작 그림책',
    tag: '존중과 사랑의 메시지',
    price: '14,000원',
    description: '흔히 쓰고 버리는 비닐봉지와 종이봉투가 \'봉지공주\'와 \'봉투왕자\'로 활약하는 러브스토리 그림책예요. 외양과 실용을 넘어 존재만으로 서로 존중하고 사랑할 수 있다는 메시지를 담은 그림책.',
    summary: '서로 다른 모습과 재질을 가졌지만, 있는 그대로의 모습을 인정하고 사랑하는 봉지공주와 봉투왕자의 유쾌하고 따뜻한 러브스토리.',
    characters: ['봉지공주', '봉투왕자'],
    colorPalette: [
      { name: '스카이 블루 (Sky Blue)', hex: '#87CEEB' },
      { name: '크라프트 브라운 (Kraft)', hex: '#D2B48C' }
    ],
    coverImage: '/books/[IMG-3].jpg',
    samplePages: ['/books/[IMG-3].jpg']
  },
  {
    id: 'geumgeum-mom',
    number: 4,
    genre: '드라마',
    title: '천하태평 금금이의 치매엄마 간병기',
    englishTitle: 'Geumgeum’s Caregiving Story',
    year: '2021',
    authorText: '이영경 글·그림',
    badge: '감동 우화',
    tag: '성장과 희망',
    price: '14,500원',
    description: '금금이는 치매에 걸려 집을 나간 엄마를 찾아 길을 떠나면서 쑥쑥 자라게 된답니다. 강을 건너며 쑥쑥 자라는 환상적인 장면을 만나보아요. \'치매\'라는 무거운 주제를 가볍고 우화적으로 그려낸 그림책예요.',
    summary: '집 나간 엄마를 찾아 길을 떠나는 과정에서 슬픔에 눌리지 않고 꿋꿋하게 자라나는 금금이의 긍정과 희망의 가슴 뭉클한 이야기.',
    characters: ['금금이', '금금이 엄마'],
    colorPalette: [
      { name: '따스한 오렌지 (Warm Orange)', hex: '#E67E22' },
      { name: '강물 푸른색 (River Blue)', hex: '#2980B9' }
    ],
    coverImage: '/books/[IMG-4].jpg',
    samplePages: ['/books/[IMG-4].jpg']
  },
  {
    id: 'gourd-flowers',
    number: 5,
    genre: '드라마',
    title: '박꽃이 피었습니다',
    englishTitle: 'Gourd Flowers Have Bloomed',
    year: '2022',
    authorText: '이영경 글·그림',
    badge: '역사 기억 프로젝트',
    tag: '추크섬 위안부 서사',
    price: '15,000원',
    description: '방직공장에 취직해 돈을 벌 수 있게 해 주고 공부도 시켜 준다는 말에 속아서 순이는 몇 달을 바다 위에서 보내고 어느 섬에 도착했지만 섬에는 공장도 학교도 없었어요. 남태평양 추크섬에서 있었던 일본군위안부의 햇빛 이야기를 그림책으로 만들었어요.',
    summary: '역사의 깊은 아픔 속에서도 꺾이지 않는 인간의 존엄과 순이의 햇살 같은 희망을 담아낸 감동적인 작품.',
    characters: ['순이'],
    colorPalette: [
      { name: '박꽃 순백 (Gourd White)', hex: '#FDFEFE' },
      { name: '태평양 남빛 (Deep Ocean)', hex: '#1B4F72' }
    ],
    coverImage: '/books/[IMG-5].jpg',
    samplePages: ['/books/[IMG-5].jpg']
  },

  // --- 옛이야기 ---
  {
    id: 'seven-friends',
    number: 6,
    genre: '옛이야기',
    title: '아씨방 일곱 동무',
    englishTitle: "The Seven Friends in the Lady's Room",
    year: '1998',
    authorText: '이영경 글·그림 | 비룡소',
    badge: '★ 초등 3학년 교과서 수록',
    tag: 'K-Folk Masterpiece',
    price: '14,000원',
    description: '\'규중칠우쟁론기\'라는 옛수필로 만든 그림책. 바늘, 실, 골무, 다리미, 가위, 자, 인두들은 서로 자기가 제일 중요하다고 뽐내다가 결국 모두가 함께 소중하다는 것을 깨닫는답니다.',
    summary: '아씨가 잠든 사이, 바늘(바느질 아씨), 가위(교두 각시) 등 일곱 동무가 서로 자기가 으뜸이라며 재기발랄한 입담을 겨룹니다.',
    characters: ['자(척부인)', '바늘(바느질아씨)', '실(청홍연의)', '골무(골무할미)', '가위(교두각시)', '인두(인두부인)', '다리미(다리미아씨)'],
    colorPalette: [
      { name: '다홍 (Crimson)', hex: '#D9381E' },
      { name: '청록 (Teal-Jade)', hex: '#008B8B' },
      { name: '황금 (Yellow Gold)', hex: '#F2A900' },
    ],
    coverImage: '/books/[IMG-6].jpg',
    samplePages: [
      '/books/[IMG-6].jpg',
      '/characters/gawi-gaksi.jpg',
      '/characters/needle-lady.jpg',
      '/characters/ruler-lady.jpg',
      '/characters/thread-lady.jpg',
      '/characters/golmu-halmi.jpg',
      '/characters/indu-gaksi.jpg',
      '/characters/darimi-aassi.jpg'
    ],
    awards: ['백상출판문화상 수상', '초등 3학년 국어 교과서 수록작']
  },
  {
    id: 'magic-scroll',
    number: 7,
    genre: '옛이야기',
    title: '신기한 그림족자',
    englishTitle: 'The Magic Scroll',
    year: '2010',
    authorText: '이영경 그림 | 창비',
    badge: '★ 초등 4학년 교과서 수록',
    tag: '전우치전 모티프',
    price: '13,500원',
    description: '조선시대 도인 전우치를 그린 \'전우치전\' 중 한 일화를 그림책으로 담았어요. 가난한 신세를 한탄하고 있는 사람 한자경에게 전우치가 신기한 그림족자를 주며 욕심을 부리지 말라고 당부했는데 그만 약속을 지키지 못한 한자경은 어떻게 되었을까요?',
    summary: '욕심을 부리지 말라는 전우치의 당부를 잊고 족자 속 세상에 빠져버린 한자경의 교훈과 신선 이야기.',
    characters: ['전우치', '한자경'],
    colorPalette: [
      { name: '먹빛 (Ink Black)', hex: '#2C3E50' },
      { name: '비취색 (Jade Green)', hex: '#16A085' }
    ],
    coverImage: '/books/[IMG-7].jpg',
    samplePages: ['/books/[IMG-7].jpg'],
    awards: ['초등 4학년 국어 교과서 수록작']
  },
  {
    id: 'oryeo-or-odo',
    number: 8,
    genre: '옛이야기',
    title: '오려와 오도',
    englishTitle: 'Oryeo and Odo',
    year: '2014',
    authorText: '이영경 글·그림 | 사계절',
    badge: '중국 마오족 민담',
    tag: '마오족 콩쥐팥쥐',
    price: '14,000원',
    description: '"얘, 오려야! 어째 그리 꿈물래? 빨래는 언제 하려고!" 온갖 궂은 일에 새엄마의 구박, 동생 오도의 심술! 오려는 이 모든 걸 잘 이겨낼 수 있을까요? 마오족 마을 현지 스케치 여행으로 고유의 아름다운 풍물을 살려 그렸어요.',
    summary: '중국 마오족 버전의 콩쥐팥쥐 이야기로, 이국적이고 아름다운 스케치가 가득한 동양 민담의 재해석.',
    characters: ['오려', '오도', '새엄마'],
    colorPalette: [
      { name: '마오족 다홍 (Miao Red)', hex: '#C0392B' },
      { name: '은장식 은색 (Silver)', hex: '#BDC3C7' }
    ],
    coverImage: '/books/[IMG-8].jpg',
    samplePages: ['/books/[IMG-8].jpg']
  },
  {
    id: 'kongsuk-patsuk',
    number: 9,
    genre: '옛이야기',
    title: '콩숙이와 팥숙이',
    englishTitle: 'Kongsuk and Patsuk',
    year: '2015',
    authorText: '이영경 글·그림',
    badge: '1950년대 정서',
    tag: '한국 전통 콩쥐전',
    price: '13,500원',
    description: '우리나라 이혼시기 현거기를 배경으로 그린 콩쥐팥쥐. 구전민담 \'콩쥐전\' 이야기를 그대로 살려 내면서 시대 모습을 담아낸 이 책은 어르신들에게는 옛추억을, 아이들에게는 1950년대 삶의 모습을 이미지로 전합니다.',
    summary: '구전민담 콩쥐전 고유의 입담과 정취를 살려, 1950년대 한국 생활상과 추억을 따뜻한 이미지로 시각화한 그림책.',
    characters: ['콩숙이', '팥숙이'],
    colorPalette: [
      { name: '황토빛 (Earth Warm)', hex: '#D2B48C' },
      { name: '시골 기와 묵색 (Roof Charcoal)', hex: '#34495E' }
    ],
    coverImage: '/books/[IMG-9].jpg',
    samplePages: ['/books/[IMG-9].jpg']
  },
  {
    id: 'king-shepherd',
    number: 10,
    genre: '옛이야기',
    title: '왕이 된 양치기',
    englishTitle: 'The Shepherd Who Became King',
    year: '2017',
    authorText: '이영경 글·그림',
    badge: '티베트 민담',
    tag: '동물 언어를 아는 양치기',
    price: '14,000원',
    description: '외롭고 가난하지만 착한 양치기가 배고픈 토끼에게 먹을 것을 나누며 100일이 지나자 토끼가 마법이 풀려 신선의 모습을 되찾고 양치기는 동물들의 말을 알아듣게 되었는데...... 티베트의 민담을 여행과 고증을 통해 그 곳의 풍경을 살려 표현한 그림책.',
    summary: '선함과 베풂으로 시련을 극복하고 왕이 된 가난한 양치기의 서사. 티베트와 초원의 풍광이 장엄하게 펼쳐집니다.',
    characters: ['착한 양치기', '신선 토끼'],
    colorPalette: [
      { name: '티베트 청공 (Tibet Sky)', hex: '#2980B9' },
      { name: '초원 금빛 (Savanna Gold)', hex: '#F39C12' }
    ],
    coverImage: '/books/[IMG-10].jpg',
    samplePages: ['/books/[IMG-10].jpg']
  },
  {
    id: 'return-jumeoki',
    number: 11,
    genre: '옛이야기',
    title: '돌아온 주먹이',
    englishTitle: 'Return of Jumeoki',
    year: '2020',
    authorText: '이영경 글·그림 | 사계절',
    badge: '🎵 QR 신나는 노래 음원',
    tag: '구설민담 재해석',
    price: '14,000원',
    description: '"구설민담 \'주먹만한 아이\'를 다시 쓴 그림책예요. 주먹이는 길에 홀로 떨구어져 모험을 하게 되었어요. 다양한 친구들을 사귀고 열린 태도와 기지를 발휘하며 마침내 집으로 돌아오게 된답니다. 본문 속 QR코드 속의 신나는 노래음원을 들으며 더욱 흥겹고 즐거운 독서경험으로 이끌어줄게요."',
    summary: '주먹만 한 아이 주먹이가 세상을 마주하며 벌이는 신나는 모험! 본문 QR 코드로 독창적인 창작 노래음원을 즐기며 감상할 수 있습니다.',
    characters: ['주먹이', '모험 친구들'],
    colorPalette: [
      { name: '주먹이 황토 (Clay Gold)', hex: '#C87D55' },
      { name: '신명 초록 (Joy Green)', hex: '#2ECC71' }
    ],
    coverImage: '/books/[IMG-11].jpg',
    samplePages: ['/books/[IMG-11].jpg']
  },

  // --- 우화와 생활 ---
  {
    id: 'shank-escape',
    number: 12,
    genre: '우화와 생활',
    title: '서쌩크 탈출',
    englishTitle: 'Seo-Shank Redemption',
    year: '2021',
    authorText: '이영경 글·그림',
    badge: '영화 <쇼생크 탈출> 오마주',
    tag: '쥐 쌩크의 자유 여정',
    price: '14,000원',
    description: '쥐 가문에 태어나 서(鼠) 씨 성을 가지게 된 쌩크는 이기나지나 연구소의 실험쥐예요. 쌩크는 돌아가신 할머니의 말씀에 따라 채소밭을 찾아 탈출을 계획하는데..... 영화 <쇼생크 탈출>을 오마주하여 영웅의 여정을 그린 그림책.',
    summary: '실험실 쥐 쌩크가 억압과 고난을 딛고 할머니가 말해주신 꿈의 채소밭을 향해 벌이는 위트 넘치고 뭉클한 자유 탈출기.',
    characters: ['실험쥐 쌩크'],
    colorPalette: [
      { name: '채소밭 연두 (Lettuce Green)', hex: '#27AE60' },
      { name: '실험실 쥐 회색 (Lab Gray)', hex: '#7F8C8D' }
    ],
    coverImage: '/books/[IMG-12].png',
    samplePages: ['/books/[IMG-12].png']
  },
  {
    id: 'tteok-taryeong',
    number: 13,
    genre: '우화와 생활',
    title: '에헤야 데야 떡타령',
    englishTitle: 'Rice Cake Song',
    year: '2022',
    authorText: '이영경 글·그림',
    badge: '세시풍속 떡 민담',
    tag: '농가월령가 모티프',
    price: '14,000원',
    description: '흥겨운 농가월령가 풍의 떡타령에 맞춰, 일년 열두달 절기에 따라 만들어 먹던 다채로운 떡들을 소개해요. 떡방아 찧는 토끼가 전체의 분위기를 이끌어가며 민담의 모티프를 이미지로 녹여 보여주고 있답니다.',
    summary: '1년 12달 한국의 절기와 맛깔스러운 전통 떡 이야기. 떡방아 토끼의 흥 넘치는 입담과 화사한 원화가 일품인 명작.',
    characters: ['떡방아 토끼'],
    colorPalette: [
      { name: '떡고물 황금 (Injeolmi Gold)', hex: '#F1C40F' },
      { name: '쑥떡 청록 (Mugwort Green)', hex: '#16A085' }
    ],
    coverImage: '/books/[IMG-13].jpg',
    samplePages: ['/books/[IMG-13].jpg']
  },
  {
    id: 'barefoot-gymnastics',
    number: 14,
    genre: '우화와 생활',
    title: '이부자리 맨발체조',
    englishTitle: 'Bedtime Barefoot Gymnastics',
    year: '2023',
    authorText: '이영경 글·그림',
    badge: '지구상 최초 맨발체조',
    tag: '건강과 활력 힐링',
    price: '13,500원',
    description: '꿈이 있다면 내 몸을 스스로 돌볼 것! 남녀노소, 어른아이 할 것없이 내 몸은 내가 지킨다! \'맨손체조\' 아닌 지구상 최초, \'맨발체조!\'랍니다. 잠들기전 따라하면 숙면을 돕고, 깨어난 후 따라하면 활기찬 하루 보장!',
    summary: '지구상 최초의 \'맨발체조\'! 이불 위에서 아침저녁 따라 하며 남녀노소 누구나 내 몸을 아끼고 돌보게 하는 유쾌하고 유익한 힐링책.',
    characters: ['체조하는 어린이 & 어른들'],
    colorPalette: [
      { name: '이불 솜 분홍 (Quilt Pink)', hex: '#FFB6C1' },
      { name: '활력 노랑 (Energy Yellow)', hex: '#F39C12' }
    ],
    coverImage: '/books/[IMG-14].jpg',
    samplePages: ['/books/[IMG-14].jpg']
  },
  {
    id: 'cat-life-meaning',
    number: 15,
    genre: '우화와 생활',
    title: '묘생이란 무엇인가',
    englishTitle: 'What is Cat Life?',
    year: '2024',
    authorText: '이영경 글·그림',
    badge: 'K-Cuty 묘생 철학',
    tag: '묘생의 십계명',
    price: '14,500원',
    description: '묘생의 길과 인간의 길, 다른 듯 같은 일상을 나누고 있지요. 모세에게 \'십계\'가 있다면 묘생에는 \'묘생의 길\'이 있답니다. 좋으면 부비고, 옳지 않은 때엔 인상 쓰고, 쓰다듬을 받는 등, \'묘생의 길\'에서 우리네 인간의 길을 묻는 그림책예요.',
    summary: '좋으면 솔직하게 부비고 옳지 않으면 단호한 고양이들! 고양이의 십계명을 통해 우리 인간의 살가운 삶의 이치를 되돌아봅니다.',
    characters: ['고양이 모세', '동네 고양이들'],
    colorPalette: [
      { name: '고양이 털 보라 (Cat Purple)', hex: '#8E44AD' },
      { name: '따뜻한 아이보리 (Ivory)', hex: '#F5F5DC' }
    ],
    coverImage: '/books/[IMG-15].jpg',
    samplePages: ['/books/[IMG-15].jpg']
  },
  {
    id: 'nutty-forest-trip',
    number: 16,
    genre: '우화와 생활',
    title: '몰랑이와 돌랑이의 너티너티 숲속여행',
    englishTitle: 'Molang & Dolang’s Nutty Forest Journey',
    year: '2025',
    authorText: '이영경 글·그림',
    badge: '★ 2025 최신작',
    tag: '견과류들의 소풍과 깨달음',
    price: '15,000원',
    description: '"빠른 게 다 좋은 건 아니라고!!!" \'그래! 정말 중요한 건 눈에 보이지 않아.\' 작은 열매들이 들려주는 귀중한 깨달음을 들어보세요. 쾌발랄 견과들의 좌충우돌 하루소풍을 그린 그림책예요.',
    summary: '도토리, 호두, 밤 등 귀여운 견과 친구들이 펼치는 숲속 소풍. 속도 중심의 현대 사회에 건네는 멈춤과 여유의 귀중한 메시지.',
    characters: ['몰랑이', '돌랑이', '견과 친구들'],
    colorPalette: [
      { name: '도토리 갈색 (Acorn Brown)', hex: '#8B4513' },
      { name: '숲속 나뭇잎 초록 (Forest Green)', hex: '#27AE60' }
    ],
    coverImage: '/books/[IMG-16].jpg',
    samplePages: ['/books/[IMG-16].jpg']
  },

  // --- 근간 (출간 예정) ---
  {
    id: 'upcoming-pencil-olympic',
    number: 17,
    genre: '근간',
    isUpcoming: true,
    title: '몽당연필 올림픽',
    englishTitle: 'Short Pencil Olympics',
    authorText: '이영경 글·그림',
    badge: '✨ 출간 예정 근간',
    tag: '몽당연필들의 뜨거운 도전',
    description: '쓰다 남아 작아진 몽당연필들이 모여 펼치는 정정당당 신나는 올림픽 경기! 작고 소외된 존재들의 찬란한 열정과 도전을 담아낼 차기작.',
    coverImage: '/books/[IMG-17].jpg',
    samplePages: ['/books/[IMG-17].jpg']
  },
  {
    id: 'upcoming-chive-pancake',
    number: 18,
    genre: '근간',
    isUpcoming: true,
    title: '새둥지 부추전',
    englishTitle: 'Bird Nest Chive Pancake',
    authorText: '이영경 글·그림',
    badge: '✨ 출간 예정 근간',
    tag: '따스한 음식과 보금자리 이야기',
    description: '고소한 부추전 모양을 닮은 새둥지 속 아기 새들과 우리네 따뜻한 식탁 풍경이 어우러지는 정겨운 근간 그림책.',
    coverImage: '/books/[IMG-18].jpg',
    samplePages: ['/books/[IMG-18].jpg']
  },
  {
    id: 'upcoming-noodle-shop',
    number: 19,
    genre: '근간',
    isUpcoming: true,
    title: '그동네 국수집',
    englishTitle: 'Noodle Shop in That Town',
    authorText: '이영경 글·그림',
    badge: '✨ 출간 예정 근간',
    tag: '골목길 국수 한 그릇의 온기',
    description: '소박한 골목길 따스한 국수집에서 오가는 이웃들의 소소한 이야기와 미소를 담아낼 살가운 차기 신작.',
    coverImage: '/books/[IMG-19].jpg',
    samplePages: ['/books/[IMG-19].jpg']
  }
];

export const IP_CHARACTERS: IPCharacter[] = [
  {
    id: 'gawi-gaksi',
    name: '가위색시(교두각시)',
    englishName: 'LADY SCISSORS',
    bookTitle: '아씨방 일곱 동무',
    personality: '시원시원하고 거침없으며 무엇이든 단번에 자르는 재단사',
    description: '두 다리를 조롱조롱 내둘러 아씨의 비단을 시원하게 잘라내는 당찬 가위 각시.',
    traditionalRole: '규중칠우 중 재단 도구 - 가위',
    kCutyTraits: '노란 두건과 파란 치마, 등 뒤에 든 야무진 가위',
    colorHex: '#00658D',
    image: '/characters/gawi-gaksi.jpg',
  },
  {
    id: 'darimi-aassi',
    name: '다리미소저(울낭자)',
    englishName: 'LADY FLATIRON',
    bookTitle: '아씨방 일곱 동무',
    personality: '넓은 마음으로 온갖 주름을 말끔하게 펴주는 마무리 전문가',
    description: '넙적한 얼굴로 쓱쓱 주름을 다려 아씨의 한복을 새 옷처럼 빛나게 만드는 아씨.',
    traditionalRole: '규중칠우 중 주름 다림 도구 - 다리미',
    kCutyTraits: '연두 저고리와 주황 치마, 손에 든 정갈한 다리미',
    colorHex: '#E67E22',
    image: '/characters/needle-lady.jpg',
  },
  {
    id: 'indu-gaksi',
    name: '인두낭자(인화낭자)',
    englishName: 'LADY SOLDERINGIRON',
    bookTitle: '아씨방 일곱 동무',
    personality: '구겨진 솔기를 솔솔 펴주고 뜨거운 열정으로 감싸주는 품성',
    description: '구겨진 곳을 꼼꼼히 살피고 솔기를 다독여 정갈한 옷매무새를 완성하는 인두 각시.',
    traditionalRole: '규중칠우 중 세부 세탁/다림 도구 - 인두',
    kCutyTraits: '분홍 저고리와 쑥색 치마, 긴 인두 자루를 든 당당함',
    colorHex: '#2E8B57',
    image: '/characters/indu-gaksi.jpg',
  },
  {
    id: 'golmu-halmi',
    name: '골무할미(감투할미)',
    englishName: 'GRANDMA THIMBLE',
    bookTitle: '아씨방 일곱 동무',
    personality: '바늘 끝에 손가락이 찔리지 않게 든든히 지켜주는 조력자',
    description: '아씨의 아픈 손가락을 감싸 안고 굳은 일을 마다하지 않는 따뜻하고 덕망 높은 할머니.',
    traditionalRole: '규중칠우 중 보호 도구 - 골무',
    kCutyTraits: '동그란 안경과 짚신, 앙증맞은 골무 모자와 긴 곰방대',
    colorHex: '#D99B00',
    image: '/characters/golmu-halmi.jpg',
  },
  {
    id: 'needle-lady',
    name: '바늘각시(바늘각시)',
    englishName: 'LADY NEEDLE',
    bookTitle: '아씨방 일곱 동무',
    personality: '뾰족하지만 누구보다 야무지고 길을 터주는 개척자',
    description: '비단 천을 도도하게 누비며 길을 만들고 실 동무와 짝을 이루어 천을 엮는 핵심 아씨.',
    traditionalRole: '규중칠우 중 핵심 도구 - 바늘',
    kCutyTraits: '노란 저고리와 다홍치마, 곱게 땋은 댕기머리',
    colorHex: '#B7102A',
    image: '/characters/darimi-aassi.jpg',
  },
  {
    id: 'ruler-lady',
    name: '자부인(척부인)',
    englishName: 'LADY RULER',
    bookTitle: '아씨방 일곱 동무',
    personality: '자신감이 넘치고 언제나 길이를 재며 기준을 잡아주는 리더',
    description: '키가 훤칠하고 당당하며 아씨의 옷감을 잴 때마다 늠름하게 시원시원한 매력을 발산합니다.',
    traditionalRole: '규중칠우 중 재단 도구 - 자',
    kCutyTraits: '체크 무늬 한복 저고리와 눈금 모양의 머리핀을 한 비율 미인',
    colorHex: '#D2B48C',
    image: '/characters/ruler-lady.jpg',
  },
  {
    id: 'thread-lady',
    name: '홍실각시(청홍각시)',
    englishName: 'LADY THREAD',
    bookTitle: '아씨방 일곱 동무',
    personality: '바늘 뒤를 조용히 따르며 모든 조각을 하나로 묶어주는 연결자',
    description: '오색 실타래를 한들거리며 바늘 아씨의 흔적을 아름다운 땀으로 남깁니다.',
    traditionalRole: '규중칠우 중 봉제 도구 - 실',
    kCutyTraits: '청홍색 비단 띠와 한들거리는 오색 자수 실타래',
    colorHex: '#008B8B',
    image: '/characters/thread-lady.jpg',
  },
  {
    id: 'char-frame-8',
    name: '쩜반이',
    englishName: 'JJEOMBAN',
    bookTitle: '쩜반이방 쩜반느낌',
    personality: '유쾌하고 긍정적이며 세상을 따뜻하게 바라보는 쩜반살롱 대표 캐릭터',
    description: '넉 점 반의 감성과 해학을 머금은 앙증맞고 귀여운 쩜반이 아트웍.',
    traditionalRole: '쩜반살롱 메인 IP',
    kCutyTraits: '유쾌한 웃음, 붉은 볼, 정감 어린 옛 시골 아이의 따스함',
    colorHex: '#B7102A',
    image: '/characters/char-frame8.jpg',
  },
  {
    id: 'char-frame-9',
    name: '돌아온 주먹이(2024년)',
    englishName: 'JUMEOKI (2024)',
    bookTitle: '돌아온 주먹이',
    personality: '작지만 당차고 기지가 넘치며 친구들과 신나게 모험하는 주먹이',
    description: '세상을 마주하며 신나는 모험을 벌이는 주먹이의 활기찬 포즈 일러스트.',
    traditionalRole: '구설민담 주먹이 재해석',
    kCutyTraits: '주먹만 한 크기, 신나는 율동 동작과 당당한 눈빛',
    colorHex: '#2ECC71',
    image: '/characters/char-frame9.jpg',
  },
  {
    id: 'char-frame-10',
    name: '주먹이(2005년)',
    englishName: 'JUMEOKI (2005)',
    bookTitle: '돌아온 주먹이',
    personality: '열린 태도와 용기로 어려움을 이겨내고 집으로 돌아온 당찬 아이',
    description: '이영경 작가의 한지 수묵채색 기법으로 빚어낸 주먹이 원화 캐릭터.',
    traditionalRole: '한국 전래동화 주인공',
    kCutyTraits: '전통 색채 채색과 먹선의 은은한 온기',
    colorHex: '#C87D55',
    image: '/characters/char-frame10.jpg',
  },
  {
    id: 'char-frame-11',
    name: '금금이와 엄마',
    englishName: 'GEUMGEUM & MOM',
    bookTitle: '천하태평 금금이',
    personality: '슬픔에 눌리지 않고 꿋꿋하게 사랑을 찾아나서는 긍정의 금금이',
    description: '엄마를 향한 무한한 사랑과 희망을 담아낸 우화 속 감동의 캐릭터.',
    traditionalRole: '가족사랑 성장 우화 IP',
    kCutyTraits: '따뜻한 오렌지빛 감성과 서정적 일러스트',
    colorHex: '#E67E22',
    image: '/characters/char-frame11.jpg',
  },
  {
    id: 'char-frame-12',
    name: '몰랑이와 돌랑이',
    englishName: 'MOLANG & DOLANG',
    bookTitle: '너티너티 숲속여행',
    personality: '숲속 소풍길에서 참된 깨달음을 전해주는 쾌발랄 견과류 친구들',
    description: '도토리, 호두 등 귀여운 열매 캐릭터들의 숲속 소풍 이야기.',
    traditionalRole: '2025 최신 우화 IP',
    kCutyTraits: '동글동글 견과류 모자, 초원 나뭇잎 색채',
    colorHex: '#8B4513',
    image: '/characters/char-frame12.jpg',
  },
];

export const OBANGSAEK_COLORS: ObangsaekColor[] = [
  {
    name: '청색 (Blue)',
    koreanName: '청 (靑) - 동쪽',
    direction: '동 (East)',
    element: '목 (Wood / 나무)',
    meaning: '새로운 탄생, 봄의 생명력, 희망과 청량함',
    hex: '#00658D',
    bgHex: '#E6F4FA',
    textColor: '#004A69',
    characterExample: '아씨방 일곱 동무 청홍실 & 소나무 영물',
    witStory: '동쪽에서 떠오르는 푸른 기운으로 새 단장을 시작할 때 쓰는 맑은 옥빛 오방색.',
  },
  {
    name: '적색 (Red)',
    koreanName: '적 (赤) - 남쪽',
    direction: '남 (South)',
    element: '화 (Fire / 불)',
    meaning: '열정, 액운을 퇴치하는 기운, 따스함',
    hex: '#B7102A',
    bgHex: '#FDE8EA',
    textColor: '#92001C',
    characterExample: '넉 점 반 아기의 분꽃 & 다홍치마 아씨',
    witStory: '악귀를 쫓고 유쾌한 신명을 불러일으키는 다홍빛 붉은 염원.',
  },
  {
    name: '황색 (Yellow)',
    koreanName: '황 (黃) - 중앙',
    direction: '중앙 (Center)',
    element: '토 (Earth / 흙)',
    meaning: '우주의 중심, 풍요로움, 귀함과 고결함',
    hex: '#D99B00',
    bgHex: '#FFF8E1',
    textColor: '#5B4300',
    characterExample: 'K-Cuty 까치호랑이 & 넉 점 반 개나리 노랑',
    witStory: '조화롭고 든든하게 중심을 지켜주는 고소하고 부드러운 황금빛.',
  },
  {
    name: '백색 (White)',
    koreanName: '백 (白) - 서쪽',
    direction: '서 (West)',
    element: '금 (Metal / 쇠)',
    meaning: '순수함, 결백, 한지의 정갈함과 기본',
    hex: '#8D827A',
    bgHex: '#FDF9F3',
    textColor: '#31302D',
    characterExample: '조선 닥종이 한지 바탕 & 백설기 호랑이',
    witStory: '모든 색채와 이야기가 살포시 스며드는 정갈하고 기품 있는 소색 백색.',
  },
  {
    name: '흑색 (Black)',
    koreanName: '흑 (黑) - 북쪽',
    direction: '북 (North)',
    element: '수 (Water / 물)',
    meaning: '지혜, 깊이감, 먹선이 주는 단단한 중심',
    hex: '#231F20',
    bgHex: '#ECEBEA',
    textColor: '#1C1C18',
    characterExample: '붓끝에서 피어나는 먹선 & 갓 쓴 선비',
    witStory: '스스륵 그어지는 선 하나로 위트와 해학을 완성하는 거장의 깊은 먹빛.',
  },
];

export const WORKSHOP_SCHEDULES: WorkshopSchedule[] = [
  {
    id: 'atelier-master',
    title: '이영경 작가 직강: K-Cuty Folk Art & 동양화 전통 색채 아틀리에',
    type: '작가 직강 아틀리에',
    duration: '3시간 30분',
    location: '서울 성수동 이영경 창작스튜디오 (Atelier #2)',
    status: '모집중',
    price: '120,000원 (한지/채색 재료비 포함)',
    dateList: [
      '8월 1일 (토) 13:00 (잔여 2석)',
      '8월 8일 (토) 13:00 (잔여 3석)',
      '8월 15일 (토) 13:00 (신규 오픈)'
    ],
    description: '오방색 전통 물감과 닥종이 한지를 사용하여 나만의 위트 있는 민화 캐릭터 및 아씨방 일곱 동무 소품을 직접 채색하고 완성하는 프리미엄 원데이 클래스.',
    target: '성인, 일러스트레이터, 한국화 및 그림책 지망생'
  },
  {
    id: 'kids-family-folk',
    title: '어린이 & 가족 함께하는 <넉 점 반> 앙증맞은 그림책 책만들기',
    type: '어린이&가족 민화 그림책 클래스',
    duration: '2시간 30분',
    location: '서울 성수동 이영경 창작스튜디오 (Atelier #1)',
    status: '마감임박',
    price: '75,000원 (2인 가족 기준)',
    dateList: [
      '8월 2일 (일) 10:30 (잔여 1석)',
      '8월 9일 (일) 10:30 (잔여 2석)'
    ],
    description: '아이와 부모가 함께 나만의 작은 아씨방 상자와 넉 점 반 시계 그림책을 팝업 형태로 함께 만들고 스토리를 꾸며보는 따뜻한 가공 클래스.',
    target: '6세 이상 어린이 & 보호자'
  },
  {
    id: 'online-live-lecture',
    title: '온라인 라이브: 그림책 서사 구성과 캐릭터 해학의 비밀',
    type: '온라인 그림책 라이브',
    duration: '2시간',
    location: 'ZOOM 실시간 라이브 & 마스터클래스 VOD',
    status: '모집중',
    price: '45,000원',
    dateList: [
      '8월 12일 (수) 19:30 (온라인)',
      '8월 26일 (수) 19:30 (온라인)'
    ],
    description: '조선 시대 고전과 민담을 어떻게 현대 어린이와 독자가 공감하는 캐릭터와 유머로 각색하는지 스토리텔링 기법을 라이브로 전수합니다.',
    target: '그림책 작가 지망생 및 스토리텔러'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    author: '김하은 님',
    role: '초등학교 교사 & 학부모',
    rating: 5,
    content: '학급 아이들과 함께 <아씨방 일곱 동무> 연극을 준비하면서 작가님의 워크숍에 참여했어요. 한국 전통 도구들이 이렇게 사랑스럽고 살아 숨 쉬는 캐릭터가 될 수 있다는 것에 감탄했습니다.',
    highlight: '“한국의 멋과 위트가 담긴 최고의 예술 경험!”',
    bookOrWorkshopName: '아씨방 일곱 동무 & 워크숍',
    date: '2026.06.18',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    workImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'review-2',
    author: '박상현 님',
    role: '일러스트레이터',
    rating: 5,
    content: '오방색 아틀리에 수강 후 동양화 채색법에 눈을 떴습니다. 전통 물감의 깊은 오묘함과 이영경 작가님 특유의 해학적 선 연출 노하우는 어디서도 배울 수 없는 보물입니다.',
    highlight: '“K-Folk Art의 정수를 직강으로 배운 귀한 시간”',
    bookOrWorkshopName: 'K-Cuty Folk Art 아틀리에',
    date: '2026.07.02',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    workImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'review-3',
    author: '이수진 님',
    role: '그림책 마니아 & 독자',
    rating: 5,
    content: '<넉 점 반>을 읽을 때마다 어린 시절 시골 외할머니댁 길목이 떠올라 마음이 뭉클해집니다. 이번 창작스튜디오 전시에서 원화를 직접 보니 한지 결 하나하나에 정성이 느껴졌어요.',
    highlight: '“어른의 마음도 다정하게 안아주는 그림책”',
    bookOrWorkshopName: '넉 점 반 원화 스튜디오 전시',
    date: '2026.07.15',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    workImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '이영경 작가님의 그림책 원화와 K-Cuty Folk Art IP 라이선싱 문의는 어떻게 진행하나요?',
    answer: '원화 전시, 굿즈 제작, 애니메이션, 미디어 아트 등 IP 콜라보레이션 제안은 하단의 [IP 라이선싱 & 협업 문의] 버튼 또는 메일(contact@jbsalon.art)을 통해 접수해 주시면 스튜디오 담당자가 친절히 답변드립니다.',
    category: 'ip'
  },
  {
    id: 'faq-2',
    question: '전통 색채 아틀리에 워크숍 준비물이나 참가 자격이 별도로 있나요?',
    answer: '아틀리에 클래스에 필요한 고급 닥종이 한지, 동양화 분채/채색 물감, 동양화 붓 등 모든 고급 재료는 스튜디오에서 기본 제공됩니다. 초보자분들도 작가님의 1:1 시연과 가이드를 통해 쉽게 나만의 작품을 완성하실 수 있습니다.',
    category: 'workshop'
  },
  {
    id: 'faq-3',
    question: '워크숍 예약 후 일정 변경이나 구글 캘린더 등록은 어떻게 이용하나요?',
    answer: '예약 신청 완료 화면에서 [구글 캘린더 일정에 바로 등록] 버튼을 클릭하시면, 워크숍 장소, 날짜 및 구체적인 오시는 길 정보가 담긴 구글 캘린더 일정 생성 페이지로 바로 연결됩니다.',
    category: 'workshop'
  },
  {
    id: 'faq-4',
    question: '<아씨방 일곱 동무> 및 <넉 점 반> 등의 친필 서명본 도서 구매가 가능한가요?',
    answer: '스튜디오 현장 방문 수강생 및 온라인 이벤트 기간 중 원화 도서 구매 시 이영경 작가님의 감사 메시지 및 친필 캐릭터 스케치가 담긴 서명본 도서를 증정해 드립니다.',
    category: 'books'
  }
];

export interface DownloadMaterialItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  fileSize: string;
}

export const INITIAL_DOWNLOAD_MATERIALS: DownloadMaterialItem[] = [
  {
    id: 'mat-1',
    title: '아씨방 일곱 동무 원화 수묵채색 일러스트 (PNG / JPG)',
    category: '원화 일러스트',
    description: '이영경 작가의 <아씨방 일곱 동무> 원화 일러스트입니다.',
    image: '/downloads/material-1.jpg',
    fileSize: '4.2 MB'
  },
  {
    id: 'mat-2',
    title: '아씨방 일곱 동무 캐릭터 색칠놀이 도안 (PDF / PNG)',
    category: '컬러링 활동지',
    description: '자부인, 가위색시, 바늘각시, 홍실각시, 인두낭자, 다리미소저, 골무할미 규중칠우 캐릭터 색칠놀이 도안입니다.',
    image: '/downloads/material-2.png',
    fileSize: '3.8 MB'
  },
  {
    id: 'mat-3',
    title: '이부자리 맨발체조 활동지 & 원화 자료 (JPG)',
    category: '맨발체조 활동지',
    description: '남녀노소 활기찬 건강과 유쾌함을 더해주는 <이부자리 맨발체조> 고화질 활동 자료입니다.',
    image: '/downloads/frame3.jpg',
    fileSize: '5.1 MB'
  },
  {
    id: 'mat-4',
    title: '고지기네 그림족자 전통 원화 아카이브 (JPG)',
    category: '족자방 그림자료',
    description: '전통 족자방 고지기네 이야기의 해학적인 민화풍 원화 자료입니다.',
    image: '/downloads/frame4.jpg',
    fileSize: '6.3 MB'
  },
  {
    id: 'mat-5',
    title: '쩜반이방 변신프로젝트 세채 원화 스케치 (JPG)',
    category: '변신프로젝트 원화',
    description: '쩜반이방 변신프로젝트의 오방색 전통 수묵채색 원화 및 스케치 아카이브 자료입니다.',
    image: '/downloads/frame5.jpg',
    fileSize: '7.8 MB'
  }
];
