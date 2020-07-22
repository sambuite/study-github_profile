import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 4rem;
  width: 100vw;

  background-color: var(--color-primary);
  color: var(--color-light);

  form { 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  form > input {
    width: 80%;
    height: 2.6rem;
    margin-right: 1rem;
    color: var(--color-dark);
    border: 1px solid var(--color-light);
    border-radius: 8px;
    padding: 0 1rem;
  }

  form > button {
    width: 20%;
    height: 2.6rem;
    background: var(--color-primary);
    border: 1px solid var(--color-light);
    border-radius: 8px;
    color: var(--color-light);
    font-weight: 700;
    text-decoration: none;
    font-size: 1rem;
    transition: 300ms;
  }

  form > button:hover {
    background-color: var(--color-light);
    border: 1px solid var(--color-light);
    color: var(--color-primary);
  }

`;
