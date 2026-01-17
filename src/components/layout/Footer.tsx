import {
  Box,
  Container,
  Grid,
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
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
          </Grid>

          <Grid item xs={6} md={4}>
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
          </Grid>

          <Grid item xs={6} md={4}>
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
          </Grid>
        </Grid>
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
    </Box>
  );
};

export default Footer;
