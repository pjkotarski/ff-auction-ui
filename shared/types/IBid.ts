export interface IBid {
  _id?: string;
  player_id: number;
  user_id: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
  bidderName?: string;
}