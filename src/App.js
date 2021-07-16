import { GlobalStyle } from "./global";
import { Container } from "./styles"
import Cep from './components/Cep';

function App() {
  return (
    <Container>
      <form action="">
        <input type="text" placeholder="Insira o CEP" />
        <button type="submit">
          Pesquisar
        </button>
      </form>
      <Cep />
      <GlobalStyle />
    </Container>
  );
}

export default App;
