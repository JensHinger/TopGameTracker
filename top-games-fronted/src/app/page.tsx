import { gameData } from "@/models/game";
import { getGames } from "@/api/games/get-games";
import GameCardOverview from "./components/GameCard/gameCardOverview";

async function Home() {
  const allGames: gameData[] = await getGames();

  return (
      <main style={{padding: "0 24px", maxWidth: "85rem", margin:"auto"}}>
        <>
          {allGames? <GameCardOverview games={allGames}/>
          :
          <h2>No Games Found!</h2>}
        </>
      </main>
  );
}

export default Home;