import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Errore nel recupero utenti:", error));
  }, []);

  return (
    <div>
      <h2>Lista Utenti GitHub</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
