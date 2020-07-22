import React , { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/api';

function Search() {
  const [ gitUser, setGitUser ] = useState('');
  // const [ gitUsers, setGitUsers ] = useState([]);


  const handleAddUser = async event => {
    event.preventDefault();
    console.log(gitUser)
    try {
      
      const userData = await api.get(`/${gitUser}`)
      console.log(userData) 

    } catch (error) {
      console.log(error)
    }
  }

  const handleUserInput = event => {
    const userInput = event.target.value
    setGitUser(userInput)
  }  

  return (
    <S.Container>
      <S.Header>
        <h1>Github Profile</h1>

        <form onSubmit={handleAddUser}>
          <input 
            placeholder="Nome do usuário"
            value={gitUser}
            onChange={handleUserInput}
          />
          <button type="submit">
            +
          </button>
        </form>
      </S.Header>
      <section>

        

      </section>
    </S.Container>
  )
}

export default Search;