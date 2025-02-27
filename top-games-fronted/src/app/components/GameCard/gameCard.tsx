import { gameData } from '@/models/game';
import React from 'react';
import Grid from '@mui/material/Grid2';
import { Link } from '@mui/material';
import { Typography } from "@mui/material";

function GameCard({ game }: { game: gameData }) {

    return (
        <Link href={"/"+game.name} sx={{textDecoration:"none"}}>
            <Grid 
                sx={{ width:"200px", height:"auto", margin:"0.5vw",
                    '&:hover': {transform:"scale(1.1)", cursor:"pointer"}}}>
                <img src={'data:image/jpg;base64,' + game.image} style={{ width:"inherit"}}></img>
                <Typography component="p" style={{color:'primary.main'}}>{game.name}</Typography>
            </Grid>
        </Link>
    )
}

export default GameCard;