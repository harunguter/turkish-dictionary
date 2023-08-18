import { useState, useEffect } from "react";
import Context from "./context";
import Home from "./pages/home";
import env from "./env";
import "semantic-ui-css/semantic.min.css";
import "./assets/styles/app.scss";

const App = () => {

  const [ word, setWord ] = useState("");
  const [ means, setMeans ] = useState("");
  const [ error, setError ] = useState("");

  const states = {
    word, 
    setWord,
    means,
    setMeans,
    error, 
    setError
  };

  useEffect(() => {
    document.title = env.appName;
  }, []);
	
  return <Context.Provider value={states}>
    <Home />
    <footer 
      style={{
        textAlign: "center"
      }}>
      <a href="https://sozluk.gov.tr">
        sozluk.gov.tr
      </a>
      <br />
      &copy; {new Date().getFullYear()}
    </footer>
  </Context.Provider>;
};

export default App;