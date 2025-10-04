import { Box, Typography, Card, Button, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import type { ExperienceEducationSectionProps } from './ExperienceEducationSectionMockData';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '4rem 2rem 6rem 2rem',
  position: 'relative',
  // Ultra-wide short screens
  '@media (min-aspect-ratio: 5/2)': {
    padding: '3rem 2rem 4rem 2rem'
  },
  [theme.breakpoints.down('md')]: {
    padding: '3rem 1rem 5rem 1rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem 4rem 1rem'
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '1400px',
  margin: '0 auto'
});

const ContentGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  [theme.breakpoints.down('lg')]: {
    gap: '3rem'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '3rem'
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Satisfy", cursive',
  fontSize: '3rem',
  fontWeight: 400,
  color: '#1a1a1a',
  marginBottom: '2rem',
  letterSpacing: '0.02em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem'
  }
}));

const ExperienceCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '1.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(139, 122, 184, 0.1)',
  marginBottom: '1.5rem',
  transition: 'all 0.3s ease',
  display: 'flex',
  gap: '1rem',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(139, 122, 184, 0.15)'
  }
});

const CompanyLogo = styled(Avatar)({
  width: '56px',
  height: '56px',
  backgroundColor: '#8b7ab8',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '1.75rem',
    color: '#ffffff'
  }
});

const ExperienceContent = styled(Box)({
  flex: 1,
  minWidth: 0
});

const CompanyName = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#1a1a1a',
  marginBottom: '0.25rem',
  lineHeight: 1.3
});

const Position = styled(Typography)({
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#1a1a1a',
  marginBottom: '0.25rem',
  lineHeight: 1.3
});

const Duration = styled(Typography)({
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.875rem',
  color: '#666666',
  marginBottom: '0.75rem'
});

const Description = styled(Typography)({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontSize: '0.9rem',
  color: '#666666',
  lineHeight: 1.6
});

const EducationCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(139, 122, 184, 0.1)',
  marginBottom: '2rem'
});

const EducationTitle = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#1a1a1a',
  marginBottom: '0.5rem',
  lineHeight: 1.3
});

const EducationDetails = styled(Typography)({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontSize: '1rem',
  color: '#666666',
  marginBottom: '0.5rem'
});

const GPAText = styled(Typography)({
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '1rem',
  color: '#8b7ab8',
  fontWeight: 700
});


const AccoladesContainer = styled(Box)(({ theme }) => ({
  marginTop: '3rem',
  marginBottom: '2rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    marginTop: '2rem'
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center'
  }
}));


const PlayfulText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '3.2rem',
  fontWeight: 400,
  color: '#8b7ab8',
  marginBottom: '2rem',
  lineHeight: 1.2,
  textAlign: 'left',
  fontStyle: 'italic',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.8rem',
    textAlign: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.4rem'
  }
}));


const LinkedInButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
  color: '#ffffff',
  padding: '24px',
  borderRadius: '24px',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '96px',
  minHeight: '96px',
  width: '96px',
  height: '96px',
  flexShrink: 0,
  border: 'none',
  boxShadow: '0 12px 32px rgba(0, 119, 181, 0.35), 0 4px 16px rgba(0, 0, 0, 0.15)',
  margin: '2rem auto',
  overflow: 'hidden',
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #006399 0%, #004d73 100%)',
    transform: 'translateY(-6px) scale(1.08)',
    boxShadow: '0 16px 40px rgba(0, 119, 181, 0.45), 0 6px 20px rgba(0, 0, 0, 0.2)',
    animation: 'none',
    '&::before': {
      opacity: 1
    }
  },
  '&:active': {
    transform: 'translateY(-3px) scale(1.04)'
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
    position: 'relative',
    zIndex: 1
  },
  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '80px',
    minWidth: '80px',
    minHeight: '80px',
    padding: '20px',
    margin: '1.5rem auto',
    '& .MuiSvgIcon-root': {
      fontSize: '2.5rem'
    }
  }
}));

const QuoteText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Georgia", serif',
  fontSize: '1.1rem',
  color: '#2a2a2a',
  lineHeight: 1.7,
  fontStyle: 'italic',
  marginTop: '0.5rem',
  marginBottom: '1rem',
  paddingLeft: '1rem',
  borderLeft: '3px solid #8b7ab8',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '0.5rem'
  }
}));

const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  experiences,
  education,
  accolades
}) => {
  return (
    <SectionContainer id="experience-education">
      <ContentWrapper>
        <ContentGrid>
          {/* Left Column - Experience */}
          <Box>
            <SectionTitle>experience.</SectionTitle>
            
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id}>
                <CompanyLogo>
                  {exp.logo === 'gostudy-logo' ? (
                    <LocationCityOutlinedIcon />
                  ) : (
                    <BusinessCenterOutlinedIcon />
                  )}
                </CompanyLogo>
                <ExperienceContent>
                  <CompanyName>{exp.company}</CompanyName>
                  <Position>{exp.position}</Position>
                  <Duration>{exp.duration}</Duration>
                  <Description>{exp.description}</Description>
                </ExperienceContent>
              </ExperienceCard>
            ))}
          </Box>

          {/* Right Column - Education & Accolades */}
          <Box>
            <SectionTitle>education.</SectionTitle>
            
            <EducationCard>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <SchoolIcon sx={{ fontSize: '2rem', color: '#8b7ab8' }} />
                <EducationTitle>
                  {education.degree}
                </EducationTitle>
              </Box>
              <EducationDetails>
                {education.institution}
              </EducationDetails>
              <GPAText>
                Cumulative GPA: {education.gpa}
              </GPAText>
            </EducationCard>

            <AccoladesContainer>
              <ContentContainer>
                <PlayfulText>
                  see more about me
                </PlayfulText>
                
                <LinkedInButton
                  href={accolades.linkedinUrl}
                  aria-label="Visit LinkedIn Profile"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.open(accolades.linkedinUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <LinkedInIcon />
                </LinkedInButton>
                <QuoteText>
                  "If you can change your mind, you can change your life." – William James
                </QuoteText>
              </ContentContainer>
            </AccoladesContainer>
          </Box>
        </ContentGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ExperienceEducationSection;