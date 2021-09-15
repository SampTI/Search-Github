import logo from './logo.svg';
import Githubimage from './GitHub.png';
import './App.css';
import React, { useEffect, useState } from "react";
import Footer from './components/Footer';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  console.log(userData);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className="py-4 text-uppercase">Github profile</h1>
      <div>
        <h5>Enter your nick</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="inpot-group">
            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-2">
        {!userData && (
          <img
            src={Githubimage}
            className="responsive rounded-circle"
            alt=""
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt=""
              height="200px"
            />
            <h1 >
              <a href="https://github.com/SampTI" target="_new">
                {userData.name}
              </a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="_new" className="text-info">
                {userData.blog}
              </a>
            </p>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
