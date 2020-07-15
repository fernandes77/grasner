import React from "react";
import StickyBox from "react-sticky-box";
import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Grasner" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="React" nickname="@reactjs" />,
              <FollowSuggestion name="Node.js" nickname="@nodejs" />,
              <FollowSuggestion name="GitHub" nickname="@github" />,
            ]}
          />
          <List
            title="What's happening"
            elements={[
              <News trending="Trending in Brazil" trend="CSS" />,
              <News trending="Trending in Brazil" trend="styled-components" />,
              <News trending="Trending internationally" trend="JavaScript" />,
              <News trending="Trending internationally" trend="Reactjs" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
