import { Box, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountUp from './CountUpAnimation';

const DashboardContainer = styled(Box)({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"Satoshi", "Inter", sans-serif',
  fontSize: '3rem',
  fontWeight: 700,
  color: '#2d1b4e',
  textAlign: 'center',
  marginBottom: '1rem',
  letterSpacing: '-0.025em',
  background: 'linear-gradient(135deg, #8b7ab8 0%, #7b6ba8 50%, #6b5b98 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
});

const DashboardSubtitle = styled(Typography)({
  fontFamily: '"General Sans", "Inter", sans-serif',
  fontSize: '1.125rem',
  color: '#6b5b98',
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '600px',
  margin: '0 auto 3rem',
  fontWeight: 400,
  letterSpacing: '0.01em'
});

const MetricsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
});

const MetricCard = styled(Card)<{ accentColor: string }>(({ accentColor }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    backgroundColor: accentColor
  }
}));

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#6b5b98',
  marginBottom: '1rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
});

const MetricValue = styled(Typography)<{ valueColor: string }>(({ valueColor }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '3rem',
  fontWeight: 700,
  color: valueColor,
  marginBottom: '1rem',
  lineHeight: 1
}));

const MetricDescription = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#6b5b98',
  lineHeight: 1.5
});

interface MetricCardProps {
  label: string;
  value: { number: number; display: string };
  description: string;
  accentColor: string;
  valueColor: string;
}

const MetricCardComponent = ({ label, value, description, accentColor, valueColor }: MetricCardProps) => (
  <MetricCard accentColor={accentColor}>
    <MetricLabel>{label}</MetricLabel>
    <CountUp 
      end={value.number} 
      decimals={1}
      prefix={value.display.includes('+') ? '+' : ''}
      suffix={value.display.includes('%') ? '%' : value.display.includes('s') ? 's' : ''}
    >
      {(animatedValue) => <MetricValue valueColor={valueColor}>{animatedValue}</MetricValue>}
    </CountUp>
    <MetricDescription>{description}</MetricDescription>
  </MetricCard>
);

const metricsData = [
  {
    label: 'Active Users Growth (YOY)',
    value: { number: 63.4, display: '+63.4%' },
    description: 'From 183K (Baseline) to 299K (Current).',
    accentColor: '#ef4444',
    valueColor: '#ef4444'
  },
  {
    label: 'New Users Growth (YOY)',
    value: { number: 65.7, display: '+65.7%' },
    description: 'Proving strong top-of-funnel reach optimization.',
    accentColor: '#8b5cf6',
    valueColor: '#8b5cf6'
  },
  {
    label: 'Avg. Engagement Time Change (YOY)',
    value: { number: 49, display: '49s' },
    description: 'Sustained high-quality traffic (53s baseline).',
    accentColor: '#f59e0b',
    valueColor: '#f59e0b'
  }
];

const SEOPerformanceDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        SEO Performance Analytics
      </DashboardTitle>
      
      <DashboardSubtitle>
        Driving business growth through technical optimization and content strategy.
      </DashboardSubtitle>
      
      <MetricsGrid>
        {metricsData.map((metric, index) => (
          <MetricCardComponent
            key={index}
            label={metric.label}
            value={metric.value}
            description={metric.description}
            accentColor={metric.accentColor}
            valueColor={metric.valueColor}
          />
        ))}
      </MetricsGrid>
    </DashboardContainer>
  );
};

export default SEOPerformanceDashboard;