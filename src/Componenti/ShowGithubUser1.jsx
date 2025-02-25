import { useParams } from "react-router-dom";

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>Utente GitHub</h2>
      <p>Nome utente: {username}</p>
      <p><a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
        Visita il profilo
      </a></p>
    </div>
  );
};

export default ShowGithubUser;
