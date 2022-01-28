import axios from 'axios';
import { ILeague } from '../types/ILeague';
import { IUser } from '../types/IUser';

export const RegistrationApi = {

    getLeague: async(leagueId: string) => {
        return (await axios.post('/api/registration/get-league', { leagueId: leagueId })).data;
    },

    registerUserAndLeague: async(league: ILeague, userUpdates: IUser, hasExistingLeague) => {

        const postObject = {
            league: league,
            newUser: userUpdates,
            hasExistingLeague: hasExistingLeague
        };

        return (await axios.post('/api/registration/register-user-league', postObject)).data;
    }

}