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
import { BLOG_POSTS } from '../../data/blogPosts';
import { useNavigate } from 'react-router-dom';

const BlogPreview = () => {
  const navigate = useNavigate();

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
          {BLOG_POSTS.map((post) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '16px',
                  boxShadow: 2,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
              >
                <CardActionArea onClick={() => navigate(`/blog/${post.id}`)}>
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.excerpt}
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
