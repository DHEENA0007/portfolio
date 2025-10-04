import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
// ~~DISABLED~~ import profileImage from '../assets/profile.png';
// ~~DISABLED~~ import profileImage2 from '../assets/profile2.png';
// ~~DISABLED~~ import backgroundImage from '../assets/BG.png';
// ~~DISABLED~~ import backgroundImage2 from '../assets/BG2.png';

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '70vh',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  width: '100%',
  maxWidth: '100vw',
  [theme.breakpoints.down('md')]: {
    minHeight: '30vh',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    transform: 'scaleX(-1)',
    width: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem',
    minHeight: '25vh',
    transform: 'scaleX(-1)',
    width: '100%'
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

const DecorativeLine = styled(Box)<{ side: 'left' | 'right' }>(({ side, theme }) => ({
  position: 'absolute',
  top: side === 'left' ? '15%' : '20%',
  [side]: '5%',
  width: '60px',
  height: '3px',
  backgroundColor: '#604ce5',
  transform: side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)',
  opacity: 0.6,
  [theme.breakpoints.down('md')]: {
    transform: `${side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)'} scaleX(-1)`
  }
}));

const MobileContentWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    flex: 1,
    transform: 'scaleX(-1)'
  }
}));

const MobileTextContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 3,
    paddingTop: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '100%',
    paddingTop: '1.5rem'
  }
}));

const DesktopContent = styled(Box)(({ theme }) => ({
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const ProfileBackgroundContainer = styled(Box)(({ theme }) => ({
  // ~~DISABLED~~ position: 'absolute',
  // ~~DISABLED~~ width: 'clamp(1000px, 25vw, 650px)',
  // ~~DISABLED~~ height: '100%',
  // ~~DISABLED~~ bottom: -30,
  // ~~DISABLED~~ right: '-5%',
  // ~~DISABLED~~ zIndex: 1,
  // ~~DISABLED~~ background: `url(${backgroundImage})`,
  // ~~DISABLED~~ backgroundSize: '85%',
  // ~~DISABLED~~ backgroundPosition: 'center right',
  // ~~DISABLED~~ backgroundRepeat: 'no-repeat',
  display: 'none', // DISABLED: was 'block'
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MobileBackgroundContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    // ~~DISABLED~~ display: 'block',
    // ~~DISABLED~~ position: 'absolute',
    // ~~DISABLED~~ width: '70%',
    // ~~DISABLED~~ height: '110%',
    // ~~DISABLED~~ bottom: -20,
    // ~~DISABLED~~ right: '-15%',
    // ~~DISABLED~~ zIndex: 1,
    // ~~DISABLED~~ background: `url(${backgroundImage2})`,
    // ~~DISABLED~~ backgroundSize: '80%',
    // ~~DISABLED~~ backgroundPosition: 'center right',
    // ~~DISABLED~~ backgroundRepeat: 'no-repeat',
    // ~~DISABLED~~ transform: 'scaleX(-1)'
    display: 'none' // DISABLED: was 'block'
  },
  [theme.breakpoints.down('sm')]: {
    // ~~DISABLED~~ width: '65%',
    // ~~DISABLED~~ height: '105%',
    // ~~DISABLED~~ bottom: -15,
    // ~~DISABLED~~ right: '-20%',
    // ~~DISABLED~~ backgroundSize: '75%'
  }
}));

const ProfileImage = styled('img')(({ theme }) => ({
  // ~~DISABLED~~ width: 'clamp(850px, 35vw, 1200px)',
  // ~~DISABLED~~ height: 'auto',
  // ~~DISABLED~~ position: 'absolute',
  // ~~DISABLED~~ bottom: 0,
  // ~~DISABLED~~ right: '-4.2%',
  // ~~DISABLED~~ zIndex: 3,
  // ~~DISABLED~~ objectFit: 'cover',
  // ~~DISABLED~~ opacity: animate ? 1 : 0,
  // ~~DISABLED~~ transition: 'all 0.8s ease-out 0.3s',
  display: 'none', // DISABLED: was visible with animation
  [theme.breakpoints.down('md')]: {
    // ~~DISABLED~~ position: 'absolute',
    // ~~DISABLED~~ width: 'auto',
    // ~~DISABLED~~ maxWidth: 'none',
    // ~~DISABLED~~ height: '110%',
    // ~~DISABLED~~ objectFit: 'contain',
    // ~~DISABLED~~ bottom: '-20px',
    // ~~DISABLED~~ right: '-15%',
    // ~~DISABLED~~ zIndex: 2
    display: 'none' // DISABLED: was positioned absolutely
  },
  [theme.breakpoints.down('sm')]: {
    // ~~DISABLED~~ height: '105%',
    // ~~DISABLED~~ bottom: '-15px',
    // ~~DISABLED~~ right: '-25%'
    display: 'none' // DISABLED: was positioned with dimensions
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
  maxWidth: '100%',
  marginLeft: '0',
  width: '100%',
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
    color: '#6a658dff',
    display: 'inline-block',
    fontFamily: '"Pacifico", cursive',
    fontWeight: 400,
    fontSize: '1.1em',
     [theme.breakpoints.down('md')]: {
      fontSize: '1.1em',
      color: '#514d68ff',
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
  maxWidth: '100%',
  zIndex: 4,
  position: 'relative',
  marginLeft: '0',
  width: '100%',
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
          I’m a Digital Marketing Executive with one plus year of experience driving results through Google Ads, Meta campaigns, SEO, and data analysis. 
          I thrive on blending strategic thinking with data-driven insights to design campaigns that boost visibility, generate quality leads, and maximize ROI. 
          With a passion for continuous learning and adapting to the latest digital trends, I bring a results-oriented mindset and the ability to turn marketing challenges into growth opportunities.
        </DescriptionText>

        <ProfileBackgroundContainer />
        <ProfileImage 
          src="" 
          alt="~~DISABLED~~ Barath R - Data Analyst & Digital Marketing Professional" 
        />
      </DesktopContent>

      {/* Mobile View - Text on Left, Image Positioned Absolutely */}
      <MobileContentWrapper>
        <MobileTextContent>
          <MainTitle animate={animate}>
            <span className="highlight">About</span> Me.
          </MainTitle>
          
          <DescriptionText animate={animate} delay={0.4}>
            I'm a Digital Marketing Executive with one plus year of experience driving results through Google Ads, Meta campaigns, SEO, and data analysis. 
            I thrive on blending strategic thinking with data-driven insights to design campaigns that boost visibility, generate quality leads, and maximize ROI. 
            With a passion for continuous learning and adapting to the latest digital trends, I bring a results-oriented mindset and the ability to turn marketing challenges into growth opportunities.
          </DescriptionText>
        </MobileTextContent>

        <MobileBackgroundContainer />
        <ProfileImage 
          src="" 
          alt="~~DISABLED~~ Barath R - Data Analyst & Digital Marketing Professional" 
        />
      </MobileContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;