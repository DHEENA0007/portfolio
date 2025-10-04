import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleAnalyticsDashboard from './GoogleAnalyticsDashboard';
import { mockRootProps } from './GoogleAnalyticsDashboardMockData';
import { mockRootProps2 } from './GoogleAnalyticsDashboardMockData2';
import Analysis1 from '../assets/Analysis1.png';
import Analysis2 from '../assets/Analysis2.png';

const CombinedContainer = styled(Box)({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0'
});

const MainTitle = styled(Typography)({
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

const DashboardWrapper = styled(Box)({
  marginBottom: '2rem',
  '&:last-child': {
    marginBottom: 0
  }
});

const CombinedAnalyticsDashboard = () => {
  return (
    <CombinedContainer>
      <MainTitle>
        Analytics Acquisition Overview
      </MainTitle>
      
      <DashboardWrapper>
        <GoogleAnalyticsDashboard 
          data={mockRootProps} 
          title="" 
          dateRange="1 Sept 2023 - 31 Jul 2024"
          mobileImageSrc={Analysis1}
        />
      </DashboardWrapper>
      
      <DashboardWrapper>
        <GoogleAnalyticsDashboard 
          data={mockRootProps2} 
          title="" 
          dateRange="1 Sept 2024 - 31 Jul 2024"
          mobileImageSrc={Analysis2}
        />
      </DashboardWrapper>
    </CombinedContainer>
  );
};

export default CombinedAnalyticsDashboard;