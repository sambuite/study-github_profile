import React , { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/api';

function Search() {
  const [ gitUser, setGitUser ] = useState('');
  const [ gitUsersData, setGitUsersData ] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    const setLocalUsers = () => {
      const data = localStorage.getItem('users_data');
      if(!data) return;
      const parsedData = JSON.parse(data)

      setGitUsersData(oldUser => [...oldUser, ...parsedData]);
    }
    setLocalUsers();
  }, []);

  const handleAddUser = async event => {
    event.preventDefault();

    const isIn = gitUsersData.find(user => user.login === gitUser);
    if(isIn !== undefined || gitUser === '' ) return;
    
    const { data: {  
      avatar_url,
      bio,
      followers,
      login,
      name,
      location,
      public_repos,
      repos_url,
      id  
    } } = await api.get(`/${gitUser}`);

    const userData = {
      avatar_url,
      bio,
      followers,
      login,
      name,
      location,
      public_repos,
      repos_url,
      id,
      repos: {}
    };

    setGitUsersData([...gitUsersData, userData]);

    saveUserLocal([...gitUsersData, userData]);

    setGitUser('');
    inputRef.current.focus();
  }

  const handleUserInput = event => {
    const userInput = event.target.value
    setGitUser(userInput)
  }  

  const saveUserLocal = (data) => {
    localStorage.setItem("users_data", JSON.stringify(data));
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Github Profile</h1>

        <form onSubmit={handleAddUser}>
          <input 
            placeholder="Nome do usuário"
            ref={inputRef}
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
            <S.ProfileCard key={user.id}> 
              <img src={user.avatar_url} alt=""/>
              <a href={user.html_url}>
                <strong>{user.name}</strong>
              </a>
                
              <span className="bio">{user.bio}</span>
              <span className="details">{user.location}</span>
              <span className="details">{user.followers} seguidores</span>
              <span className="details">{user.public_repos} repositórios públicos</span>
              <Link className="link" to={`/profile?user=${user.login}`}>Acessar perfil</Link>
            </S.ProfileCard>
          ))
        }
      </main>
    </S.Container>
  )
}

export default Search;