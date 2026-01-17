import { Container, Typography, Box } from '@mui/material';

const PatientSuccessPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Patient Success Stories
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Real Journeys, Real Recoveries
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        (Content to be decided later)
      </Typography>
    </Container>
  );
};

export default PatientSuccessPage;
