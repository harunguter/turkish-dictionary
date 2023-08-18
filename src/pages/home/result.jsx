import * as Semantic from "semantic-ui-react";


import env from "../../env";

const Result = () => <Semantic.Segment>
  <Semantic.Header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}
    as="h2"
    color={env.mainColor}>
        kelime
    <Semantic.Header.Subheader>
      <Semantic.Button 
        size="mini"
        basic
        color={env.mainColor} >
        <Semantic.Icon name="volume up" />
        Dinle
      </Semantic.Button>
    </Semantic.Header.Subheader>
  </Semantic.Header>

  <Semantic.Divider/>

    anlamlar

</Semantic.Segment>;

export default Result;