import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';

const DashboardContainer = styled(Box)({
  backgroundColor: '#f8f9fa',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '1rem 0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"PP Neue Montreal", "Outfit", sans-serif',
  fontSize: '2.8rem',
  fontWeight: 700,
  color: '#1e293b',
  textAlign: 'center',
  marginBottom: '1.5rem',
  letterSpacing: '-0.02em',
  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
});

const DashboardDescription = styled(Typography)({
  fontFamily: '"Manrope", "Inter", sans-serif',
  fontSize: '1rem',
  color: '#64748b',
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '800px',
  margin: '0 auto 3rem',
  lineHeight: 1.6,
  fontWeight: 400,
  letterSpacing: '0.005em'
});

const ChartContainer = styled(Box)({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
  margin: '0 auto',
  maxWidth: '1000px'
});

const LegendContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  marginBottom: '2rem'
});

const LegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});

const LegendColor = styled(Box)<{ color: string }>(({ color }) => ({
  width: '16px',
  height: '3px',
  backgroundColor: color,
  borderRadius: '2px'
}));

const LegendText = styled(Typography)({
  fontFamily: '"Lato", sans-serif',
  fontSize: '0.875rem',
  color: '#64748b',
  fontWeight: 500
});

// Chart data
const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const currentYearData = [1100, 1200, 1050, 1800, 1500, 1750, 2500, 2700, 2100, 1600];
const baselineData = [500, 700, 850, 600, 650, 750, 850, 950, 1100, 700];

const TrafficImpactDashboard = () => {
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
            <LegendText>Current Year (Your Work)</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#6366f1" />
            <LegendText>Previous Year (Baseline)</LegendText>
          </LegendItem>
        </LegendContainer>
        
        <LineChart
          width={900}
          height={400}
          series={[
            {
              data: currentYearData,
              label: 'Current Year (Your Work)',
              color: '#ef4444',
              curve: 'linear'
            },
            {
              data: baselineData,
              label: 'Previous Year (Baseline)',
              color: '#6366f1',
              curve: 'linear'
            }
          ]}
          xAxis={[
            {
              scaleType: 'point',
              data: months,
              tickLabelStyle: {
                fontSize: 12,
                fill: '#64748b'
              }
            }
          ]}
          yAxis={[
            {
              label: 'Users (K)',
              labelStyle: {
                fontSize: 12,
                fill: '#64748b'
              },
              tickLabelStyle: {
                fontSize: 12,
                fill: '#64748b'
              },
              max: 3000,
              tickNumber: 6
            }
          ]}
          grid={{ horizontal: true, vertical: true }}
          margin={{ left: 80, right: 50, top: 50, bottom: 80 }}
          sx={{
            '& .MuiLineElement-root': {
              strokeWidth: 3
            },
            '& .MuiMarkElement-root': {
              r: 4,
              strokeWidth: 2,
              stroke: '#ffffff'
            },
            '& .MuiChartsGrid-line': {
              stroke: '#e2e8f0',
              strokeWidth: 1
            }
          }}
        />
      </ChartContainer>
    </DashboardContainer>
  );
};

export default TrafficImpactDashboard;