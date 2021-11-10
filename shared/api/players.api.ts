import axios from 'axios';
import { IPlayer } from '../../types/IPlayer';
const { createProxyMiddleware } = require("http-proxy-middleware")



export const PlayersAPI = {

    players: async() => {
        const res = await fetch('/api/players');
        return res.json();
    }
}