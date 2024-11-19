import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, colors } from '../../styles'

export const HeaderPage = styled.div`
  max-width: 100%;
`

export const Imagem = styled.div<Props>`
  width: 100%;
  max-height: ${(props) => (props.background === 'dark' ? '186px' : '360px')};
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }

  .imagemLogoLnk {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 57.5px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 40px;
      margin-bottom: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
`
export const Titulo = styled.h2`
  width: 539px;
  height: 84px;

  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  margin-top: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    font-size: 28px;
    font-weight: 900;
    line-height: 42.19px;
    margin-top: 138.5px;
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    width: 100%;
    height: 100%;
    font-size: 36px;
    font-weight: 900;
    line-height: 42.19px;
    margin-top: 138.5px;
    font-size: 28px;
  }
`
export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
  }
`
export const RestaurantName = styled(ContainerHeader)`
  font-size: 18px;
  font-weight: 900;
  justify-content: left;
  padding-top: none;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 40px;
  }
`
export const CarrinhoDeProdutos = styled(ContainerHeader)`
  font-size: 18px;
  font-weight: 900;
  justify-content: right;
  padding-top: none;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 40px;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 40px;
    padding-left: 5%;
    text-align: center;
  }
`
export const CartButton = styled.span`
  color: ${colors.LightSalmon};
  cursor: pointer;
`
