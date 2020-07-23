import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    width: 76%;
    min-width: 800px;
    height: 100vh;

    margin-left: 26%;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;

  background-color: var(--color-secondary);
  color: var(--color-primary);

  width: 24%;
  min-width: 18rem;
  height: 100vh;

  img {
    width: 14rem;
    border-radius: 50%;
    border: 2px solid var(--color-light);
    margin: 3rem ;
  }

  strong, span {
    margin: 0.7rem;
  }

  strong {
    font-size: 1.7rem;
  }

  .bio {
    font-size: 1rem;
    text-align: center;
    margin: 1.3rem 2rem;
    color: var(--color-dark)
  }

  .details {
    font-weight: 500;
  }
`;

export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  position: relative;

  width: 30rem;
  height: 18rem;

  border-radius: 8px;
  box-shadow: 10px 9px 40px var(--color-primary);

  margin: 2rem 4rem;
  padding: 1rem 1rem 0;

  background-color: var(--color-lighter);

  color: var(--color-primary);

  strong {
    font-size: 1.8rem;
  }

  .details {
    margin-top: 1.4rem;
    text-align: center;
    font-size: 1rem;
    color: var(--color-secondary);
  }

  .stats {
    margin: 1.4rem 0;
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }

  .stats > span {
    padding: 0.5rem 1.5rem;
  }

  a, .link {
    text-decoration: none;
    color: var(--color-primary);
  }

  .link {
    margin-top: 1.5rem 1rem 1.5rem;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    padding: 0.7rem 0.3rem;
    transition: 300ms ease-out;
  }

  .link:hover {
    background-color: var(--color-primary);
    color: var(--color-light);
  }
`;
