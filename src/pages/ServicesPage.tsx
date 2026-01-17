import {
  Container,
  Typography,
  Box,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { SERVICES, Service } from '../data/services';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { useBooking } from '../context/BookingContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesPage = () => {
  const { openBooking } = useBooking();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Box sx={{ pb: 12 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', py: { xs: 6, md: 8 }, mb: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            color="primary"
            sx={{
              fontWeight: 700,
              mb: 1,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            COMPLETE CARE
          </Typography>
          <Typography variant="h2" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
            Departments & Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 400, maxWidth: 600, mx: 'auto' }}
          >
            World-class orthopedic expertise across all specialties.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: '0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardActionArea
                  onClick={() => setSelectedService(service)}
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box sx={{ mb: 2, color: 'primary.main' }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {service.details.longDesc.length > 100
                        ? service.details.longDesc.substring(0, 100) + '...'
                        : service.details.longDesc}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      View Details <ArrowForwardIcon fontSize="small" />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Service Detail Dialog */}
      <Dialog
        open={!!selectedService}
        onClose={() => setSelectedService(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4 } }}
      >
        {selectedService && (
          <>
            <Box sx={{ position: 'relative', height: 200 }}>
              <CardMedia
                component="img"
                height="200"
                image={selectedService.image}
                alt={selectedService.title}
                sx={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 4,
                }}
              >
                <Typography variant="h3" color="white" fontWeight={700}>
                  {selectedService.title}
                </Typography>
              </Box>
            </Box>

            <DialogContent sx={{ p: 4 }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.2rem', mb: 4, lineHeight: 1.8 }}
              >
                {selectedService.details.longDesc}
              </Typography>

              <Grid2 container spacing={4}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <MedicalInformationIcon color="primary" /> Conditions We
                    Treat
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedService.details.conditions.map((item, i) => (
                      <Chip
                        key={i}
                        label={item}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <CheckCircleIcon color="primary" /> Procedures
                  </Typography>
                  <List dense>
                    {selectedService.details.procedures.map((item, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: 'secondary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Grid2>
              </Grid2>
            </DialogContent>
            <DialogActions sx={{ p: 4, justifyContent: 'space-between' }}>
              <Button onClick={() => setSelectedService(null)} color="inherit">
                Close
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setSelectedService(null);
                  openBooking();
                }}
              >
                Book Consultation
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ServicesPage;
