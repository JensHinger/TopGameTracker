import { gameData } from "@/models/game";
import { rankingData } from "@/models/rankingData";
import { formatNumber } from "@/util/numberUtil";
import { Card, Typography } from "@mui/material";
import React from "react";

type GameInfoBoxProps = {
    gameData: gameData,
    lastRankingData: rankingData
}

function GameInfoBox({props}: {props:GameInfoBoxProps}) {
    const {gameData, lastRankingData} = props;

    return (
        <Card variant="outlined" sx={{ minWidth: "100vh", paddingBottom: "2vh"}}>
            <Typography component="div" variant="h5">Game: {gameData.name}</Typography>
            <Typography component="div">Highest Playercount: {formatNumber(gameData.all_time_high_pc)}</Typography>
            <Typography component="div">Last Top 100 Date: {lastRankingData.date.toLocaleString("en-GB")}</Typography>
            <Typography component="div">Last Ranking: {lastRankingData.ranking}</Typography>
            <Typography component="div">Last Day Peak: {formatNumber(lastRankingData.dayPeak)}</Typography>
            <img src={'data:image/jpg;base64,' + gameData.image}></img>
        </Card>
    )
}

export default GameInfoBox;