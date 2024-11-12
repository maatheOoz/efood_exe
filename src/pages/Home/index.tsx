import { useGetHomePageQuery } from '../../services/api'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

const Home = () => {
  const { data: catalogoServico = [], isLoading: isLoadingRestaurantMenu } =
    useGetHomePageQuery()
  return (
    <>
      <Header background="light" />
      <ProductList
        title=""
        background="light"
        efoods={catalogoServico}
        isLoading={isLoadingRestaurantMenu}
      />
    </>
  )
}

export default Home
