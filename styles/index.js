/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';
import { reset } from 'styles/reset'
import { colors } from './variables';

injectGlobal`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    text-size-adjust: 100%;
    visibility: hidden;
  }
  html.font-loaded {
    visibility: visible;
  }
  body {
    position: relative;
    overflow-x: hidden;
    min-height: 100%;
    background-color: ${colors.black};
    color: ${colors.white};
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-touch-callout: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    vertical-align: middle;
    -webkit-touch-callout: none;
  }
  h3{
    font-size: 1.3em;
  }
`;
