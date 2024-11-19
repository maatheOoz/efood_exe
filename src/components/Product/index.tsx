import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import RestaurantRatingImg from '../../assets/icons/estrela.png'

import Tag from '../../components/Tag'
import Botao from '../Button'
import ModalPoupap from '../Modal'

import * as S from './styles'

export type Efood = {
  id: string
  capa: string
  tipo: string
  destacado: boolean
  titulo: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
}

type ProductProps = {
  image: string
  infos: string[]
  title: string
  nota?: number
  description: string
  to: string
  background: 'light' | 'dark'
  currentItem: CardapioItem | null
  shouldTruncateDescription?: boolean
  id: string
}

const Product: React.FC<ProductProps> = ({
  image,
  infos,
  title,
  nota,
  description,
  to,
  background,
  currentItem,
  shouldTruncateDescription = false
}) => {
  const location = useLocation()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const buttonText = location.pathname.startsWith(`/perfil/`)
    ? 'Adicionar ao carrinho'
    : 'Saiba mais'

  const getTruncatedDescription = (description: string) => {
    if (description && description.length > 160) {
      return description.slice(0, 160) + '...'
    }
    return description
  }

  const isPerfilPage = location.pathname.startsWith(`/perfil/`)

  return (
    <div className="container">
      <S.CardConteiner>
        <S.CardRestaurant
          title={`Clique aqui para ver mais detalhes do cardapio : ${title}`}
        >
          <S.Imagem style={{ backgroundImage: `url(${image})` }} />
          <S.Infos>
            {infos.map((info, index) => (
              <Tag key={index}>{info}</Tag>
            ))}
          </S.Infos>
          <S.ContainerDescritivo>
            <S.LineSection>
              <h3 className="tituloCard">{title}</h3>
              <div className="Rating">
                <h3 className="nota">{nota}</h3>
                <S.RatingStar
                  style={{ backgroundImage: `url(${RestaurantRatingImg})` }}
                />
              </div>
            </S.LineSection>
            <p>
              {isPerfilPage && shouldTruncateDescription
                ? getTruncatedDescription(description)
                : description}
            </p>
            {isPerfilPage ? (
              <Botao
                type="button"
                onClick={toggleModal}
                title={buttonText}
                background={background}
              >
                {buttonText}
              </Botao>
            ) : (
              <Botao
                type="link"
                to={to}
                title={buttonText}
                background={background}
              >
                {buttonText}
              </Botao>
            )}
          </S.ContainerDescritivo>
        </S.CardRestaurant>
      </S.CardConteiner>
      {isModalVisible && currentItem && (
        <ModalPoupap
          onClose={toggleModal}
          foto={currentItem.foto}
          descricao={currentItem.descricao}
          porcao={currentItem.porcao}
          preco={currentItem.preco}
          nome={currentItem.nome}
        />
      )}
    </div>
  )
}

export default Product
