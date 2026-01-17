import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { COMPANY_INFO, UI_TEXT, NAV_LINKS } from '../../data/constants';
import { useBooking } from '../../context/BookingContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { header } = UI_TEXT;
  const { openBooking } = useBooking();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getPath = (text: string) => {
    switch (text) {
      case 'Home':
        return '/';
      case 'About Us':
        return '/about';
      case 'Services':
        return '/services';
      case 'Patient Success':
        return '/patient-success';
      default:
        return '/';
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
          {COMPANY_INFO.name}
        </Typography>
      </Box>
      <List>
        {NAV_LINKS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => navigate(getPath(item))}
              selected={location.pathname === getPath(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ m: 2, color: 'white', fontWeight: 700 }}
            onClick={openBooking}
          >
            {header.bookAppointment}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: 'background.paper', boxShadow: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO - DESKTOP */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Outfit',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: 0,
            }}
          >
            {COMPANY_INFO.name}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              mr: 2,
            }}
          >
            {NAV_LINKS.map((item) => (
              <Button
                key={item}
                onClick={() => navigate(getPath(item))}
                sx={{
                  my: 2,
                  color:
                    location.pathname === getPath(item)
                      ? 'primary.main'
                      : 'text.primary',
                  display: 'block',
                  fontWeight: 600,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* HAMBURGER - MOBILE */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* LOGO - MOBILE */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Outfit',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            {header.mobileLogoText}
          </Typography>

          {/* CTA BUTTON - DESKTOP */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ ml: 2, color: 'white', fontWeight: 600 }}
              onClick={openBooking}
            >
              {header.bookAppointment}
            </Button>
          </Box>

          {/* DRAWER - MOBILE */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
