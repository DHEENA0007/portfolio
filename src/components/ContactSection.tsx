import { Box, Typography, TextField, Button, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
  padding: '6rem 2rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 1rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 1rem'
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

const ContentWrapper = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto'
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    '& fieldset': {
      border: 'none',
      borderBottom: '3px solid #1a1a1a'
    },
    '&:hover fieldset': {
      borderBottom: '3px solid #fb923c'
    },
    '&.Mui-focused fieldset': {
      borderBottom: '3px solid #fb923c'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#666',
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 600,
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    '&.Mui-focused': {
      color: '#fb923c'
    }
  },
  '& .MuiInputBase-input': {
    padding: '1rem 0',
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem',
    color: '#1a1a1a'
  }
});

const SubmitButton = styled(Button)({
  backgroundColor: '#fb923c',
  color: '#ffffff',
  fontFamily: '"Outfit", sans-serif',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '12px 32px',
  borderRadius: '25px',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: '#f97316',
    transform: 'translateY(-2px)'
  },
  transition: 'all 0.3s ease'
});

const StyledDivider = styled(Divider)({
  borderColor: '#fb923c',
  borderWidth: '2px',
  height: '48px',
  margin: '0 1rem'
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <SectionContainer id="contact">
      <DecorativeLine side="left" />
      <DecorativeLine side="right" />
      <ContentWrapper>
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700, 
              letterSpacing: '-0.02em',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              color: '#1a1a1a'
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: '"Inter", sans-serif',
              fontSize: '1.125rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Let's discuss how we can work together to achieve your goals.
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <StyledTextField
              fullWidth
              label="Enter your name*"
              value={formData.name}
              onChange={handleChange('name')}
              required
            />
            <StyledTextField
              fullWidth
              label="Enter your email*"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              required
            />
            <StyledTextField
              fullWidth
              label="Phone number"
              value={formData.phone}
              onChange={handleChange('phone')}
            />
            <StyledTextField
              fullWidth
              label="Your message*"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange('message')}
              required
            />
          </Stack>

          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            mt={6}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 0 }
            }}
          >
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </Box>
        </Box>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactSection;