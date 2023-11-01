import styled from 'styled-components';
import heroBg from 'assets/icons/hero.svg';

export const HeroStyled = styled.section`
  box-sizing: border-box;
  width: 1440px;
  height: 345px;

  margin: 0 auto;
  padding-top: 113px;
  padding-bottom: 113px;

  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
`;
