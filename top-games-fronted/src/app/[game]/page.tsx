'use client'

import { useParams } from "next/navigation"
import GameInfoPage from "./gameInfoPage";
import { Grid2 } from "@mui/material";
import React from "react";

export default function Page() {

    const { game } = useParams<{game : string}>();

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