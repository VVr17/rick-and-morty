import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { downloadCharacters } from 'utils';
import { selectCharacters } from 'app/redux/characters';
import { useAppSelector } from 'app/redux/hooks';

import ActionMenu from './ActionMenu';
import { Fab } from 'components/common/buttons';
import History from './History';

interface IProps {
  type: 'filter' | 'details';
}

const Actions: React.FC<IProps> = ({ type }) => {
  const { data } = useAppSelector(selectCharacters);
  const fabRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [historyIsOpen, setHistoryIsOpen] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  // Set anchor element for menu
  useEffect(() => {
    if (fabRef.current) {
      setAnchorEl(fabRef.current);
    }
  }, [fabRef]);

  const toggleActionsMenu = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setHistoryIsOpen(prevState => !prevState);

    if (menuIsOpen) {
      toggleActionsMenu();
    }
  };

  const downloadFile = () => {
    downloadCharacters(data);
    toggleActionsMenu();
  };

  return (
    <>
      <Fab ref={fabRef} isOpen={menuIsOpen} handleClick={toggleActionsMenu} />
      <ActionMenu
        type={type}
        anchorEl={anchorEl}
        isOpen={menuIsOpen}
        handleClose={toggleActionsMenu}
        handleHistory={toggleDrawer}
        download={downloadFile}
      />
      <History isOpen={historyIsOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Actions;
