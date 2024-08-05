import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenreList";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area="nav" >
        <Navbar/>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" >
        <GenreList/>
      </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
