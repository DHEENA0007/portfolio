import { Box, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import irelandLogo from '../assets/GoIreland.jpeg';
import franceLogo from '../assets/GoFrance.jpeg';
import ukLogo from '../assets/GoUk.jpeg';

const DashboardContainer = styled(Box)({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"Bricolage Grotesque", "Outfit", sans-serif',
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

const CountriesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
});

const CountryCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  }
});

const CountryHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem'
});

const CountryFlag = styled(Box)({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  marginRight: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
  }
});

const CountryName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#6b5b98'
});

const MetricsRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem'
});

const MetricColumn = styled(Box)({
  textAlign: 'center'
});

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#6b5b98',
  marginBottom: '0.25rem',
  letterSpacing: '0.05em'
});

const MetricValue = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#2d1b4e'
});

const ChartContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1.5rem',
  height: '200px'
});

const AchievementSection = styled(Box)({
  borderTop: '1px solid #e2e8f0',
  paddingTop: '1.5rem'
});

const AchievementTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#6b5b98',
  marginBottom: '0.75rem',
  textAlign: 'center'
});

const AchievementText = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.75rem',
  color: '#6b5b98',
  lineHeight: 1.5,
  textAlign: 'center'
});

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
    id: 'ireland',
    country: 'GoIreland',
    flag: <IrelandLogo />,
    budget: '₹11.97M',
    revenue: '₹195.9M',
    chartData: [
      { id: 0, value: 85, color: '#ff9500' },
      { id: 1, value: 15, color: '#e2e8f0' }
    ],
    achievement: {
      title: 'Key Achievement',
      description: 'Achieved massive ROI by managing high-volume campaigns targeting Indian students for Irish universities. Drove superior performance through strategic audience segmentation and keyword optimization.'
    }
  },
  {
    id: 'france',
    country: 'GoFrance',
    flag: <FranceLogo />,
    budget: '₹7.62M',
    revenue: '₹65.4M',
    chartData: [
      { id: 0, value: 65, color: '#ff9500' },
      { id: 1, value: 35, color: '#e2e8f0' }
    ],
    achievement: {
      title: 'Key Achievement',
      description: 'Focused on precision marketing with study programs. Successfully utilized audience segmentation and bid format remarketing strategies to attract high-quality leads.'
    }
  },
  {
    id: 'uk',
    country: 'GoUK',
    flag: <UKLogo />,
    budget: '₹8.22M',
    revenue: '₹57.3M',
    chartData: [
      { id: 0, value: 55, color: '#ff9500' },
      { id: 1, value: 45, color: '#e2e8f0' }
    ],
    achievement: {
      title: 'Key Achievement',
      description: 'Implemented a data-backed approach for UK programs. Optimized Cost Per Acquisition (CPA) and maximized student inquiries through continuous A/B testing of ad creatives.'
    }
  }
];

const CampaignDeepDive = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        Campaign Deep Dive Analytics
      </DashboardTitle>
      
      <CountriesGrid>
        {campaignData.map((campaign) => (
          <CountryCard key={campaign.id}>
            <CountryHeader>
              <CountryFlag>
                {campaign.flag}
              </CountryFlag>
              <CountryName>
                {campaign.country}
              </CountryName>
            </CountryHeader>
            
            <MetricsRow>
              <MetricColumn>
                <MetricLabel>Budget</MetricLabel>
                <MetricValue>{campaign.budget}</MetricValue>
              </MetricColumn>
              <MetricColumn>
                <MetricLabel>Revenue</MetricLabel>
                <MetricValue>{campaign.revenue}</MetricValue>
              </MetricColumn>
            </MetricsRow>
            
            <ChartContainer>
              <PieChart
                series={[
                  {
                    data: campaign.chartData,
                    innerRadius: 60,
                    outerRadius: 90,
                    paddingAngle: 0,
                    cornerRadius: 0,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 100,
                    cy: 100
                  }
                ]}
                width={200}
                height={200}
                margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
              />
            </ChartContainer>
            
            <AchievementSection>
              <AchievementTitle>
                {campaign.achievement.title}
              </AchievementTitle>
              <AchievementText>
                {campaign.achievement.description}
              </AchievementText>
            </AchievementSection>
          </CountryCard>
        ))}
      </CountriesGrid>
    </DashboardContainer>
  );
};

export default CampaignDeepDive;