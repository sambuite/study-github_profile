import React , { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/api';

function Search() {
  const [ gitUser, setGitUser ] = useState('');
  const [ gitUsersData, setGitUsersData ] = useState([]);
  // const [ gitUsers, setGitUsers ] = useState([]);


  const handleAddUser = async event => {
    event.preventDefault();
    console.log(gitUser)

    const isIn = gitUsersData.find(user => user.data.login == gitUser);
    if(isIn != undefined) return;

    const userData = await api.get(`/${gitUser}`)
    console.log(userData) 

    setGitUsersData([...gitUsersData, userData]);
    console.log(gitUsersData) 
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
      <main>
        {
          gitUsersData.length < 1 ?

          <S.Loading>Adicione um perfil do github...</S.Loading> 
          
          :
          gitUsersData.map( user => (
            <S.ProfileCard key={user.data.id}> 
              <img src={user.data.avatar_url} alt=""/>
              <a href={user.data.html_url}>
                <strong>{user.data.name}</strong>
              </a>
                
              <span className="bio">{user.data.bio}</span>
              <span className="details">{user.data.location}</span>
              <span className="details">{user.data.followers} seguidores</span>
              <span className="details">{user.data.public_repos} repositórios públicos</span>
              <Link className="link" to={`/profile?user=${user.data.login}`}>Acessar perfil</Link>
          </S.ProfileCard>
          ))
        }
      </main>
    </S.Container>
  )
}

export default Search;