import './styles.css';
import { GithubData } from 'types/githubData';

const ResultCard = (userData: GithubData) => {
  return (
    <div className="container result-container">
      <div className="image-section">
        <img src={userData.avatar_url} alt={userData.login} />
      </div>
      <div className="information-section">
        <h3 className="result-title">Informações</h3>
        <p className="result-description">
          <span className="profile-data">Perfil:</span> {userData.url}
        </p>
        <p className="result-description">
          <span className="profile-data">Seguidores:</span> {userData.followers}
        </p>
        <p className="result-description">
          <span className="profile-data">Localidade:</span> {userData.location}
        </p>
        <p className="result-description">
          <span className="profile-data">Nome:</span> {userData.name}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;