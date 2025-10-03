import { Box, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '4rem 2rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem'
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto'
});

const DecorativeLine = styled(Box)<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  top: side === 'left' ? '20%' : '25%',
  [side]: '5%',
  width: '60px',
  height: '3px',
  backgroundColor: '#8b7ab8',
  transform: side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)',
  opacity: 0.6
}));

const WhyHireMeCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '3rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '2px solid rgba(139, 122, 184, 0.2)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #8b7ab8 0%, #ab9ad8 100%)'
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(139, 122, 184, 0.25)',
    borderColor: 'rgba(139, 122, 184, 0.4)'
  },
  [theme.breakpoints.down('md')]: {
    padding: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem'
  }
}));

const WhyHireMeTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#8b7ab8',
  marginBottom: '2rem',
  letterSpacing: '0.02em',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem'
  }
}));

const WhyHireMeText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontSize: '1.125rem',
  color: '#2d1b4e',
  lineHeight: 1.8,
  fontWeight: 400,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.7
  }
}));

const WhyHireMeSection = () => {
  return (
    <SectionContainer>
      <DecorativeLine side="left" />
      <DecorativeLine side="right" />
      <ContentWrapper>
        <WhyHireMeCard>
          <WhyHireMeTitle>Why Hire Me</WhyHireMeTitle>
          <WhyHireMeText>
            I am a results-driven digital marketer, focused on strategies that combine creativity with data insights to deliver measurable growth. With strong analytical skills, adaptability to new trends, and a collaborative approach, I ensure marketing efforts are impactful and aligned with business goals.
          </WhyHireMeText>
        </WhyHireMeCard>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WhyHireMeSection;
