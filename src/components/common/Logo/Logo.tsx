import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from 'assets/icons/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={LogoIcon}
        alt="logo"
        width={40}
        height={40}
        style={{ width: 40, height: 40 }}
      />
    </Link>
  );
};

export default Logo;
