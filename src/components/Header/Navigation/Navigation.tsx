import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import { pages } from 'constants/navigation';
import { navLinkStyles } from '../styles';

const Navigation = () => {
  return (
    <Box
      component="ul"
      flexGrow={1}
      display={{ xs: 'none', md: 'flex' }}
      justifyContent="end"
      gap={3}
    >
      {pages.map(({ title, href }) => (
        <Box key={title} component="li">
          <Link component={NavLink} to={href} sx={navLinkStyles}>
            {title}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
