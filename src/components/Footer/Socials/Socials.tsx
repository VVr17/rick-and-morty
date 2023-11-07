import React from 'react';
import { Box } from '@mui/system';
import { Link } from '@mui/material';

import { socialLinks } from 'constants/socials';
import { styles } from './styles';

const Socials = () => {
  return (
    <Box
      mb={3.5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="text.secondary"
      gap={3.5}
    >
      {socialLinks.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          sx={styles}
        >
          <Icon />
        </Link>
      ))}
    </Box>
  );
};

export default Socials;
