import axios from 'axios';
import { IDemoBid } from '../types/demo/IDemoBid';
import { IDemoUser } from '../types/demo/IDemoUser';


export const DemoApi = {

  createUser: async(name: string) => {
    return (await axios.post('/api/demo/create-user', {
      name: name
    })).data;
  },

  getUser: async(user_id: string) => {
    return (await axios.post('/api/demo/get-user', {
      user_id: user_id
    })).data;
  },

  startDemo: async(): Promise<Date> => {
    return await(await (axios.get('/api/demo/start-demo'))).data;
  },

  addUserAndStart: async(user: IDemoUser) => {
    return (await axios.post('/api/demo/start-demo', {
      user: user
    })).data;
  },

  postBid: (bid: IDemoBid) => {
    return axios.post('/api/demo/post-bid', {
      bid: bid
    });
  },

  clearBids: async() => {
    return await axios.get('/api/demo/clear-bids');
  },

  getPlayers: async() => {
    return (await axios.get('/api/demo/players')).data;
  },

  getBiddedPlayers: async(search: string) => {
    return (await axios.post('/api/demo/bidded-players', { query: search })).data;
  },

  getUnbiddedPlayers: async() => {
    return (await axios.get('/api/demo/unbidded-players')).data;
  },

  searchPlayers: async(url: string, query: string) => {

    return (await axios.post(url, {
      query: query
    })).data;
  },

  swrGetFetcher: async(url: string) => {
    return (await axios.get(url)).data;
  },


  swrPostFetcher: async(url: string, body: any) => {
    return (await axios.post(url, body)).data;
  }

}