import { Box, Typography, Card, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  fontSize: '2.8rem',
  fontWeight: 800,
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
  fontFamily: '"Lato", sans-serif',
  fontSize: '1rem',
  color: '#6b5b98',
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '700px',
  margin: '0 auto 3rem',
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: '2rem',
    lineHeight: 1.5
  }
}));

// Desktop Grid Layout
const PhasesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none' // Hide on mobile
  }
}));

// Mobile Stack Layout
const PhasesStack = styled(Stack)(({ theme }) => ({
  display: 'none',
  maxWidth: '600px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'flex' // Show on mobile
  }
}));

const PhaseCard = styled(Card)<{ accentColor: string }>(({ accentColor, theme }) => ({
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
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
    borderRadius: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    borderRadius: '12px'
  }
}));

const PhaseHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem'
  }
}));

const PhaseNumber = styled(Box)<{ backgroundColor: string }>(({ backgroundColor, theme }) => ({
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
  marginRight: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '35px',
    height: '35px',
    fontSize: '1rem',
    marginRight: '0.75rem'
  }
}));

const PhaseTitle = styled(Typography)<{ titleColor: string }>(({ titleColor, theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: titleColor,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem'
  }
}));

const BulletList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.5rem'
  }
}));

const BulletPoint = styled(Typography)(({ theme }) => ({
  fontFamily: '"Lato", sans-serif',
  fontSize: '0.875rem',
  color: '#6b5b98',
  lineHeight: 1.5,
  position: 'relative',
  paddingLeft: '1rem',
  '&::before': {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '#6b5b98',
    fontWeight: 'bold'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    lineHeight: 1.4
  }
}));

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
        Strategic SEO Framework
      </DashboardTitle>
      
      <DashboardDescription>
        This concise framework outlines the strategic bookends of effective SEO: identifying opportunities and rigorously 
        tracking outcomes.
      </DashboardDescription>
      
      {/* Desktop Grid Layout */}
      <PhasesGrid>
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
      </PhasesGrid>

      {/* Mobile Stack Layout */}
      <PhasesStack spacing={2}>
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
      </PhasesStack>
    </DashboardContainer>
  );
};

export default SEOFrameworkDashboard;