import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import Fab from 'components/common/buttons/Fab';
import ActionMenu from './ActionMenu';
import History from './History';

import { useAppSelector } from 'app/redux/hooks';
import { selectCharacters } from 'app/redux/characters';
import { downloadCharacters } from 'utils/downloadCharacters';

interface IProps {
  type: 'filter' | 'details';
}

const Actions: React.FC<IProps> = ({ type }) => {
  const { characterList } = useAppSelector(selectCharacters);
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
    downloadCharacters(characterList);
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
