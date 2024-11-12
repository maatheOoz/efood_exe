import * as S from './styles'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Card = ({ children }: Props) => {
  return (
    <S.Container isOverlay>
      <S.Sidebar>
        <div className="divFormulario">{children}</div>
      </S.Sidebar>
    </S.Container>
  )
}

export default Card
