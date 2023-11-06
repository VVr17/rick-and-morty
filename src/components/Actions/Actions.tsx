import React, { KeyboardEvent, MouseEvent, useState } from 'react';

import Fab from 'components/common/buttons/Fab';
import ActionMenu from './ActionMenu';
import History from './History';

const Actions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [historyIsOpen, setHistoryIsOpen] = useState<boolean>(false);
  const actionMenuIsOpen = Boolean(anchorEl);

  const openActionMenu = (
    event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const closeActionMenu = () => {
    setAnchorEl(null);
  };

  const toggleDrawer =
    (isOpen: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setHistoryIsOpen(isOpen);
      closeActionMenu();
    };

  const uploadFile = () => {
    console.log('click on upload');
    closeActionMenu();
  };

  return (
    <>
      <Fab isOpen={actionMenuIsOpen} handleClick={openActionMenu} />
      <ActionMenu
        anchorEl={anchorEl}
        isOpen={actionMenuIsOpen}
        handleClose={closeActionMenu}
        handleHistory={toggleDrawer(true)}
        upload={uploadFile}
      />

      <History isOpen={historyIsOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Actions;
