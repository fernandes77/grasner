import React from "react";
import Button from "../Button/Button";
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
} from "./styles";

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Homepage</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Likes</span>
        </MenuButton>
        <MenuButton classname="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>
        <Button>
          <span>Grasn</span>
        </Button>
      </Topside>
    </Container>
  );
};

export default MenuBar;
