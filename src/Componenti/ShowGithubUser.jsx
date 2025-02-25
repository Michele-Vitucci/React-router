import React from "react";
import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser"; 


function ShowGithubUser() {
  const { username } = useParams();

  return (
    <div>
      <h2>Profilo GitHub di {username}</h2>
      <GithubUser username={username} />
    </div>
  );
}

export default ShowGithubUser;
