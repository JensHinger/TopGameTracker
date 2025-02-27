'use client'

import { TableCell } from '@mui/material';
import { formatNumber } from '@/util/numberUtil';
import { getNLatestRankingDataForGame } from '@/api/rankingdata/get-rankingData';
import { rankingData } from '@/models/rankingData';
import { useEffect, useState } from 'react';
import { gameData } from '@/models/game';
import { getGameByName } from '@/api/games/get-games';

export default function ListEntry(
        {data}:
        {data: rankingData}
    ) {

    const [game, setGame] = useState<gameData>();

    useEffect(() => {
        getGameData(data.game)
    }, [])

    // Create sub component with each game -> do the mapping of games in parent
    async function getGameData(game: string) {
        setGame(await getGameByName(game))
    }

    return (
        <>
            <TableCell>{data.ranking}</TableCell>
            <TableCell>
                <img style={{ width:"200px", height:"auto"}} src={'data:image/jpg;base64,' + game?.image}></img>
            </TableCell>
            <TableCell>{data.game}</TableCell>
            <TableCell>{formatNumber(data.numPlayers)} </TableCell>
            <TableCell>{formatNumber(game? game.all_time_high_pc: 0)}</TableCell>
            <TableCell>{formatNumber(data.dayPeak)}</TableCell>
        </>
    )
}