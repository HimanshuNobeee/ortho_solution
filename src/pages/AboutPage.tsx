import {
  Container,
  Typography,
  Box,
  Grid2,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
  return (
    <Box sx={{ pb: 12 }}>
      {/* Hero Section for Page */}
      {/* Hero Section for Page */}
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
            WHO WE ARE
          </Typography>
          <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
            About Ortho Solution
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400, maxWidth: 600, mx: 'auto' }}
          >
            Leading the way in advanced orthopedic care and rehabilitation since
            2010.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Introduction Section */}
        <Grid2 container spacing={8} alignItems="center" sx={{ mb: 12 }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Clinic Interior"
              sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              color="primary"
              fontWeight={700}
              gutterBottom
              letterSpacing={1}
            >
              OUR STORY
            </Typography>
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              sx={{ mb: 3 }}
            >
              A Legacy of Healing
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Established in 2010, Ortho Solution has been a pioneer in bringing
              advanced orthopedic and rehabilitation care to the community. What
              started as a small clinic has grown into a premier center for
              musculoskeletal excellence.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Our mission is simple: to provide world-class medical treatment
              with a human touch. We believe that every patient deserves a
              personalized path to recovery, free from pain and limitations.
            </Typography>
          </Grid2>
        </Grid2>

        {/* Values Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle
            subtitle="OUR VALUES"
            title="What Drives Us"
            description="Our core principles tailored to ensure the best outcomes for our patients."
          />
          <Grid2 container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                icon: <VerifiedUserIcon fontSize="large" />,
                title: 'Integrity',
                desc: 'We operate with complete transparency and honesty in every diagnosis and treatment plan.',
              },
              {
                icon: <GroupsIcon fontSize="large" />,
                title: 'Patient-Centric',
                desc: 'Your health and comfort are our top priorities. We listen, care, and heal.',
              },
              {
                icon: <MedicalServicesIcon fontSize="large" />,
                title: 'Innovation',
                desc: 'We constantly upgrade our technology and techniques to offer the latest in medical care.',
              },
            ].map((item, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'background.default',
                    borderRadius: 4,
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ color: 'secondary.main', mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* Facilities Section */}
        <Box>
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                State-of-the-Art Facilities
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ fontSize: '1.1rem', mb: 3 }}
              >
                We are equipped with the latest diagnostic and surgical
                technology to ensure precision and safety.
              </Typography>

              <List>
                {[
                  'Modular Operation Theatres',
                  'Advanced Digital X-Ray',
                  'Specialized Physiotherapy Unit',
                  '24/7 Emergency Trauma Care',
                  'Comfortable Recovery Rooms',
                ].map((text, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LocalHospitalIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 7 }}>
              <Grid2 container spacing={2}>
                <Grid2 size={8}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 3,
                    }}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 3,
                    }}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: 3,
                    }}
                  />
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
