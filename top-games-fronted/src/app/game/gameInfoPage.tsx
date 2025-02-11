'use client'

import { useEffect, useState } from "react";
import { getRankingDataForGame } from "@/api/rankingdata/get-rankingData";
import { rankingData } from "@/models/rankingData";
import { gameData } from "@/models/game";
import { getGameByName } from "@/api/games/get-games";
import { formatNumber } from "@/util/numberUtil"
import GameStats from "./gameStats";
import { Box, Card, Grid2, Typography } from "@mui/material";

// TODO game does not exist -> show 404 or smth
export default function GameInfoPage(
    {gameName}: 
    {gameName : string}
    ) {

    const [gameData, setGameData] = useState<gameData>();
    const [rankingData, setRankingData] = useState<rankingData[]>();

    async function loadData() {
        var dataPoints: rankingData[] = await getRankingDataForGame(gameName);
        var gameData: gameData = await getGameByName(gameName);

        setGameData(gameData);
        setRankingData(dataPoints);
    }

    // Get game per API -> Better if object is passable while routing?
    useEffect(() => {
        loadData()
    }, []) 

    return (
        gameData ?
            <>
                <Card variant="outlined" sx={{ minWidth: "100vh", paddingBottom: "2vh"}}>
                    <Typography component="div" variant="h5">Game: {gameData.name}</Typography>
                    <Typography component="div">Highest Playercount: {formatNumber(gameData.all_time_high_pc)}</Typography>
                    <img src={'data:image/jpg;base64,' + gameData.image}></img>
                </Card>
                {rankingData ? <GameStats rankingData={rankingData}></GameStats>: "No Data exists rn"}
            </> : <div>Loading...</div>
            
    )
}