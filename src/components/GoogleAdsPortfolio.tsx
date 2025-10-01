import { Box, Typography, Card, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import type { GoogleAdsPortfolioData } from './GoogleAdsPortfolioMockData';
import { useMediaQuery, useTheme } from '@mui/material';

const PortfolioContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
  padding: '4rem 2rem',
  borderRadius: '16px',
  margin: '0',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem'
  }
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '3rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2rem'
  }
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Darker Grotesque", "Space Grotesk", sans-serif',
  fontSize: '3.2rem',
  fontWeight: 800,
  color: '#1e293b',
  marginBottom: '0.5rem',
  letterSpacing: '-0.03em',
  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem'
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#64748b',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem'
  }
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
  color: '#64748b',
  textAlign: 'center',
  marginBottom: '0.5rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem'
  }
}));

const MetricValue = styled(Typography)<{ color?: string }>(({ color, theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.25rem',
  fontWeight: 700,
  color: color || '#1e293b',
  textAlign: 'center',
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem'
  }
}));

const ChartSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '3rem 2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  maxWidth: '1000px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem',
    borderRadius: '16px'
  }
}));

const ChartTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e293b',
  textAlign: 'center',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem'
  }
}));

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
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
        
        <Box sx={{ 
          width: '100%', 
          height: { xs: '300px', md: '400px' },
          display: 'flex', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <BarChart
            width={isMobile ? 350 : 600} // Responsive width: mobile vs desktop
            height={isMobile ? 280 : 350} // Responsive height: mobile vs desktop
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
                fontSize: isMobile ? 10 : 14, // Mobile: 10px, Desktop: 14px
                fontFamily: '"Inter", sans-serif',
                fill: '#64748b'
              }
            }]}
            yAxis={[{
              tickLabelStyle: {
                fontSize: isMobile ? 10 : 12, // Mobile: 10px, Desktop: 12px
                fontFamily: '"Inter", sans-serif',
                fill: '#64748b'
              },
              label: 'ROAS',
              labelStyle: {
                fontSize: isMobile ? 12 : 14, // Mobile: 12px, Desktop: 14px
                fontFamily: '"Inter", sans-serif',
                fill: '#1e293b'
              }
            }]}
            margin={{ 
              left: isMobile ? 8 : 80,    // Mobile: 8px, Desktop: 80px
              right: isMobile ? 50 : 30,   // Mobile: 50px, Desktop: 30px
              top: isMobile ? 20 : 30,     // Mobile: 20px, Desktop: 30px
              bottom: isMobile ? 40 : 60   // Mobile: 40px, Desktop: 60px
            }}
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