import React from "react";
import {
  Container,
  Regrasned,
  GrasnerIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RegrasnIcon,
  LikeIcon,
} from "./styles";

const Grasnada = () => {
  return (
    <Container>
      <Regrasned>
        <GrasnerIcon />
        You regrasned
      </Regrasned>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>React</strong>
            <span>@reactjs</span>
            <Dot />
            <time>Jun 27</time>
          </Header>

          <Description>
            Have you ever wondered who works full time on React? Meet the team!
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />5
            </Status>
            <Status>
              <RegrasnIcon />
              13
            </Status>
            <Status>
              <LikeIcon />
              21
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Grasnada;
