import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HealingIcon from '@mui/icons-material/Healing';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const services = [
    { title: 'Joint Replacement', desc: 'Minimally invasive hip and knee replacement surgeries.', icon: <AccessibleIcon fontSize="large" /> },
    { title: 'Sports Injuries', desc: 'Advanced treatment for ligament tears and sports trauma.', icon: <DirectionsRunIcon fontSize="large" /> },
    { title: 'Physiotherapy', desc: 'Personalized rehab programs for faster recovery.', icon: <SelfImprovementIcon fontSize="large" /> },
    { title: 'Spine Care', desc: 'Expert management of back pain and spinal disorders.', icon: <HealthAndSafetyIcon fontSize="large" /> },
    { title: 'Fracture Care', desc: 'Comprehensive care for all types of bone fractures.', icon: <HealingIcon fontSize="large" /> },
    { title: 'Arthroscopy', desc: 'Diagnostic and therapeutic keyhole joint procedures.', icon: <LocalHospitalIcon fontSize="large" /> },
];

const Specialties = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h6" color="secondary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1 }}>COMPREHENSIVE CARE</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>Our Specialties</Typography>
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease',
                                border: '1px solid transparent',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    borderColor: 'secondary.main',
                                    '& .icon-box': {
                                        bgcolor: 'secondary.main',
                                        color: 'white'
                                    }
                                }
                            }}>
                                <CardContent sx={{ p: 4, textAlign: 'left' }}>
                                    <Box className="icon-box" sx={{
                                        width: 60,
                                        height: 60,
                                        bgcolor: 'primary.light',
                                        color: 'white',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>{service.title}</Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>{service.desc}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Specialties;
