import { IPlayer } from '../types/IPlayer'

export interface IOngoingBid {
  userBid: boolean;
  bidAmount: number;
  playerName: string;
}

export const findPlayerBids = (players: IPlayer[], userId: string): IOngoingBid[] => {

  if (!players) return [];

  return players.filter(player => player.bids.find(bid => bid.user_id === userId)).map(player => {
    return {
      userBid: player.bids[player.bids.length - 1].user_id === userId,
      bidAmount: player.bids[player.bids.length - 1].amount,
      playerName: player.fullName
    }
  });
};

export const calcBiddedAmount = (currentBids: IOngoingBid[]) => {
  const reducer = (bidded: number, player: IOngoingBid) => bidded + (player.userBid ? player.bidAmount : 0); 
  return currentBids.reduce(reducer, 0);
};