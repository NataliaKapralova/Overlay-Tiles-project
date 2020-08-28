import React from "react";
import styled from "styled-components";
import * as styles from "../styles.css";
import * as api from "../api";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import Progress from "./Progress";

export default function Tegel({ item }) {
  const [details, setDetails] = React.useState([]);
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);
  React.useEffect(() => {
    async function fetch() {
      const tiles = await api.getOverview();
      
      const details = await api.getDetails(item.id);
      setDetails(details);
      console.log("joehoe", details);
    }

    fetch();
  }, []);

  const toggle = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropHandler = () => {
    setSideDrawerOpen(false);
  };

  const onClick = () => {
    toggle();
  };

  /// Overlay-slider
  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backDropHandler} />;
  }

  return (
    <Container>
      <SideDrawer show={sideDrawerOpen} details={details} />
      {backdrop}
      <TegelContainer onClick={onClick}>
        <Image>
          <img className="tegel-img" src={item.image} />
        </Image>
        <List>
          <p> {item.title} </p>
          <br></br>
          <h1> {item.supplier} </h1>
          <h1> {item.type} </h1>
          <Progress done={item.progress} />
        </List>
      </TegelContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TegelContainer = styled.section`
  background-color: white;
  margin: 10px;
  width: 30%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 40% 60%;
  border: 1px solid black;
  font-family: "Montserrat", sans-serif;
`;

const List = styled.section`
  width: 100%;
  text-align: left;
  padding: 8px 12px;
  font-size: 17px;
`;

const Image = styled.section`
  width: 100%;
`;
