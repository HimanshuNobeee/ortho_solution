import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid2,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

interface AboutDialogProps {
  open: boolean;
  onClose: () => void;
}

const AboutDialog = ({ open, onClose }: AboutDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: { borderRadius: 3 },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', pt: 4, pb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: 'primary.light',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LocalHospitalIcon fontSize="large" />
          </Box>
          <Typography variant="h4" fontWeight={700} color="primary.main">
            About Ortho Solution
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent dividers sx={{ px: { xs: 3, md: 6 }, py: 4 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            mb: 4,
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          Established in 2010, Ortho Solution has been a pioneer in bringing
          advanced orthopedic and rehabilitation care to the community. Our
          mission is to provide world-class medical treatment with a human
          touch.
        </Typography>

        <Grid2 container spacing={4} sx={{ mb: 4 }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hospital Interior"
              sx={{
                width: '100%',
                height: 250,
                objectFit: 'cover',
                borderRadius: 4,
                boxShadow: 3,
              }}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              color="primary"
            >
              Our Vision
            </Typography>
            <Typography variant="body2" paragraph color="text.secondary">
              To be the most trusted leader in musculoskeletal healthcare,
              renowned for clinical excellence and patient-centric care.
            </Typography>

            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              color="primary"
              sx={{ mt: 2 }}
            >
              Core Values
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <VerifiedUserIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Integrity & Transparency"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <GroupsIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Patient-First Approach"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <MedicalServicesIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Advanced Technology"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            </List>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 4 }}>
          <Chip label="Our Facilities" />
        </Divider>

        <Grid2 container spacing={2}>
          {[
            {
              label: 'Modular OT',
              img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            },
            {
              label: 'Digital X-Ray',
              img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            },
            {
              label: 'Physio Center',
              img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            },
          ].map((item, index) => (
            <Grid2 size={{ xs: 4 }} key={index}>
              <Box
                sx={{
                  height: 100,
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    p: 0.5,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="caption" fontWeight={600}>
                    {item.label}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </DialogContent>
      <DialogActions sx={{ p: 4, justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          size="large"
          variant="outlined"
          sx={{ minWidth: 150 }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
