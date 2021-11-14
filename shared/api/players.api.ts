import axios from 'axios';
import { IPlayer } from '../../types/IPlayer';

export const PlayersAPI = {

    players: async(): Promise<IPlayer[]> => {
        return (await axios.get('/api/players/get-players')).data;
    },

    getPlayersByPage: async(url: string): Promise<IPlayer[]> => {
        return (await axios.get(url)).data; 
    }
}