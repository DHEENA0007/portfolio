import { Box, Typography, Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';
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
    minHeight: 'auto',
    padding: '3rem 1rem',
    display: 'block'
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

const MobileContentWrapper = styled(Stack)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '1.5rem',
    position: 'relative',
    zIndex: 2
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1rem'
  }
}));

const MobileTextContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    flex: '0 0 55%',
    maxWidth: '55%'
  },
  [theme.breakpoints.down('sm')]: {
    flex: '0 0 50%',
    maxWidth: '50%'
  }
}));

const MobileImageContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    flex: '0 0 45%',
    maxWidth: '45%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    flex: '0 0 50%',
    maxWidth: '50%'
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
    position: 'static',
    width: '100%',
    maxWidth: '280px',
    transform: 'none',
    right: 'auto',
    bottom: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '200px'
  }
}));

const MainTitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 800,
  fontFamily: '"Montserrat", sans-serif',
  marginBottom: '1rem',
  marginTop: '15rem',
  color: '#1a1a1a',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out 0.2s forwards` : 'none',
  textAlign: 'left',
  zIndex: 4,
  position: 'relative',
  maxWidth: '800px',
  marginLeft: '-50%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
    marginTop: '0',
    marginBottom: '1rem',
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '0.75rem'
  },
  '& .highlight': {
    color: '#604ce5',
    display: 'inline-block',
    fontFamily: '"Pacifico", cursive',
    fontWeight: 400,
    fontSize: '1.1em'
  }
}));

const DescriptionText = styled(Typography)<{ animate: boolean; delay?: number }>(({ animate, delay = 0.4, theme }) => ({
  fontSize: '1.3rem',
  lineHeight: 1.7,
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  color: '#666',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out ${delay}s forwards` : 'none',
  textAlign: 'left',
  maxWidth: '800px',
  zIndex: 4,
  position: 'relative',
  marginLeft: '-50%',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.85rem',
    lineHeight: 1.5,
    marginLeft: '0',
    maxWidth: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    lineHeight: 1.4
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
          Detail-oriented and analytical professional with 1+ year of experience in digital marketing and currently working as a
          Data Analyst Intern. Proficient in SEO, Google Ads, and social media marketing, with hands-on experience in data
          analysis using Excel, Python, and Tableau. Strong communicator with proven problem-solving abilities and a passion
          for continuous learning in analytics and business intelligence. Actively seeking a full-time Data Analyst position to
          apply analytical skills and contribute to organizational growth.
        </DescriptionText>

        <ProfileImage 
          src={profileImage} 
          alt="Barath R - Data Analyst & Digital Marketing Professional" 
          animate={animate} 
        />
      </DesktopContent>

      {/* Mobile View - Side by Side Layout */}
      <MobileContentWrapper>
        <MobileTextContent>
          <MainTitle animate={animate}>
            <span className="highlight">About</span> Me.
          </MainTitle>
          
          <DescriptionText animate={animate} delay={0.4}>
            Detail-oriented and analytical professional with 1+ year of experience in digital marketing and currently working as a
            Data Analyst Intern. Proficient in SEO, Google Ads, and social media marketing, with hands-on experience in data
            analysis using Excel, Python, and Tableau. Strong communicator with proven problem-solving abilities and a passion
            for continuous learning in analytics and business intelligence. Actively seeking a full-time Data Analyst position to
            apply analytical skills and contribute to organizational growth.
          </DescriptionText>
        </MobileTextContent>

        <MobileImageContent>
          <ProfileImage 
            src={profileImage} 
            alt="Barath R - Data Analyst & Digital Marketing Professional" 
            animate={animate} 
          />
        </MobileImageContent>
      </MobileContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;