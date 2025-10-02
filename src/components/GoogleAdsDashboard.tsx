import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountUp from './CountUpAnimation';
import irelandLogo from '../assets/GoIreland.jpeg';
import franceLogo from '../assets/GoFrance.jpeg';
import ukLogo from '../assets/GoUk.jpeg';

const DashboardContainer = styled(Box)({
  background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"Cabinet Grotesk", "Space Grotesk", sans-serif',
  fontSize: '3rem',
  fontWeight: 800,
  color: '#1e293b',
  textAlign: 'center',
  marginBottom: '3rem',
  letterSpacing: '-0.03em',
  background: 'linear-gradient(135deg, #7f6fe5 0%, #6657d5 50%, #5b4dcb 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
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
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  }
});

const CountryIcon = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '120px',
  borderRadius: '12px',
  margin: '0 auto 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
    marginBottom: '1rem'
  }
}));

const CampaignName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2rem',
  fontWeight: 700,
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem'
  }
}));

const MetricLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#7f8c8d',
  textAlign: 'center',
  marginBottom: '0.5rem',
  letterSpacing: '0.1em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem'
  }
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem'
  },
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '1.5rem'
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#7f8c8d',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  },
  lineHeight: 1.5
}));

// Logo image components using imported image files
const IrelandLogo = () => (
  <img src={irelandLogo} alt="GoIreland Campaign Logo" />
);

const FranceLogo = () => (
  <img src={franceLogo} alt="GoFrance Campaign Logo" />
);

const UKLogo = () => (
  <img src={ukLogo} alt="GoUK Campaign Logo" />
);

const campaignData = [
  {
    name: 'GoIreland',
    logo: <IrelandLogo />,
    budget: { value: 11972280, display: '₹11,972,280.40' },
    revenue: { value: 195900000, display: '₹195,900,000' },
    description: 'High-performing campaigns targeting Indian students for Irish universities'
  },
  {
    name: 'GoFrance',
    logo: <FranceLogo />,
    budget: { value: 7618972, display: '₹7,618,972.35' },
    revenue: { value: 65400000, display: '₹65,400,000' },
    description: 'Targeted campaigns with segmentation & remarketing'
  },
  {
    name: 'GoUK',
    logo: <UKLogo />,
    budget: { value: 8221098, display: '₹8,221,098.35' },
    revenue: { value: 57300000, display: '₹57,300,000' },
    description: 'Performance-driven campaigns with A/B testing'
  }
];

const GoogleAdsDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        Google Ads Campaign Dashboard
      </DashboardTitle>
      
      <CampaignGrid>
        {campaignData.map((campaign, index) => (
          <CampaignCard key={index}>
            <CardContent sx={{ padding: 0 }}>
              <CountryIcon>
                {campaign.logo}
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