import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { styles } from './styles';

const Logo = () => {
  return (
    <Link component={RouterLink} to="/" sx={styles}>
      <LogoIcon fill="currentColor" />
    </Link>
  );
};

export default Logo;
