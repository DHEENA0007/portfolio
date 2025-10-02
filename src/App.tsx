import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';
import theme from './theme';
import HeroSection from './components/HeroSection';
import ITBerriesSection from './components/ITBerriesSection';
import AboutSection from './components/AboutSection';
import ExperienceEducationSection from './components/ExperienceEducationSection';
import { mockRootProps } from './components/ExperienceEducationSectionMockData';
import SkillsCertificationsSection from './components/SkillsCertificationsSection';
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
        <Box sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
          backgroundAttachment: 'fixed'
        }}>
          <HeroSection />
          <ITBerriesSection />
          <AboutSection />
          <ExperienceEducationSection {...mockRootProps} />
          <SkillsCertificationsSection />
          <PortfolioSection />
          <ContactSection />
          <Footer />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;