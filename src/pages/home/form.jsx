import { useState, useContext } from "react";
import _ from "lodash";
import * as Semantic from "semantic-ui-react";
import Context from "../../context";
import api from "../../services/api";
import env from "../../env";

const Form = () => {

  const [loading, setLoading] = useState(false);

  const { 
    word, 
    setWord,
    setMeans,
    error,
    setError
  } = useContext(Context);

  const searchMean = async() => {

    setLoading(true);
    await setError("");
    await setMeans("");

    const mean = await api.searchMean(word);
    const write = await api.searchWrite(word);
    
    if(_.isNil(mean?.error)) {
      await setMeans({
        mean, 
        write
      });
      await console.log("means:", {
        mean, 
        write
      });
    } else {
      setError(mean.error); 
      console.log("error:", error);
    } 
    
    setLoading(false);
  };

  return <Semantic.Segment 
    loading={loading}
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
          onClick={() => word.length >= 2 && searchMean()}
          icon="search" 
          color={env.mainColor}/> 
      }
      placeholder="Bir kelime girin..." />

    <div className="turkish-letters">
      {
        env.turkishLetters.map((turkishLetter, key) => 
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