import { createGlobalStyle } from 'styled-components'

export const colors = {
  LightSalmon: '#E66767',
  BlanchedAlmond: '#FFEBD9',
  white: '#FFFFFF',
  BrightOrange: '#FFB930',
  FloralWhite: '#FFF8F2',
  CrimsonRed: '#fae0e4'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${colors.FloralWhite};
    color:${colors.LightSalmon};
    font-family:Roboto, sans-serif;
    text-decoration: none;
    list-style-type: none;
  }
  .container {
  max-width: 100%;
  margin: 0 auto;


@media (max-width: ${breakpoints.desktop}) {
  .container {
    max-width: 1024px;
    padding: 0 16px;
  }
}

@media (max-width: ${breakpoints.tablet}) {
  .container {
    max-width: 768px;
    padding: 0 12px;
  }
}

@media (max-width: ${breakpoints.mobile}) {
  .container {
    max-width: 480px;
    padding: 0 8px;
  }
}
}

`
