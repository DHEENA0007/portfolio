import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import BalanceOutlined from '@mui/icons-material/BalanceOutlined';
import TrendingUpOutlined from '@mui/icons-material/TrendingUpOutlined';
import WarningOutlined from '@mui/icons-material/WarningOutlined';
import PageviewOutlined from '@mui/icons-material/PageviewOutlined';
import EmojiObjectsOutlined from '@mui/icons-material/EmojiObjectsOutlined';
import PanToolOutlined from '@mui/icons-material/PanToolOutlined';
import InsightsOutlined from '@mui/icons-material/InsightsOutlined';
import CountUp from './CountUpAnimation';

const DashboardContainer = styled(Box)({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '4rem 2rem',
  borderRadius: '16px',
  margin: '0',
  position: 'relative',
  overflow: 'hidden'
});

const MainTitle = styled(Typography)({
  fontFamily: '"Clash Display", "Space Grotesk", sans-serif',
  fontSize: '3rem',
  fontWeight: 600,
  color: '#2d1b4e',
  textAlign: 'center',
  marginBottom: '4rem',
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  background: 'linear-gradient(135deg, #8b7ab8 0%, #7b6ba8 50%, #6b5b98 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  '@media (max-width: 768px)': {
    fontSize: '2.2rem',
    marginBottom: '3rem'
  }
});

const PhasesContainer = styled(Stack)({
  maxWidth: '1400px',
  margin: '0 auto',
  gap: '3rem',
  '@media (max-width: 1024px)': {
    gap: '2rem'
  }
});

const PhaseSection = styled(Box)<{ accentColor: string }>(({ accentColor }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2.5rem',
  position: 'relative',
  border: `1px solid rgba(251, 146, 60, 0.2)`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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

const PhaseTitle = styled(Typography)<{ titleColor: string }>(({ titleColor }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: titleColor,
  marginBottom: '0.5rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
}));

const PhaseSubtitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#6b5b98',
  marginBottom: '2rem',
  fontWeight: 400
});

const MetricsContainer = styled(Stack)({
  gap: '1.5rem',
  marginBottom: '2rem'
});

const MetricItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem'
  }
});

const MetricValue = styled(Typography)<{ valueColor: string }>(({ valueColor }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: valueColor,
  lineHeight: 1,
  '@media (max-width: 768px)': {
    fontSize: '2rem'
  }
}));

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#2d1b4e',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '0.9rem'
  }
});

const IconContainer = styled(Box)<{ iconColor: string }>(({ iconColor }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  color: iconColor,
  fontSize: '2rem',
  '@media (max-width: 768px)': {
    width: '50px',
    height: '50px',
    fontSize: '1.5rem'
  }
}));

const DescriptionText = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.9rem',
  color: '#6b5b98',
  lineHeight: 1.6,
  fontStyle: 'italic'
});

const VisualElement = styled(Box)<{ elementColor: string }>(({ elementColor }) => ({
  position: 'absolute',
  right: '2rem',
  top: '50%',
  transform: 'translateY(-50%)',
  color: elementColor,
  fontSize: '4rem',
  opacity: 0.3,
  '@media (max-width: 768px)': {
    display: 'none'
  }
}));

interface MetricDisplayProps {
  value: string;
  label: string;
  color: string;
  icon: React.ReactNode;
}

const MetricDisplay = ({ value, label, color, icon }: MetricDisplayProps) => (
  <MetricItem>
    <IconContainer iconColor={color}>
      {icon}
    </IconContainer>
    <Box>
      <MetricValue valueColor={color}>{value}</MetricValue>
      <MetricLabel>{label}</MetricLabel>
    </Box>
  </MetricItem>
);

const StrategicRebalancingDashboard = () => {
  return (
    <DashboardContainer>
      <MainTitle>
        Strategic Rebalancing Act
      </MainTitle>
      
      <PhasesContainer direction={{ xs: 'column', lg: 'row' }} spacing={3}>
        {/* Phase 1: Observation */}
        <PhaseSection accentColor="#f59e0b">
          <VisualElement elementColor="#f59e0b">
            <BalanceOutlined fontSize="inherit" />
          </VisualElement>
          
          <PhaseTitle titleColor="#f59e0b">My Observation</PhaseTitle>
          <PhaseSubtitle>(The Imbalance)</PhaseSubtitle>
          
          <MetricsContainer>
            <MetricDisplay
              value="143K"
              label="New Users"
              color="#f59e0b"
              icon={<PageviewOutlined />}
            />
            <MetricDisplay
              value="High CAC"
              label="98K New Users"
              color="#ef4444"
              icon={<WarningOutlined />}
            />
          </MetricsContainer>
          
          <DescriptionText>
            I identified a premature reliance on Paid Search, leading to high Customer Acquisition Cost (CAC)
          </DescriptionText>
        </PhaseSection>

        {/* Phase 2: Insight */}
        <PhaseSection accentColor="#10b981">
          <VisualElement elementColor="#10b981">
            <EmojiObjectsOutlined fontSize="inherit" />
          </VisualElement>
          
          <PhaseTitle titleColor="#10b981">My Insight</PhaseTitle>
          <PhaseSubtitle>(The Opportunity Gap)</PhaseSubtitle>
          
          <MetricsContainer>
            <MetricDisplay
              value="98K"
              label="New Users"
              color="#10b981"
              icon={<InsightsOutlined />}
            />
            <MetricDisplay
              value="45K"
              label="New User Gap"
              color="#8b5cf6"
              icon={<TrendingUpOutlined />}
            />
          </MetricsContainer>
          
          <DescriptionText>
            Untapped, Cost-Effective Potential
          </DescriptionText>
          <DescriptionText sx={{ mt: 1 }}>
            Engaged a data-driven strategy to strategy optimization and organic growth
          </DescriptionText>
        </PhaseSection>

        {/* Phase 3: Projected Impact */}
        <PhaseSection accentColor="#3b82f6">
          <VisualElement elementColor="#3b82f6">
            <PanToolOutlined fontSize="inherit" />
          </VisualElement>
          
          <PhaseTitle titleColor="#3b82f6">My Projected Impact</PhaseTitle>
          <PhaseSubtitle>(The Balanced Future)</PhaseSubtitle>
          
          <MetricsContainer>
            <MetricDisplay
              value="98K"
              label="New Users"
              color="#3b82f6"
              icon={<TrendingUpOutlined />}
            />
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
              <Box>
                <CountUp end={15} prefix="-" suffix="%">
                  {(animatedValue) => (
                    <MetricValue valueColor="#10b981">{animatedValue}</MetricValue>
                  )}
                </CountUp>
                <MetricLabel>Overall CAC</MetricLabel>
              </Box>
              <Box>
                <CountUp end={40} prefix="+" suffix="%">
                  {(animatedValue) => (
                    <MetricValue valueColor="#f59e0b">{animatedValue}</MetricValue>
                  )}
                </CountUp>
                <MetricLabel>Organic Traffic</MetricLabel>
              </Box>
              <Box>
                <CountUp end={1.2} prefix="+$" suffix="M" decimals={1}>
                  {(animatedValue) => (
                    <MetricValue valueColor="#8b5cf6">{animatedValue}</MetricValue>
                  )}
                </CountUp>
                <MetricLabel>Annual Revenue</MetricLabel>
              </Box>
            </Stack>
          </MetricsContainer>
          
          <DescriptionText>
            My strategy projects significant cost reduction and revenue growth
          </DescriptionText>
        </PhaseSection>
      </PhasesContainer>
    </DashboardContainer>
  );
};

export default StrategicRebalancingDashboard;