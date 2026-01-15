import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Outfit' }}>
                            Apex Ortho & Physio
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
                            Dedicated to restoring your mobility and enhancing your quality of life through advanced orthopedic and physiotherapy care.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                            <IconButton color="inherit"><FacebookIcon /></IconButton>
                            <IconButton color="inherit"><TwitterIcon /></IconButton>
                            <IconButton color="inherit"><InstagramIcon /></IconButton>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontFamily: 'Outfit' }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            {['Home', 'About Us', 'Services', 'Book Appointment', 'Blog'].map((item) => (
                                <Link key={item} href="#" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontFamily: 'Outfit' }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Address:</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>123 Medical Center Dr,<br />City Name, State 12345</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Phone:</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>+1 (555) 123-4567</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Email:</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>contact@apexortho.com</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 6, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography variant="body2" sx={{ opacity: 0.6 }}>
                        © {new Date().getFullYear()} Apex Ortho & Physio. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
