import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProfessionalSummaryPage } from './pages/ProfessionalSummaryPage';
import { EducationDetailsPage } from './pages/EducationDetailsPage';
import { ExperienceDetailsPage } from './pages/ExperienceDetailsPage';
import { SpeakingPage } from './pages/SpeakingPage';
import { GalleryPage } from './pages/GalleryPage';
import { EventsPage } from './pages/EventsPage';
import { ErrorPage } from './pages/ErrorPage';
import { WelcomePopup } from './components/WelcomePopup';
import { FloatingButtons } from './components/FloatingButtons';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
export function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 min-h-screen relative transition-all duration-300">
          <CustomCursor />
          <Toaster position="top-center" />
          <AnimatePresence>
            {showWelcome && <WelcomePopup onClose={() => setShowWelcome(false)} />}
          </AnimatePresence>
          <ScrollProgress />
          <Header />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<ProfessionalSummaryPage />} />
              <Route path="/education" element={<EducationDetailsPage />} />
              <Route path="/experience" element={<ExperienceDetailsPage />} />
              <Route path="/speaking" element={<SpeakingPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <FloatingButtons />
          <ThemeToggle />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>;
}