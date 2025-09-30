import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  backgroundColor: '#fafafa',
  padding: '8rem 2rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 1rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 1rem'
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '1400px',
  margin: '0 auto'
});

const SkillCategory = styled(Box)({
  marginBottom: '4rem'
});

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  }
}));

const SkillCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '1.5rem',
  border: 'none',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
});

const SkillIcon = styled('img')({
  width: '48px',
  height: '48px',
  objectFit: 'contain',
  marginBottom: '1rem'
});

const CustomSkillIcon = styled(Box)({
  width: '48px',
  height: '48px',
  marginBottom: '1rem',
  '& svg': {
    width: '100%',
    height: '100%'
  }
});

const SkillName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#333333',
  marginBottom: '0.5rem'
});

const SkillDescription = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#666666',
  lineHeight: 1.5
});

const CategoryTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#000000',
  marginBottom: '1rem',
  textAlign: 'center',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    backgroundColor: '#2563eb',
    borderRadius: '2px'
  }
});

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '3.5rem',
  fontWeight: 800,
  color: '#000000',
  textAlign: 'center',
  marginBottom: '1rem',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem'
  }
}));

const SubTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.25rem',
  color: '#666666',
  textAlign: 'center',
  marginBottom: '5rem',
  maxWidth: '700px',
  margin: '0 auto 5rem',
  lineHeight: 1.6
});

// Modern skills data with icons and descriptions
const skillsData = {
  programmingAnalytics: [
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Data analysis and automation scripting'
    },
    { 
      name: 'Pandas', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      description: 'Data manipulation and analysis library'
    },
    { 
      name: 'NumPy', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      description: 'Numerical computing and array operations'
    },
    { 
      name: 'Microsoft Excel', 
      icon: 'https://img.icons8.com/fluency/96/microsoft-excel-2019.png',
      description: 'Advanced spreadsheet analysis and modeling'
    },
    { 
      name: 'Google Sheets', 
      icon: 'https://img.icons8.com/fluency/96/google-sheets.png',
      description: 'Collaborative data analysis and reporting'
    },
    { 
      name: 'SQL', 
      icon: 'https://img.icons8.com/fluency/96/sql.png',
      description: 'Database querying and data extraction'
    },
    { 
      name: 'Power BI', 
      icon: 'https://img.icons8.com/fluency/96/power-bi-2021.png',
      description: 'Business intelligence and data visualization'
    },
    { 
      name: 'Tableau', 
      icon: 'custom',
      customIcon: TableauIcon,
      description: 'Interactive dashboards and data storytelling'
    }
  ],
  digitalMarketing: [
    { 
      name: 'SEO Optimization', 
      icon: 'custom',
      customIcon: SEOIcon,
      description: 'Search engine ranking optimization'
    },
    { 
      name: 'Google Ads', 
      icon: 'custom',
      customIcon: GoogleAdsIcon,
      description: 'PPC campaign management and optimization'
    },
    { 
      name: 'Meta Advertising', 
      icon: 'https://img.icons8.com/fluency/96/facebook.png',
      description: 'Facebook and Instagram ad campaigns'
    },
    { 
      name: 'LinkedIn Marketing', 
      icon: 'https://img.icons8.com/fluency/96/linkedin.png',
      description: 'B2B marketing and lead generation'
    },
    { 
      name: 'YouTube Marketing', 
      icon: 'https://img.icons8.com/fluency/96/youtube-play.png',
      description: 'Video marketing and channel optimization'
    },
    { 
      name: 'Content Strategy', 
      icon: 'custom',
      customIcon: ContentStrategyIcon,
      description: 'Strategic content planning and creation'
    }
  ],
  webAnalyticsPPC: [
    { 
      name: 'Google Analytics 4', 
      icon: 'custom',
      customIcon: GoogleAnalyticsIcon,
      description: 'Advanced web analytics and user behavior tracking'
    },
    { 
      name: 'Google Tag Manager', 
      icon: 'custom',
      customIcon: GoogleTagManagerIcon,
      description: 'Tag management and conversion tracking'
    },
    { 
      name: 'Keyword Research', 
      icon: 'https://img.icons8.com/fluency/96/search.png',
      description: 'SEO keyword analysis and competitive research'
    },
    { 
      name: 'PPC Optimization', 
      icon: 'custom',
      customIcon: PPCOptimizationIcon,
      description: 'Campaign performance optimization and ROI improvement'
    }
  ]
};

const SkillsSection = () => {
  return (
    <SectionContainer id="skills">
      <ContentWrapper>
        <MainTitle>
          Technical Expertise
        </MainTitle>
        <SubTitle>
          Specialized skills in data analytics, digital marketing, and performance optimization that drive measurable business results and strategic growth.
        </SubTitle>

        <SkillCategory>
          <CategoryTitle>
            Programming & Analytics
          </CategoryTitle>
          <SkillsGrid>
            {skillsData.programmingAnalytics.map((skill, index) => (
              <SkillCard key={index}>
                <CardContent sx={{ padding: 0 }}>
                  {skill.icon === 'custom' && skill.customIcon ? (
                    <CustomSkillIcon>
                      <skill.customIcon />
                    </CustomSkillIcon>
                  ) : (
                    <SkillIcon src={skill.icon} alt={skill.name} />
                  )}
                  <SkillName>{skill.name}</SkillName>
                  <SkillDescription>{skill.description}</SkillDescription>
                </CardContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>
            Digital Marketing
          </CategoryTitle>
          <SkillsGrid>
            {skillsData.digitalMarketing.map((skill, index) => (
              <SkillCard key={index}>
                <CardContent sx={{ padding: 0 }}>
                  {skill.icon === 'custom' && skill.customIcon ? (
                    <CustomSkillIcon>
                      <skill.customIcon />
                    </CustomSkillIcon>
                  ) : (
                    <SkillIcon src={skill.icon} alt={skill.name} />
                  )}
                  <SkillName>{skill.name}</SkillName>
                  <SkillDescription>{skill.description}</SkillDescription>
                </CardContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>
            Web Analytics & PPC
          </CategoryTitle>
          <SkillsGrid>
            {skillsData.webAnalyticsPPC.map((skill, index) => (
              <SkillCard key={index}>
                <CardContent sx={{ padding: 0 }}>
                  {skill.icon === 'custom' && skill.customIcon ? (
                    <CustomSkillIcon>
                      <skill.customIcon />
                    </CustomSkillIcon>
                  ) : (
                    <SkillIcon src={skill.icon} alt={skill.name} />
                  )}
                  <SkillName>{skill.name}</SkillName>
                  <SkillDescription>{skill.description}</SkillDescription>
                </CardContent>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategory>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SkillsSection;