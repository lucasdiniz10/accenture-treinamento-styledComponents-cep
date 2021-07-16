import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 0 auto;

  max-width: 1073px;
  height: 100vh;

  padding: 5rem;
  gap: 2rem;

  form {
    display: flex;
    height: 50px;
    font-weight: 700;

    input {
      width: 500px;
      padding: 1rem;
      border: 1px solid var(--white-line);
      border-radius: 10px;
    }

    button {
      width: 200px;
      margin-left: 45px;
      border-radius: 10px;
      border: none;
      font-size: 1.4rem;

      color: var(--white);
      background: var(--green-button);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      &:disabled {
        background: var(--gray);
        color: var(--white);
      }
    }
  }
`;

export const Button = styled.button`

`;