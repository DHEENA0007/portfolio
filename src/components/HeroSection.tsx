import { Box, Typography, Stack, IconButton, useMediaQuery, useTheme, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import profileImage from '../assets/profile.png';
import CountUpAnimation from './CountUpAnimation';
import { TableauIcon, SEOIcon, GoogleAdsIcon, GoogleAnalyticsIcon } from './icons/CustomIcons';

const HeroContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
});

const LeftSection = styled(Box)(({ theme }) => ({
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4rem',
  position: 'relative',
  zIndex: 2,
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
  zIndex: 1,
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
    position: 'relative'
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const floatReverse = keyframes`
  0%, 100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const TextContent = styled(Box)<{ animate: boolean }>(({ animate, theme }) => ({
  maxWidth: '600px',
  color: '#333333',
  opacity: animate ? 1 : 0,
  animation: animate ? `${fadeInUp} 0.8s ease-out forwards` : 'none',
  position: 'relative',
  zIndex: 3,
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

const ProfileImage = styled('img')({
  width: '700px',
  height: 'auto',
  borderRadius: '30%',
  objectFit: 'cover',
  zIndex: 10,
  transition: 'transform 0.3s ease',
  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
  '&:hover': {
    transform: 'scale(1.05)'
  },
  position: 'relative',
  left: '100px',
  top: '-90px',
});

const SocialIcons = styled(Stack)(({ theme }) => ({
  marginTop: '2rem',
  paddingLeft: '11rem', // Added padding to move icons to the right
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    paddingLeft: 0 // Reset padding on mobile to keep them centered
  }
}));

const SocialIconButton = styled(IconButton)({
  color: '#333333',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  margin: '0 8px 0 0',
  width: '48px',
  height: '48px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
  },
  transition: 'all 0.3s ease'
});

const FloatingTag = styled(Box)<{ delay: number; direction?: 'normal' | 'reverse' }>(({ delay, direction = 'normal' }) => ({
  position: 'absolute',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '20px',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  animation: `${direction === 'reverse' ? floatReverse : float} 3s ease-in-out infinite ${delay}s`,
  zIndex: 1,
  fontSize: '0.85rem',
  fontWeight: 500,
  color: '#1e293b',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  },
  transition: 'all 0.3s ease'
}));

const BackgroundOrb = styled(Box)<{ size: number; top: string; left: string; delay: number }>(({ size, top, left, delay }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
  top,
  left,
  animation: `${pulse} 4s ease-in-out infinite ${delay}s`,
  zIndex: 0
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  marginTop: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center'
  }
}));

const StatItem = styled(Box)({
  textAlign: 'center',
  '& .stat-number': {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#2563eb',
    display: 'block'
  },
  '& .stat-label': {
    fontSize: '0.8rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginTop: '4px'
  }
});

const SkillChip = styled(Chip)<{ delay: number }>(({ delay }) => ({
  backgroundColor: 'rgba(37, 99, 235, 0.1)',
  color: '#2563eb',
  border: '1px solid rgba(37, 99, 235, 0.2)',
  fontWeight: 500,
  fontSize: '0.75rem',
  height: '28px',
  margin: '4px',
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out ${delay}s forwards`,
  '&:hover': {
    backgroundColor: 'rgba(37, 99, 235, 0.2)',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.3s ease'
}));

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Data Analyst', 'Digital Marketing Professional', 'SEO Specialist', 'PPC Expert'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    'Python', 'SQL', 'Tableau', 'Power BI', 'Google Analytics', 
    'Google Ads', 'SEO', 'PPC', 'Data Visualization', 'A/B Testing'
  ];

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
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentTitle.substring(0, typedText.length - 1));
        } else {
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
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* Background Elements */}
          <BackgroundOrb size={120} top="10%" left="5%" delay={0} />
          <BackgroundOrb size={80} top="60%" left="80%" delay={1} />
          <BackgroundOrb size={60} top="30%" left="85%" delay={2} />

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

              {/* Skills Tags */}
              <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                {skills.map((skill, index) => (
                  <SkillChip 
                    key={skill} 
                    label={skill} 
                    size="small" 
                    delay={1 + index * 0.1}
                  />
                ))}
              </Box>

              {/* Stats */}
              <StatsContainer>
                <StatItem>
                  <CountUpAnimation end={50} suffix="+" duration={2000}>
                    {(value) => <span className="stat-number">{value}</span>}
                  </CountUpAnimation>
                  <span className="stat-label">Projects Completed</span>
                </StatItem>
                <StatItem>
                  <CountUpAnimation end={95} suffix="%" duration={2500}>
                    {(value) => <span className="stat-number">{value}</span>}
                  </CountUpAnimation>
                  <span className="stat-label">Client Satisfaction</span>
                </StatItem>
                <StatItem>
                  <CountUpAnimation end={1} suffix="+" duration={1800}>
                    {(value) => <span className="stat-number">{value}</span>}
                  </CountUpAnimation>
                  <span className="stat-label">Years Experience</span>
                </StatItem>
              </StatsContainer>
              
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
                <a href="tel:+919876543210" target="_blank" rel="noopener noreferrer">
                  <SocialIconButton>
                    <PhoneIcon />
                  </SocialIconButton>
                </a>
              </SocialIcons>
            </TextContent>
          </LeftSection>
          
          <MobileImageSection>
            <ProfileImage src={profileImage} alt="Barath R - Data Analyst & Digital Marketing Professional" 
              sx={{ width: '250px', height: 'auto' }} />
          </MobileImageSection>
        </Box>
      </HeroContainer>
    );
  }

  return (
    <HeroContainer id="hero">
      {/* Background Elements */}
      <BackgroundOrb size={200} top="15%" left="10%" delay={0} />
      <BackgroundOrb size={150} top="70%" left="5%" delay={1} />
      <BackgroundOrb size={100} top="40%" left="75%" delay={2} />

      {/* Floating Tags */}
      <FloatingTag delay={0.5} sx={{ top: '15%', left: '15%' }}>
        <TableauIcon width={20} height={20} />
        Tableau Expert
      </FloatingTag>
      
      <FloatingTag delay={1} direction="reverse" sx={{ top: '25%', right: '25%' }}>
        <SEOIcon width={20} height={20} />
        SEO Specialist
      </FloatingTag>
      
      {/* Moved this tag to be near the years of experience stat */}
      <FloatingTag delay={1.5} sx={{ top: '78%', left: '32%' }}>
        <GoogleAdsIcon width={20} height={20} />
        Google Ads Certified
      </FloatingTag>
      
      <FloatingTag delay={2} direction="reverse" sx={{ top: '45%', right: '15%' }}>
        <GoogleAnalyticsIcon width={20} height={20} />
        GA4 Expert
      </FloatingTag>
      
      <FloatingTag delay={2.5} sx={{ top: '75%', right: '30%' }}>
        <TrendingUpIcon sx={{ fontSize: 20 }} />
        ROI Optimization
      </FloatingTag>
      
      <FloatingTag delay={3} direction="reverse" sx={{ top: '35%', left: '5%' }}>
        <AnalyticsIcon sx={{ fontSize: 20 }} />
        Data Analytics
      </FloatingTag>

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
              mb: 3,
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}
          >
            I specialize in transforming data into actionable insights that drive informed business decisions. With expertise in Python, SQL, Tableau, Power BI, SEO, and Google Ads, I bring a unique blend of analytical and marketing skills to deliver measurable results.
          </AnimatedTypography>

          {/* Skills Tags */}
          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap' }}>
            {skills.map((skill, index) => (
              <SkillChip 
                key={skill} 
                label={skill} 
                size="small" 
                delay={1 + index * 0.1}
              />
            ))}
          </Box>

          {/* Stats */}
          <StatsContainer>
            <StatItem>
              <CountUpAnimation end={50} suffix="+" duration={2000}>
                {(value) => <span className="stat-number">{value}</span>}
              </CountUpAnimation>
              <span className="stat-label">Projects Completed</span>
            </StatItem>
            <StatItem>
              <CountUpAnimation end={95} suffix="%" duration={2500}>
                {(value) => <span className="stat-number">{value}</span>}
              </CountUpAnimation>
              <span className="stat-label">Client Satisfaction</span>
            </StatItem>
            <StatItem>
              <CountUpAnimation end={1} suffix="+" duration={1800}>
                {(value) => <span className="stat-number">{value}</span>}
              </CountUpAnimation>
              <span className="stat-label">Years Experience</span>
            </StatItem>
          </StatsContainer>
          
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
            <a href="tel:+919876543210" target="_blank" rel="noopener noreferrer">
              <SocialIconButton>
                <PhoneIcon />
              </SocialIconButton>
            </a>
          </SocialIcons>
        </TextContent>
      </LeftSection>
      
      <RightSection>
        <ProfileImage src={profileImage} alt="Barath R - Data Analyst & Digital Marketing Professional" />
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;