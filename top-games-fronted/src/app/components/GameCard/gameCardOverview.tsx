import { gameData } from "@/models/game";
import React from "react";
import GameCard from "./gameCard";
import Grid from '@mui/material/Grid2';
import { Box } from "@mui/material";

function GameCardOverview({ games }: { games: gameData[] }) {
    return (
        <Box sx={{ marginTop:"10px"}}>
            <Grid container columnSpacing={{xs: 1, sm:2, md: 3}} sx={{justifyContent:"center"}}>
                {games.map((game) => <GameCard game={game} key={game.name}/>)}
            </Grid>
        </Box>
    )
}

export default GameCardOverview;