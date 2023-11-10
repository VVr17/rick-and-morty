import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, SwipeableDrawer, Button } from '@mui/material';
import { useMedia } from 'utils/hooks';

import HistoryList from './HistoryList';
import { closeButtonStyles, styles } from './styles';

interface IProps {
  isOpen: boolean;
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const History: React.FC<IProps> = ({ isOpen, toggleDrawer }) => {
  const { isSm } = useMedia();

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      PaperProps={styles}
    >
      <Box
        width={isSm ? 420 : '100%'}
        role="history"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Typography
          component="p"
          color="primary.dark"
          fontSize={20}
          fontWeight={500}
          mb={2}
        >
          History
        </Typography>
        <HistoryList />
        <Button
          variant="contained"
          color={'secondary'}
          onClick={toggleDrawer}
          sx={closeButtonStyles}
        >
          Close
        </Button>
      </Box>
    </SwipeableDrawer>
  );
};

export default History;
