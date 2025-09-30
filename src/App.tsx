import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';
import theme from './theme';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ITBerriesSection from './components/ITBerriesSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CertificationsEducationSection from './components/CertificationsEducationSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: 'mui',
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <HeroSection />
        <ITBerriesSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsEducationSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;