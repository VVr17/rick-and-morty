import { css } from '@mui/material';
import { theme } from 'constants/theme';

export const globalStyles = css`
  body {
    height: 100vh;
    margin: 0;
    font-family: 'Roboto';
    font-size: 18px;
    color: ${theme.palette.secondary.main};
    background-color: ${theme.palette.primary.main};
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }
`;
