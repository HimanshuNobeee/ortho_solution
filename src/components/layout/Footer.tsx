import {
  Box,
  Container,
  Grid2,
  Typography,
  Link,
  Stack,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { COMPANY_INFO, NAV_LINKS, UI_TEXT } from '../../data/constants';

const Footer = () => {
  const { footer } = UI_TEXT;

  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 2, fontFamily: 'Outfit' }}
            >
              {COMPANY_INFO.name}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
              {COMPANY_INFO.description}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton color="inherit" href={COMPANY_INFO.socials.facebook}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href={COMPANY_INFO.socials.twitter}>
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href={COMPANY_INFO.socials.instagram}>
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 6, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, fontFamily: 'Outfit' }}
            >
              {footer.quickLinks}
            </Typography>
            <Stack spacing={1}>
              {NAV_LINKS.map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.8 }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 6, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, fontFamily: 'Outfit' }}
            >
              {footer.contactUs}
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {footer.addressLabel}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {COMPANY_INFO.address}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {footer.phoneLabel}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {COMPANY_INFO.phone}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {footer.emailLabel}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {COMPANY_INFO.email}
                </Typography>
              </Box>
            </Stack>
          </Grid2>
        </Grid2>
        <Box
          sx={{
            textAlign: 'center',
            mt: 6,
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            {COMPANY_INFO.copyright}
          </Typography>
        </Box>
      </Container>

      {/* Developer Promotion Bar */}
      <Box
        sx={{ bgcolor: 'rgba(0,0,0,0.2)', py: 1.5, mt: 4, textAlign: 'center' }}
      >
        <Typography variant="caption" sx={{ opacity: 0.8, letterSpacing: 0.5 }}>
          Expertly Built by{' '}
          <Box
            component="span"
            sx={{ fontWeight: 700, color: 'secondary.light' }}
          >
            Himanshu
          </Box>{' '}
          —
          <Link
            href="https://wa.me/918359880827?text=Hi%20Himanshu,%20I%20saw%20Ortho%20Solution%20and%20want%20a%20similar%20website"
            target="_blank"
            color="inherit"
            sx={{
              ml: 1,
              fontWeight: 600,
              textDecorationColor: 'rgba(255,255,255,0.5)',
            }}
          >
            Get Your Own Medical Website
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
