import React from "react";
import { Container, Avatar, Info, FollowButton } from "./styles";

const FollowSuggestion = (props) => {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{props.name}</strong>
          <span>{props.nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
