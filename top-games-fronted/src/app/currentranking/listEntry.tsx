'use client'

import { gameData } from '@/models/game';
import { TableCell } from '@mui/material';
import { formatNumber } from '@/util/numberUtil';
import { getNLatestRankingDataForGame } from '@/api/rankingdata/get-rankingData';
import { rankingData } from '@/models/rankingData';
import { useEffect, useState } from 'react';

export default function ListEntry(
        {game}:
        {game: gameData}
    ) {

    const [latestRankingData, setLatestRankingData] = useState<rankingData>();

    useEffect(() => {
        getRankingData(game.name)
    }, [])

    // Create sub component with each game -> do the mapping of games in parent
    async function getRankingData(game: string) {
        setLatestRankingData((await getNLatestRankingDataForGame(game, 1))[0])
    }

    return (
        <>
            <TableCell>{latestRankingData?.ranking}</TableCell>
            <TableCell>
                <img src={'data:image/jpg;base64,' + game.image}></img>
            </TableCell>
            <TableCell>{game.name}</TableCell>
            <TableCell>{latestRankingData? formatNumber(latestRankingData.numPlayers) : "Unavailable"}</TableCell>
            <TableCell>{formatNumber(game.all_time_high_pc)}</TableCell>
        </>
    )
}