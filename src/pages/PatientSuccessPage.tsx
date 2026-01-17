import {
  Container,
  Typography,
  Box,
  Grid2,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  Paper,
  Button,
} from '@mui/material';
import { STATS, TESTIMONIALS } from '../data/testimonials';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SectionTitle from '../components/common/SectionTitle'; // Assuming this exists from previous steps
import { useBooking } from '../context/BookingContext';

const PatientSuccessPage = () => {
  const { openBooking } = useBooking();
  // Separate the featured story (first one) from the rest
  const featuredStory = TESTIMONIALS[0];
  const otherStories = TESTIMONIALS.slice(1);

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
            REAL STORIES
          </Typography>
          <Typography variant="h2" fontWeight={700} gutterBottom sx={{ mb: 2 }}>
            Patient Success
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 400, maxWidth: 600, mx: 'auto' }}
          >
            Nothing brings us more joy than seeing our patients regain their
            movement and their lives.
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Grid2 container spacing={3}>
          {STATS.map((stat, index) => (
            <Grid2 size={{ xs: 6, md: 3 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" fontWeight={800} sx={{ mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  sx={{ opacity: 0.9 }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      <Container maxWidth="lg">
        {/* Featured Story */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle
            subtitle="FEATURED JOURNEY"
            title="A Life Transformed"
          />
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 4,
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: 300, md: 'auto' },
                backgroundImage: `url(${featuredStory.image})`,
                backgroundSizeMode: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                p: { xs: 4, md: 6 },
                bgcolor: '#fff',
              }}
            >
              <Chip
                icon={<EmojiEventsIcon />}
                label="Success Story of the Month"
                color="secondary"
                sx={{ mb: 3 }}
              />
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {featuredStory.name}'s Journey to Recovery
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                Procedure: {featuredStory.role}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.1rem',
                  color: 'text.secondary',
                  my: 3,
                  fontStyle: 'italic',
                }}
              >
                "{featuredStory.story}"
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '1.1rem', fontWeight: 500 }}
              >
                "{featuredStory.quote}"
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Button variant="contained" size="large" onClick={openBooking}>
                  Start Your Recovery
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Reviews Grid */}
        <Box>
          <SectionTitle
            subtitle="TESTIMONIALS"
            title="What Our Patients Say"
            description="We are rated 4.9/5 stars on Google. Here is why."
          />
          <Grid2 container spacing={4} sx={{ mt: 2 }}>
            {otherStories.map((story) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={story.id}>
                <Card
                  sx={{ height: '100%', borderRadius: 4, p: 2, boxShadow: 2 }}
                >
                  <CardContent>
                    <Box sx={{ mb: 3, color: 'primary.light' }}>
                      <FormatQuoteIcon fontSize="large" />
                    </Box>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ fontSize: '1.05rem', mb: 3, minHeight: 80 }}
                    >
                      "{story.quote}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        src={story.image}
                        alt={story.name}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {story.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {story.role}
                        </Typography>
                        <Rating
                          value={story.rating}
                          readOnly
                          size="small"
                          sx={{ display: 'flex' }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default PatientSuccessPage;
