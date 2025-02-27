import { getCall } from '../api.definition';
import { rankingData } from '@/models/rankingData';

export function getRankingData() {
    return getCall<rankingData[]>(`rankingdata`);
}

export function getRankingDataForGame(gameName: string) {
    return getCall<rankingData[]>(`rankingdata/${gameName}`);
}

export function getNLatestRankingDataForGame(gameName: string, n:number) {
    return getCall<rankingData[]>(`rankingdata/${gameName}/${n}`);
}

export function getNLatestRankingDataEntries(n: number){
    return getCall<rankingData[]>(`rankingdata/all/${n}`)
}