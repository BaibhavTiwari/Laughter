import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./Jokes.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="jokes-container">
      <h1>Laughter😃</h1>
      <h3>Wanna Laugh? here are {jokes.length} reasons for it!!</h3>
      <div className="jokes-list">
        {jokes.map((joke, index) => (
          <div key={joke.id} className="joke-item">
            <h2>{joke.title}</h2>
            <p className="text">{joke.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
