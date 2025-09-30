import { Box, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';

const DashboardContainer = styled(Box)({
  backgroundColor: '#f8f9fa',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '1rem 0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#475569',
  textAlign: 'center',
  marginBottom: '3rem'
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
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
  }
});

const CountryHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem'
});

const CountryFlag = styled(Box)({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  marginRight: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const CountryName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#475569'
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
  color: '#64748b',
  marginBottom: '0.25rem',
  letterSpacing: '0.05em'
});

const MetricValue = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#1e293b'
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
  color: '#475569',
  marginBottom: '0.75rem',
  textAlign: 'center'
});

const AchievementText = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.75rem',
  color: '#64748b',
  lineHeight: 1.5,
  textAlign: 'center'
});

// Country flag components
const IrelandFlag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect width="8" height="24" fill="#009639"/>
    <rect x="8" width="8" height="24" fill="#ffffff"/>
    <rect x="16" width="8" height="24" fill="#ff9500"/>
  </svg>
);

const FranceFlag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect width="8" height="24" fill="#0055a4"/>
    <rect x="8" width="8" height="24" fill="#ffffff"/>
    <rect x="16" width="8" height="24" fill="#ef4135"/>
  </svg>
);

const UKFlag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect width="24" height="24" fill="#012169"/>
    <path d="M0 0 L24 24 M24 0 L0 24" stroke="#ffffff" strokeWidth="2.4"/>
    <path d="M0 0 L24 24 M24 0 L0 24" stroke="#c8102e" strokeWidth="1.2"/>
    <path d="M12 0 L12 24 M0 12 L24 12" stroke="#ffffff" strokeWidth="3.6"/>
    <path d="M12 0 L12 24 M0 12 L24 12" stroke="#c8102e" strokeWidth="2.4"/>
  </svg>
);

const campaignData = [
  {
    id: 'ireland',
    country: 'GoIreland',
    flag: <IrelandFlag />,
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
    flag: <FranceFlag />,
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
    flag: <UKFlag />,
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
        Campaign Deep Dive
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