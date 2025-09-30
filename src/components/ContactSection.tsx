import { Box, Typography, TextField, Button, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: `radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(0, 0, 0, 0.16) 100%), ${theme.palette.background.default}`,
  padding: '6rem 2rem',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 1rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 1rem'
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto'
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    '& fieldset': {
      border: 'none',
      borderBottom: `3px solid ${theme.palette.text.primary}`
    },
    '&:hover fieldset': {
      borderBottom: `3px solid ${theme.palette.text.primary}`
    },
    '&.Mui-focused fieldset': {
      borderBottom: `3px solid ${theme.palette.text.primary}`
    }
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 600,
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  },
  '& .MuiInputBase-input': {
    padding: '1rem 0',
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem'
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: '"Outfit", sans-serif',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.text.primary,
  borderWidth: '3px',
  height: '48px',
  margin: '0 1rem'
}));

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
      <ContentWrapper>
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: { xs: '0.1em', sm: '0.3em', md: '0.67em' },
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            CONTACT
          </Typography>
        </Box>

        <Box sx={{ height: '12px', backgroundColor: 'text.primary', mb: 6 }} />

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
            <StyledDivider 
              orientation="vertical" 
              sx={{ 
                display: { xs: 'none', sm: 'block' }
              }} 
            />
            <SubmitButton type="submit">
              Submit
            </SubmitButton>
            <StyledDivider 
              orientation="vertical" 
              sx={{ 
                display: { xs: 'none', sm: 'block' }
              }} 
            />
          </Box>
        </Box>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactSection;