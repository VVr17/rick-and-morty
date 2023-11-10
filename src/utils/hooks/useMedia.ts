import { useMediaQuery, useTheme } from '@mui/material';

export const useMedia = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  return { isXs, isSm, isMd, isMdDown, isLgDown, isLg };
};
