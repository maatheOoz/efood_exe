import { useParams } from 'react-router-dom'

import { useGetFeatureEfoodQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

type EfoodParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as EfoodParams
  const { data: catalogoServico, isLoading: isLoadingRestaurantMenu } =
    useGetFeatureEfoodQuery(id)

  return (
    <>
      <Header background={'dark'} />

      <Banner />
      <ProductList
        title=""
        background={'dark'}
        efoods={catalogoServico?.cardapio}
        isCardapio
        isLoading={isLoadingRestaurantMenu}
      />
    </>
  )
}

export default Perfil
