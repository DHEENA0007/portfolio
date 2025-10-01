import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '70vh',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '40px',
  paddingBottom: '0',
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    paddingBottom: '2rem'
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

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
  position: 'relative',
  zIndex: 4,
  [theme.breakpoints.down('lg')]: {
    gap: '3rem',
    padding: '0 1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '2.5rem',
    padding: '0 1rem'
  }
}));

const LeftContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  [theme.breakpoints.down('md')]: {
    order: 2,
    textAlign: 'center'
  }
}));

const RightContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px',
  width: '100%',
  overflow: 'visible',
  [theme.breakpoints.down('lg')]: {
    height: '450px'
  },
  [theme.breakpoints.down('md')]: {
    order: 1,
    height: '380px',
    marginBottom: '2rem'
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

const SemiCircle = styled(Box)<{ animate: boolean }>(({ animate, theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: '10%',
  width: 'clamp(400px, 40vw, 550px)',
  height: 'clamp(200px, 20vw, 275px)',
  backgroundColor: '#fb923c',
  borderRadius: '550px 550px 0 0',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    right: '50%',
    transform: 'translateX(50%)',
    width: 'clamp(300px, 60vw, 400px)',
    height: 'clamp(150px, 30vw, 200px)'
  }
}));

const ProfileImage = styled('img')<{ animate: boolean }>(({ animate, theme }) => ({
  width: 'clamp(350px, 35vw, 430px)',
  height: 'auto',
  position: 'absolute',
  bottom: 0,
  right: '15%',
  zIndex: 3,
  objectFit: 'cover',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out 0.3s',
  [theme.breakpoints.down('md')]: {
    right: '50%',
    transform: 'translateX(50%)',
    width: 'clamp(280px, 50vw, 350px)'
  }
}));


const MainTitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 800,
  fontFamily: '"Montserrat", sans-serif',
  marginBottom: '2rem',
  color: '#1a1a1a',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out 0.2s forwards` : 'none',
  '& .highlight': {
    color: '#fb923c',
    display: 'inline-block',
    fontFamily: '"Pacifico", cursive',
    fontWeight: 400,
    fontSize: '1.1em'
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    marginBottom: '1.5rem'
  }
}));

const DescriptionText = styled(Typography)<{ animate: boolean; delay?: number }>(({ animate, delay = 0.4, theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.7,
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  color: '#666',
  marginBottom: '1.5rem',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out ${delay}s forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginBottom: '1.2rem'
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
      
      <ContentWrapper>
        <LeftContent>
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
        </LeftContent>

        <RightContent>
          {/* Semi-circle and Profile Image */}
          <SemiCircle animate={animate} />
          <ProfileImage 
            src={profileImage} 
            alt="Barath R - Data Analyst & Digital Marketing Professional" 
            animate={animate} 
          />
        </RightContent>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;