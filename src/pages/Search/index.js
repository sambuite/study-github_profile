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
    try {
      
      const userData = await api.get(`/${gitUser}`)
      console.log(userData) 
      setGitUsersData([...gitUsersData, userData]);
      console.log(gitUsersData) 

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
      <main>
        <S.ProfileCard> 
          <img src="https://avatars3.githubusercontent.com/u/51120780?v=4" alt=""/>
          <a href="">
            <strong>Murilo Sambuite</strong>
          </a>
            
          <span className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia! Ut soluta vero quae unde, nobis laborum ex dolorum asperiores natus dolorem.</span>
          <span className="details">Tobias Barreto - SE</span>
          <span className="details">1000 seguidores</span>
          <span className="details">100 repositorios</span>
          <Link className="link" to={`/profile?user=sambuite`}>Acessar perfil</Link>
        </S.ProfileCard>

        <S.ProfileCard> 
          <img src="https://avatars3.githubusercontent.com/u/51120780?v=4" alt=""/>
          <a href="">
            <strong>Murilo Sambuite</strong>
          </a>
            
          <span className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia! Ut soluta vero quae unde, nobis laborum ex dolorum asperiores natus dolorem.</span>
          <span className="details">Tobias Barreto - SE</span>
          <span className="details">1000 seguidores</span>
          <span className="details">100 repositorios</span>
          <Link className="link" to={`/profile?user=sambuite`}>Acessar perfil</Link>
        </S.ProfileCard>

        <S.ProfileCard> 
          <img src="https://avatars3.githubusercontent.com/u/51120780?v=4" alt=""/>
          <a href="">
            <strong>Murilo Sambuite</strong>
          </a>
            
          <span className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia! Ut soluta vero quae unde, nobis laborum ex dolorum asperiores natus dolorem.</span>
          <span className="details">Tobias Barreto - SE</span>
          <span className="details">1000 seguidores</span>
          <span className="details">100 repositorios</span>
          <Link className="link" to={`/profile?user=sambuite`}>Acessar perfil</Link>
        </S.ProfileCard>

        <S.ProfileCard> 
          <img src="https://avatars3.githubusercontent.com/u/51120780?v=4" alt=""/>
          <a href="">
            <strong>Murilo Sambuite</strong>
          </a>
            
          <span className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia! Ut soluta vero quae unde, nobis laborum ex dolorum asperiores natus dolorem.</span>
          <span className="details">Tobias Barreto - SE</span>
          <span className="details">1000 seguidores</span>
          <span className="details">100 repositorios</span>
          <Link className="link" to={`/profile?user=sambuite`}>Acessar perfil</Link>
        </S.ProfileCard>

        <S.ProfileCard> 
          <img src="https://avatars3.githubusercontent.com/u/51120780?v=4" alt=""/>
          <a href="">
            <strong>Murilo Sambuite</strong>
          </a>
            
          <span className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quia! Ut soluta vero quae unde, nobis laborum ex dolorum asperiores natus dolorem.</span>
          <span className="details">Tobias Barreto - SE</span>
          <span className="details">1000 seguidores</span>
          <span className="details">100 repositorios</span>
          <Link className="link" to={`/profile?user=sambuite`}>Acessar perfil</Link>
        </S.ProfileCard>
      </main>
    </S.Container>
  )
}

export default Search;