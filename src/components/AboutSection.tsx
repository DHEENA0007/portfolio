import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';
import profileImage2 from '../assets/profile2.png';
import backgroundImage from '../assets/BG.png';

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '70vh',
  position: 'relative',
  overflow: 'hidden',
  background: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  [theme.breakpoints.down('md')]: {
    minHeight: '50vh',
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0.75rem 1rem',
    minHeight: '45vh'
  }
}));

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

const MobileContentWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    flex: 1
  }
}));

const MobileTextContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '50%',
    maxWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 3,
    paddingTop: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%',
    maxWidth: '48%',
    paddingTop: '1.5rem'
  }
}));

const DesktopContent = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const ProfileImage = styled('img')<{ animate: boolean }>(({ animate, theme }) => ({
  width: 'clamp(350px, 35vw, 650px)',
  height: 'auto',
  position: 'absolute',
  bottom: 0,
  right: '15%',
  zIndex: 3,
  objectFit: 'cover',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out 0.3s',
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    width: 'auto',
    maxWidth: 'none',
    height: '110%',
    objectFit: 'contain',
    bottom: 0,
    right: '-15%',
    zIndex: 2
  },
  [theme.breakpoints.down('sm')]: {
    height: '105%',
    bottom: 0,
    right: '-25%'
  }
}));

const MainTitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 800,
  fontFamily: '"Montserrat", sans-serif',
  marginBottom: '2rem',
  marginTop: '3rem',
  color: '#1a1a1a',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out 0.2s forwards` : 'none',
  textAlign: 'left',
  zIndex: 4,
  position: 'relative',
  maxWidth: '700px',
  marginLeft: '-32%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
    textAlign: 'left',
    marginTop: '0',
    marginBottom: '1rem',
    fontSize: 'clamp(1.5rem, 4.5vw, 2rem)',
    width: '100%',
    maxWidth: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
    marginBottom: '0.75rem'
  },
  '& .highlight': {
    color: '#cbc6ebff',
    display: 'inline-block',
    fontFamily: '"Pacifico", cursive',
    fontWeight: 400,
    fontSize: '1.1em',
     [theme.breakpoints.down('md')]: {
      fontSize: '1.1em',
      color: '#604ce5',
    }
  }
}));

const DescriptionText = styled(Typography)<{ animate: boolean; delay?: number }>(({ animate, delay = 0.4, theme }) => ({
  fontSize: '2rem',
  lineHeight: 1,
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  color: '#1a1a1a',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out ${delay}s forwards` : 'none',
  textAlign: 'left',
  maxWidth: '800px',
  zIndex: 4,
  position: 'relative',
  marginLeft: '-32%',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    lineHeight: 1.6,
    maxWidth: '100%',
    marginLeft: '0',
    textAlign: 'left',
    width: '100%',
    padding: '0'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.062rem',
    lineHeight: 1.2,
    fontWeight: 'bold'
  }
}));

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <AboutContainer id="about">
      <DecorativeLine side="left" />
      <DecorativeLine side="right" />
      
      {/* Desktop View - Original Layout */}
      <DesktopContent>
        <MainTitle animate={animate}>
          <span className="highlight">About</span> Me.
        </MainTitle>
        
        <DescriptionText animate={animate} delay={0.4}>
          I’m a Digital Marketing Executive with one year of experience driving results through Google Ads, Meta campaigns, SEO, and data analysis. 
          I thrive on blending strategic thinking with data-driven insights to design campaigns that boost visibility, generate quality leads, and maximize ROI. 
          With a passion for continuous learning and adapting to the latest digital trends, I bring a results-oriented mindset and the ability to turn marketing challenges into growth opportunities.
        </DescriptionText>

        <ProfileImage 
          src={profileImage} 
          alt="Barath R - Data Analyst & Digital Marketing Professional" 
          animate={animate} 
        />
      </DesktopContent>

      {/* Mobile View - Text on Left, Image Positioned Absolutely */}
      <MobileContentWrapper>
        <MobileTextContent>
          <MainTitle animate={animate}>
            <span className="highlight">About</span> Me.
          </MainTitle>
          
          <DescriptionText animate={animate} delay={0.4}>
            I’m a Digital Marketing Executive with one year of experience driving results through Google Ads, Meta campaigns, SEO, and data analysis. 
            I thrive on blending strategic thinking with data-driven insights to design campaigns that boost visibility, generate quality leads, and maximize ROI. 
            With a passion for continuous learning and adapting to the latest digital trends, I bring a results-oriented mindset and the ability to turn marketing challenges into growth opportunities.
          </DescriptionText>
        </MobileTextContent>

        <ProfileImage 
          src={profileImage2} 
          alt="Barath R - Data Analyst & Digital Marketing Professional" 
          animate={animate} 
        />
      </MobileContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;