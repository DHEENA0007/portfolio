import { Box, Typography, Card, Table, TableBody, TableRow, TableCell, useMediaQuery, useTheme, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';
import CountUp from './CountUpAnimation';
import { mockRootProps } from './GoogleAnalyticsDashboardMockData';
import Analysis from '../assets/Analysis.png';
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



const MetricCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  }
});

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#1a73e8',
  marginBottom: '0.5rem'
});

const MetricValue = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#202124',
  lineHeight: 1
});

const SidebarCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '1.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)'
});



const CountryRow = styled(TableRow)({
  '&:hover': {
    backgroundColor: '#f8f9fa'
  }
});

const CountryName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#202124',
  fontWeight: 400
});

const CountryUsers = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#202124',
  fontWeight: 500,
  textAlign: 'right'
});

interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCardComponent = ({ label, value }: MetricCardProps) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.includes('K') ? 'K' : '';
  
  return (
    <MetricCard>
      <MetricLabel>{label}</MetricLabel>
      <CountUp end={numericValue} suffix={suffix}>
        {(animatedValue) => <MetricValue>{animatedValue}</MetricValue>}
      </CountUp>
    </MetricCard>
  );
};



interface CountriesTableProps {
  countries: Array<{ country: string; users: number }>;
}

interface GoogleAnalyticsDashboardProps {
  data?: {
    activeUsers: string;
    newUsers: string;
    activeUsersLast30Min: number;
    timeSeriesData: Array<{ month: string; value: number }>;
    activeUsersPerMinute: Array<{ time: number; users: number }>;
    topCountries: Array<{ country: string; users: number }>;
  };
  title?: string;
  dateRange?: string;
  mobileImageSrc?: string;
  desktopImageSrc?: string;
}

const CountriesTable = ({ countries }: CountriesTableProps) => (
  <Table size="small">
    <TableBody>
      {countries.map((country, index) => (
        <CountryRow key={index}>
          <TableCell sx={{ border: 'none', padding: '0.5rem 0' }}>
            <CountryName>{country.country}</CountryName>
          </TableCell>
          <TableCell sx={{ border: 'none', padding: '0.5rem 0' }}>
            <CountUp end={country.users}>
              {(value) => <CountryUsers>{value}</CountryUsers>}
            </CountUp>
          </TableCell>
        </CountryRow>
      ))}
    </TableBody>
  </Table>
);

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

const GoogleAnalyticsDashboard = ({ data = mockRootProps, title = "Analytics Acquisition Overview", dateRange, mobileImageSrc, desktopImageSrc }: GoogleAnalyticsDashboardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

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
        <DesktopImageContainer>
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
        {mobileImageSrc ? (
          <MobileImageContainer onClick={handleImageClick}>
            <img 
              src={mobileImageSrc} 
              alt={`Analytics dashboard for ${dateRange || 'selected period'}`}
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
        ) : (
          <>
            {/* Mobile Metrics */}
            <MetricCardComponent
              label="Active users"
              value={data.activeUsers}
            />
            <MetricCardComponent
              label="New users"
              value={data.newUsers}
            />

            {/* Mobile Time Series Chart */}
            <SidebarCard>
              <Typography variant="h6" sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 600 }}>
                User Acquisition Timeline
              </Typography>
              <Box sx={{ marginLeft: '-10px' }}>
                <LineChart
                  width={280}
                  height={160}
                  series={[
                    {
                      data: data.timeSeriesData.map(d => d.value),
                      color: '#4285f4'
                    }
                  ]}
                  xAxis={[{
                    scaleType: 'point',
                    data: data.timeSeriesData.map(d => d.month),
                    tickLabelStyle: {
                      fontSize: 9,
                      fill: '#5f6368'
                    }
                  }]}
                  yAxis={[{
                    tickLabelStyle: {
                      fontSize: 9,
                      fill: '#5f6368'
                    }
                  }]}
                  margin={{ left: 0, right: 20, top: 20, bottom: 40 }}
                />
              </Box>
            </SidebarCard>

            {/* Mobile Active Users */}
            <SidebarCard>
              <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', fontWeight: 600 }}>
                Active Users (Last 30 Min)
              </Typography>
              <CountUp end={data.activeUsersLast30Min}>
                {(value) => (
                  <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#202124' }}>
                    {value}
                  </Typography>
                )}
              </CountUp>
            </SidebarCard>

            {/* Mobile Top Countries */}
            <SidebarCard>
              <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', fontWeight: 600 }}>
                Top Countries
              </Typography>
              <CountriesTable countries={data.topCountries} />
            </SidebarCard>
          </>
        )}
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
          src={mobileImageSrc || desktopImageSrc} 
          alt={`Analytics dashboard preview for ${dateRange || 'selected period'}`}
          loading="lazy"
        />
      </ModalContent>
    </ImageModal>
    </DashboardContainer>
  );
};

export default GoogleAnalyticsDashboard;