import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkGallerySection from './components/WorkGallerySection';
import ExhibitionsSection from './components/ExhibitionsSection';
import BooksSection from './components/BooksSection';
import CharactersSection from './components/CharactersSection';
import AuthorSection from './components/AuthorSection';
import ColorLabSection from './components/ColorLabSection';
import Footer from './components/Footer';

import { UploadCloud } from 'lucide-react';
import BookPreviewModal from './components/BookPreviewModal';
import WorkshopBookingModal from './components/WorkshopBookingModal';
import ContactModal from './components/ContactModal';
import NotificationContainer from './components/NotificationContainer';
import { StudioDataProvider, useStudioData } from './context/StudioDataContext';

import ElementTagOverlay from './components/ElementTagOverlay';

import { PictureBook } from './types';

export type ViewType = 'home' | 'gallery' | 'exhibitions' | 'books' | 'characters' | 'sketchbook' | 'profile';

function AppContent() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [selectedBook, setSelectedBook] = useState<PictureBook | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenBookModal = (book?: PictureBook) => {
    if (book) {
      setSelectedBook(book);
    }
    setIsBookModalOpen(true);
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <HeroSection 
            onOpenBookModal={handleOpenBookModal}
            onOpenWorkshopModal={() => setIsWorkshopModalOpen(true)}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        );
      case 'gallery':
        return <WorkGallerySection />;
      case 'exhibitions':
        return (
          <ExhibitionsSection
            onOpenWorkshopModal={() => setIsWorkshopModalOpen(true)}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        );
      case 'books':
        return (
          <BooksSection 
            onOpenBookModal={handleOpenBookModal}
          />
        );
      case 'characters':
        return (
          <CharactersSection 
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        );
      case 'sketchbook':
        return <ColorLabSection />;
      case 'profile':
        return <AuthorSection />;
      default:
        return (
          <HeroSection 
            onOpenContactModal={() => setIsContactModalOpen(true)} 
            onOpenBookModal={handleOpenBookModal} 
            onOpenWorkshopModal={() => setIsWorkshopModalOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1C1C18] font-sans selection:bg-[#FFDAD8] selection:text-[#92001C] overflow-x-hidden">
      <Header 
        activeView={activeView} 
        onViewChange={setActiveView} 
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {activeView !== 'home' && (
        <Footer
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenBookModal={handleOpenBookModal}
        />
      )}

      <ElementTagOverlay />

      <NotificationContainer />
      
      <BookPreviewModal
        isOpen={isBookModalOpen}
        book={selectedBook}
        onClose={() => setIsBookModalOpen(false)}
        onOrderClick={() => {
          setIsBookModalOpen(false);
          setIsContactModalOpen(true);
        }}
      />

      <WorkshopBookingModal
        isOpen={isWorkshopModalOpen}
        onClose={() => setIsWorkshopModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <StudioDataProvider>
      <AppContent />
    </StudioDataProvider>
  );
}
