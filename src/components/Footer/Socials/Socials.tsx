import React from 'react';
import { Box } from '@mui/system';
import { GitHub, Twitter, Favorite } from '@mui/icons-material';
import { SocialLinkStyled } from '../Footer.styled';

const Socials = () => {
  return (
    <Box
      mb={3.5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="text.secondary"
      gap={3.5}
    >
      <SocialLinkStyled
        href="https://github.com/VVr17/rick-and-morty"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
      >
        <GitHub />
      </SocialLinkStyled>
      <SocialLinkStyled
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="twitter"
      >
        <Twitter />
      </SocialLinkStyled>
      <SocialLinkStyled
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="facebook"
      >
        <Favorite />
      </SocialLinkStyled>
    </Box>
  );
};

export default Socials;
