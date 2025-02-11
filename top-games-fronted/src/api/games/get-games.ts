import { getCall } from '../api.definition';
import { gameData } from '@/models/game';

export async function getGames() {
    return await getCall<gameData[]>("games");
}

export async function getGameByName(gameName: string) {
    return await getCall<gameData>(`games/${gameName}`);
}