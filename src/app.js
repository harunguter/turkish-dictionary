import { useState } from "react";

import Context from "./context";
import Home from "./pages/home";

import "semantic-ui-css/semantic.min.css";
import "./assets/app.scss";

const App = () => {

  const [ word, setWord ] = useState("");

  const states = {
    word, 
    setWord
  };
	
  return <Context.Provider value={states}>
    <Home />
  </Context.Provider>;
};

export default App;