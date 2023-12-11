import React from 'react';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { getHistoryItemById } from 'utils';
import { setHistoryItem } from 'app/redux/history';
import { useAppDispatch } from 'app/redux/hooks';
import { linkStyles } from './styles';

interface IProps {
  id: string;
  name: string;
  href: string;
  type: FilterType;
}

const CardTitle: React.FC<IProps> = ({ href, name, id, type }) => {
  const dispatch = useAppDispatch();

  // Add details page by ID visit to history
  const addToHistory = () => {
    if (name && id) {
      const historyItem = getHistoryItemById(name, id, type);
      dispatch(setHistoryItem(historyItem));
    }
  };

  return (
    <Link
      component={RouterLink}
      to={href}
      color="secondary.main"
      underline="none"
      sx={linkStyles}
      onClick={addToHistory}
    >
      <Typography fontWeight={800} variant="h5" component="span">
        {name}
      </Typography>
    </Link>
  );
};

export default CardTitle;
