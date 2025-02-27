'use client'

import { useRouter } from 'next/navigation';
import ListEntry  from '@/app/currentranking/listEntry';
import { gameData } from '@/models/game';
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { rankingData } from '@/models/rankingData';
import { getNLatestRankingDataEntries } from '@/api/rankingdata/get-rankingData';

export default function currentranking() {

    const [data, setData] = useState<rankingData[]>();
    const router = useRouter();

    useEffect(() => {
        fetchGames();
    }, [])

    async function fetchGames() {
        setData(await getNLatestRankingDataEntries(100));
    }

    function handleGameClick(datapoint: rankingData) {
        router.push(datapoint.game);
    }

    return (
        data? 
            <>
                <Typography component="div" sx={{padding: "1rem"}}>Last Data Collection: {new Date(data[0].date).toLocaleString("de-DE", {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Current Ranking</b></TableCell>
                                <TableCell></TableCell>
                                <TableCell><b>Game</b></TableCell>
                                <TableCell><b>Last Playercount</b></TableCell>
                                <TableCell><b>Highest Playercount</b></TableCell>
                                <TableCell><b>Highest Playercount Last 24H</b></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((datapoint) => {
                            return (
                                <TableRow key={datapoint.game} onClick={() => handleGameClick(datapoint)} sx={{ cursor: 'pointer', "&:hover": {backgroundColor: 'gray'} }}>
                                    <ListEntry data={datapoint} />
                                </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </>
            : <div>Loading...</div>
    )
}