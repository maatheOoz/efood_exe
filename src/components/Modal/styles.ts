import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const ContainerPoupap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const Poupap = styled.div`
  position: relative;
  display: flex;
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${colors.LightSalmon};
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.9px;
    color: ${colors.white};
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }

  p {
    width: 656px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: ${colors.white};
    margin: 16px 0;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 13px;
      line-height: 20px;
    }
  }

  ${TagContainer} {
    width: 218px;
    height: 24px;
    background-color: ${colors.BlanchedAlmond};
    color: ${colors.LightSalmon};
    margin-bottom: 27px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      text-align: center;
    }
  }
`

export const SectionImgModal = styled.div`
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 0;
    margin-bottom: 12px;
  }
`

export const ModalImage = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;
  }
`

export const CloseImg = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  z-index: 1;

  > img {
    width: 16px;
    height: 16px;
  }
`
