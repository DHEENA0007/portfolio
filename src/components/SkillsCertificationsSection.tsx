import { Box, Typography, Card, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { 
  TableauIcon, 
  SEOIcon, 
  GoogleAdsIcon, 
  ContentStrategyIcon, 
  GoogleAnalyticsIcon, 
  GoogleTagManagerIcon, 
  PPCOptimizationIcon 
} from './icons/CustomIcons';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '2rem 2rem',
  position: 'relative',
  marginTop: '-80px',
  paddingTop: 'calc(2rem + 80px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
    borderRadius: '0 0 50% 50% / 0 0 100% 100%',
    zIndex: 1
  },
  // Ultra-wide short screens
  '@media (min-aspect-ratio: 5/2)': {
    padding: '1.5rem 2rem',
    marginTop: '-60px',
    paddingTop: 'calc(1.5rem + 60px)',
    '&::before': {
      height: '60px'
    }
  },
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1rem',
    marginTop: '-60px',
    paddingTop: 'calc(2rem + 60px)',
    '&::before': {
      height: '60px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem',
    marginTop: '-40px',
    paddingTop: 'calc(1.5rem + 40px)',
    '&::before': {
      height: '50px'
    }
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2
});

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Dancing Script", cursive',
  fontSize: '4.5rem',
  fontWeight: 700,
  color: '#8b7ab8',
  textAlign: 'center',
  marginBottom: '1rem',
  letterSpacing: '0.02em',
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem'
  }
}));

const SkillChipsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '5rem',
  maxWidth: '900px',
  margin: '0 auto 5rem'
});

const SkillChip = styled(Chip)({
  fontFamily: '"Poppins", sans-serif',
  fontSize: '0.95rem',
  fontWeight: 600,
  padding: '0.75rem 1.5rem',
  height: 'auto',
  borderRadius: '25px',
  border: '2px solid #1a1a1a',
  backgroundColor: 'transparent',
  color: '#1a1a1a',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#8b7ab8',
    borderColor: '#8b7ab8',
    color: '#ffffff',
    transform: 'translateY(-2px)'
  },
  '& .MuiChip-label': {
    padding: '0'
  }
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

const SectionTitle = styled(Typography)({
  fontFamily: '"Satisfy", cursive',
  fontSize: '3rem',
  fontWeight: 400,
  color: '#8b7ab8',
  marginBottom: '2rem',
  letterSpacing: '0.02em'
});

const ToolsCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem'
});

const ToolCategory = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
});

const CategoryTitle = styled(Typography)({
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#1a1a1a',
  letterSpacing: '0.12em',
  textTransform: 'uppercase'
});

const ToolsGrid = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem'
});

const ToolItem = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.75rem 1.25rem',
  backgroundColor: '#ffffff',
  borderRadius: '50px',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  animation: 'fadeInUp 0.6s ease-out backwards, float 3s ease-in-out infinite',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 16px rgba(251, 146, 60, 0.15)',
    borderColor: 'rgba(251, 146, 60, 0.3)',
    animationPlayState: 'paused'
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(-8px)'
    }
  }
});

const ToolIcon = styled(Box)({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& img': {
    width: '24px',
    height: '24px',
    objectFit: 'contain'
  },
  '& svg': {
    width: '24px',
    height: '24px'
  }
});

const ToolLabel = styled(Typography)({
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#1a1a1a',
  whiteSpace: 'nowrap'
});

const CertificationCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  marginBottom: '1.5rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  }
});

const CertHeader = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem'
});

const CertIconWrapper = styled(Box)({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: '#8b7ab8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    color: '#ffffff'
  }
});

const CertContent = styled(Box)({
  flex: 1
});

const CertTitle = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#1a1a1a',
  marginBottom: '0.25rem',
  lineHeight: 1.3
});

const CertDate = styled(Typography)({
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.875rem',
  color: '#666666'
});



const skillCategories = [
  'Python',
  'Pandas',
  'NumPy',
  'Excel',
  'Google Sheets',
  'SQL',
  'Power BI',
  'Tableau',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'LinkedIn Marketing',
  'YouTube Marketing',
  'Content Strategy',
  'Google Analytics 4',
  'Google Tag Manager'
];

const toolsData = {
  programmingAnalytics: [
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png' },
    { name: 'Pandas', icon: 'https://img.icons8.com/color/96/pandas.png' },
    { name: 'NumPy', icon: 'https://img.icons8.com/color/96/numpy.png' },
    { name: 'Excel', icon: 'https://img.icons8.com/fluency/96/microsoft-excel-2019.png' },
    { name: 'Google Sheets', icon: 'https://img.icons8.com/color/96/google-sheets.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/sql.png' },
    { name: 'Power BI', icon: 'https://img.icons8.com/fluency/96/power-bi-2021.png' },
    { name: 'Tableau', icon: 'custom', customIcon: TableauIcon }
  ],
  digitalMarketing: [
    { name: 'SEO', icon: 'custom', customIcon: SEOIcon },
    { name: 'Google Ads', icon: 'custom', customIcon: GoogleAdsIcon },
    { name: 'Bing Ads', icon: 'https://img.icons8.com/fluency/96/bing.png' },
    { name: 'Meta Ads', icon: 'https://img.icons8.com/fluency/96/facebook.png' },
    { name: 'LinkedIn Marketing', icon: 'https://img.icons8.com/fluency/96/linkedin.png' },
    { name: 'YouTube Ads', icon: 'https://img.icons8.com/color/96/youtube-play.png' },
    { name: 'Content Strategy', icon: 'custom', customIcon: ContentStrategyIcon }
  ],
  webAnalyticsPPC: [
    { name: 'Google Analytics 4', icon: 'custom', customIcon: GoogleAnalyticsIcon },
    { name: 'Google Tag Manager', icon: 'custom', customIcon: GoogleTagManagerIcon },
    { name: 'Keyword Research', icon: 'https://img.icons8.com/fluency/96/search.png' },
    { name: 'PPC Optimization', icon: 'custom', customIcon: PPCOptimizationIcon }
  ]
};

const certifications = [
  {
    title: 'Ongoing Data Analytics Training (Python, SQL, Power BI)',
    date: 'In Progress',
    icon: AnalyticsIcon
  },
  {
    title: 'Google Analytics Certification',
    date: 'Certified',
    icon: TrendingUpIcon
  },
  {
    title: 'Google Ads Certification',
    date: 'Certified',
    icon: CampaignIcon
  }
];

const SkillsCertificationsSection = () => {
  return (
    <SectionContainer id="skills">
      <ContentWrapper>
        <MainTitle>*skills.</MainTitle>
        
        <SkillChipsContainer>
          {skillCategories.map((skill, index) => (
            <SkillChip key={index} label={skill} />
          ))}
        </SkillChipsContainer>

        <ContentGrid>
          {/* Left Column - Tools */}
          <Box>
            <SectionTitle>tools.</SectionTitle>
            
            <ToolsCard>
              <ToolCategory>
                <CategoryTitle>Programming Analytics</CategoryTitle>
                <ToolsGrid>
                  {toolsData.programmingAnalytics.map((tool, index) => (
                    <ToolItem 
                      key={index} 
                      sx={{ 
                        animationDelay: `${index * 0.1}s, ${index * 0.2}s` 
                      }}
                    >
                      <ToolIcon>
                        {tool.icon === 'custom' && tool.customIcon ? (
                          <tool.customIcon />
                        ) : (
                          <img src={tool.icon} alt={tool.name} />
                        )}
                      </ToolIcon>
                      <ToolLabel>{tool.name}</ToolLabel>
                    </ToolItem>
                  ))}
                </ToolsGrid>
              </ToolCategory>

              <ToolCategory>
                <CategoryTitle>Digital Marketing</CategoryTitle>
                <ToolsGrid>
                  {toolsData.digitalMarketing.map((tool, index) => (
                    <ToolItem 
                      key={index} 
                      sx={{ 
                        animationDelay: `${index * 0.1}s, ${index * 0.2}s` 
                      }}
                    >
                      <ToolIcon>
                        {tool.icon === 'custom' && tool.customIcon ? (
                          <tool.customIcon />
                        ) : (
                          <img src={tool.icon} alt={tool.name} />
                        )}
                      </ToolIcon>
                      <ToolLabel>{tool.name}</ToolLabel>
                    </ToolItem>
                  ))}
                </ToolsGrid>
              </ToolCategory>

              <ToolCategory>
                <CategoryTitle>Web Analytics & PPC</CategoryTitle>
                <ToolsGrid>
                  {toolsData.webAnalyticsPPC.map((tool, index) => (
                    <ToolItem 
                      key={index} 
                      sx={{ 
                        animationDelay: `${index * 0.1}s, ${index * 0.2}s` 
                      }}
                    >
                      <ToolIcon>
                        {tool.icon === 'custom' && tool.customIcon ? (
                          <tool.customIcon />
                        ) : (
                          <img src={tool.icon} alt={tool.name} />
                        )}
                      </ToolIcon>
                      <ToolLabel>{tool.name}</ToolLabel>
                    </ToolItem>
                  ))}
                </ToolsGrid>
              </ToolCategory>
            </ToolsCard>
          </Box>

          {/* Right Column - Certifications */}
          <Box>
            <SectionTitle>certification.</SectionTitle>
            
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <CertificationCard key={index}>
                  <CertHeader>
                    <CertIconWrapper>
                      <IconComponent />
                    </CertIconWrapper>
                    <CertContent>
                      <CertTitle>{cert.title}</CertTitle>
                      <CertDate>{cert.date}</CertDate>
                    </CertContent>
                  </CertHeader>
                </CertificationCard>
              );
            })}
          </Box>
        </ContentGrid>

      </ContentWrapper>
    </SectionContainer>
  );
};

export default SkillsCertificationsSection;