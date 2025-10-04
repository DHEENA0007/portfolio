import { Box, Typography, useMediaQuery, useTheme, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Analysis from '../assets/Analysis.png';
import Analysis1 from '../assets/Analysis1.png';
import Analysis2 from '../assets/Analysis2.png';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useState } from 'react';

const DashboardContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0',
  [theme.breakpoints.down('md')]: {
    background: 'none',
    padding: '1rem 0',
    borderRadius: '0',
    boxShadow: 'none'
  }
}));

const DashboardTitle = styled(Typography)({
  fontFamily: '"DM Sans", "Manrope", sans-serif',
  fontSize: '3rem',
  fontWeight: 700,
  color: '#2d1b4e',
  textAlign: 'center',
  marginBottom: '3rem',
  letterSpacing: '-0.025em',
  background: 'linear-gradient(135deg, #8b7ab8 0%, #7b6ba8 50%, #6b5b98 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
});





interface GoogleAnalyticsDashboardProps {
  title?: string;
  dateRange?: string;
  mobileImageSrc?: string;
  desktopImageSrc?: string;
}



const DateRangeLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#5f6368',
  marginBottom: '1.5rem',
  letterSpacing: '0.02em',
  textAlign: 'right',
  maxWidth: '100%',
  paddingRight: '13rem',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const DesktopImageContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(139, 122, 184, 0.15)',
    '& img': {
      transform: 'scale(1.02)'
    }
  },
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  }
});

const MobileImageContainer = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  '&:hover .zoom-icon': {
    opacity: 1
  }
});

const ZoomIcon = styled(Box)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'rgba(139, 122, 184, 0.9)',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(139, 122, 184, 1)',
    transform: 'scale(1.1)'
  }
});

const ImageModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px'
});

const ModalContent = styled(Box)({
  position: 'relative',
  maxWidth: '98vw',  
  maxHeight: '98vh',
  width: 'auto',
  height: 'auto',
  outline: 'none',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  '& img': {
    width: 'auto',
    height: 'auto',
    maxWidth: '98vw',
    maxHeight: '98vh',
    minWidth: '80vw',
    objectFit: 'contain',
    display: 'block'
  }
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#ffffff',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    transform: 'scale(1.1)'
  },
  transition: 'all 0.3s ease'
});

const GoogleAnalyticsDashboard = ({ title = "Analytics Acquisition Overview", dateRange, mobileImageSrc, desktopImageSrc }: GoogleAnalyticsDashboardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>('');

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashboardContainer>
      {title && (
        <DashboardTitle>
          {title}
        </DashboardTitle>
      )}
      
      {dateRange && (
        <DateRangeLabel>
          {dateRange}
        </DateRangeLabel>
      )}
      
      {/* Desktop Layout */}
      {!isMobile && (
        <DesktopImageContainer onClick={() => {
          setModalImageSrc(desktopImageSrc || Analysis);
          setIsModalOpen(true);
        }}>
          <img 
            src={desktopImageSrc || Analysis} 
            alt={`Analytics dashboard for ${dateRange || 'selected period'}`}
            loading="lazy"
          />
        </DesktopImageContainer>
      )}

    {/* Mobile Stack Layout */}
    {isMobile && (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        background: 'none',
        padding: 0,
        margin: 0,
        boxShadow: 'none'
      }}>
        {/* Stacked Analysis Images */}
        <MobileImageContainer onClick={() => {
          setModalImageSrc(Analysis1);
          setIsModalOpen(true);
        }}>
          <img 
            src={Analysis1} 
            alt="Analytics dashboard part 1"
            loading="lazy"
            style={{
              width: '113%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              marginLeft: '-6.8%',
              border: 'none',
              boxShadow: 'none',
              background: 'none',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }}
          />
          <ZoomIcon className="zoom-icon">
            <ZoomInIcon />
          </ZoomIcon>
        </MobileImageContainer>

        <MobileImageContainer onClick={() => {
          setModalImageSrc(Analysis2);
          setIsModalOpen(true);
        }}>
          <img 
            src={Analysis2} 
            alt="Analytics dashboard part 2"
            loading="lazy"
            style={{
              width: '113%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              marginLeft: '-6.8%',
              border: 'none',
              boxShadow: 'none',
              background: 'none',
              borderRadius: '8px'
            }}
          />
          <ZoomIcon className="zoom-icon">
            <ZoomInIcon />
          </ZoomIcon>
        </MobileImageContainer>
      </Box>
    )}



    {/* Image Preview Modal */}
    <ImageModal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="image-preview-modal"
      aria-describedby="analytics-dashboard-preview"
    >
      <ModalContent>
        <CloseButton onClick={handleCloseModal} aria-label="Close preview">
          <CloseIcon />
        </CloseButton>
        <img 
          src={modalImageSrc || mobileImageSrc || desktopImageSrc} 
          alt={`Analytics dashboard preview for ${dateRange || 'selected period'}`}
          loading="lazy"
        />
      </ModalContent>
    </ImageModal>
    </DashboardContainer>
  );
};

export default GoogleAnalyticsDashboard;