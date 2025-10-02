import { Box, Typography } from '@mui/material';
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
    padding: '2rem 1rem'
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
    right: '50%',
    transform: 'translateX(50%)',
    width: 'clamp(280px, 50vw, 350px)'
  }
}));

const MainTitle = styled(Typography)<{ animate: boolean }>(({ animate, theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 800,
  fontFamily: '"Montserrat", sans-serif',
  marginBottom: '1rem', // Changed from '20rem' to '2rem' to move it down
  marginTop: '15rem', // Added top margin to push it down further
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
    marginLeft: '5%',
    textAlign: 'left',
    marginTop: '2rem', // Smaller top margin on mobile
    marginBottom: '1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '2%',
    textAlign: 'left',
    marginTop: '1.5rem', // Even smaller on small screens
    marginBottom: '1rem'
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
  textAlign: 'left', // Changed from 'center' to 'left'
  maxWidth: '800px',
  zIndex: 4,
  position: 'relative',
  marginLeft: '-50%', // Added left margin to shift text left
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginLeft: '5%', // Smaller left margin on mobile
    textAlign: 'left' // Keep left alignment on mobile
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '2%', // Even smaller margin on small screens
    textAlign: 'left'
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
    </AboutContainer>
  );
};

export default AboutSection;