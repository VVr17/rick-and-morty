import React from 'react';
import { Box } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

import { pages } from 'constants/navigation';
import Section from 'components/common/Section';
import { linkStyles } from './styles';

const HomeNav = () => {
  return (
    <Section>
      <Box
        component="ul"
        flexDirection={{ xs: 'column', md: 'row' }}
        display="flex"
        gap={4}
        justifyContent="center"
      >
        {pages.map(({ title, href }) => (
          <Box key={title} component="li">
            <Link
              variant="button"
              component={RouterLink}
              to={href}
              sx={linkStyles}
            >
              {title}
            </Link>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default HomeNav;
