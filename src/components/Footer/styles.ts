import styled from 'styled-components'
import { colors } from '../../styles'

export const Footers = styled.footer`
  height: 298px;
  background-color: ${colors.BlanchedAlmond};
`
export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .imagemLogo {
    width: 125px;
    height: 57.5px;
    margin: 40px 0 32.5px 0;
  }
`

export const RedeSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 24px;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
  }
`
export const Titulo = styled.h2`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.72px;
  text-align: center;
  max-width: 480px;
  width: 100%;
  height: 24px;
  margin: 80px auto 40px auto;
`
