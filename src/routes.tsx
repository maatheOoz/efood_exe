import { Route, Routes } from 'react-router-dom'

import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
