import { Router } from 'next/dist/client/router';
import { AuthAPI } from '../api/auth.api';
import { IUser } from '../types/IUser';

export const authResolver = async(loginData: any, router: Router , setContext: Function) => {
    
    try {
        const user: IUser = loginData;
        if (user && user.league_id) {
            setContext(user);
            router.push('/auction');
        } else if (user && !user.league_id) {
            setContext(user);
            router.push('/registration');
        } else {
            throw new Error;
        }
    } catch(_) {
        router.push('/login');
    }
}


export const handleGoogleLogin = async(googleUser: any, router: Router, setContext: Function) => {

    let user: IUser; 

    try {
        const response = await AuthAPI.authenticateGoogleUser(googleUser);
        user = response.data.user;
        authResolver(user, router, setContext);

    } catch(_) {
        throw new Error('could not authenticate user');
    }

}