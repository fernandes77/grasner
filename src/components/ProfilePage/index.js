import React from "react";
import Feed from "../Feed";
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>
        <h1>Rodrigo Fernandes</h1>
        <h2>@rodrigo_fernandes</h2>
        <p>
          Welcome to Grasner, a Twitter clone! The design of this page will be
          responsive, no matter what device you are seeing this in.
          <br />
          <br />
          If you're on desktop, try making the window size smaller. The bar on
          the right will disappear and the bar on the left will hide it's text
          content.
        </p>
        <ul>
          <li>
            <LocationIcon />
            Brasília, Brazil
          </li>
          <li>
            <CakeIcon />
            Born on June 20, 1998
          </li>
        </ul>
        <Followage>
          <span>
            following <strong>233</strong>
          </span>
          <span>
            <strong>377 </strong> followers
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
