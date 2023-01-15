import "./App.css";
import "axios";
import { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const getPost = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((result) => {
        console.log(result);
        setQuote(result.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      {" "}
      <div className="App">
        <header>
          <h1>Random Quotes Generator from an API</h1>
        </header>

        <button onClick={getPost}>Get Quotes</button>
        <p>{quote}</p>
      </div>
    </>
  );
}

export default App;
