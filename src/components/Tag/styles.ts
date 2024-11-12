import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'

export const TagContainer = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.LightSalmon};
  color: ${colors.FloralWhite};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  line-height: ${(props) => (props.size === 'big' ? '16.41px' : '14.06px')};
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  width: ${(props) => (props.size === 'big' ? '82px' : 'none')};
  height: ${(props) => (props.size === 'big' ? '24px' : '26px')};
  text-align: center;
`
