import React, { MouseEventHandler } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fab from 'components/common/buttons/Fab';
import MenuIconButton from 'components/common/buttons/MenuIconButton';

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleHistory: MouseEventHandler<HTMLButtonElement>;
  upload: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const ActionMenu: React.FC<IProps> = ({
  anchorEl,
  isOpen,
  handleClose,
  handleHistory,
  upload,
}) => {
  return (
    <Menu
      id="more-actions-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      sx={{
        top: -76,
        '& div': {
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      }}
    >
      <MenuItem sx={{ mb: '16px', borderRadius: '50%', width: 40, padding: 0 }}>
        <MenuIconButton handleClick={handleHistory}>
          <ErrorOutlineIcon />
        </MenuIconButton>
      </MenuItem>
      <MenuItem
        // onClick={handleClose}
        sx={{ borderRadius: '50%', width: 40, padding: 0 }}
      >
        <MenuIconButton handleClick={upload}>
          <SaveAltIcon />
        </MenuIconButton>
      </MenuItem>
    </Menu>
  );
};

export default ActionMenu;
