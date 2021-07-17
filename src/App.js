import { GlobalStyle } from "./global";
import { Container } from "./styles"
import Cep from './components/Cep';

function App() {
  const isCep = false;

  return (
    <Container>
      <form action="">
        <input type="text" placeholder="Insira o CEP" />
        <button
          type="submit"
          disabled={!isCep ? true : false}
        >
          Pesquisar
        </button>
      </form>
      <Cep />
      <GlobalStyle />
    </Container>
  );
}

export default App;
