import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ImgBanner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  h3 {
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
    padding-top: 25px;
    margin-left: 171px;
    z-index: 1;
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 24px;
      margin-left: 20px;
      padding-top: 15px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
      margin-left: 20px;
      padding-top: 15px;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    padding-top: 156px;
    padding-bottom: 32px;
    margin-left: 171px;
    z-index: 1;
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
      margin-left: 20px;
      padding-top: 100px;
      padding-bottom: 16px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 28px;
      margin-left: 20px;
      padding-top: 100px;
      padding-bottom: 16px;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }
`
