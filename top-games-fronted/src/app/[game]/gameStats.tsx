import { rankingData } from "@/models/rankingData";
import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export default function GameStats(
    {rankingData}:
    {rankingData : rankingData[]}) {

    return (
    <>
        <Typography component="div" variant="h5">Playercount</Typography>
        <LineChart 
            xAxis={[
                {
                    id: 'Date',
                    dataKey: 'date',
                    scaleType: 'time',
                    valueFormatter: (date: Date) => `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
                }
            ]}
            yAxis={[
                {
                    min: 0,
                    max: Math.max(...rankingData.map((datapoint: rankingData) => datapoint.dayPeak))
                }
            ]}
            series={[
                {   
                    id:'Players',
                    dataKey: 'numPlayers'
                },
            ]}
            dataset={rankingData.map((datapoint: rankingData) => ({
                numPlayers: datapoint.numPlayers,
                date: new Date(datapoint.date)
            }))}
            height={300}   
            margin={{left: 70, right: 70}}
        />
        <Typography component="div" variant="h5">Ranking</Typography>
        <LineChart 
            xAxis={[
                {
                    id: 'Date',
                    dataKey: 'date',
                    scaleType: 'time',
                    valueFormatter: (date: Date) => `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
                }
            ]}
            yAxis={[
                {
                    min: 100,
                    max: 1
                }
            ]}
            series={[
                {
                    id:'Ranking',
                    dataKey: 'ranking'
                }
            ]}
            dataset={rankingData.map((datapoint: rankingData) => ({
                ranking: datapoint.ranking,
                date: new Date(datapoint.date)
            }))}
            height={300}   
            margin={{left: 70, right: 70}}
        />
    </>)
}