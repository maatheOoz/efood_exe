import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Rotas from './routes'

import { GlobalCSS } from './styles'

import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
