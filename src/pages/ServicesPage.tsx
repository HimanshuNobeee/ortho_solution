import { Container, Typography, Box } from '@mui/material';
import { UI_TEXT } from '../data/constants';

const ServicesPage = () => {
  const { servicesPage } = UI_TEXT;

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          {servicesPage.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {servicesPage.subtitle}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        {servicesPage.placeholder}
      </Typography>
    </Container>
  );
};

export default ServicesPage;
