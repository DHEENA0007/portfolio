import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';

const DashboardContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem'
  }
}));

const DashboardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"PP Neue Montreal", "Outfit", sans-serif',
  fontSize: '2.8rem',
  fontWeight: 700,
  color: '#2d1b4e',
  textAlign: 'center',
  marginBottom: '1.5rem',
  letterSpacing: '-0.02em',
  background: 'linear-gradient(135deg, #8b7ab8 0%, #7b6ba8 50%, #6b5b98 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    marginBottom: '1rem'
  }
}));

const DashboardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Manrope", "Inter", sans-serif',
  fontSize: '1rem',
  color: '#6b5b98',
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '800px',
  margin: '0 auto 3rem',
  lineHeight: 1.6,
  fontWeight: 400,
  letterSpacing: '0.005em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: '2rem',
    lineHeight: 1.5
  }
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  margin: '0 auto',
  maxWidth: '1000px',
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
    borderRadius: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    borderRadius: '12px'
  }
}));

const LegendContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.5rem'
  }
}));

const LegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});

const LegendColor = styled(Box)<{ color: string }>(({ color }) => ({
  width: '16px',
  height: '16px',
  backgroundColor: color,
  borderRadius: '3px'
}));

const LegendText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Lato", sans-serif',
  fontSize: '0.875rem',
  color: '#6b5b98',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
}));

// Chart data
const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const currentYearData = [1100, 1200, 1050, 1800, 1500, 1750, 2500, 2700, 2100, 1600];
const baselineData = [500, 700, 850, 600, 650, 750, 850, 950, 1100, 700];

const TrafficImpactDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <DashboardContainer>
      <DashboardTitle>
        Traffic Impact Analysis
      </DashboardTitle>
      
      <DashboardDescription>
        The strategic technical and architectural optimizations implemented led to significantly higher traffic volume and less 
        dramatic seasonality compared to the previous year's baseline. The large spikes demonstrate successful indexation 
        and organic keyword penetration.
      </DashboardDescription>
      
      <ChartContainer>
        <LegendContainer>
          <LegendItem>
            <LegendColor color="#ef4444" />
            <LegendText>Current Year (My Work)</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#6366f1" />
            <LegendText>Previous Year (Baseline)</LegendText>
          </LegendItem>
        </LegendContainer>
        
        <Box sx={{ 
          width: '100%', 
          height: { xs: '350px', md: '450px' },
          display: 'flex', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <BarChart
            width={isMobile ? 325 : isTablet ? 700 : 900}
            height={isMobile ? 300 : 450}
            series={[
              {
                data: currentYearData,
                label: 'Current Year (My Work)',
                color: '#ef4444',
                id: 'currentYear'
              },
              {
                data: baselineData,
                label: 'Previous Year (Baseline)',
                color: '#6366f1',
                id: 'baseline'
              }
            ]}
            xAxis={[
              {
                scaleType: 'band',
                data: months,
                tickLabelStyle: {
                  fontSize: isMobile ? 10 : 12,
                  fill: '#6b5b98',
                  fontFamily: '"Inter", sans-serif'
                }
              }
            ]}
            yAxis={[
              {
                label: 'Users (K)',
                labelStyle: {
                  fontSize: isMobile ? 10 : 12,
                  fill: '#6b5b98',
                  fontFamily: '"Inter", sans-serif'
                },
                tickLabelStyle: {
                  fontSize: isMobile ? 9 : 12,
                  fill: '#6b5b98',
                  fontFamily: '"Inter", sans-serif'
                },
                max: 3000,
                tickNumber: isMobile ? 4 : 6
              }
            ]}
            grid={{ horizontal: true }}
            margin={{ 
              left: isMobile ? 40 : 80,
              right: isMobile ? 20 : 50,
              top: isMobile ? 30 : 50,
              bottom: isMobile ? 60 : 80
            }}
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
      </ChartContainer>
    </DashboardContainer>
  );
};

export default TrafficImpactDashboard;