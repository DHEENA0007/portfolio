import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SectionContainer = styled(Box)({
  backgroundColor: '#ffffff',
  padding: '4rem 2rem',
  position: 'relative'
});

const ContentWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto'
});

const SectionGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
  gap: '4rem',
  marginTop: '3rem'
});

const SubSection = styled(Box)({
  backgroundColor: '#f8f9fa',
  borderRadius: '20px',
  padding: '3rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
  }
});

const SubSectionTitle = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#2563eb',
  marginBottom: '2rem',
  textAlign: 'center',
  position: 'relative',
  letterSpacing: '0.05em',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: '#2563eb',
    borderRadius: '2px'
  }
});

const CertificationItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '1.5rem',
  '&:last-child': {
    marginBottom: 0
  }
});

const IconWrapper = styled(Box)({
  marginRight: '1rem',
  marginTop: '0.1rem',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: '#2563eb'
  }
});

const EducationHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem'
});

const EducationIconWrapper = styled(Box)({
  marginRight: '1rem',
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: '#2563eb'
  }
});

const CertificationText = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#333333',
  lineHeight: 1.6,
  fontWeight: 500
});

const EducationTitle = styled(Typography)({
  fontFamily: '"Outfit", sans-serif',
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#333333',
  marginBottom: '0.5rem',
  letterSpacing: '0.02em'
});

const EducationDetails = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  color: '#666666',
  lineHeight: 1.6,
  marginBottom: '0.5rem'
});

const GPAText = styled(Typography)({
  fontFamily: '"Caveat", cursive',
  fontSize: '1.2rem',
  color: '#2563eb',
  fontWeight: 600
});

const certifications = [
  {
    text: 'Ongoing Data Analytics Training (Python, SQL, Power BI)',
    icon: AnalyticsIcon
  },
  {
    text: 'Google Analytics Certification',
    icon: TrendingUpIcon
  },
  {
    text: 'Google Ads Certification',
    icon: CampaignIcon
  }
];

const CertificationsEducationSection = () => {
  return (
    <SectionContainer id="certifications-education">
      <ContentWrapper>
        <SectionGrid>
          <SubSection>
            <SubSectionTitle>
              CERTIFICATIONS
            </SubSectionTitle>
            <Stack spacing={1}>
              {certifications.map((certification, index) => {
                const IconComponent = certification.icon;
                return (
                  <CertificationItem key={index}>
                    <IconWrapper>
                      <IconComponent />
                    </IconWrapper>
                    <CertificationText>
                      {certification.text}
                    </CertificationText>
                  </CertificationItem>
                );
              })}
            </Stack>
          </SubSection>

          <SubSection>
            <SubSectionTitle>
              EDUCATION
            </SubSectionTitle>
            <Box>
              <EducationHeader>
                <EducationIconWrapper>
                  <SchoolIcon />
                </EducationIconWrapper>
                <Box>
                  <EducationTitle>
                    Bachelor of Computer Science and Technology
                  </EducationTitle>
                </Box>
              </EducationHeader>
              <EducationDetails>
                SNS College of Engineering (2020 - 2024)
              </EducationDetails>
              <GPAText>
                Cumulative GPA: 8.4
              </GPAText>
            </Box>
          </SubSection>
        </SectionGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default CertificationsEducationSection;