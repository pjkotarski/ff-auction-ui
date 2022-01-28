import { useState } from 'react';
import useSWR from 'swr'
import { PlayersAPI } from '../../shared/api/players.api'
import { IPlayer } from '../../shared/types/IPlayer';
import { BidHeaderComponent } from '../BidHeaderComponent/BidHeaderComponent';
import { PlayerSlide } from '../PlayerSlideComponent/PlayerSlide';
import styles from './PlayerGroupComponent.module.scss';

export interface PlayerGroupProps {
    page: number;
}

export const PlayerGroup = ({ page } : PlayerGroupProps) => {

    const { data, error} = useSWR(`/api/players/get-players/${page}`, PlayersAPI.getPlayersByPage);
    const [ loadingError, setLoadingError ] = useState(false);

    if (error) setLoadingError(true);
    const loading = !data;
    
    return (
        <>
            { loading? 
            <div className={`pt-3 pb-3 ${styles.spinnerContainer}`}>
                <div className="spinner-border text-success" role="status">
                <span className="sr-only"/>
                </div>
            </div>
            : 
            <>
                {data.map((player: IPlayer) => { 
                        return <BidHeaderComponent player={player} addButton={true} key={player._id}/> 
                    }
                )}
            </>    
            }
        </>
    )

}