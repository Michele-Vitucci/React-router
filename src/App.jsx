import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Componenti/Welcome";
import Counter from "./Componenti/Counter";
import GithubUserList from "./Componenti/GithubUserList";
import ShowGithubUser from "./Componenti/ShowGithubUser"; 

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const NotFound = () => <h2>Pagina non trovata (404)</h2>;
const UsersIndex = () => <h2>Aggiungi un utente e selezionalo</h2>;

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/users">GitHub Users</Link></li>
          </ul>
        </nav>

    
        <Routes>
          <Route path="/" element={<Welcome name="Michele" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          
          
          <Route path="/users" element={<UsersIndex />} />
          <Route path="/users/list" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />

      
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

