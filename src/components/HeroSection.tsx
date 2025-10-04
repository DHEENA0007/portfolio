import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';
import backgroundImage from '../assets/BG.png';
import backgroundImage2 from '../assets/BG2.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Add hook for dynamic viewport height
const useViewportHeight = () => {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight);
    };

    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);
    
    // Initial update
    updateVh();

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);

  return vh;
};

const HeroContainer = styled(Box)<{ dynamicHeight?: number }>(({ theme, dynamicHeight }) => ({
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '40px',
  // Ultra-wide short screens (aspect ratio > 2.5:1)
  '@media (min-aspect-ratio: 5/2)': {
    minHeight: '100vh',
    paddingTop: '20px',
    paddingBottom: '20px',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  // Standard laptop screens (1400-1600px width)
  '@media (min-width: 1400px) and (max-width: 1600px)': {
    paddingTop: '30px',
    backgroundSize: 'cover'
  },
  // Very wide screens
  '@media (min-width: 1920px)': {
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  [theme.breakpoints.down('md')]: {
    minHeight: dynamicHeight ? `${dynamicHeight}px` : '100vh',
    paddingBottom: '2rem',
    paddingTop: '30px',
    background: `url(${backgroundImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 90%',
    backgroundRepeat: 'no-repeat'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: dynamicHeight ? `${dynamicHeight}px` : '100vh',
    paddingTop: '20px',
    background: `url(${backgroundImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 90%',
    backgroundRepeat: 'no-repeat'
  }
}));

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const TubeContainer = styled(Box)<{ animate: boolean }>(({ animate, theme }) => ({
  // Mobile-first styles
  position: 'absolute',
  bottom: animate ? '4px' : '-6px', // Changed from '8px' to '20px' and from '-26px' to '-6px'
  left: '48%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
  backgroundColor: '#ffffff36',
  borderRadius: '50px',
  padding: '8px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  opacity: animate ? 1 : 0,
  transition: 'opacity 0.8s ease-out 1.2s, bottom 0.8s ease-out 1.2s',
  zIndex: 5,
  width: 'calc(100% - 55px)',
  maxWidth: '500px',

  '& > .MuiButton-root': {
    flex: 1,
  },

  // Desktop styles (md and up)
  [theme.breakpoints.up('md')]: {
    width: 'auto',
    maxWidth: 'none',
    left: '53%',
    transform: 'translateX(-70%)',
    bottom: animate ? '6px' : '-5px', // Changed from '15px' to '25px' and from '-15px' to '-5px'
    gap: '1rem',
    padding: '10px 16px',
    '& > .MuiButton-root': {
      flex: 'none',
    },
  }
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#1a1a1a',
  fontSize: '1.5rem',
  fontFamily: '"Caveat", cursive',
  letterSpacing: '0.02em',
  position: 'absolute',
  top: '20px',
  left: '40px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  zIndex: 10,
  '&:hover': {
    color: '#604ce5',
    transform: 'scale(1.05)'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
    top: '15px',
    left: '30px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    top: '10px',
    left: '20px'
  }
}));

const HelloBubble = styled(Box)<{ animate: boolean }>(({ animate, theme }) => ({
  backgroundColor: '#ffffff',
  border: '2px solid #1a1a1a',
  borderRadius: '30px',
  padding: '12px 24px',
  fontSize: '1.3rem',
  fontWeight: 500,
  fontFamily: '"Caveat", cursive',
  color: '#1a1a1a',
  position: 'relative',
  marginBottom: '2.5rem',
  marginTop: '2rem',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.6s ease-out forwards` : 'none',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '30px',
    width: '20px',
    height: '20px',
    backgroundColor: '#ffffff',
    border: '2px solid #1a1a1a',
    borderTop: 'none',
    borderRight: 'none',
    transform: 'rotate(-45deg)',
    borderRadius: '0 0 0 5px'
  },
  // Ultra-wide short screens
  '@media (min-aspect-ratio: 5/2)': {
    fontSize: '1.1rem',
    padding: '10px 20px',
    marginTop: '1rem',
    marginBottom: '1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '1rem',
    marginBottom: '1.5rem',
  }
}));

const DecorativeLine = styled(Box)<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  top: side === 'left' ? '15%' : '20%',
  [side]: '5%',
  width: '60px',
  height: '3px',
  backgroundColor: '#604ce5',
  transform: side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)',
  opacity: 0.6
}));

const MainTitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 400,
  fontFamily: '"Poppins", sans-serif',
  textAlign: 'center',
  marginTop: '-8.5rem',
  letterSpacing: '0.02em',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out 0.2s forwards` : 'none',
  color: '#1a1a1a',
  '& .im-text': {
    fontFamily: '"Caveat", cursive',
    fontWeight: 600,
    fontSize: 'clamp(2.8rem, 8.5vw, 5.5rem)'
  },
  '& .name': {
    color: '#604ce5',
    display: 'inline-block',
    fontFamily: '"Caveat", cursive',
    fontWeight: 700,
    letterSpacing: '0.02em',
    fontSize: 'clamp(2.8rem, 8.5vw, 5.5rem)'
  },
  '& .emoji': {
    display: 'inline-block',
    animation: `${float} 2s ease-in-out infinite`
  },
  // Ultra-wide short screens
  '@media (min-aspect-ratio: 5/2)': {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    marginTop: '-3rem',
    '& .im-text': {
      fontSize: 'clamp(2.2rem, 6.5vw, 4rem)'
    },
    '& .name': {
      fontSize: 'clamp(2.2rem, 6.5vw, 4rem)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '-1rem',
  }
}));

const Subtitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
  fontWeight: 600,
  fontFamily: '"Poppins", sans-serif',
  color: '#1a1a1a',
  textAlign: 'center',
  marginBottom: '10rem',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out 0.4s forwards` : 'none',
  // Ultra-wide short screens
  '@media (min-aspect-ratio: 5/2)': {
    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
    marginBottom: '4rem',
    marginTop: '-0.5rem'
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '-1rem',
  },
}));

const ProfileImage = styled('img')<{ animate: boolean }>(({ animate, theme }) => ({
  width: 'clamp(400px, 50vw, 800px)',
  height: 'auto',
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,
  objectFit: 'cover',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out 0.3s',
  // Ultra-wide short screens - scale down image
  '@media (min-aspect-ratio: 5/2)': {
    width: 'clamp(350px, 40vw, 600px)',
    maxHeight: '70vh',
    objectFit: 'contain'
  },
  [theme.breakpoints.down('md')]: {
    width: 'clamp(600px, 60vw, 500px)'
  }
}));

const FloatingBadge = styled(Box)<{ delay: number }>(({ delay, theme }) => ({
  position: 'absolute',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  borderRadius: '25px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '0.95rem',
  fontWeight: 600,
  fontFamily: '"Montserrat", sans-serif',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  animation: `${float} 3s ease-in-out infinite ${delay}s`,
  zIndex: 3,
  whiteSpace: 'nowrap',
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem'
  },
  [theme.breakpoints.down('md')]: {
    // Remove the display: 'none' and add mobile-specific styles
    padding: '8px 16px',
    fontSize: '0.85rem',
    borderRadius: '20px',
    gap: '6px',
    '& .MuiSvgIcon-root': {
      fontSize: '1rem'
    }
  }
}));

const PortfolioButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#8B7FD8',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '25px',
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#6657d5',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    padding: '8px 16px'
  }
}));

const HireMeButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#1a1a1a',
  padding: '10px 20px',
  borderRadius: '25px',
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  border: '2px solid #1a1a1a',
  '&:hover': {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    padding: '8px 16px'
  }
}));

const HeroSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [helloText, setHelloText] = useState('Hello!');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const viewportHeight = useViewportHeight();

  const greetings = ['Hello!', 'வணக்கம்!', 'ನಮಸ್ಕಾರ!'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % greetings.length;
      setHelloText(greetings[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeroContainer id="hero" dynamicHeight={isMobile ? viewportHeight : undefined}>
      <LogoText onClick={scrollToTop}>
        &lt;/barath_R/&gt;
      </LogoText>
      
      <DecorativeLine side="left" />
      <DecorativeLine side="right" />
      
      {/* Top Content - No Container */}
      <HelloBubble animate={animate}>{helloText}</HelloBubble>
      
      <Box sx={{ 
        marginTop: { 
          xs: `${Math.min(viewportHeight * 0.05, 40)}px`, 
          md: '80px' 
        } 
      }} />
      
      <MainTitle animate={animate}>
        <span className="im-text">I'm</span> <span className="name">Barath R</span> <span className="emoji">👋</span>
      </MainTitle>
      
      <Subtitle animate={animate}>
        A Growth-Focused Marketing Specialist
      </Subtitle>

      {/* Floating Badges with dynamic positioning */}
      <FloatingBadge 
        delay={0.5} 
        sx={{ 
          top: isMobile ? `${viewportHeight * 0.14}px` : '10%',
          left: isMobile ? '4%' : '15%' 
        }}
      >
        <BarChartIcon />
        Meta Ads Specialist
      </FloatingBadge>

      <FloatingBadge 
        delay={1} 
        sx={{ 
          top: isMobile ? `${viewportHeight * 0.45}px` : '50%',
          left: isMobile ? '2%' : '28%' 
        }}
      >
        <TrendingUpIcon />
        ROI Growth
      </FloatingBadge>

      <FloatingBadge 
        delay={1.5} 
        sx={{ 
          top: isMobile ? `${viewportHeight * 0.1}px` : '20%',
          right: isMobile ? '4%' : '15%' 
        }}
      >
        <CheckCircleOutlineIcon />
        Google Ads
      </FloatingBadge>

      {/* Combined Experience Badge */}
      <FloatingBadge
        delay={0.8}
        sx={{
          display: { xs: 'none', md: 'flex' },
          bottom: '20%',
          left: '8%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          padding: '16px 24px',
          textAlign: 'center',
          whiteSpace: 'normal',
          lineHeight: 1.4,
        }}
      >
        <Typography variant="h6" sx={{ 
          fontSize: '1.4rem', 
          fontWeight: 700, 
          color: '#604ce5',
          marginBottom: '2px'
        }}>
          1+ Years
        </Typography>
        <Typography variant="body2" sx={{ 
          fontSize: '0.85rem', 
          fontWeight: 500,
          textAlign: 'center',
          lineHeight: 1.2
        }}>
          Experience in Meta Ads Specialist &<br />Digital Marketing
        </Typography>
      </FloatingBadge>

      <FloatingBadge 
        delay={2} 
        sx={{ 
          bottom: isMobile ? `${viewportHeight * 0.49}px` : '38%',
          right: isMobile ? '2%' : '12%' 
        }}
      >
        <ManageSearchIcon />
        SEO Expert
      </FloatingBadge>

      <ProfileImage src={profileImage} alt="Barath R - Data Analyst & Digital Marketing Professional" animate={animate} />

      <TubeContainer animate={animate}>
        <PortfolioButton onClick={handlePortfolioClick}>
          Portfolio ↗
        </PortfolioButton>
        <HireMeButton onClick={handleHireMeClick}>
          Hire me
        </HireMeButton>
      </TubeContainer>
    </HeroContainer>
  );
};

export default HeroSection;