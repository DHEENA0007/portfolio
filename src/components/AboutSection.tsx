import { Box, Typography, Stack, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: `radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), ${theme.palette.background.default}`,
  padding: '6rem 2rem',
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 1rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 1rem'
  }
}));

const ContentWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto'
});

const ExperienceCard = styled(Card)({
  padding: '2rem',
  marginBottom: '2rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)'
  }
});

const ServiceCard = styled(Card)({
  textAlign: 'center',
  padding: '2rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)'
  }
});

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1.5rem',
  '& svg': {
    fontSize: '2.5rem',
    color: theme.palette.text.primary
  }
}));

const CompanyTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.25rem',
  color: '#2563eb',
  marginBottom: '0.5rem'
});

const JobTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.125rem',
  marginBottom: '0.5rem'
});

const DateRange = styled(Typography)({
  fontSize: '0.875rem',
  color: '#666666',
  marginBottom: '1rem'
});

const BulletPoint = styled(Typography)({
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: '0.75rem',
  paddingLeft: '1rem',
  position: 'relative',
  '&:before': {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '#2563eb',
    fontWeight: 'bold'
  }
});

const services = [
  {
    icon: <AnalyticsIcon />,
    title: 'DATA ANALYTICS',
    description: 'Expert in collecting, cleaning, and transforming datasets using Excel, Python, and SQL to derive actionable business insights.'
  },
  {
    icon: <TrendingUpIcon />,
    title: 'DIGITAL MARKETING',
    description: 'Specialized in SEO optimization, Google Ads management, and social media strategies that drive measurable growth.'
  },
  {
    icon: <DataUsageIcon />,
    title: 'VISUALIZATION',
    description: 'Creating compelling dashboards and interactive visualizations using Power BI and Tableau for data storytelling.'
  }
];

const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <ContentWrapper>
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: { xs: '0.1em', sm: '0.3em', md: '0.67em' },
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            ABOUT ME
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '900px',
              margin: '0 auto',
              mb: 4,
              color: 'text.secondary',
              fontSize: '1.125rem',
              lineHeight: 1.7
            }}
          >
            Detail-oriented and analytical professional with 1+ year of experience in digital marketing and currently working as a Data Analyst Intern. Proficient in SEO, Google Ads, and social media marketing, with hands-on experience in data analysis using Excel, Python, and Tableau. Strong communicator with proven problem-solving abilities and a passion for continuous learning in analytics and business intelligence. Actively seeking a full-time Data Analyst position to apply analytical skills and contribute to organizational growth.
          </Typography>
        </Box>

        <Box mb={6}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: { xs: '0.1em', sm: '0.2em', md: '0.35em' },
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
            }}
          >
            EXPERIENCE
          </Typography>
          
          <ExperienceCard>
            <CardContent>
              <CompanyTitle>Unified Mentor</CompanyTitle>
              <JobTitle>Data Analytics Intern</JobTitle>
              <DateRange>April 2025 - Present</DateRange>
              
              <BulletPoint>
                Collected, cleaned, and transformed large datasets using tools such as Microsoft Excel and Python (Pandas, NumPy) to derive actionable insights.
              </BulletPoint>
              <BulletPoint>
                Designed and implemented dashboards using Power BI to visualize trends, key performance indicators, and business metrics.
              </BulletPoint>
              <BulletPoint>
                Collaborated with team members to present findings through data storytelling and interactive visualizations.
              </BulletPoint>
              <BulletPoint>
                Conducted detailed exploratory data analysis (EDA) to identify correlations, trends, anomalies, and patterns across multiple datasets.
              </BulletPoint>
              <BulletPoint>
                Ensured data integrity by handling missing values, duplicates, and inconsistencies in large datasets.
              </BulletPoint>
            </CardContent>
          </ExperienceCard>

          <ExperienceCard>
            <CardContent>
              <CompanyTitle>Preston Consulting and EdTech Pvt Ltd - Gostudy</CompanyTitle>
              <JobTitle>Digital Marketing Analyst</JobTitle>
              <DateRange>May 2024 - June 2025</DateRange>
              
              <BulletPoint>
                Implemented SEO best practices to optimize website structure and enhance search engine discoverability, leading to higher organic rankings and significantly increased visibility in search results.
              </BulletPoint>
              <BulletPoint>
                Conducted comprehensive keyword research to identify relevant search terms and optimize website content, improving search engine visibility and driving targeted, high-quality traffic to the site.
              </BulletPoint>
              <BulletPoint>
                Applied SQL queries on leads datasets to segment prospects, measure lead quality, and identify high-converting channels, enhancing campaign strategy and conversion outcomes.
              </BulletPoint>
              <BulletPoint>
                Managed and optimized Google Ads campaigns to maximize return on investment (ROI) by targeting and driving qualified traffic, resulting in higher conversions and improved campaign performance.
              </BulletPoint>
              <BulletPoint>
                Developed and executed data-driven social media strategies, boosting brand awareness, increasing audience engagement, and strengthening the overall social media presence of the business.
              </BulletPoint>
            </CardContent>
          </ExperienceCard>
        </Box>

        <Box sx={{ height: '20px', backgroundColor: 'text.primary', mb: 6 }} />

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <CardContent>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    letterSpacing: '0.26em',
                    mb: 2
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </ServiceCard>
          ))}
        </Stack>

        <Box sx={{ height: '20px', backgroundColor: 'text.primary', mt: 6 }} />
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AboutSection;