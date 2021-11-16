export interface IPlayer {
    _id: number,
    firstName: string;
    lastName: string;
    fullName: string;
    jerseyNumber: number;
    team: string;
    teamAbbr: string;
    position: string;
    injuryStatus: string;
    percentOwned: number;
    createdAt?: string;
    updatedAt?: string;
}