import { AppBar, Toolbar, Typography, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)<{ isVisible: boolean }>(({ isVisible, theme }) => ({
  backgroundColor: isVisible ? 'transparent' : 'rgba(254, 249, 245, 0.95)',
  backdropFilter: isVisible ? 'none' : 'blur(10px)',
  boxShadow: isVisible ? 'none' : '0 2px 20px rgba(0, 0, 0, 0.05)',
  position: 'fixed',
  zIndex: 1100,
  transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'rgba(254, 249, 245, 0.98)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
  }
}));

const MobileMenuButton = styled(IconButton)({
  color: '#1a1a1a',
  backgroundColor: 'rgba(96, 76, 229, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(96, 76, 229, 0.2)',
    transform: 'scale(1.05)'
  },
  transition: 'all 0.3s ease'
});

const MobileDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    color: '#ffffff'
  }
});

const MobileNavItem = styled(ListItemButton)({
  padding: '1rem 2rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
});

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero') || document.querySelector('[data-section="hero"]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom > 0);
      } else {
        // Fallback: hide after scrolling past viewport height
        const scrollY = window.scrollY;
        setIsVisible(scrollY < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // Close mobile menu after navigation
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems: { label: string; id: string; isContact?: boolean }[] = [];

  const mobileMenu = (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', fontSize: '1.5rem', fontFamily: '"Caveat", cursive', letterSpacing: '0.02em' }}>
            &lt;/barath_R/&gt;
          </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <MobileNavItem onClick={() => scrollToSection(item.id)}>
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: item.isContact ? 600 : 400,
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              />
            </MobileNavItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar isVisible={isVisible}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 700, 
              color: '#1a1a1a', 
              fontSize: '1.5rem', 
              fontFamily: '"Caveat", cursive', 
              letterSpacing: '0.02em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#604ce5',
                transform: 'scale(1.05)'
              }
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            &lt;/barath_R/&gt;
          </Typography>
          
          {isMobile ? (
            <MobileMenuButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </MobileMenuButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
            </Stack>
          )}
        </Toolbar>
      </StyledAppBar>

      <MobileDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {mobileMenu}
      </MobileDrawer>
    </>
  );
};

export default Navigation;