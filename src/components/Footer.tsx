import { Box, Typography, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  color: '#1a1a1a',
  borderTop: '1px solid rgba(251, 146, 60, 0.2)',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem'
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center'
});

const BackToTopButton = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  marginBottom: '2rem',
  cursor: 'pointer',
  color: '#1a1a1a',
  '&:hover': {
    color: '#8b7ab8',
    transform: 'translateY(-2px)',
    '& svg': {
      animation: 'bounce 0.6s ease-in-out infinite'
    }
  },
  transition: 'all 0.3s ease',
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-4px)'
    }
  }
}));

const SocialIconButton = styled(IconButton)({
  color: '#ffffff',
  backgroundColor: '#8b7ab8',
  margin: '0 0.5rem',
  width: '44px',
  height: '44px',
  boxShadow: '0 4px 12px rgba(139, 122, 184, 0.25)',
  '&:hover': {
    backgroundColor: '#6b5b98',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 6px 20px rgba(107, 91, 152, 0.35)'
  },
  '&:active': {
    transform: 'translateY(-2px) scale(1.02)'
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '& svg': {
    color: '#ffffff',
    fontSize: '1.3rem'
  }
});

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        <BackToTopButton onClick={scrollToTop}>
          <KeyboardDoubleArrowUpIcon sx={{ fontSize: '1rem' }} />
          <Typography 
            variant="body2" 
            sx={{ 
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.15em',
              fontSize: '0.95rem'
            }}
          >
            BACK TO TOP
          </Typography>
        </BackToTopButton>

        <Stack 
          direction="row" 
          justifyContent="center" 
          spacing={{ xs: 0.5, sm: 1 }}
          flexWrap="wrap"
          mb={3}
        >
          <a href="mailto:barath.bhojan@gmail.com" aria-label="Email" style={{ textDecoration: 'none' }}>
            <SocialIconButton>
              <EmailIcon />
            </SocialIconButton>
          </a>
          <a href="https://www.linkedin.com/in/barathroy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ textDecoration: 'none' }}>
            <SocialIconButton>
              <LinkedInIcon />
            </SocialIconButton>
          </a>
          <a href="tel:+917448645076" aria-label="Phone" style={{ textDecoration: 'none' }}>
            <SocialIconButton>
              <PhoneIcon />
            </SocialIconButton>
          </a>
        </Stack>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;