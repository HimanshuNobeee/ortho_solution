import {
  Container,
  Typography,
  Box,
  Chip,
  Divider,
  Button,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useEffect } from 'react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the post
  const post = BLOG_POSTS.find((p) => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <Container sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h4">Post not found</Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Go Home
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ pb: 12 }}>
      {/* Hero / Header Image */}
      <Box
        sx={{
          height: { xs: 300, md: 500 },
          width: '100%',
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ pb: 8 }}>
          <Chip label={post.category} color="primary" sx={{ mb: 3 }} />
          <Typography
            variant="h2"
            color="white"
            fontWeight={700}
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              maxWidth: 900,
            }}
          >
            {post.title}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -4, position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              color: 'text.secondary',
              mb: 4,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon fontSize="small" color="action" />
              <Typography variant="subtitle2" fontWeight={600}>
                {post.author}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon fontSize="small" color="action" />
              <Typography variant="subtitle2">{post.date}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="subtitle2">{post.readTime}</Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              '& h3': {
                color: 'text.primary',
                fontSize: '1.5rem',
                fontWeight: 700,
                mt: 4,
                mb: 2,
              },
              '& p': { mb: 2 },
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Divider sx={{ my: 6 }} />

          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            variant="outlined"
            size="large"
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPostPage;
