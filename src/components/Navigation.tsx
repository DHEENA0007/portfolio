import { AppBar, Toolbar, Typography, Button, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)<{ isVisible: boolean }>(({ isVisible }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  zIndex: 1100,
  transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'transform 0.3s ease-in-out'
}));

const NavButton = styled(Button)({
  color: '#ffffff',
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 500,
  fontSize: '1rem',
  textTransform: 'none',
  letterSpacing: '0.02em',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
});

const ContactButton = styled(Button)({
  backgroundColor: 'transparent',
  color: '#ffffff',
  border: '2px solid #ffffff',
  fontFamily: '"Outfit", sans-serif',
  fontWeight: 600,
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '8px 24px',
  borderRadius: '24px',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#000000'
  }
});

const MobileMenuButton = styled(IconButton)({
  color: '#ffffff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
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

  const navItems = [
    { label: 'About me', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact Me', id: 'contact', isContact: true }
  ];

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
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#000000ff', fontSize: '1.5rem', fontFamily: '"Caveat", cursive', letterSpacing: '0.02em' }}>
            &lt;/barath_R/&gt;
          </Typography>
          
          {isMobile ? (
            <MobileMenuButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </MobileMenuButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              <NavButton onClick={() => scrollToSection('about')}>
                About me
              </NavButton>
              <NavButton onClick={() => scrollToSection('skills')}>
                Skills
              </NavButton>
              <NavButton onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </NavButton>
              <ContactButton onClick={() => scrollToSection('contact')}>
                Contact Me
              </ContactButton>
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