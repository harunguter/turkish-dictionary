import { useState } from "react";

import Context from "./context";
import Home from "./pages/home";

import "semantic-ui-css/semantic.min.css";
import "./assets/styles/app.scss";

const App = () => {

  const [ word, setWord ] = useState("");

  const states = {
    word, 
    setWord
  };
	
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