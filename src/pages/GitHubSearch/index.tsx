import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { GithubData } from 'types/githubData';
import axios from 'axios';

type FormData = {
  user: string;
};

const GithubSearch = () => {
  const [githubData, setGithubData] = useState<GithubData>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setGithubData(response.data);
        console.log(githubData);
      })
      .catch((error) => {
        setGithubData(undefined);
        console.log(error);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
      </div>
      {githubData && <ResultCard {...githubData} />}
    </div>
  );
};

export default GithubSearch;
