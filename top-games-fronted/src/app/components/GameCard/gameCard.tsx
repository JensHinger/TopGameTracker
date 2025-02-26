import { gameData } from "@/models/game";
import React from "react";
import Grid from '@mui/material/Grid2';
import Link from "next/link";

function GameCard({ game }: { game: gameData }) {

    return (
        <Link href={"/"+game.name}>
            <Grid 
                sx={{ width:"200px", height:"auto", '&:hover': {transform:"scale(1.1)", cursor:"pointer"}}}>
                <img src={'data:image/jpg;base64,' + game.image} style={{ width:"inherit"}}></img>
                <p>{game.name}</p>
            </Grid>
        </Link>
    )
}

export default GameCard;