import { Container, Typography, Box } from '@mui/material';

const ServicesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Our Services
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Comprehensive Orthopedic & Physiotherapy Solutions
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        (Content to be decided later)
      </Typography>
    </Container>
  );
};

export default ServicesPage;
