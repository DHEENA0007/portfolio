import { Box, Typography, Card, Table, TableBody, TableRow, TableCell, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import CountUp from './CountUpAnimation';
import { mockRootProps } from './GoogleAnalyticsDashboardMockData';

const DashboardContainer = styled(Box)({
  background: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  margin: '0'
});

const DashboardTitle = styled(Typography)({
  fontFamily: '"DM Sans", "Manrope", sans-serif',
  fontSize: '3rem',
  fontWeight: 700,
  color: '#2d1b4e',
  textAlign: 'center',
  marginBottom: '3rem',
  letterSpacing: '-0.025em',
  background: 'linear-gradient(135deg, #8b7ab8 0%, #7b6ba8 50%, #6b5b98 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
});

const MainContent = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '2rem',
  maxWidth: '1400px',
  margin: '0 auto'
});

const LeftPanel = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
});

const RightPanel = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
});

const MetricsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  marginBottom: '2rem'
});

const MetricCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(251, 146, 60, 0.15)'
  }
});

const MetricLabel = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#1a73e8',
  marginBottom: '0.5rem'
});

const MetricValue = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#202124',
  lineHeight: 1
});

const ChartContainer = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)'
});

const SidebarCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '1.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(251, 146, 60, 0.1)'
});

const SidebarTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#5f6368',
  marginBottom: '1rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
});

const RealtimeValue = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '2rem',
  fontWeight: 700,
  color: '#202124',
  marginBottom: '1rem'
});

const CountryRow = styled(TableRow)({
  '&:hover': {
    backgroundColor: '#f8f9fa'
  }
});

const CountryName = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#202124',
  fontWeight: 400
});

const CountryUsers = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#202124',
  fontWeight: 500,
  textAlign: 'right'
});

interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCardComponent = ({ label, value }: MetricCardProps) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.includes('K') ? 'K' : '';
  
  return (
    <MetricCard>
      <MetricLabel>{label}</MetricLabel>
      <CountUp end={numericValue} suffix={suffix}>
        {(animatedValue) => <MetricValue>{animatedValue}</MetricValue>}
      </CountUp>
    </MetricCard>
  );
};

interface TimeSeriesChartProps {
  data: Array<{ month: string; value: number }>;
}

const TimeSeriesChart = ({ data }: TimeSeriesChartProps) => (
  <ChartContainer>
    <LineChart
      width={700}
      height={300}
      series={[
        {
          data: data.map(d => d.value),
          color: '#1a73e8',
          curve: 'linear'
        }
      ]}
      xAxis={[
        {
          scaleType: 'point',
          data: data.map(d => d.month),
          tickLabelStyle: {
            fontSize: 12,
            fill: '#5f6368'
          }
        }
      ]}
      yAxis={[
        {
          tickLabelStyle: {
            fontSize: 12,
            fill: '#5f6368'
          },
          max: 4000,
          tickNumber: 5
        }
      ]}
      grid={{ horizontal: true, vertical: true }}
      margin={{ left: 60, right: 30, top: 30, bottom: 60 }}
      sx={{
        '& .MuiLineElement-root': {
          strokeWidth: 2
        },
        '& .MuiMarkElement-root': {
          r: 4,
          strokeWidth: 2,
          stroke: '#ffffff',
          fill: '#1a73e8'
        },
        '& .MuiChartsGrid-line': {
          stroke: '#e8eaed',
          strokeWidth: 1
        }
      }}
    />
  </ChartContainer>
);

interface ActiveUsersBarChartProps {
  data: Array<{ time: number; users: number }>;
}

const ActiveUsersBarChart = ({ data }: ActiveUsersBarChartProps) => (
  <BarChart
    width={280}
    height={120}
    series={[
      {
        data: data.map(d => d.users),
        color: '#1a73e8'
      }
    ]}
    xAxis={[
      {
        scaleType: 'band',
        data: data.map(d => d.time.toString()),
        tickLabelStyle: {
          fontSize: 10,
          fill: '#5f6368'
        }
      }
    ]}
    yAxis={[
      {
        tickLabelStyle: {
          fontSize: 10,
          fill: '#5f6368'
        }
      }
    ]}
    margin={{ left: 30, right: 10, top: 10, bottom: 30 }}
    sx={{
      '& .MuiBarElement-root': {
        rx: 2
      }
    }}
  />
);

interface CountriesTableProps {
  countries: Array<{ country: string; users: number }>;
}

interface GoogleAnalyticsDashboardProps {
  data?: {
    activeUsers: string;
    newUsers: string;
    activeUsersLast30Min: number;
    timeSeriesData: Array<{ month: string; value: number }>;
    activeUsersPerMinute: Array<{ time: number; users: number }>;
    topCountries: Array<{ country: string; users: number }>;
  };
  title?: string;
}

const CountriesTable = ({ countries }: CountriesTableProps) => (
  <Table size="small">
    <TableBody>
      {countries.map((country, index) => (
        <CountryRow key={index}>
          <TableCell sx={{ border: 'none', padding: '0.5rem 0' }}>
            <CountryName>{country.country}</CountryName>
          </TableCell>
          <TableCell sx={{ border: 'none', padding: '0.5rem 0' }}>
            <CountUp end={country.users}>
              {(value) => <CountryUsers>{value}</CountryUsers>}
            </CountUp>
          </TableCell>
        </CountryRow>
      ))}
    </TableBody>
  </Table>
);

const GoogleAnalyticsDashboard = ({ data = mockRootProps, title = "Analytics Acquisition Overview" }: GoogleAnalyticsDashboardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <DashboardContainer>
      {title && (
        <DashboardTitle>
          {title}
        </DashboardTitle>
      )}
      
      {/* Desktop Layout */}
      {!isMobile && (
      <MainContent>
        <LeftPanel>
          <MetricsContainer>
            <MetricCardComponent
              label="Active users"
              value={data.activeUsers}
            />
            <MetricCardComponent
              label="New users"
              value={data.newUsers}
            />
          </MetricsContainer>
          
          <TimeSeriesChart data={data.timeSeriesData} />
        </LeftPanel>
        
        <RightPanel>
          <SidebarCard>
            <SidebarTitle>Active Users in Last 30 Minutes</SidebarTitle>
            <CountUp end={data.activeUsersLast30Min}>
              {(value) => <RealtimeValue>{value}</RealtimeValue>}
            </CountUp>
          </SidebarCard>
          
          <SidebarCard>
            <SidebarTitle>Active Users Per Minute</SidebarTitle>
            <ActiveUsersBarChart data={data.activeUsersPerMinute} />
          </SidebarCard>
          
          <SidebarCard>
            <SidebarTitle>Top Countries</SidebarTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption" sx={{ color: '#5f6368', fontWeight: 500 }}>
                TOP COUNTRIES
              </Typography>
              <Typography variant="caption" sx={{ color: '#5f6368', fontWeight: 500 }}>
                ACTIVE USERS
              </Typography>
            </Box>
            <CountriesTable countries={data.topCountries} />
          </SidebarCard>
        </RightPanel>
      </MainContent>
      )}

    {/* Mobile Stack Layout */}
    {isMobile && (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Mobile Metrics */}
        <MetricCardComponent
          label="Active users"
          value={data.activeUsers}
        />
        <MetricCardComponent
          label="New users"
          value={data.newUsers}
        />

        {/* Mobile Time Series Chart */}
        <SidebarCard>
          <Typography variant="h6" sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 600 }}>
            User Acquisition Timeline
          </Typography>
          <Box sx={{ marginLeft: '-10px' }}>
            <LineChart
              width={280}
              height={160}
              series={[
                {
                  data: data.timeSeriesData.map(d => d.value),
                  color: '#4285f4'
                }
              ]}
              xAxis={[{
                scaleType: 'point',
                data: data.timeSeriesData.map(d => d.month),
                tickLabelStyle: {
                  fontSize: 9,
                  fill: '#5f6368'
                }
              }]}
              yAxis={[{
                tickLabelStyle: {
                  fontSize: 9,
                  fill: '#5f6368'
                }
              }]}
              margin={{ left: 0, right: 20, top: 20, bottom: 40 }}
            />
          </Box>
        </SidebarCard>

        {/* Mobile Active Users */}
        <SidebarCard>
          <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', fontWeight: 600 }}>
            Active Users (Last 30 Min)
          </Typography>
          <CountUp end={data.activeUsersLast30Min}>
            {(value) => (
              <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#202124' }}>
                {value}
              </Typography>
            )}
          </CountUp>
        </SidebarCard>

        {/* Mobile Top Countries */}
        <SidebarCard>
          <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', fontWeight: 600 }}>
            Top Countries
          </Typography>
          <CountriesTable countries={data.topCountries} />
        </SidebarCard>
      </Box>
    )}
    </DashboardContainer>
  );
};

export default GoogleAnalyticsDashboard;