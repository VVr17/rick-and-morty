import React, { MouseEventHandler } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIconButton from 'components/common/buttons/MenuIconButton';

interface IProps {
  type: 'filter' | 'details';
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleHistory: MouseEventHandler<HTMLButtonElement>;
  download: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const ActionMenu: React.FC<IProps> = ({
  type,
  anchorEl,
  isOpen,
  handleClose,
  handleHistory,
  download,
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
        <MenuIconButton handleClick={handleHistory} disabled={false}>
          <ErrorOutlineIcon />
        </MenuIconButton>
      </MenuItem>
      <MenuItem
        sx={{
          borderRadius: '50%',
          width: 40,
          padding: 0,
          cursor: type === 'details' ? 'default' : 'pointer',
        }}
      >
        <MenuIconButton handleClick={download} disabled={type === 'details'}>
          <SaveAltIcon />
        </MenuIconButton>
      </MenuItem>
    </Menu>
  );
};

export default ActionMenu;
