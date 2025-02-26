import { gameData } from "@/models/game";
import { getGames } from "@/api/games/get-games";
import GameCardOverview from "./components/GameCard/gameCardOverview";
import scss from './Home.module.scss';

import { ThemeProvider } from "@mui/material/styles"
import darkTheme from "@/theme/darkTheme";
import { CssBaseline } from "@mui/material";

async function Home() {
  const allGames: gameData[] = await getGames();
  return (
      <main className={scss.main}>
        <>
          {allGames? <GameCardOverview games={allGames}/>
          :
          <h2>No Games Found!</h2>}
        </>
      </main>
  );
}

export default Home;