import { useParams } from 'react-router-dom'
import Loader from '../Loader'

import { useGetFeatureEfoodQuery } from '../../services/api'

import { ImgBanner } from './styles'

type Params = {
  id: string
}

const Banner = () => {
  const { id } = useParams<Params>()
  const { data: catalogoServico, isLoading } = useGetFeatureEfoodQuery(id || '')

  if (isLoading) {
    return <Loader />
  }

  if (!catalogoServico) {
    return (
      <div className="container">
        <h3>Serviço não encontrado</h3>
      </div>
    )
  }

  return (
    <div className="container">
      <ImgBanner style={{ backgroundImage: `url(${catalogoServico.capa})` }}>
        <h3>{catalogoServico.tipo}</h3>
        <h1>{catalogoServico.titulo}</h1>
      </ImgBanner>
    </div>
  )
}

export default Banner
