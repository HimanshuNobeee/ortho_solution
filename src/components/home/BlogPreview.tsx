import {
  Box,
  Container,
  Grid2,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
} from '@mui/material';

const posts = [
  {
    title: '5 Exercises for Stronger Knees',
    category: 'Physiotherapy',
    date: 'Oct 15, 2024',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Understanding Joint Replacement Surgery',
    category: 'Orthopedics',
    date: 'Oct 10, 2024',
    image:
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Post-Surgery Rehab Tips',
    category: 'Recovery',
    date: 'Oct 05, 2024',
    image:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const BlogPreview = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 700, mb: 1, letterSpacing: 1 }}
          >
            HEALTH TIPS & NEWS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            From Our Blog
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {posts.map((post, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '16px',
                  boxShadow: 2,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Chip
                        label={post.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, lineHeight: 1.4, mb: 1 }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Read more about essential tips for maintaining joint
                      health...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default BlogPreview;
