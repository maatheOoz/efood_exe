import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import LogoImgHome from '../../assets/icons/logo.png'
import BannerImgHome from '../../assets/images/BannerImgHome.png'

import * as S from './styles'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation()
  const { id } = useParams<{ id: string }>()

  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const titleRestaurate = id ? 'Restaurantes' : ''
  const titleCarrinho = id ? `${items.length} produto(s) no carrinho` : ''

  return (
    <S.HeaderPage className="container">
      <S.Imagem
        style={{ backgroundImage: `url(${BannerImgHome})` }}
        background={background}
      >
        <div className="container">
          <S.ContainerHeader>
            <S.RestaurantName>{titleRestaurate}</S.RestaurantName>
            <Link title="Clique aqui para retornar a pagina home" to="/">
              <img
                className="imagemLogoLnk"
                src={LogoImgHome}
                alt="efood"
                width="150"
                height="50"
              />
            </Link>

            <S.CarrinhoDeProdutos>
              <S.CartButton role="button" onClick={openCart}>
                {titleCarrinho}
              </S.CartButton>
            </S.CarrinhoDeProdutos>
          </S.ContainerHeader>
          <S.Titulo>{titleText}</S.Titulo>
        </div>
      </S.Imagem>
    </S.HeaderPage>
  )
}

export default React.memo(Header)
