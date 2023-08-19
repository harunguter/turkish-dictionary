import { useEffect, useState } from "react";
import * as Semantic from "semantic-ui-react";
import api from "../../services/api";
import env from "../../env";

const Segment = ({
  title = "", 
  text = "",
  mean = "", 
  loading = true
}) =>  <Semantic.Segment 
  style={{minHeight: 80}}
  loading={loading}>
  <Semantic.Header
    color={env.mainColor}
    as="h4">
    {!loading && title}
    <Semantic.Header.Subheader>
      {!loading && text}
    </Semantic.Header.Subheader>
  </Semantic.Header>
  {!loading &&  <Semantic.Divider/>}
  {!loading && mean}
</Semantic.Segment>;

const Info = () => {

  const [ loading, setLoading ] = useState(true);
  const [ content, setContent ] = useState(null);

  const getContent = async() => {
    const data = await api.getContent();
    console.log("content:", data);
    setContent(data);
    setLoading(false);
  };
  
  useEffect(() => {
    getContent();
  }, []);
  
  return <Semantic.Grid columns={2} divided>
    <Semantic.Grid.Row stretched>

      <Semantic.Grid.Column>
        <Segment
          loading={loading}
          title="Bir Kelime" 
          text={content?.kelime[0]?.madde} 
          mean={content?.kelime[0]?.anlam} />
      </Semantic.Grid.Column>

      <Semantic.Grid.Column>
        <Segment
          loading={loading}
          title="Bir Deyim-Atasözü" 
          text={content?.atasoz[0]?.madde} 
          mean={content?.atasoz[0]?.anlam} />
      </Semantic.Grid.Column>

    </Semantic.Grid.Row>
  </Semantic.Grid>;
};

export default Info;