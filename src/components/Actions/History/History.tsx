import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Typography,
  ListItem,
  List,
  SwipeableDrawer,
  Divider,
  Button,
} from '@mui/material';
import { useAppSelector } from 'app/redux/hooks';
import { selectHistory } from 'app/redux/history/selectors';

interface IProps {
  isOpen: boolean;
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const History: React.FC<IProps> = ({ isOpen, toggleDrawer }) => {
  const { history } = useAppSelector(selectHistory);

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      PaperProps={{
        style: {
          height: '580px',
          padding: '16px',
          top: '24px',
        },
      }}
    >
      <Box
        width={420}
        role="history"
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Typography color="primary.dark" fontSize={20} fontWeight={500}>
          History
        </Typography>
        <List sx={{ overflowY: 'auto' }}>
          {history.map((text, index) => (
            <ListItem key={index} disablePadding divider sx={{ py: 2 }}>
              <Typography color="primary.dark">{text}</Typography>
              <Divider />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color={'secondary'}
          onClick={toggleDrawer}
          sx={{ mt: 'auto' }}
        >
          Close
        </Button>
      </Box>
    </SwipeableDrawer>
  );
};

export default History;
