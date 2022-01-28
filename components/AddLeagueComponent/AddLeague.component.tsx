import { useState } from 'react';
import { RegistrationApi } from '../../shared/api/registration.api';
import { ILeague } from '../../shared/types/ILeague';
import { AlertComponent } from '../AlertComponent/Alert.component';
import { LoadingComonent } from '../LoadingComponent/Loading.component';
import { Button } from '../shared/Button/Button.component';
import { Input } from '../shared/Input/Input.component';
import styles from './AddLeague.module.scss';

interface AddLeagueProps {
    moveForward: () => void;
    configExistingLeague: (leagueId: string) => void;
    noLeague: () => void;
}

export const AddLeague = ({ moveForward, configExistingLeague, noLeague }) => {

    const [leagueId, setLeagueId] = useState(null);
    const [foundLeague, setFoundLeague] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const findLeague = async() => {
        cleanState();
        setLoading(true);
        try {
            const foundLeague = await RegistrationApi.getLeague(leagueId);
            setFoundLeague(foundLeague);
        } catch(e) {
            if (e.response.status === 500) { 
                setError(true);
            } else if (e.response.status === 400) {
                setNotFound(true);
            }
        }

        setLoading(false);
    }

    const cleanState = () => {
        setFoundLeague(false);
        setError(false);
        setNotFound(false);
    }

    const joinLeague = () => {
        configExistingLeague(foundLeague);
        moveForward();
    }

    const createNewLeague = () => {
        noLeague();
        moveForward();
    }

    return (
        <div className={styles.addLeagueForm}>
            <h2>Do want to join an existing league?</h2>
            <Input value={leagueId} onChange={ (val) => setLeagueId(val) } className={`${styles.input}`} placeholder='league id' />
            <div className={styles.buttonsContainer}>
                <Button className={styles.button} onClick={findLeague} disabled={!leagueId}>Find league</Button>
                <Button className={styles.button} onClick={createNewLeague}>Create a new league</Button>
            </div>

            { !!foundLeague && <div className={styles.foundLeagueContainer}>
                <h3>{ foundLeague.name }</h3>
                <Button onClick={joinLeague}>Join League</Button>
            </div> }
            { notFound && <AlertComponent className={styles.alertMessage} message="Could not find a league with that id" error={true}/>}
            { error && <AlertComponent className={styles.alertMessage} message="An unexpected error occured" error={true}/> }
            { loading && <LoadingComonent/>}
        </div>
    );
}