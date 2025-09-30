import { Box, Typography, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '3rem 2rem',
  color: theme.palette.primary.contrastText,
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
  '&:hover': {
    opacity: 0.8
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  margin: '0 0.5rem',
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.3s ease',
  '& svg': {
    color: theme.palette.secondary.main
  }
}));

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
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 700,
              letterSpacing: '0.18em',
              fontSize: '0.9375rem'
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
        >
          <SocialIconButton>
            <LinkedInIcon />
          </SocialIconButton>
          <SocialIconButton>
            <GitHubIcon />
          </SocialIconButton>
          <SocialIconButton>
            <EmailIcon />
          </SocialIconButton>
          <SocialIconButton>
            <TwitterIcon />
          </SocialIconButton>
        </Stack>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;