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
              value={props.cep.localidade ? props.cep.localidade : 'Seu endereço'}
              readOnly
            />
          </li>
          <li>
            <label>Endereço</label>
            <input
              type="text"
              value={props.cep.logradouro ? props.cep.logradouro : 'Sua Rua'}
              readOnly
            />
          </li>
          <li>
            <label>Complemento</label>
            <input
              type="text"
              value={props.cep.complemento ? props.cep.complemento : '...'}
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
              value={props.cep.bairro ? props.cep.bairro : 'Seu Bairro'}
              id="bairro"
              readOnly
            />
          </li>
          <li>
            <label>UF</label>
            <input
              type="text"
              value={props.cep.uf ? props.cep.uf : 'Sua UF'}
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