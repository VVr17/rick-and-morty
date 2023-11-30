import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, ListItem, List, Divider, Link } from '@mui/material';
import RedoIcon from '@mui/icons-material/Redo';

import { selectHistory } from 'app/redux/history';
import { useAppSelector } from 'app/redux/hooks';
import { linkStyles } from './styles';

const HistoryList = () => {
  const { history } = useAppSelector(selectHistory);

  return (
    <List sx={{ overflowY: 'auto', marginBottom: 2 }} disablePadding>
      {history.map(({ message, href }, index) => (
        <ListItem key={index} disablePadding divider>
          <Link
            component={RouterLink}
            to={href}
            color="primary.main"
            underline="none"
            sx={linkStyles}
          >
            <Typography color="primary.dark">{message}</Typography>
            <RedoIcon />
          </Link>

          <Divider />
        </ListItem>
      ))}
    </List>
  );
};

export default HistoryList;
