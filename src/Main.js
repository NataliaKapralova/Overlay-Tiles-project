import * as React from "react";
import * as api from "./api";
import Tegel from "./components/Tegel";
import styled from "styled-components";

function Main() {
  const [tiles, setTiles] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const tiles = await api.getOverview();
      console.log("all overview tiles", tiles);
      setTiles(tiles);
    }

    fetch();
  }, []);

  const tegelItems = tiles.map((item) => <Tegel key={item.id} item={item} />);

  return (
    <MainContainer>
      <Header>
        <h1> Overlay tiles project </h1>
      </Header>
      <div> {tegelItems} </div>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.section`
  height: 100%;
`;

const Header = styled.header`
  font-size: 30px;
  height: 100px;
  color: white;
  padding: 20px 0px;
  border-radius: 5px;
  background-color: rgb(204, 204, 255);
  margin: 10px 10px 60px;
  font-family: "Montserrat", sans-serif;
`;
