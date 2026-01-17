import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { SERVICES } from '../../data/services';
import { UI_TEXT } from '../../data/constants';
import SectionTitle from '../common/SectionTitle';

const Specialties = () => {
  return (
    <Box id="specialties" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionTitle
          subtitle={UI_TEXT.home.specialties.subtitle}
          title={UI_TEXT.home.specialties.title}
          subtitleColor="secondary"
        />

        <Grid container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
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
                      color: 'white',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'left' }}>
                  <Box
                    className="icon-box"
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'primary.light',
                      color: 'white',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {service.desc}
                  </Typography>
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
