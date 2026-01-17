import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  subtitleColor?: 'primary' | 'secondary' | string;
  align?: 'center' | 'left';
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  subtitleColor = 'primary',
  align = 'center',
}: SectionTitleProps) => {
  return (
    <Box sx={{ textAlign: align, mb: 8 }}>
      <Typography
        variant="h6"
        color={subtitleColor}
        sx={{
          fontWeight: 700,
          mb: 1,
          letterSpacing: 1,
          textTransform: 'uppercase',
        }}
      >
        {subtitle}
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: align === 'center' ? 'auto' : 0 }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
