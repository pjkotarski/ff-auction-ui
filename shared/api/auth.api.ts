import axios from 'axios';

export const AuthAPI = {

    authenticateToken: async(endpoint) => {
        return (await axios.get(endpoint)).data;
    },


    authenticateGoogleUser: async(googleAuthData: any) => {
        
        const authBody = {
            token: googleAuthData.tokenId
        }
        
        return axios.post('/api/auth/google', authBody);
    }

}