import { useContext } from "react";
import * as Semantic from "semantic-ui-react";
import Context from "../../context";

import env from "../../env";

const turkishLetters = ["ç", "ğ", "ı", "ö", "ş", "ü", "â", "î", "û"];


const Form = () => {
    
  const { 
    word, 
    setWord 
  } = useContext(Context);


  return <Semantic.Segment 
    inverted 
    style={{
      background: "#34495e"
    }}>

    <Semantic.Input 
      fluid
      onChange={e => setWord(e.target.value)}
      value={word}
      action={ 
        <Semantic.Button
          onClick={() => console.log(word)}
          icon="search" 
          color={env.mainColor}/> 
      }
      placeholder="Please type a turkish word..." 
    />

    <div className="turkish-letters">
      {
        turkishLetters.map((turkishLetter, key) => 
          <Semantic.Button 
            onClick={() => setWord(word + turkishLetter)}
            key={key}
            size="mini"
            color={env.mainColor}>
            {turkishLetter}
          </Semantic.Button>
        )
      }
    </div>

  </Semantic.Segment>;
};
  
export default Form;