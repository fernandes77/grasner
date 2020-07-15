import React from "react";
import { Container } from "./styles";

const News = (props) => {
  return (
    <Container>
      <span>{props.trending}</span>
      <strong>{props.trend}</strong>
    </Container>
  );
};

export default News;
