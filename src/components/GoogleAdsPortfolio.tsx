import { Box, Typography, Card, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import type { GoogleAdsPortfolioData } from './GoogleAdsPortfolioMockData';

const PortfolioContainer = styled(Box)({
  backgroundColor: '#f8fafc',
  padding: '4rem 2rem',
  borderRadius: '16px',
  margin: '2rem 0'
});

const HeaderSection = styled(Box)({
  textAlign: 'center',
  marginBottom: '3rem'
});

const MainTitle = styled(Typography)({
  fontFamily: '"Darker Grotesque", "Space Grotesk", sans-serif',
  fontSize: '3.2rem',
  fontWeight: 800,
  color: '#1e293b',
  marginBottom: '0.5rem',
  letterSpacing: '-0.03em',
  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
});

const Subtitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#64748b',
  fontWeight: 400
});

const MetricsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  marginBottom: '4rem',
  maxWidth: '1200px',
  margin: '0 auto 4rem'
});

const MetricCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid #e2e8f0',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
  }
});

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#64748b',
  textAlign: 'center',
  marginBottom: '0.5rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
});

const MetricValue = styled(Typography)<{ color?: string }>(({ color }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.25rem',
  fontWeight: 700,
  color: color || '#1e293b',
  textAlign: 'center',
  lineHeight: 1.2
}));

const ChartSection = styled(Box)({
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '3rem 2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid #e2e8f0',
  maxWidth: '1000px',
  margin: '0 auto'
});

const ChartTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  textAlign: 'center',
  marginBottom: '2rem'
});

const ChartDescription = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#64748b',
  textAlign: 'center',
  lineHeight: 1.6,
  marginTop: '2rem',
  maxWidth: '800px',
  margin: '2rem auto 0'
});

interface MetricCardProps {
  label: string;
  value: string;
  color?: string;
}

const MetricCardComponent = ({ label, value, color }: MetricCardProps) => (
  <MetricCard>
    <CardContent sx={{ padding: 0 }}>
      <MetricLabel>{label}</MetricLabel>
      <MetricValue color={color}>{value}</MetricValue>
    </CardContent>
  </MetricCard>
);

interface GoogleAdsPortfolioProps {
  data?: GoogleAdsPortfolioData;
}

const GoogleAdsPortfolio = ({ data }: GoogleAdsPortfolioProps) => {
  // Default data if none provided
  const portfolioData: GoogleAdsPortfolioData = data || {
    totalBudget: '₹27,812,351.10',
    totalRevenue: '₹318,600,000',
    overallROAS: '11.45x',
    campaigns: [
      { name: 'GoIreland', roas: 16.4 },
      { name: 'GoFrance', roas: 8.6 },
      { name: 'GoUK', roas: 7.0 }
    ]
  };

  const chartData = portfolioData.campaigns.map(campaign => campaign.roas);
  const chartLabels = portfolioData.campaigns.map(campaign => campaign.name);

  return (
    <PortfolioContainer>
      <HeaderSection>
        <MainTitle>Campaign Performance Portfolio</MainTitle>
        <Subtitle>A showcase of successful budget management and strategic optimization.</Subtitle>
      </HeaderSection>

      <MetricsGrid>
        <MetricCardComponent 
          label="Total Budget" 
          value={portfolioData.totalBudget}
          color="#dc2626"
        />
        <MetricCardComponent 
          label="Total Revenue" 
          value={portfolioData.totalRevenue}
          color="#16a34a"
        />
        <MetricCardComponent 
          label="Overall ROAS" 
          value={portfolioData.overallROAS}
          color="#ea580c"
        />
      </MetricsGrid>

      <ChartSection>
        <ChartTitle>Return on Ad Spend (ROAS) Comparison</ChartTitle>
        
        <Box sx={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center' }}>
          <BarChart
            width={600}
            height={350}
            series={[
              {
                data: chartData,
                color: '#f59e0b'
              }
            ]}
            xAxis={[{
              data: chartLabels,
              scaleType: 'band',
              tickLabelStyle: {
                fontSize: 14,
                fontFamily: '"Inter", sans-serif',
                fill: '#64748b'
              }
            }]}
            yAxis={[{
              tickLabelStyle: {
                fontSize: 12,
                fontFamily: '"Inter", sans-serif',
                fill: '#64748b'
              },
              label: 'Return on Ad Spend (ROAS)',
              labelStyle: {
                fontSize: 14,
                fontFamily: '"Inter", sans-serif',
                fill: '#1e293b'
              }
            }]}
            margin={{ left: 80, right: 30, top: 30, bottom: 60 }}
            slotProps={{
              bar: {
                style: {
                  cursor: 'pointer'
                }
              }
            }}
          />
        </Box>

        <ChartDescription>
          This chart compares the ROAS for each campaign, highlighting the efficiency of ad spend. 
          The GoIreland campaign demonstrates an exceptionally high return, showcasing the success of 
          its highly targeted strategy.
        </ChartDescription>
      </ChartSection>
    </PortfolioContainer>
  );
};

export default GoogleAdsPortfolio;