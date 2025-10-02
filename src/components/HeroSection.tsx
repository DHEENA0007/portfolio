import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';
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
  background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '100px',
  [theme.breakpoints.down('md')]: {
    minHeight: dynamicHeight ? `${dynamicHeight}px` : '100vh',
    paddingBottom: '2rem',
    paddingTop: '80px'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: dynamicHeight ? `${dynamicHeight}px` : '100vh',
    paddingTop: '60px',
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
  left: '50%',
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
  width: 'calc(100% - 24px)',
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
  marginTop: '-6rem',
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
  [theme.breakpoints.down('sm')]: {
    marginTop: '-2rem',
    marginBottom: '1.5rem',
  }
}));

const DecorativeLine = styled(Box)<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  top: side === 'left' ? '15%' : '20%',
  [side]: '5%',
  width: '60px',
  height: '3px',
  backgroundColor: '#fb923c',
  transform: side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)',
  opacity: 0.6
}));

const MainTitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 400,
  fontFamily: '"Bebas Neue", sans-serif',
  textAlign: 'center',
  marginTop: '-8.5rem',
  letterSpacing: '0.05em',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out 0.2s forwards` : 'none',
  '& .name': {
    color: '#fb923c',
    display: 'inline-block',
    fontFamily: '"Bebas Neue", sans-serif'
  },
  '& .emoji': {
    display: 'inline-block',
    animation: `${float} 2s ease-in-out infinite`
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
  [theme.breakpoints.up('md')]: {
    marginTop: '-1rem',
  },
}));

const SemiCircle = styled(Box)<{ animate: boolean }>(({ animate, theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'clamp(600px, 55vw, 750px)',
  height: 'clamp(400px, 27.5vw, 325px)',
  backgroundColor: '#fb923c',
  borderRadius: '650px 650px 0 0',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: 'clamp(380px, 65vw, 500px)',
    height: 'clamp(210px, 32.5vw, 250px)'
  }
}));

const ProfileImage = styled('img')<{ animate: boolean }>(({ animate, theme }) => ({
  width: 'clamp(400px, 50vw, 670px)',
  height: 'auto',
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,
  objectFit: 'cover',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out 0.3s',
  [theme.breakpoints.down('md')]: {
    width: 'clamp(350px, 60vw, 500px)'
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
  backgroundColor: '#fb923c',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '25px',
  fontSize: '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#f97316',
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

  return (
    <HeroContainer id="hero" dynamicHeight={isMobile ? viewportHeight : undefined}>
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
        I'm <span className="name">Barath R</span> <span className="emoji">👋</span>
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
          bottom: isMobile ? `${viewportHeight * 0.35}px` : '30%',
          left: isMobile ? '2%' : '12%' 
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

      {/* Moved the experience badge here - between Google Ads and SEO Expert */}
      <FloatingBadge
        delay={0.8}
        sx={{
          top: isMobile ? `${viewportHeight * 0.35}px` : '32%', // Changed from 0.25 to 0.35 for mobile only
          right: isMobile ? '8%' : '8%', // Slightly more to the left to create visual balance
          transform: 'translateX(0)', // Remove the centering transform
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          padding: { xs: '12px 16px', md: '16px 24px' },
          textAlign: 'center',
          whiteSpace: 'normal',
          lineHeight: 1.4
        }}
      >
        <Typography variant="h6" sx={{ 
          fontSize: { xs: '1.2rem', md: '1.4rem' }, 
          fontWeight: 700, 
          color: '#fb923c',
          marginBottom: '2px'
        }}>
          1+ Years
        </Typography>
        <Typography variant="body2" sx={{ 
          fontSize: { xs: '0.75rem', md: '0.85rem' }, 
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
          bottom: isMobile ? `${viewportHeight * 0.32}px` : '38%',
          right: isMobile ? '2%' : '12%' 
        }}
      >
        <ManageSearchIcon />
        SEO Expert
      </FloatingBadge>

      <SemiCircle animate={animate} />

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