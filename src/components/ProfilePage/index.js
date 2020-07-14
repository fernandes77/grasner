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
        <p>Front-End Developer</p>
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
