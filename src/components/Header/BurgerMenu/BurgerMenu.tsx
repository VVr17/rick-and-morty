import React, { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, IconButton, Link, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { pages } from 'constants/navigation';
import { mobileNavLinkStyles } from '../styles';

const BurgerMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box flexGrow={1} display={{ xs: 'flex', md: 'none' }}>
      <IconButton
        size="large"
        aria-label="burger-menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ ml: 'auto' }}
      >
        <MenuIcon />
      </IconButton>

      {/* Nav menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& ul': { color: 'primary.main' },
        }}
      >
        {pages.map(({ title, href }) => (
          <MenuItem key={href} onClick={handleCloseNavMenu}>
            <Link component={NavLink} to={href} sx={mobileNavLinkStyles}>
              {title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
