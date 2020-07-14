import React from "react";
import Grasnada from "../Grasnada";
import { Container, Tab, Grasnadas } from "./styles";

const Feed = () => {
  return (
    <Container>
      <Tab>Grasnadas</Tab>
      <Grasnadas>
        <Grasnada />
        <Grasnada />
        <Grasnada />
        <Grasnada />
        <Grasnada />
      </Grasnadas>
    </Container>
  );
};

export default Feed;
