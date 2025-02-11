'use client'

import { useRouter } from 'next/navigation';
import { getGames } from "@/api/games/get-games";
import ListEntry  from "@/app/currentranking/listEntry"
import { gameData } from "@/models/game";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { rankingData } from '@/models/rankingData';

export default function currentranking() {

    const [games, setGames] = useState<gameData[]>();
    const router = useRouter();

    useEffect(() => {
        fetchGames();
    }, [])

    async function fetchGames() {
        setGames(await getGames());
    }

    function handleGameClick(game: gameData) {
        router.push("game/?game=" + game.name);
    }

    return (
        games? 
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Last Ranking</b></TableCell>
                            <TableCell></TableCell>
                            <TableCell><b>Game</b></TableCell>
                            <TableCell><b>Last Playercount</b></TableCell>
                            <TableCell><b>Highest Playercount</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {games.map((game) => {
                        return (
                            <TableRow key={game.name} onClick={() => handleGameClick(game)} sx={{ cursor: 'pointer', "&:hover": {backgroundColor: 'gray'} }}>
                                <ListEntry game={game} />
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer> : <div>Loading...</div>
    )
}