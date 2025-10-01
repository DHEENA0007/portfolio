import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
  padding: '4rem 2rem',
  color: '#1a1a1a',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 1.5rem'
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',
  [theme.breakpoints.down('md')]: {
    gap: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1.5rem'
  }
}));

const TextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

const DecorativeLine = styled(Box)<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  top: side === 'left' ? '20%' : '25%',
  [side]: '5%',
  width: '60px',
  height: '3px',
  backgroundColor: '#fb923c',
  transform: side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)',
  opacity: 0.6
}));


const ITBerriesSection = () => {
  return (
    <SectionContainer>
      <DecorativeLine side="left" />
      <DecorativeLine side="right" />
      <ContentWrapper>
        <TextContent>
          <Typography 
            variant="h3" 
            sx={{ 
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 700, 
              letterSpacing: '0.35em',
              mb: 3,
              color: '#1a1a1a',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            DIGITAL HORIZONS
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.6,
              mb: 3,
              maxWidth: '800px',
              color: '#666',
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            At Digital Horizons, we believe that creativity meets strategy to deliver measurable impact. Our work blends innovative design, data-driven marketing, and user-focused solutions to help brands shine in a crowded digital space. Every project is crafted with attention to detail, ensuring seamless experiences across web, social media, and mobile platforms.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.6,
              mb: 3,
              maxWidth: '800px',
              color: '#666',
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            From conceptualization to execution, we partner with our clients to transform ideas into engaging campaigns that drive growth and build lasting connections. With a commitment to excellence and a passion for innovation, we turn challenges into opportunities, delivering results that speak for themselves.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.6,
              maxWidth: '800px',
              color: '#666',
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            Explore our portfolio to see how we combine vision, technology, and creativity to make every brand story unforgettable.
          </Typography>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ITBerriesSection;