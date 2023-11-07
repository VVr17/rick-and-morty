import React from 'react';
import InCodeIcon from 'assets/icons/incode.svg';
import { LogoStyled } from './FooterLogo.styled';

const FooterLogo = () => {
  return (
    <LogoStyled
      href="https://www.incode-group.com/"
      target="_blank"
      rel="noreferrer"
    >
      <span></span>
      <img src={InCodeIcon} alt="logo" width={40} height={40} />
    </LogoStyled>
  );
};

export default FooterLogo;
