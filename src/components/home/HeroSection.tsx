import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const HeroSection = () => {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background - vibrant gradient */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                background: 'linear-gradient(120deg, #F0F8FF 0%, #E3F2FD 100%)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '60%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(0,201,167,0.1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0
                }
            }} />

            <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 20 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h6"
                                color="secondary.main"
                                sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}
                            >
                                Welcome to Apex Clinic
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    background: 'linear-gradient(45deg, #0056D2 30%, #00C9A7 90%)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    mb: 3
                                }}
                            >
                                Advanced Orthopedic & Physiotherapy Care
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', mb: 4, maxWidth: 500 }}>
                                Restoring movement, relieving pain, and helping you get back to the life you love with expert care from our dedicated specialists.
                            </Typography>
                            <Button variant="contained" size="large" sx={{ mr: 2, fontSize: '1.1rem', px: 4 }}>
                                Book Details
                            </Button>
                            <Button variant="outlined" size="large" sx={{ fontSize: '1.1rem', px: 4 }}>
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Placeholder for Hero Image */}
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                bgcolor: 'white',
                                height: 400,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80) center/cover'
                            }}
                        >
                            {/* <Typography color="text.secondary">Hero Image Area</Typography> */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Floating Action Bar */}
            <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={3}>
                    {[
                        { title: 'Book Appointment', icon: <EventAvailableIcon fontSize="large" />, color: 'primary.main', desc: 'Schedule a visit with our experts' },
                        { title: 'Our Services', icon: <MedicalServicesIcon fontSize="large" />, color: 'secondary.main', desc: 'Comprehensive care options' },
                        { title: 'Check Calendar', icon: <CalendarMonthIcon fontSize="large" />, color: '#7B61FF', desc: 'Find a time that works for you' },
                    ].map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'transform 0.2s',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                                    }
                                }}
                            >
                                <Box sx={{
                                    p: 2,
                                    borderRadius: '12px',
                                    bgcolor: `${item.color}15`,
                                    color: item.color
                                }}>
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
