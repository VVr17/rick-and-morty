import React, { MouseEventHandler } from 'react';
import { Menu, MenuItem } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import MenuIconButton from 'components/common/buttons/MenuIconButton';
import { styles, itemStyles } from './styles';

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
      sx={styles}
    >
      <MenuItem sx={{ ...itemStyles, mb: '16px' }}>
        <MenuIconButton handleClick={handleHistory} disabled={false}>
          <ErrorOutlineIcon />
        </MenuIconButton>
      </MenuItem>
      <MenuItem
        sx={{
          ...itemStyles,
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
