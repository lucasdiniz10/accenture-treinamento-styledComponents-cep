import React from 'react';
import { InfoContainer } from "./styles";

function Cep(props) {
  return (
    <InfoContainer>
      <div className="leftList">
        <ul>
          <li>
            <label>Cidade</label>
            <input
              type="text"
              value="Uberlândia"
              readOnly
            />
          </li>
          <li>
            <label>Endereço</label>
            <input
              type="text"
              value="Rua teste"
              readOnly
            />
          </li>
          <li>
            <label>Complemento</label>
            <input
              type="text"
              value="Apto. 10"
              readOnly
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
              id="bairro"
              readOnly
            />
          </li>
          <li>
            <label>UF</label>
            <input
              type="text"
              value="MG"
              id="uf"
              readOnly
            />
          </li>
        </ul>
      </div>
    </InfoContainer>
  );
}

export default Cep;