import { Box, Typography, TextField, Button, Stack, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '6rem 2rem',
  position: 'relative',
  // Ultra-wide short screens
  '@media (min-aspect-ratio: 5/2)': {
    padding: '4rem 2rem'
  },
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
  backgroundColor: '#8b7ab8',
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
    transition: 'all 0.3s ease',
    '& fieldset': {
      border: 'none',
      borderBottom: '3px solid #1a1a1a'
    },
    '&:hover fieldset': {
      borderBottom: '3px solid #8b7ab8'
    },
    '&.Mui-focused fieldset': {
      borderBottom: '3px solid #8b7ab8',
      borderBottomWidth: '3px'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#666',
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 600,
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    '&.Mui-focused': {
      color: '#8b7ab8'
    }
  },
  '& .MuiInputBase-input': {
    padding: '1rem 0',
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem',
    color: '#1a1a1a',
    '&::placeholder': {
      color: '#999',
      opacity: 0.7
    }
  }
});

const SubmitButton = styled(Button)(() => ({
  backgroundColor: '#8b7ab8',
  color: '#ffffff',
  padding: '14px 32px',
  borderRadius: '25px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  border: 'none',
  minWidth: '200px',
  fontFamily: '"Space Grotesk", sans-serif',
  boxShadow: '0 4px 20px rgba(139, 122, 184, 0.3)',
  '&:hover': {
    backgroundColor: '#7b6ba8',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 28px rgba(139, 122, 184, 0.4)'
  },
  '&:active': {
    transform: 'translateY(-1px)'
  },
  '&:disabled': {
    backgroundColor: '#ccc',
    color: '#888',
    transform: 'none',
    boxShadow: 'none',
    cursor: 'not-allowed'
  },
  transition: 'all 0.3s ease'
}));

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzfC0fida-2X0qfFBuLX7PqgqfW8dwKD_33NaZPQnFr924D-_lCBtKHJWCVjCk7rtkHPA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      // Since we're using no-cors mode, we can't read the response
      // but we can assume success if no error is thrown
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
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
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Box>
        </Box>
      </ContentWrapper>

      {/* Success Message */}
      <Snackbar 
        open={showSuccess} 
        autoHideDuration={6000} 
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ 
            width: '100%',
            backgroundColor: '#8b7ab8',
            color: '#ffffff',
            fontFamily: '"Inter", sans-serif',
            fontSize: '1rem',
            '& .MuiAlert-icon': {
              color: '#ffffff'
            },
            '& .MuiAlert-action': {
              '& .MuiIconButton-root': {
                color: '#ffffff'
              }
            }
          }}
        >
          Thank you! Your message has been sent successfully. I will get back to you soon.
        </Alert>
      </Snackbar>

      {/* Error Message */}
      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowError(false)} 
          severity="error" 
          sx={{ 
            width: '100%',
            fontFamily: '"Inter", sans-serif',
            fontSize: '1rem'
          }}
        >
          {!formData.name || !formData.email || !formData.message 
            ? 'Please fill in all required fields (Name, Email, and Message)'
            : 'Sorry, there was an error sending your message. Please try again or contact me directly.'
          }
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
};

export default ContactSection;