import { Box, Button, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const DoctorProfiles = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1 }}>EXPERTS YOU CAN TRUST</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>Meet Our Specialists</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                        Our clinic is led by highly qualified professionals dedicated to providing personalized care for your orthopedic and physiotherapy needs.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {/* Doctor 1 - Ortho */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            height: '100%',
                            overflow: 'visible',
                            boxShadow: 3,
                            mt: { xs: 0, sm: 4 },
                            pt: { xs: 0, sm: 4 }, // Make space for image sticking out top if needed, or side logic
                        }}>
                            <Box sx={{ position: 'relative', width: { xs: '100%', sm: '40%' }, minHeight: 250 }}>
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Dr. Uncle"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ p: 4, width: { xs: '100%', sm: '60%' } }}>
                                <Chip icon={<VerifiedIcon />} label="Orthopedic Surgeon" color="primary" size="small" sx={{ mb: 2 }} />
                                <Typography variant="h5" sx={{ fontWeight: 700 }}>Dr. [Uncle Name]</Typography>
                                <Typography variant="subtitle2" color="primary" sx={{ mb: 2 }}>MBBS, MS (Ortho)</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    Specializing in joint replacements, sports injuries, and complex trauma surgeries with over 20 years of experience.
                                </Typography>
                                <Button variant="outlined" color="primary">View Profile</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Doctor 2 - Physio */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            height: '100%',
                            boxShadow: 3,
                            mt: { xs: 4, sm: 4, md: 4 } // Align with other card
                        }}>
                            <Box sx={{ width: { xs: '100%', sm: '40%' }, minHeight: 250 }}>
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1594824476969-233908049267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Dr. Aunt"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ p: 4, width: { xs: '100%', sm: '60%' } }}>
                                <Chip icon={<VerifiedIcon />} label="Physiotherapist" color="secondary" size="small" sx={{ mb: 2, color: 'white' }} />
                                <Typography variant="h5" sx={{ fontWeight: 700 }}>Dr. [Aunt Name]</Typography>
                                <Typography variant="subtitle2" color="secondary" sx={{ mb: 2 }}>BPT, MPT (Ortho/Neuro)</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    Expert in rehabilitation, pain management, and post-operative recovery, focused on restoring full function.
                                </Typography>
                                <Button variant="outlined" color="secondary">View Profile</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DoctorProfiles;
