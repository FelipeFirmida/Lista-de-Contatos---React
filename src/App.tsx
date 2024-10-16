import { Provider } from 'react-redux'
import Formulario from './components/Formulario'
import ListaContatos from './components/ListaContatos'
import { MainContainer, Titulo, Lista, EstiloGlobal } from './components/styles'
import { store } from './store'
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <MainContainer>
        <Titulo>Lista de Contatos</Titulo>
        <Formulario />
        <Lista>
          <ListaContatos />
        </Lista>
      </MainContainer>
    </Provider>
  )
}

export default App
