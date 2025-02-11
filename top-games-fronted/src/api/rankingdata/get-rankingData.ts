import { getCall } from '../api.definition';
import { rankingData } from '@/models/rankingData';

export async function getRankingData() {
    return await getCall<rankingData[]>(`rankingdata`);
}

export async function getRankingDataForGame(gameName: string) {
    return await getCall<rankingData[]>(`rankingdata/${gameName}`);
}

export async function getNLatestRankingDataForGame(gameName: string, n:number) {
    return await getCall<rankingData[]>(`rankingdata/${gameName}/${n}`);
}