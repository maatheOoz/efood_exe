import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button<{ background: 'light' | 'dark' }>`
  border: none;
  background-color: ${(props) =>
    props.background === 'dark' ? colors.BlanchedAlmond : colors.LightSalmon};
  color: ${(props) =>
    props.background === 'dark' ? colors.LightSalmon : colors.BlanchedAlmond};
  width: ${(props) => (props.background === 'dark' ? '304px' : '100%')};
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${colors.BlanchedAlmond};
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const ButtonLink = styled(Link)<{ background: 'light' | 'dark' }>`
  width: ${(props) => (props.background === 'dark' ? '100%' : '84px')};
  height: 24px;
  background-color: ${(props) =>
    props.background === 'dark' ? colors.BlanchedAlmond : colors.LightSalmon};
  color: ${(props) =>
    props.background === 'dark' ? colors.LightSalmon : colors.BlanchedAlmond};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  margin-top: 16px;
  cursor: pointer;
  padding: 4px 6px;
  margin-left: 8px;

  &:focus {
    outline: 2px solid ${colors.BlanchedAlmond};
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
