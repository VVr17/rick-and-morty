import React from 'react';
import { Typography, ListItem, List, Divider } from '@mui/material';
import { selectHistory } from 'app/redux/history';
import { useAppSelector } from 'app/redux/hooks';

const HistoryList = () => {
  const { history } = useAppSelector(selectHistory);

  return (
    <List sx={{ overflowY: 'auto', marginBottom: 2 }} disablePadding>
      {history.map((text, index) => (
        <ListItem key={index} disablePadding divider sx={{ py: 2 }}>
          <Typography color="primary.dark">{text}</Typography>
          <Divider />
        </ListItem>
      ))}
    </List>
  );
};

export default HistoryList;
