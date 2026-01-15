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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookingDialog from '../common/BookingDialog';


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ py: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                    Apex Ortho & Physio
                </Typography>
            </Box>
            <List>
                <ListItem disablePadding>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ m: 2, color: 'white', fontWeight: 700 }}
                        onClick={() => setBookingOpen(true)}
                    >
                        Book Appointment
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* LOGO - DESKTOP */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Outfit',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'primary.main',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        Apex Ortho & Physio
                    </Typography>

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
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        Apex
                    </Typography>

                    {/* MENU - DESKTOP */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ ml: 2, color: 'white', fontWeight: 600 }}
                            onClick={() => setBookingOpen(true)}
                        >
                            Book Appointment
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
            <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
        </AppBar>
    );
};

export default Header;

