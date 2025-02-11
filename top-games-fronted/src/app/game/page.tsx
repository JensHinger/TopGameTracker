'use client'

import { useSearchParams } from "next/navigation"
import GameInfoPage from "./gameInfoPage";
import { Grid2 } from "@mui/material";

export default function Page() {
    const searchParams = useSearchParams();
    const game = searchParams.get("game");

    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">
            {game? <GameInfoPage gameName={game}/>: "Reroute to 404"}
        </Grid2>
        )
} 