import { Box, Typography, Stack, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const HeroContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden'
});

const LeftSection = styled(Box)(({ theme }) => ({
  width: '60%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '2rem',
    minHeight: '100vh'
  }
}));

const RightSection = styled(Box)(({ theme }) => ({
  width: '60%',
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 35% 100%)',
  marginLeft: '-20%',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MobileImageSection = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '2rem 0',
    backgroundColor: '#f5f5f5'
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

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TextContent = styled(Box)<{ animate: boolean }>(({ animate, theme }) => ({
  maxWidth: '600px',
  color: '#333333',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out forwards` : 'none',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    textAlign: 'center'
  }
}));

const AnimatedTypography = styled(Typography)<{ delay: number; animate: boolean }>(({ delay, animate }) => ({
  opacity: animate ? 1 : 0,
  transform: animate ? 'translateY(0)' : 'translateY(30px)',
  animation: animate ? `${fadeInUp} 0.8s ease-out ${delay}s forwards` : 'none'
}));

const AnimatedProfileImage = styled('img')<{ animate: boolean }>(({ animate, theme }) => ({
  width: '400px',
  height: '500px',
  objectFit: 'cover',
  borderRadius: '0px',
  transform: animate ? 'translateX(40px)' : 'translateX(70px)',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out',
  animation: animate ? `${fadeInLeft} 1s ease-out 0.5s forwards` : 'none',
  '&:hover': {
    transform: 'translateX(40px) scale(1.05)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  },
  [theme.breakpoints.down('lg')]: {
    width: '300px',
    height: '400px'
  },
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '300px',
    transform: 'none',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}));

const MobileProfileImage = styled('img')<{ animate: boolean }>(({ animate, theme }) => ({
  width: '200px',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '12px',
  opacity: animate ? 1 : 0,
  transition: 'all 0.8s ease-out',
  animation: animate ? `${fadeInUp} 1s ease-out 0.3s forwards` : 'none',
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  [theme.breakpoints.down('sm')]: {
    width: '180px',
    height: '220px'
  }
}));

const SocialIcons = styled(Stack)(({ theme }) => ({
  marginTop: '2rem',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
}));

const SocialIconButton = styled(IconButton)({
  color: '#333333',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  margin: '0 8px 0 0',
  width: '48px',
  height: '48px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.3s ease'
});

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Data Analyst', 'Digital Marketing Professional'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animate) return;
    
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.substring(0, typedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentTitle.substring(0, typedText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [animate, typedText, titleIndex, isDeleting, titles]);

  if (isMobile) {
    return (
      <HeroContainer id="hero">
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
          <LeftSection>
            <TextContent animate={animate}>
              <AnimatedTypography 
                variant="h4" 
                delay={0}
                animate={animate}
                sx={{ 
                  fontWeight: 400, 
                  mb: 1, 
                  color: '#666666',
                  fontSize: { xs: '1.1rem', sm: '1.3rem' }
                }}
              >
                Hi, I'm Barath R
              </AnimatedTypography>
              <AnimatedTypography 
                variant="h1" 
                delay={0.3}
                animate={animate}
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: { xs: '1.8rem', sm: '2.2rem' },
                  color: '#000000',
                  lineHeight: 1.1,
                  minHeight: { xs: '2.5rem', sm: '3rem' }
                }}
              >
                {typedText}
                <Box 
                  component="span" 
                  sx={{ 
                    borderRight: '3px solid #2563eb',
                    marginLeft: '2px',
                    animation: 'blink 1s infinite',
                    '@keyframes blink': {
                      '0%, 50%': { borderColor: '#2563eb' },
                      '51%, 100%': { borderColor: 'transparent' }
                    }
                  }}
                />
              </AnimatedTypography>
              <AnimatedTypography 
                variant="body1" 
                delay={0.6}
                animate={animate}
                sx={{ 
                  fontWeight: 400, 
                  color: '#666666',
                  mb: 3,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                I specialize in transforming data into actionable insights that drive informed business decisions. With expertise in Python, SQL, Tableau, Power BI, SEO, and Google Ads, I bring a unique blend of analytical and marketing skills to deliver measurable results.
              </AnimatedTypography>
              
              <SocialIcons direction="row">
                <a href="mailto:barath.bhojan@gmail.com" target="_blank" rel="noopener noreferrer">
                  <SocialIconButton>
                    <EmailIcon />
                  </SocialIconButton>
                </a>
                <a href="https://www.linkedin.com/in/barathxo" target="_blank" rel="noopener noreferrer">
                  <SocialIconButton>
                    <LinkedInIcon />
                  </SocialIconButton>
                </a>
              </SocialIcons>
            </TextContent>
          </LeftSection>
          
          <MobileImageSection>
            <MobileProfileImage 
              animate={animate}
              src="/portfolio/profile.png" 
              alt="BARATH R - Professional Portrait"
            />
          </MobileImageSection>
        </Box>
      </HeroContainer>
    );
  }

  return (
    <HeroContainer id="hero">
      <LeftSection>
        <TextContent animate={animate}>
          <AnimatedTypography 
            variant="h4" 
            delay={0}
            animate={animate}
            sx={{ 
              fontWeight: 400, 
              mb: 1, 
              color: '#666666',
              fontSize: '1.5rem'
            }}
          >
            Hi, I'm Barath R
          </AnimatedTypography>
          <AnimatedTypography 
            variant="h1" 
            delay={0.3}
            animate={animate}
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: '#000000',
              lineHeight: 1.1,
              minHeight: '3.5rem'
            }}
          >
            {typedText}
            <Box 
              component="span" 
              sx={{ 
                borderRight: '3px solid #2563eb',
                marginLeft: '2px',
                animation: 'blink 1s infinite',
                '@keyframes blink': {
                  '0%, 50%': { borderColor: '#2563eb' },
                  '51%, 100%': { borderColor: 'transparent' }
                }
              }}
            />
          </AnimatedTypography>
          <AnimatedTypography 
            variant="body1" 
            delay={0.6}
            animate={animate}
            sx={{ 
              fontWeight: 400, 
              color: '#666666',
              mb: 4,
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}
          >
            I specialize in transforming data into actionable insights that drive informed business decisions. With expertise in Python, SQL, Tableau, Power BI, SEO, and Google Ads, I bring a unique blend of analytical and marketing skills to deliver measurable results.
          </AnimatedTypography>
          
          <SocialIcons direction="row">
            <a href="mailto:barath.bhojan@gmail.com" target="_blank" rel="noopener noreferrer">
              <SocialIconButton>
                <EmailIcon />
              </SocialIconButton>
            </a>
            <a href="https://www.linkedin.com/in/barathxo" target="_blank" rel="noopener noreferrer">
              <SocialIconButton>
                <LinkedInIcon />
              </SocialIconButton>
            </a>
          </SocialIcons>
        </TextContent>
      </LeftSection>
      
      <RightSection>
        <AnimatedProfileImage 
          animate={animate}
          src="/portfolio/profile.png" 
          alt="BARATH R - Professional Portrait"
        />
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;