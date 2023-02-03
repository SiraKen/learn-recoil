import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import Layout from "../layouts/Layout";
import { textState } from "../contexts/textContext";
import { Helmet } from "react-helmet-async";

const IndexPage = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Index</title>
      </Helmet>
      <Layout>
        <div>Index Page</div>
        <div>
          <input type="text" value={text} onChange={onChange} />
          <br />
          Echo: {text}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
