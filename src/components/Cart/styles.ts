import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/icons/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.LightSalmon};
  max-width: 360px;
  width: 100%;
  max-height: 1624px;
  height: 100%;
  position: relative;
  opacity: 1;
  z-index: 1;
  padding: 16px 8px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    max-height: 24px;
    height: 24px;
  }

  .empty-text {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: ${colors.FloralWhite};
  }
`

export const Prices = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: ${colors.FloralWhite};
  margin: 40px 0 16px 0;
  display: flex;
  justify-content: space-between;

  span {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: right;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.BlanchedAlmond};
  margin: 16px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px;
  }

  h3 {
    color: ${colors.LightSalmon};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    margin-top: 8px;
  }

  span {
    display: block;
    color: ${colors.LightSalmon};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0 33px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
