import styled from 'styled-components';

export const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 2rem;
  width: 100%;

  border-radius: 2rem;

  background: var(--gray-bg);

  
  .leftList li + li, .rightList li + li {
    margin-top: 1.4rem;
    /* setando margin-top para cada li das colunas, menos as do topo */
  }

  .leftList {
    padding-right: 10rem;
  }

  label {
    font-size: 1.4rem;
    color: var(--title-gray);

    margin-bottom: 0.5rem;
  }

  li {
    display: flex;
    flex-direction: column;
    
    list-style: none;

    & #bairro {
      width: 15rem;
    }
    
    & #uf {
      width: 7rem;
    }

    input {
      padding: 1rem;
      outline: transparent;
      cursor: default;

      border: 1px solid var(--green);
      border-radius: 10px;
    }
  }
`;