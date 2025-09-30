import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import GoogleAdsDashboard from './GoogleAdsDashboard';
import GoogleAdsPortfolio from './GoogleAdsPortfolio';
import CampaignDeepDive from './CampaignDeepDive';
import SEOPerformanceDashboard from './SEOPerformanceDashboard';
import TrafficImpactDashboard from './TrafficImpactDashboard';
import SEOFrameworkDashboard from './SEOFrameworkDashboard';
import GoogleAnalyticsDashboard from './GoogleAnalyticsDashboard';

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '8rem 0',
  color: '#000000',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 0'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 0'
  }
}));

const ContentWrapper = styled(Box)({
  width: '100%',
  margin: '0 auto'
});

const FilterButton = styled(Typography)<{ active?: boolean }>(({ active }) => ({
  color: active ? '#000000' : '#999999',
  fontFamily: '"Inter", sans-serif',
  fontSize: '1rem',
  fontWeight: active ? 600 : 400,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#000000'
  }
}));

const ImageGrid = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  width: '100%'
});

const ProjectItem = styled(Box)({
  width: '100%',
  minHeight: 'auto',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#f8f8f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});


const CustomProjectContent = styled(Box)({
  width: '100%',
  padding: '1rem'
});

// Portfolio data with custom components
const portfolioData = [
  {
    id: 1,
    title: 'Google Ads Campaign Dashboard',
    category: 'Paid Advertising',
    component: 'GoogleAds',
    isCustom: true
  },
  {
    id: 2,
    title: 'Google Ads Campaign Portfolio',
    category: 'Paid Advertising',
    component: 'GoogleAdsPortfolio',
    isCustom: true
  },
  {
    id: 3,
    title: 'Campaign Deep Dive Analytics',
    category: 'Paid Advertising',
    component: 'CampaignDeepDive',
    isCustom: true
  },
  {
    id: 4,
    title: 'SEO Performance Metrics',
    category: 'Web Analytics',
    component: 'SEOPerformance',
    isCustom: true
  },
  {
    id: 5,
    title: 'Traffic Impact Analysis',
    category: 'Web Analytics',
    component: 'TrafficImpact',
    isCustom: true
  },
  {
    id: 6,
    title: 'SEO Strategic Framework',
    category: 'Web Analytics',
    component: 'SEOFramework',
    isCustom: true
  },
  {
    id: 7,
    title: 'Google Analytics Overview',
    category: 'Web Analytics',
    component: 'GoogleAnalytics',
    isCustom: true
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filters = ['All Work', 'Analytics', 'Marketing', 'Strategy'];

  const getFilteredProjects = () => {
    if (activeFilter === 'All Work') return portfolioData;
    if (activeFilter === 'Analytics') {
      return portfolioData.filter(p => 
        p.category.includes('Analytics') || p.category.includes('Data')
      );
    }
    if (activeFilter === 'Marketing') {
      return portfolioData.filter(p => 
        p.category.includes('Marketing') || p.category.includes('Social') || p.category.includes('Advertising')
      );
    }
    if (activeFilter === 'Strategy') {
      return portfolioData.filter(p => 
        p.category.includes('Strategy') || p.category.includes('Content')
      );
    }
    return portfolioData;
  };

  return (
    <SectionContainer id="portfolio">
      <ContentWrapper>
        <Box textAlign="center" mb={8} px={4}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#000000',
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
            Selected Work
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontFamily: '"Inter", sans-serif',
              fontSize: '1.125rem',
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            A collection of digital marketing campaigns, data analytics projects, and strategic initiatives.
          </Typography>
        </Box>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center" 
          spacing={{ xs: 2, sm: 4, md: 6 }}
          mb={8}
          sx={{ 
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '2rem',
            px: { xs: 2, md: 4 },
            alignItems: 'center'
          }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </Stack>

        <ImageGrid>
          {getFilteredProjects().map((project) => (
            <ProjectItem key={project.id}>
              <CustomProjectContent>
                {project.component === 'GoogleAdsPortfolio' && <GoogleAdsPortfolio />}
                {project.component === 'CampaignDeepDive' && <CampaignDeepDive />}
                {project.component === 'GoogleAds' && <GoogleAdsDashboard />}
                {project.component === 'SEOPerformance' && <SEOPerformanceDashboard />}
                {project.component === 'TrafficImpact' && <TrafficImpactDashboard />}
                {project.component === 'SEOFramework' && <SEOFrameworkDashboard />}
                {project.component === 'GoogleAnalytics' && <GoogleAnalyticsDashboard />}
              </CustomProjectContent>
            </ProjectItem>
          ))}
        </ImageGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default PortfolioSection;