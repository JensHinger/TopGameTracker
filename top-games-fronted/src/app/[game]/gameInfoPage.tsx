import { getNLatestRankingDataForGame, getRankingDataForGame } from "@/api/rankingdata/get-rankingData";
import { rankingData } from "@/models/rankingData";
import { gameData } from "@/models/game";
import { getGameByName } from "@/api/games/get-games";
import GameStats from "./gameStats";
import GameInfoBox from "../components/GameInfoBox/gameInfoBox";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

// TODO game does not exist -> show 404 or smth
function GameInfoPage(
    {gameName}: 
    {gameName : string}
    ) {

    const [gameData, setGameData] = useState<gameData>();
    // TODO fetch Rankingdata between dates 
    const [rankingData, setRankingData] = useState<rankingData[]>();
    const [lastRankingData, setLastRankingData] = useState<rankingData[]>();

    const loadStuff = async () => {
        setGameData(await getGameByName(gameName))
        setRankingData(await getRankingDataForGame(gameName));
        setLastRankingData(await getNLatestRankingDataForGame(gameName, 1));
    }
    useEffect(() => {loadStuff()}, [])

    return (
        gameData && lastRankingData?
            <>
                <GameInfoBox props={{gameData: gameData, lastRankingData: lastRankingData[0]}}/>
                {rankingData ? <GameStats rankingData={rankingData}></GameStats>: "No Data exists rn"}
            </> : <Typography type="div">Loading...</Typography>
    )
}
export default GameInfoPage