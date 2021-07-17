import { GlobalStyle } from "./global";
import { Container, Button } from "./styles"
import Cep from './components/Cep';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cep, setCep] = useState('');
  const [isCepOk, setIsCepOk] = useState(false);
  const [address, setAddress] = useState({})

  useEffect(() => {
    if (cep.length === 8) {
      setIsCepOk(true);
    } else {
      setIsCepOk(false);
    }
    console.log()
  }, [cep])

  const handleClickSearchCep = async (e) => {
    e.preventDefault();

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.data);

    if (response.erro) {
      alert(`Sem resposta! Tente novamente.`)
      setCep('');
      setAddress({})
    } else {
      setAddress(response)
    }
  }


  return (
    <Container>
      <form onSubmit={handleClickSearchCep}>
        <input
          type="number"
          placeholder="Insira o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <Button
          type="submit"
          disabled={!isCepOk ? true : false}
        >
          Pesquisar
        </Button>
      </form>
      <Cep cep={address} />
      <GlobalStyle />
    </Container>
  );
}

export default App;
