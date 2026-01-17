import {
  Box,
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
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
import { SERVICES, Service } from '../../data/services'; // Imported Service interface
import { UI_TEXT } from '../../data/constants';
import SectionTitle from '../common/SectionTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useState } from 'react';
import { useBooking } from '../../context/BookingContext';

const Specialties = () => {
  const { openBooking } = useBooking();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpen = (service: Service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <Box id="specialties" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionTitle
          subtitle={UI_TEXT.home.specialties.subtitle}
          title={UI_TEXT.home.specialties.title}
          subtitleColor="secondary"
        />

        <Grid2 container spacing={4}>
          {SERVICES.slice(0, 6).map((service, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'secondary.main',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    '& .icon-box': {
                      bgcolor: 'secondary.main',
                      color: 'white',
                    },
                    '& .learn-more-text': {
                      color: 'secondary.main',
                      transform: 'translateX(5px)',
                    },
                  },
                }}
                onClick={() => handleOpen(service)}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: 'left',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
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
                    sx={{ lineHeight: 1.6, mb: 3 }}
                  >
                    {service.desc}
                  </Typography>

                  <Box
                    sx={{
                      mt: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Typography
                      className="learn-more-text"
                      variant="button"
                      sx={{
                        fontWeight: 700,
                        textTransform: 'none',
                        color: 'primary.main',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      Learn More <ArrowForwardIcon fontSize="small" />
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Detailed Service Dialog */}
        <Dialog
          open={!!selectedService}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: '20px', p: 1 },
          }}
        >
          {selectedService && (
            <>
              <DialogTitle
                sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 1 }}
              >
                <Box
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'white',
                    p: 1.5,
                    borderRadius: '12px',
                    display: 'flex',
                  }}
                >
                  {selectedService.icon}
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {selectedService.title}
                </Typography>
              </DialogTitle>
              <DialogContent dividers sx={{ border: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '1.1rem', mb: 4, color: 'text.secondary' }}
                >
                  {selectedService.details.longDesc}
                </Typography>

                <Grid2 container spacing={4}>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <CheckCircleOutlineIcon color="secondary" /> Common
                      Conditions
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedService.details.conditions.map((item, i) => (
                        <Chip
                          key={i}
                          label={item}
                          sx={{ bgcolor: 'action.hover', fontWeight: 500 }}
                        />
                      ))}
                    </Box>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <MedicalServicesIcon color="primary" /> Procedures &
                      Treatments
                    </Typography>
                    <List dense disablePadding>
                      {selectedService.details.procedures.map((item, i) => (
                        <ListItem key={i} disableGutters>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ fontWeight: 500 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid2>
                </Grid2>
              </DialogContent>
              <DialogActions sx={{ p: 3, pt: 0 }}>
                <Button
                  onClick={handleClose}
                  size="large"
                  variant="outlined"
                  sx={{ borderRadius: '10px' }}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: '10px' }}
                  onClick={() => {
                    handleClose();
                    openBooking();
                  }}
                >
                  Book Consultation
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Specialties;
