import { useState } from 'react';
import useSWR from 'swr';
import { BidsAPI } from '../../shared/api/bids.api';
import { ActiveBidsElement } from '../ActiveBidsComponent/ActiveBidsComponent';
import styles from './ActiveBidsContainer.module.scss';

export const ActiveBidsContainer = () => {
    
    const { data, error } = useSWR('/api/bids/get-bids', url => BidsAPI.getBids(url));
    const [dataError, setDataError] = useState(false);
    
    if (error) setDataError(true);

    const loading = !data;



    return (
        <div className={styles.bidsContainer}>

            {
                loading? 
                <h2>LOADING</h2>
                :
                <>
                    {data.map(player => {
                    return <ActiveBidsElement player={player}/>
                    })}
                </>
            }
        </div>
    )
}
