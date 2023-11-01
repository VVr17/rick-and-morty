import { theme } from 'constants/theme';
import styled from 'styled-components';

export const DescStyled = styled.p`
  max-width: 212px;
  margin-bottom: 34px;

  color: ${theme.palette.text.secondary};

  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
`;

export const LogoStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 82px;
  height: 82px;
  margin-bottom: 56px;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 82px;
    height: 82px;

    background: linear-gradient(
      227deg,
      rgba(255, 255, 255, 0.8) -1.89%,
      rgba(255, 255, 255, 0) 98.53%
    );
    filter: blur(42px);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;

    width: 50px;
    height: 50px;
  }
`;

export const SocialLinkStyled = styled.a`
  display: block;
  font-size: 0;

  :hover,
  :focus {
    color: ${theme.palette.success.main};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
