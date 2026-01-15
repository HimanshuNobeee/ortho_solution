import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const awards = [
    { title: 'Best Orthopedic Clinic 2024', issuer: 'City Health Awards' },
    { title: 'Excellence in Patient Care', issuer: 'National Medical Board' },
    { title: 'Top Rated Physiotherapy Center', issuer: 'Healthcare Reviews' },
];

const OverviewAwards = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'white' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ opacity: 0.8, letterSpacing: 1, mb: 2 }}>WHY CHOOSE US</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                            Committed to Excellence in Healthcare
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            At Apex Ortho & Physio, we combine cutting-edge technology with compassionate care. Our integrated approach ensures that you receive the best possible treatment for a speedy recovery. We are proud to be recognized for our dedication to patient outcomes.
                        </Typography>
                        <Button variant="contained" color="secondary" size="large" sx={{ color: 'white', px: 4 }}>
                            About Our Clinic
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            {awards.map((award, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Box sx={{ p: 1.5, bgcolor: 'secondary.main', borderRadius: '50%', color: 'white', display: 'flex' }}>
                                                <WorkspacePremiumIcon />
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 700 }}>{award.title}</Typography>
                                                <Typography variant="body2" sx={{ opacity: 0.7 }}>{award.issuer}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OverviewAwards;
