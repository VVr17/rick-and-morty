import React from 'react';
import { Box } from '@mui/system';
import desktopImg from 'assets/images/title-desktop.png';
import mobileImg from 'assets/images/title-mobile.png';
import { useMedia } from 'utils/hooks';

const Title = () => {
  const { isXs, isSm, isMd } = useMedia();

  return (
    <Box maxWidth={isMd ? 700 : isSm ? 400 : 312} mx="auto">
      <img
        src={isXs ? mobileImg : desktopImg}
        alt="rick and morty"
        width={312}
        height={104}
      />
    </Box>
  );
};

export default Title;
