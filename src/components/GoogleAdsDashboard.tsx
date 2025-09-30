import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountUp from './CountUpAnimation';

const DashboardContainer = styled(Box)({
  backgroundColor: '#f5f7fa',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '2rem 0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '3rem'
});

const CampaignGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
});

const CampaignCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)'
  }
});

const CountryIcon = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  margin: '0 auto 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5rem'
});

const CampaignName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2rem',
  fontWeight: 700,
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '2rem'
});

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#7f8c8d',
  textAlign: 'center',
  marginBottom: '0.5rem',
  letterSpacing: '0.1em'
});

const MetricValue = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '1.5rem'
});

const Description = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#7f8c8d',
  textAlign: 'center',
  lineHeight: 1.5
});

const IrelandFlag = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="40" fill="#ffffff"/>
    <path d="M40 10 A30 30 0 0 1 40 70 Z" fill="#ff9500"/>
    <path d="M40 10 A30 30 0 0 0 40 70 Z" fill="#009639"/>
    <path d="M25 10 L55 10 L55 70 L25 70 Z" fill="#ffffff"/>
  </svg>
);


const UKFlag = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="40" fill="#012169"/>
    <path d="M10 10 L70 70 M70 10 L10 70" stroke="#ffffff" strokeWidth="8"/>
    <path d="M10 10 L70 70 M70 10 L10 70" stroke="#c8102e" strokeWidth="4"/>
    <path d="M40 10 L40 70 M10 40 L70 40" stroke="#ffffff" strokeWidth="12"/>
    <path d="M40 10 L40 70 M10 40 L70 40" stroke="#c8102e" strokeWidth="8"/>
  </svg>
);

const EiffelTower = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <rect width="80" height="80" rx="40" fill="#f8f9fa"/>
    <path d="M40 15 L35 65 L45 65 Z" fill="#2c3e50"/>
    <path d="M30 35 L50 35" stroke="#2c3e50" strokeWidth="2"/>
    <path d="M32 50 L48 50" stroke="#2c3e50" strokeWidth="2"/>
    <path d="M25 65 L55 65" stroke="#2c3e50" strokeWidth="3"/>
  </svg>
);

const campaignData = [
  {
    name: 'GoIreland',
    icon: <IrelandFlag />,
    budget: { value: 11972280, display: '₹11,972,280.40' },
    revenue: { value: 195900000, display: '₹195,900,000' },
    description: 'High-performing campaigns targeting Indian students for Irish universities'
  },
  {
    name: 'GoFrance',
    icon: <EiffelTower />,
    budget: { value: 7618972, display: '₹7,618,972.35' },
    revenue: { value: 65400000, display: '₹65,400,000' },
    description: 'Targeted campaigns with segmentation & remarketing'
  },
  {
    name: 'GoUK',
    icon: <UKFlag />,
    budget: { value: 8221098, display: '₹8,221,098.35' },
    revenue: { value: 57300000, display: '₹57,300,000' },
    description: 'Performance-driven campaigns with A/B testing'
  }
];

const GoogleAdsDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        My Projects - Google Ads Campaigns
      </DashboardTitle>
      
      <CampaignGrid>
        {campaignData.map((campaign, index) => (
          <CampaignCard key={index}>
            <CardContent sx={{ padding: 0 }}>
              <CountryIcon>
                {campaign.icon}
              </CountryIcon>
              
              <CampaignName>
                {campaign.name}
              </CampaignName>
              
              <MetricLabel>BUDGET</MetricLabel>
              <CountUp end={campaign.budget.value} prefix="₹" separator=",">
                {(value) => <MetricValue>{value}</MetricValue>}
              </CountUp>
              
              <MetricLabel>REVENUE</MetricLabel>
              <CountUp end={campaign.revenue.value} prefix="₹" separator=",">
                {(value) => <MetricValue>{value}</MetricValue>}
              </CountUp>
              
              <Description>
                {campaign.description}
              </Description>
            </CardContent>
          </CampaignCard>
        ))}
      </CampaignGrid>
    </DashboardContainer>
  );
};

export default GoogleAdsDashboard;