import * as Semantic from "semantic-ui-react";

import Form from "./form";
import Result from "./result";
import Info from "./info";

import env from "../../env";

const Home = () => {
  return <div className="app-container">
    <Semantic.Header 
      color={env.mainColor}
      as="h1">
      {env.appName}
    </Semantic.Header>
    <Semantic.Container>
      <Form />
      <Result />
      <Info />
    </Semantic.Container>
  </div>;

};

export default Home;