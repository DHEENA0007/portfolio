import { Box, Typography, Card, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import type { GoogleAdsPortfolioData } from './GoogleAdsPortfolioMockData';
import { useMediaQuery, useTheme } from '@mui/material';

const PortfolioContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '4rem 2rem',
  borderRadius: '16px',
  margin: '0',
  [theme.breakpoints.down('md')]: { padding: '3rem 1.5rem' },
  [theme.breakpoints.down('sm')]: { padding: '2rem 1rem' }
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '3rem',
  [theme.breakpoints.down('sm')]: { marginBottom: '2rem' }
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Darker Grotesque", "Space Grokest", sans-serif',
  fontSize: '3.2rem',
  fontWeight: 800,
  color: '#2d1b4e',
  marginBottom: '0.5rem',
  letterSpacing: '-0.03em',
  background: 'linear-gradient(135deg, #8b7ab8 0%, #7b6ba8 50%, #6b5b98 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: { fontSize: '2.5rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '2rem' }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#6b5b98',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: { fontSize: '0.9rem' }
}));

const MetricsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  marginBottom: '4rem',
  maxWidth: '1200px',
  margin: '0 auto 4rem',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    marginBottom: '3rem'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1rem',
    marginBottom: '2rem'
  }
}));

const MetricCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    borderRadius: '16px'
  }
}));

const MetricLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#6b5b98',
  textAlign: 'center',
  marginBottom: '0.5rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: { fontSize: '0.75rem' }
}));

const MetricValue = styled(Typography)<{ color?: string }>(({ color, theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.25rem',
  fontWeight: 700,
  color: color || '#2d1b4e',
  textAlign: 'center',
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' }
}));

const ChartSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem 1.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem',
    borderRadius: '16px'
  }
}));

const ChartTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#2d1b4e',
  textAlign: 'center',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: { fontSize: '1.25rem', marginBottom: '1.5rem' }
}));

const ChartDescription = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#6b5b98',
  textAlign: 'center',
  lineHeight: 1.6,
  marginTop: '2rem',
  maxWidth: '800px',
  margin: '2rem auto 0'
});


const CampaignLabelsContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  marginTop: '2rem',
  marginBottom: '1rem',
  [theme.breakpoints.up('md')]: {
    display: 'flex' // Show only on desktop
  }
}));

const CampaignLabelItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem'
});

const CampaignName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#2d1b4e',
  textAlign: 'center'
});

const CampaignROAS = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#f59e0b',
  textAlign: 'center'
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
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
        <ChartTitle>Return on Ad Spend Comparison</ChartTitle>
        
        <Box sx={{ 
          width: '100%', 
          height: isMobile ? '350px' : '450px',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <BarChart
            width={isMobile ? 325 : 800}
            height={isMobile ? 300 : 400}
            series={[{ 
              data: chartData, 
              color: '#f59e0b', 
              label: 'ROAS',
              valueFormatter: (value) => `${value}x`
            }]}
            xAxis={[{
              data: chartLabels,
              scaleType: 'band',
              tickLabelStyle: {
                angle: 0,
                textAnchor: 'middle',
                fontSize: isMobile ? 11 : 14,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fill: '#2d1b4e'
              },
              tickLabelPlacement: 'middle',
              tickPlacement: 'middle'
            }]}
            yAxis={[{
              tickLabelStyle: {
                fontSize: isMobile ? 10 : 12,
                fontFamily: '"Inter", sans-serif',
                fill: '#6b5b98'
              },
              label: 'ROAS',
              labelStyle: {
                fontSize: isMobile ? 14 : 16,
                fontFamily: '"Inter", sans-serif',
                fill: '#2d1b4e',
                fontWeight: '600'
              }
            }]}
            margin={{ 
              left: isMobile ? 10 : 80, 
              right: isMobile ? 20 : 40, 
              top: isMobile ? 30 : 50, 
              bottom: isMobile ? 60 : 80 
            }}
            slotProps={{ 
              bar: { 
                style: { 
                  cursor: 'pointer',
                  borderRadius: isMobile ? '2px' : '4px'
                } 
              }
            }}
            grid={{ vertical: false, horizontal: true }}
            borderRadius={8}
            sx={{
              '& .MuiBarElement-root': {
                rx: 4,
                ry: 4
              },
              '& .MuiChartsGrid-line': {
                stroke: '#e2e8f0',
                strokeWidth: 1
              },
              '& .MuiChartsAxis-line': {
                stroke: '#d1d5db',
                strokeWidth: 1
              },
              '& .MuiChartsAxis-tick': {
                stroke: '#d1d5db',
                strokeWidth: 1
              }
            }}
          />
        </Box>

        {/* Campaign Labels for Desktop Only */}
        <CampaignLabelsContainer>
          {portfolioData.campaigns.map((campaign, index) => (
            <CampaignLabelItem key={index}>
              <CampaignName>{campaign.name}</CampaignName>
              <CampaignROAS>{campaign.roas}x ROAS</CampaignROAS>
            </CampaignLabelItem>
          ))}
        </CampaignLabelsContainer>

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