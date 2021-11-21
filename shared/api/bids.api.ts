import axios from 'axios'
import { IPlayer } from '../types/IPlayer'

export const BidsAPI = {

    getBids: async(url, timeStamp = ''): Promise<IPlayer[]> => {

        const postBody = {
            mostRecentBid: timeStamp
        };
        
        return (await axios.post(url, postBody)).data;

    }

}