import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  background: 'light' | 'dark'
  disabled?: boolean
}

const Botao = ({
  type,
  children,
  title,
  disabled,
  to,
  onClick,
  background
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        background={background}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title} background={background}>
      {children}
    </ButtonLink>
  )
}

export default Botao
