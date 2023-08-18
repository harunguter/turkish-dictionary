import * as Semantic from "semantic-ui-react";

import env from "../../env";

const Header = ({title, text}) => <Semantic.Header
  color={env.mainColor}
  as="h4">
  {title}
  <Semantic.Header.Subheader>
    {text}
  </Semantic.Header.Subheader>
</Semantic.Header>;

const Info = () => {
  return <Semantic.Grid columns={2} divided>
    <Semantic.Grid.Row stretched>

      <Semantic.Grid.Column>
        <Semantic.Segment>
          <Header 
            title="Bir Kelime" 
            text="kelime" />
          <Semantic.Divider/>
          anlam
        </Semantic.Segment>
      </Semantic.Grid.Column>

      <Semantic.Grid.Column>
        <Semantic.Segment>
          <Header 
            title="Bir Deyim-Atasözü" 
            text="deyim" />
          <Semantic.Divider/>
          anlam
        </Semantic.Segment>
      </Semantic.Grid.Column>

    </Semantic.Grid.Row>
  </Semantic.Grid>;
};

export default Info;