import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { BidsAPI } from '../../shared/api/bids.api';
import { ActiveBidsElement } from '../ActiveBidsComponent/ActiveBidsComponent';
import { PlayerCard } from '../PlayerCard/PlayerCard.component';
import styles from './Auction.module.scss';
import Masonry from 'react-masonry-css'
import { InfoCard } from '../InfoCard/InfoCard.component';
import { SearchBox } from '../SearchBox/SearchBox.component';



export const Auction = () => {

    const { data, error } = useSWR('/api/bids/get-bids', url => BidsAPI.getBids(url));
    const [dataError, setDataError] = useState(false);    

    if (error) setDataError(true);

    const loading = !data;

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        768: 2,
        640: 1
      };


    return (
        <div className={`content ${styles.bidsContainer}`}>
            {
                loading? 
                <h2>LOADING</h2>
                :
                <>

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className={styles.myMasonryGrid}
                        columnClassName={styles.myMasonryGridColumn}>
                            <div>
                                <SearchBox/>
                                <InfoCard/>
                            </div>
                            {data.map(player => {
                            return <ActiveBidsElement player={player}/>
                            })}
                    </Masonry>
                </>
            }
        </div>
    )
}
