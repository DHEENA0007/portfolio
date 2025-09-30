import { Box, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const DashboardContainer = styled(Box)({
  backgroundColor: '#f8f9fa',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '2rem 0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#1e3a5f',
  textAlign: 'center',
  marginBottom: '1.5rem'
});

const DashboardDescription = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#64748b',
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '700px',
  margin: '0 auto 3rem',
  lineHeight: 1.6
});

const PhasesContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
});

const PhaseCard = styled(Card)<{ accentColor: string }>(({ accentColor }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
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

const PhaseHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem'
});

const PhaseNumber = styled(Box)<{ backgroundColor: string }>(({ backgroundColor }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor,
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.25rem',
  fontWeight: 700,
  marginRight: '1rem'
}));

const PhaseTitle = styled(Typography)<{ titleColor: string }>(({ titleColor }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: titleColor
}));

const BulletList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
});

const BulletPoint = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#64748b',
  lineHeight: 1.5,
  position: 'relative',
  paddingLeft: '1rem',
  '&::before': {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '#64748b',
    fontWeight: 'bold'
  }
});

interface PhaseCardProps {
  phaseNumber: string;
  title: string;
  items: string[];
  accentColor: string;
  titleColor: string;
  numberBackgroundColor: string;
}

const PhaseCardComponent = ({ 
  phaseNumber, 
  title, 
  items, 
  accentColor, 
  titleColor, 
  numberBackgroundColor 
}: PhaseCardProps) => (
  <PhaseCard accentColor={accentColor}>
    <PhaseHeader>
      <PhaseNumber backgroundColor={numberBackgroundColor}>
        {phaseNumber}
      </PhaseNumber>
      <PhaseTitle titleColor={titleColor}>
        {title}
      </PhaseTitle>
    </PhaseHeader>
    
    <BulletList>
      {items.map((item, index) => (
        <BulletPoint key={index}>
          {item}
        </BulletPoint>
      ))}
    </BulletList>
  </PhaseCard>
);

const phasesData = [
  {
    phaseNumber: '1',
    title: 'Phase I: Audit & Strategy',
    items: [
      'Technical Audit (Crawlability, Indexing).',
      'High-Intent Keyword Mapping.',
      'Competitor Gap Analysis.'
    ],
    accentColor: '#1e3a5f',
    titleColor: '#8b5cf6',
    numberBackgroundColor: '#1e3a5f'
  },
  {
    phaseNumber: '2',
    title: 'Phase II: Monitoring & Iteration',
    items: [
      'Daily Rank Tracking & Analysis.',
      'GA/GSC Reporting & Diagnosis.',
      'A/B Testing Titles & Descriptions.'
    ],
    accentColor: '#f59e0b',
    titleColor: '#1e3a5f',
    numberBackgroundColor: '#f59e0b'
  }
];

const SEOFrameworkDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        My 2-Phase Strategic SEO Framework
      </DashboardTitle>
      
      <DashboardDescription>
        This concise framework outlines the strategic bookends of effective SEO: identifying opportunities and rigorously 
        tracking outcomes.
      </DashboardDescription>
      
      <PhasesContainer>
        {phasesData.map((phase, index) => (
          <PhaseCardComponent
            key={index}
            phaseNumber={phase.phaseNumber}
            title={phase.title}
            items={phase.items}
            accentColor={phase.accentColor}
            titleColor={phase.titleColor}
            numberBackgroundColor={phase.numberBackgroundColor}
          />
        ))}
      </PhasesContainer>
    </DashboardContainer>
  );
};

export default SEOFrameworkDashboard;