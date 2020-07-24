import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/api';

function Profile(props) {
  const [ gitUserData, setGitUserData] = useState({}); 
  const [ gitUserRepos, setGitUserRepos] = useState([]); 

  const history = useHistory();

  useEffect(() => {
    const param = props.location.search;
    const user = param.replace('?user=', '');
    handleUserData(user);
    handleUserRepos(user);
  }, [props.location.search])

  const handleUserData = (user) => {
    const usersData = getUserData(user);
    const userData = usersData.filter(users => users.login === user);
    if(userData.length === 0) history.push('/');
    setGitUserData(...userData);
  }

  const getUserData = (user) => {
    const localData = localStorage.getItem('users_data') 
    const parsedData = JSON.parse(localData);

    return parsedData;
  }

  const handleUserRepos = async (user) => {
    const { data } = await api.get(`/${user}/repos`);

    const repos = data.map(repo => {
      const {
        id,
        name,
        description,
        stargazers_count,
        forks_count,
        language
      } = repo;

      return {
        id,
        name,
        description,
        stargazers_count,
        forks_count,
        language
      }
    })

    saveReposLocal(repos, user);
    setGitUserRepos(repos);
  }

  const saveReposLocal = (reposData, user) => {
    const userData = getUserData(user);

    const userIndex = userData.findIndex(users => users.login === user);

    userData[userIndex].repos = {
      ...reposData
    }

    const data = [
      ...userData
    ]

    localStorage.setItem("users_data", JSON.stringify(data));
  }

  return (
    <S.Container>
      <S.Sidebar>
        <img src={gitUserData.avatar_url} alt={gitUserData.name}/>
        <strong>{gitUserData.name}</strong>
        <span className="bio">"{gitUserData.bio}"</span>
        <span className="details">{gitUserData.location}</span>
        <span className="details"><b>{gitUserData.followers}</b> seguidores</span>
        <span className="details"><b>{gitUserData.public_repos}</b> repositórios públicos</span>
      </S.Sidebar>
      <main>
        {
          !gitUserRepos.length < 1 &&
          gitUserRepos.map( repos => (
            <S.Repo key={repos.id}>
              <strong>{repos.name}</strong>
              <span className="details">"{repos.description}"</span>
              <div className="stats">
                <span><b>{repos.stargazers_count}</b> stars</span>
                <span><b>{repos.forks_count}</b> forks</span>
                <span><b>{repos.language}</b></span>
              </div>
              <a href={repos.html_url} className="link">Acessar repositório</a>
            </S.Repo>
          ))
        }
      </main>
    </S.Container>
  );
}

export default Profile;