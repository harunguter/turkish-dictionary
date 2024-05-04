import React, { useContext, useEffect } from "react";
import _ from "lodash";
import * as Semantic from "semantic-ui-react";
import Context from "../../context";
import env from "../../env";

import signAlphabet from "./signAlphabets";

const Result = () => {

  const {
    means,
    error
  } = useContext(Context);

  useEffect(() => {});

  return (!_.isEmpty(means) || !_.isEmpty(error) )&& <Semantic.Segment>
    {
      error === "" ? <>
        {
          means.mean.map((mean, key) => <React.Fragment key={key}>
            <Semantic.Header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
              as="h2"
              color={env.mainColor}>
              {mean?.madde}
              <Semantic.Header.Subheader>
                <audio src={env.api.baseUrl + "ses/" + means.write[key].seskod + ".wav"} id={mean?.madde + "-reading"}/>
                <Semantic.Button 
                  size="mini"
                  basic
                  color={env.mainColor} 
                  onClick={() => {
                    const reading = document.getElementById(mean?.madde + "-reading");
                    reading.play();
                  }}>
                  <Semantic.Icon name="volume up" />
                  Dinle
                </Semantic.Button>
              </Semantic.Header.Subheader>
            </Semantic.Header>

            <Semantic.Divider/>

            <Semantic.List as='ul'>
              {
                mean?.anlamlarListe?.map((mean, key) => {
                  return <Semantic.List.Item as='li' key={key}>
                    {mean.anlam}
                  </Semantic.List.Item>;
                })
              }
            </Semantic.List>
          </React.Fragment>
          )
        }

        {/* <Semantic.Divider/> */}

        <Semantic.Header 
          as="h4"
          color={env.mainColor}>
            Türk İşaret Dili
          <Semantic.Header.Subheader>
            Parmak Alfabesiyle Gösterilişi
          </Semantic.Header.Subheader>
        </Semantic.Header>

        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          {
            means?.mean[0]?.madde?.split("").map((letter, key) => {

              if (letter === "â") letter = "a";
              if (letter === "î") letter = "i";
              if (letter === "û") letter = "ü";

              return <div key={key} > 
                <Semantic.Image 
                  height={35}
                  src={signAlphabet[letter]}/>
                <span style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center"
                }}>
                  {letter}
                </span>
              </div>;
            })
          }
        </div>
        
        
      </> : <Semantic.Message 
        size="small"
        error>
        
        <Semantic.Message.Header>
          <Semantic.Icon name="x"/>
          Hata
        </Semantic.Message.Header>
        {error}
      </Semantic.Message>
    }
  </Semantic.Segment>; 
};

export default Result;