import React from "react";
// import * as api from "../api";
import styled from "styled-components";
import ReactPlayer from "react-player/lazy";

export default function SideDrawer({ details, show }) {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <DrawerContainer>
      <div className={drawerClasses}>
        <Title>{details.id}</Title>
        <TextContainer>
          <p> {details.description}</p>
        </TextContainer>
        <br />
        <VideoContainer>
          <ReactPlayer
            width="100%"
            height="270px"
            margin="10px"
            controls
            url={details.url}
          />
        </VideoContainer>
      </div>
    </DrawerContainer>
  );
}

const DrawerContainer = styled.section``;

const Title = styled.section`
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  margin-top: 40px;
`;

const TextContainer = styled.section`
  font-family: "Montserrat", sans-serif;
  margin-top: 40px;
`;

const VideoContainer = styled.section`
  margin: 40px 0px 0px;
`;
