import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';
import {
  SLIDESHOW_ARTWORKS,
  EXHIBITIONS,
  NEWS_ITEMS,
  PICTURE_BOOKS,
  IP_CHARACTERS,
  SKETCHBOOK_NOTES,
  ARTIST_PROFILE,
  GALLERY_WORKS
} from '../data/artistData';
import { Exhibition, PictureBook, IPCharacter, SketchbookNote, GalleryWork } from '../types';

const STORAGE_KEY = 'youngkyoung_studio_data_v1';

interface StudioDataContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  isStudioMode: boolean;
  setIsStudioMode: (val: boolean) => void;
  slides: typeof SLIDESHOW_ARTWORKS;
  exhibitions: Exhibition[];
  books: PictureBook[];
  sketchbookNotes: SketchbookNote[];
  characters: IPCharacter[];
  galleryWorks: GalleryWork[];
  portraitImage: string;
  updateImage: (category: 'slide' | 'exhibition' | 'book' | 'sketchbook' | 'character' | 'portrait' | 'gallery', id: string, imageDataUrl: string) => void;
  updateMultipleImages: (category: 'slide' | 'exhibition' | 'book' | 'sketchbook' | 'character' | 'portrait' | 'gallery', updates: { id: string; imageDataUrl: string }[]) => void;
  updateText: (category: 'slide' | 'exhibition' | 'book' | 'sketchbook' | 'character' | 'gallery', id: string, field: string, value: string) => void;
  resetAllData: () => void;
  hasCustomData: boolean;
  notify: (msg: string, type?: 'success' | 'error' | 'info') => void;
  notifications: { id: string; message: string; type: 'success' | 'error' | 'info' }[];
  dismissNotification: (id: string) => void;
}

const StudioDataContext = createContext<StudioDataContextType | undefined>(undefined);

export const StudioDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditMode, setIsEditMode] = useState<boolean>(true); // Default ON for easy user drag and drop
  const [isStudioMode, setIsStudioMode] = useState<boolean>(false);
  const [slides, setSlides] = useState(SLIDESHOW_ARTWORKS);
  const [exhibitions, setExhibitions] = useState<Exhibition[]>(EXHIBITIONS);
  const [books, setBooks] = useState<PictureBook[]>(PICTURE_BOOKS);
  const [sketchbookNotes, setSketchbookNotes] = useState<SketchbookNote[]>(SKETCHBOOK_NOTES);
  const [characters, setCharacters] = useState<IPCharacter[]>(IP_CHARACTERS);
  const [galleryWorks, setGalleryWorks] = useState<GalleryWork[]>(GALLERY_WORKS);
  const [portraitImage, setPortraitImage] = useState<string>(ARTIST_PROFILE.images.portrait);
  const [hasCustomData, setHasCustomData] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<{ id: string; message: string; type: 'success' | 'error' | 'info' }[]>([]);

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  // Load from Firestore or localStorage on mount
  useEffect(() => {
    const loadData = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'studio_configs', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.slides) {
              const sanitized = data.slides.map((s: any, idx: number) => {
                if (!s.image || s.image.includes('unsplash.com')) {
                  return SLIDESHOW_ARTWORKS[idx] || s;
                }
                return s;
              });
              setSlides(sanitized);
            } else {
              setSlides(SLIDESHOW_ARTWORKS);
            }
            if (data.exhibitions) setExhibitions(data.exhibitions);
            
            if (data.books) {
              const merged = data.books.map((b: any) => {
                const defaultBook = PICTURE_BOOKS.find(pb => pb.id === b.id);
                if (!b.coverImage || b.coverImage.includes('unsplash.com') || b.coverImage.startsWith('blob:') || (defaultBook && defaultBook.coverImage.startsWith('/books/'))) {
                  return defaultBook || b;
                }
                return b;
              });
              const existingIds = new Set(merged.map((b: any) => b.id));
              const newBooks = PICTURE_BOOKS.filter(pb => !existingIds.has(pb.id));
              setBooks([...merged, ...newBooks]);
            } else {
              setBooks(PICTURE_BOOKS);
            }
            
            if (data.sketchbookNotes) setSketchbookNotes(data.sketchbookNotes);
            setCharacters(IP_CHARACTERS);
            if (data.portraitImage) setPortraitImage(data.portraitImage);
            setHasCustomData(true);
          }
        } catch (e) {
          console.warn('Could not fetch from Firestore - check connection or permissions', e);
        }
        setLoading(false);
      } else {
        // Fallback to localStorage for guests
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            const parsed = JSON.parse(saved);
            setSlides(SLIDESHOW_ARTWORKS);
            if (parsed.exhibitions) setExhibitions(parsed.exhibitions);
            
            if (parsed.books) {
              const merged = parsed.books.map((b: any) => {
                const defaultBook = PICTURE_BOOKS.find(pb => pb.id === b.id);
                if (!b.coverImage || b.coverImage.includes('unsplash.com') || b.coverImage.startsWith('blob:') || (defaultBook && defaultBook.coverImage.startsWith('/books/'))) {
                  return defaultBook || b;
                }
                return b;
              });
              const existingIds = new Set(merged.map((b: any) => b.id));
              const newBooks = PICTURE_BOOKS.filter(pb => !existingIds.has(pb.id));
              setBooks([...merged, ...newBooks]);
            } else {
              setBooks(PICTURE_BOOKS);
            }
            
            if (parsed.sketchbookNotes) setSketchbookNotes(parsed.sketchbookNotes);
            setCharacters(IP_CHARACTERS);
            if (parsed.portraitImage) setPortraitImage(parsed.portraitImage);
            setHasCustomData(true);
          }
        } catch (e) {
          console.warn('Failed to load studio data from localStorage', e);
        }
        // If we were loading, stop now
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  // Auth Methods
  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      notify('구글 로그인에 성공했습니다.', 'success');
    } catch (e) {
      console.warn('Sign in failed', e);
      notify('로그인 중 오류가 발생했습니다.', 'error');
    }
  };

  const signInSignOut = async () => {
    try {
      await signOut(auth);
      notify('로그아웃 되었습니다.', 'info');
    } catch (e) {
      console.warn('Sign out failed', e);
    }
  };

  // Save state helper
  const syncData = async (newData: any) => {
    // Always save to localStorage as backup
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setHasCustomData(true);
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }

    // Save to Firestore if logged in
    if (user) {
      try {
        await setDoc(doc(db, 'studio_configs', user.uid), {
          ...newData,
          userId: user.uid,
          lastUpdated: serverTimestamp()
        });
      } catch (e) {
        console.warn('Failed to save to Firestore', e);
        notify('클라우드 저장에 실패했습니다. 로컬에만 저장됩니다.', 'info');
      }
    }
  };

  // Unified Data Sync Effect - automatically saves to local & cloud when state changes
  useEffect(() => {
    if (!loading) {
      syncData({
        slides,
        exhibitions,
        books,
        sketchbookNotes,
        characters,
        portraitImage
      });
    }
  }, [slides, exhibitions, books, sketchbookNotes, characters, portraitImage, loading]);

  const updateMultipleImages = (
    category: string,
    updates: { id: string; imageDataUrl: string }[]
  ) => {
    if (updates.length === 0) return;

    const catMap: Record<string, string> = {
      'slides': 'slide',
      'exhibitions': 'exhibition',
      'books': 'book',
      'notes': 'sketchbook',
      'characters': 'character'
    };
    const finalCat = catMap[category] || category;
    const updateMap = new Map(updates.map(u => [u.id, u.imageDataUrl]));

    if (finalCat === 'slide') {
      setSlides(prev => prev.map(s => updateMap.has(s.id) ? { ...s, image: updateMap.get(s.id)! } : s));
    } else if (finalCat === 'exhibition') {
      setExhibitions(prev => prev.map(e => updateMap.has(e.id) ? { ...e, posterImage: updateMap.get(e.id)! } : e));
    } else if (finalCat === 'book') {
      setBooks(prev => prev.map(b => updateMap.has(b.id) ? { ...b, coverImage: updateMap.get(b.id)! } : b));
    } else if (finalCat === 'sketchbook') {
      setSketchbookNotes(prev => prev.map(n => updateMap.has(n.id) ? { ...n, sketchImage: updateMap.get(n.id)! } : n));
    } else if (finalCat === 'character') {
      setCharacters(prev => prev.map(c => updateMap.has(c.id) ? { ...c, image: updateMap.get(c.id)! } : c));
    } else if (finalCat === 'gallery') {
      setGalleryWorks(prev => prev.map(g => updateMap.has(g.id) ? { ...g, image: updateMap.get(g.id)! } : g));
    } else if (finalCat === 'portrait' && updates[0]) {
      setPortraitImage(updates[0].imageDataUrl);
    }
  };

  const updateImage = (
    category: string,
    id: string,
    imageDataUrl: string
  ) => {
    updateMultipleImages(category, [{ id, imageDataUrl }]);
  };

  const updateText = (
    category: 'slide' | 'exhibition' | 'book' | 'sketchbook' | 'character' | 'gallery',
    id: string,
    field: string,
    value: string
  ) => {
    if (category === 'slide') {
      setSlides(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
    } else if (category === 'exhibition') {
      setExhibitions(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e));
    } else if (category === 'book') {
      setBooks(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
    } else if (category === 'sketchbook') {
      setSketchbookNotes(prev => prev.map(n => n.id === id ? { ...n, [field]: value } : n));
    } else if (category === 'character') {
      setCharacters(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
    } else if (category === 'gallery') {
      setGalleryWorks(prev => prev.map(g => g.id === id ? { ...g, [field]: value } : g));
    }
  };

  const resetAllData = async () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear studio data from local storage', e);
    }
    setSlides(SLIDESHOW_ARTWORKS);
    setExhibitions(EXHIBITIONS);
    setBooks(PICTURE_BOOKS);
    setSketchbookNotes(SKETCHBOOK_NOTES);
    setCharacters(IP_CHARACTERS);
    setGalleryWorks(GALLERY_WORKS);
    setPortraitImage(ARTIST_PROFILE.images.portrait);
    setHasCustomData(false);
    notify('모든 데이터가 원작 상태로 초기화되었습니다.', 'info');
  };

  const notify = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    // Auto-dismiss after 4 seconds
    setTimeout(() => {
      dismissNotification(id);
    }, 4000);
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <StudioDataContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut: signInSignOut,
        isEditMode,
        setIsEditMode,
        isStudioMode,
        setIsStudioMode,
        slides,
        exhibitions,
        books,
        sketchbookNotes,
        characters,
        galleryWorks,
        portraitImage,
        updateImage,
        updateMultipleImages,
        updateText,
        resetAllData,
        hasCustomData,
        notify,
        notifications,
        dismissNotification
      }}
    >
      {children}
    </StudioDataContext.Provider>
  );
};

export const useStudioData = () => {
  const context = useContext(StudioDataContext);
  if (!context) {
    throw new Error('useStudioData must be used within a StudioDataProvider');
  }
  return context;
};
