import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenreList";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { MdPadding } from "react-icons/md";
import GameHeading from "./components/GameHeading";
   export interface GameQuery{
    genre:Genre|null;
    platform:platform|null;
    sortOrder:string;
    searchText:string;
   }
function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}
    templateColumns={{
      base:"1fr",
      lg:"200px 1fr"
    }}
    >
      <GridItem area="nav" >
        <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5} >
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
      </Show>
      <GridItem area="main" >
        <Box paddingLeft={2}> 
        <GameHeading gameQuery={gameQuery}/>
        <Flex  marginBottom={5}>
          <Box marginRight={5} paddingLeft={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
          </Flex>
          </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
