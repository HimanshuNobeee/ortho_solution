import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Stack,
  Divider,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useState } from 'react';
import { doctors, Doctor } from '../../data/doctors';
import { UI_TEXT } from '../../data/constants';
import SectionTitle from '../common/SectionTitle';
import { useBooking } from '../../context/BookingContext';

const DoctorProfiles = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const { openBooking } = useBooking();

  const { doctorProfiles } = UI_TEXT.home;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          subtitle={doctorProfiles.subtitle}
          title={doctorProfiles.title}
          description={doctorProfiles.description}
          subtitleColor="primary"
        />

        <Grid container spacing={4} justifyContent="center">
          {doctors.map((doctor) => (
            <Grid item xs={12} md={6} key={doctor.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  height: '100%',
                  overflow: 'visible',
                  boxShadow: 3,
                  mt: { xs: 0, sm: 4 },
                  pt: { xs: 0, sm: 4 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '100%', sm: '40%' },
                    minHeight: 250,
                  }}
                >
                  <Box
                    component="img"
                    src={doctor.image}
                    alt={doctor.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>,
                    ) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'; // Fallback
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 4, width: { xs: '100%', sm: '60%' } }}>
                  <Chip
                    icon={<VerifiedIcon />}
                    label={doctor.role}
                    color={
                      doctor.role.includes('Surgeon') ? 'primary' : 'secondary'
                    }
                    size="small"
                    sx={{
                      mb: 2,
                      color: doctor.role.includes('Surgeon')
                        ? 'white'
                        : 'white',
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={
                      doctor.role.includes('Surgeon') ? 'primary' : 'secondary'
                    }
                    sx={{ mb: 2 }}
                  >
                    {doctor.qualifications}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {doctor.bio}
                  </Typography>
                  <Button
                    variant="outlined"
                    color={
                      doctor.role.includes('Surgeon') ? 'primary' : 'secondary'
                    }
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    {doctorProfiles.viewProfileBtn}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Profile Dialog */}
        <Dialog
          open={Boolean(selectedDoctor)}
          onClose={() => setSelectedDoctor(null)}
          maxWidth="md"
          fullWidth
          scroll="paper"
        >
          {selectedDoctor && (
            <>
              <DialogTitle
                sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 1 }}
              >
                <Avatar
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  sx={{ width: 56, height: 56 }}
                />
                <Box>
                  <Typography variant="h6">{selectedDoctor.name}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {selectedDoctor.role}
                  </Typography>
                </Box>
              </DialogTitle>
              <Divider />
              <DialogContent>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={2}>
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 0.5,
                          }}
                        >
                          <WorkspacePremiumIcon
                            color="action"
                            fontSize="small"
                          />
                          <Typography variant="subtitle2" fontWeight={600}>
                            {doctorProfiles.dialog.experience}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {selectedDoctor.experience}
                        </Typography>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 0.5,
                          }}
                        >
                          <SchoolIcon color="action" fontSize="small" />
                          <Typography variant="subtitle2" fontWeight={600}>
                            {doctorProfiles.dialog.qualifications}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {selectedDoctor.qualifications}
                        </Typography>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 0.5,
                          }}
                        >
                          <AccessTimeIcon color="action" fontSize="small" />
                          <Typography variant="subtitle2" fontWeight={600}>
                            {doctorProfiles.dialog.availability}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {selectedDoctor.availability}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                      {doctorProfiles.dialog.biography}
                    </Typography>
                    <Typography
                      variant="body2"
                      paragraph
                      color="text.secondary"
                    >
                      {selectedDoctor.bio}
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                      {doctorProfiles.dialog.expertise}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedDoctor.specialties.map((specialty, index) => (
                        <Chip
                          key={index}
                          label={specialty}
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ px: 3, pb: 3 }}>
                <Button onClick={() => setSelectedDoctor(null)}>
                  {doctorProfiles.dialog.closeBtn}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  autoFocus
                  onClick={() => {
                    setSelectedDoctor(null);
                    openBooking();
                  }}
                >
                  {doctorProfiles.dialog.bookBtn}
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default DoctorProfiles;
