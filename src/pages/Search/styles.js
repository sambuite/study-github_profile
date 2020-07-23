import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 14rem;
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

export const ProfileCard = styled.div`
  width: 20rem;
  height: 30rem;
  margin: 5rem 5rem 0;
  background-color: var(--color-lighter);
  box-shadow: 10px 9px 40px var(--color-shadow-light);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a, .link {
    text-decoration: none;
    color: var(--color-dark);
  }

  img {
    width: 10rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  strong, span {
    margin: 0.5rem 1.5rem;
  }

  strong {
    font-size: 1.3rem;
  }

  .bio {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 1.3rem;
    color: var(--color-shadow-light)
  }

  .details {
    font-weight: 500;
  }
  
  .link {
    margin-top: 1rem;
    border: 1px solid var(--color-secondary);
    border-radius: 8px;
    width: 7rem;
    height: 3rem;
    padding-top: 0.8rem;
    text-align: center;
    font-weight: 600;
    transition: 300ms;
  }

  .link:hover {
    background-color: var(--color-secondary);
    color: var(--color-lighter)
  }

`;

export const Loading = styled.div`
  margin-top: 20rem;
  font-size: 4rem;
  color: var(--color-secondary);
  opacity: 40%;
`;