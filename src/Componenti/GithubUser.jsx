import React, { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Errore nel recupero dati:", error));
  }, [username]);

  if (!userData) return <p>Caricamento...</p>;

  return (
    <div>
      <img src={userData.avatar_url} alt={`${username} avatar`} width={100} />
      <h3>{userData.name || username}</h3>
      <p>Seguaci: {userData.followers}</p>
      <p>Seguendo: {userData.following}</p>
      <p>Bio: {userData.bio || "Nessuna biografia disponibile"}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Vai al profilo GitHub
      </a>
    </div>
  );
}

export default GithubUser;
