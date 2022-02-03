import { useState } from 'react';
import { AddLeague } from '../components/AddLeagueComponent/AddLeague.component';
import { RegisterUser } from '../components/RegisterUserComponent/RegisterUser.component';
import { RegistrationBackground } from '../components/RegistrationBackground/RegistrationBackground.component';
import { RegisterLeague } from '../components/RegisterLeagueComponent/RegisterLeague.comopnent';
import { useRouter } from 'next/dist/client/router';
import { RegistrationApi } from '../shared/api/registration.api';
import { IUser } from '../shared/types/IUser';
import { AuthGuard } from '../components/AuthGuard/AuthGuard.component';

export default function RegistrationPage() {
    
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(0);
    const [existingLeague, setExistingLeague] = useState(false);
    const [leagueToAdd, setLeagueToAdd] = useState(null);

    const forwardsPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const backwardsPage = () => {
         
        if (currentPage === 0) {
            router.push('/');
        }

        setCurrentPage(currentPage - 1);
    }

    const joinLeague = (leagueId: number) => {
        setLeagueToAdd({ _id: leagueId });
        setExistingLeague(true);
    }

    const noLeague = () => {
        setExistingLeague(false);
    }

    const configureLeague = (data: any) => {
        setLeagueToAdd(data);
    }

    const configureUser = (userUpdates: IUser) => {


        RegistrationApi.registerUserAndLeague(leagueToAdd, userUpdates, existingLeague);

    }

    const pages =  existingLeague ? [
        <AddLeague moveForward={forwardsPage} configExistingLeague={joinLeague} noLeague={noLeague} key={'addLeagueExisting'}/>,
        <RegisterUser configureUser={configureUser} key={'registerUserExisting'}/>,
    ]
    : [
        <AddLeague moveForward={forwardsPage} configExistingLeague={joinLeague} noLeague={noLeague} key={'addLeague'}/>,
        <RegisterLeague forwardPage={forwardsPage} configureLeague={configureLeague} key={'registerLeague'}/>,
        <RegisterUser configureUser={configureUser} key={'registerUser'}/>
    ]

    const resolvePage = (index: number) => {
        return pages[index];
    }

    return (
        <AuthGuard>
            <RegistrationBackground moveBackwards={backwardsPage}>
                { resolvePage(currentPage) }
            </RegistrationBackground>
        </AuthGuard>
    )
}