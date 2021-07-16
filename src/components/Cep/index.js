import React from 'react';
import { InfoContainer } from "./styles";

// import { Container } from './styles';

function Cep() {
  return (
    <InfoContainer>
      <div className="leftList">
        <ul>
          <li>
            <label>Cidade</label>
            <input
              type="text"
              value="Uberlândia"
              readonly="true"
            />
          </li>
          <li>
            <label>Endereço</label>
            <input
              type="text"
              value="Rua teste"
              readonly="true"
            />
          </li>
          <li>
            <label>Complemento</label>
            <input
              type="text"
              value="Apto. 10"
              readonly="true"
            />
          </li>
        </ul>
      </div>
      <div className="rightList">
        <ul>
          <li>
            <label>Bairro</label>
            <input
              type="text"
              value="Centro"
              readonly="true"
              id="bairro"
            />
          </li>
          <li>
            <label>UF</label>
            <input
              type="text"
              value="MG"
              readonly="true"
              id="uf"
            />
          </li>
        </ul>
      </div>
    </InfoContainer>
  );
}

export default Cep;