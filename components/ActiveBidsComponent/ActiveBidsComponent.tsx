import { ChangeEvent, useState } from 'react';
import { IPlayer } from '../../shared/types/IPlayer';
import { BidComponent } from '../BidComponent/BidComponent';
import { BidHeaderComponent } from '../BidHeaderComponent/BidHeaderComponent';
import { BidInputComponent } from '../BidInputComponent/BidInputComponent';
import styles from './ActiveBidsComponent.module.scss';

export interface ActiveBidsComponentProps {
    player: IPlayer
}

export const ActiveBidsElement = ({ player }: ActiveBidsComponentProps) => {
    
    return (
        <div className={`${styles.bidsComponent}`}>
        
            <BidHeaderComponent player={player} sold={true}/>
            <div className={`float-right ${styles.bidHistory}`}>
                <BidComponent myBid={false}/>
                <BidComponent myBid={true}/>
            </div>            
            <BidInputComponent/>
        </div>
    )
}

