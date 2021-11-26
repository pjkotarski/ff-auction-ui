import { ChangeEvent, useState } from 'react';
import { IPlayer } from '../../shared/types/IPlayer';
import { BidComponent } from '../BidComponent/BidComponent';
import { BidHeaderComponent } from '../BidHeaderComponent/BidHeaderComponent';
import { BidInputComponent } from '../BidInputComponent/BidInputComponent';
import { PlayerCard } from '../PlayerCard/PlayerCard.component';
import styles from './ActiveBidsComponent.module.scss';

export interface ActiveBidsComponentProps {
    player: IPlayer
}

export const ActiveBidsElement = ({ player }: ActiveBidsComponentProps) => {
    
    const [showBids, setShowBids] = useState(false);

    const toggleShowBids = () => {
        setShowBids(!showBids);
    };

    return (
        <div className={`${styles.bidsComponent}`}>
            <PlayerCard player={player} toggleBidButton={toggleShowBids} isShowingBids={showBids}/>
            { showBids? 
                <>
                    <div className={`float-right ${styles.bidHistory}`}>
                        <BidComponent myBid={false}/>
                        <BidComponent myBid={true}/>
                    </div>            
                    <BidInputComponent/>
                </> : <></>
        }
  
        </div>
    )
}

