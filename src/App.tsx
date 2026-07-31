import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingButtons } from './components/common/FloatingButtons';
import { CookieConsent } from './components/common/CookieConsent';
import { Home } from './pages/Home';
import { AboutNITDelhi } from './pages/AboutNITDelhi';
import { AboutConference } from './pages/AboutConference';
import { Themes } from './pages/Themes';
import { Organizers } from './pages/Organizers';
import { Professors } from './pages/Professors';
import { Registration } from './pages/Registration';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-nit-delhi" element={<AboutNITDelhi />} />
                <Route path="/about-conference" element={<AboutConference />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/organizers" element={<Organizers />} />
                <Route path="/speakers" element={<Professors />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <FloatingButtons />
            <CookieConsent />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
