import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleAnalyticsDashboard from './GoogleAnalyticsDashboard';
import { mockRootProps } from './GoogleAnalyticsDashboardMockData';
import Analysis from '../assets/Analysis.png';

const CombinedContainer = styled(Box)({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0'
});

const MainTitle = styled(Typography)(({ theme }) => ({
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
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    marginBottom: '2rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem'
  }
}));

const DashboardWrapper = styled(Box)({
  marginBottom: '2rem',
  '&:last-child': {
    marginBottom: 0
  }
});

const PerformanceOverview = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(139, 122, 184, 0.1)',
  marginTop: '2rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(139, 122, 184, 0.15)'
  },
  [theme.breakpoints.down('md')]: {
    padding: '2rem',
    marginTop: '1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    marginTop: '1rem'
  }
}));

const OverviewTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"DM Sans", "Manrope", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#2d1b4e',
  marginBottom: '1.5rem',
  letterSpacing: '-0.025em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    marginBottom: '1rem'
  }
}));

const OverviewSection = styled(Box)({
  marginBottom: '1.5rem',
  '&:last-child': {
    marginBottom: 0
  }
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#8b7ab8',
  marginBottom: '0.75rem',
  letterSpacing: '0.02em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem'
  }
}));

const MetricList = styled(Box)({
  paddingLeft: '1rem'
});

const MetricItem = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#2d1b4e',
  marginBottom: '0.5rem',
  lineHeight: 1.6,
  '&:before': {
    content: '"•"',
    color: '#8b7ab8',
    fontWeight: 'bold',
    display: 'inline-block',
    width: '1em',
    marginLeft: '-1em'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem'
  }
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontSize: '1rem',
  color: '#6b5b98',
  lineHeight: 1.7,
  fontStyle: 'italic',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem'
  }
}));

const CombinedAnalyticsDashboard = () => {
  return (
    <CombinedContainer>
      <MainTitle>
        Year-over-Year Website Growth (2023–2024 vs 2024–2025)
      </MainTitle>
      
      <DashboardWrapper>
        <GoogleAnalyticsDashboard 
          data={mockRootProps} 
          title="" 
          mobileImageSrc={Analysis}
          desktopImageSrc={Analysis}
        />
      </DashboardWrapper>
      
      <PerformanceOverview>
        <OverviewTitle>Performance Overview:</OverviewTitle>
        
        <OverviewSection>
          <MetricList>
            <MetricItem>2023–2024: 183K Active Users | 181K New Users</MetricItem>
            <MetricItem>2024–2025: 299K Active Users | 300K New Users</MetricItem>
          </MetricList>
        </OverviewSection>
        
        <OverviewSection>
          <SectionTitle>Growth Achieved:</SectionTitle>
          <MetricList>
            <MetricItem>63% Increase in Active Users</MetricItem>
            <MetricItem>66% Increase in New Users</MetricItem>
          </MetricList>
        </OverviewSection>
        
        <DescriptionText>
          This growth was driven by data-led campaigns, SEO optimization, and targeted digital marketing strategies.
        </DescriptionText>
      </PerformanceOverview>
    </CombinedContainer>
  );
};

export default CombinedAnalyticsDashboard;