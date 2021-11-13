import { IPlayer } from '../../types/IPlayer';

export const PlayersAPI = {

    players: async(): Promise<IPlayer[]> => {
        const res = await fetch('/api/players/get-players');
        return JSON.parse(await res.json());
    }
}