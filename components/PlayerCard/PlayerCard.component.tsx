import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { IPlayer } from '../../shared/types/IPlayer';
import { playerImageHelper } from '../../shared/utils/player-image-helper';
import { ImageComponent } from '../shared/ImageComponent/ImageComponent';
import styles from './PlayerCard.module.scss';

interface PlayerCardProps {
    player?: IPlayer;
    toggleBidButton: () => void;
    isShowingBids: boolean;
}

export const PlayerCard = ({ player = null, toggleBidButton, isShowingBids }: PlayerCardProps) => {

    useEffect(() => {
        console.log(isShowingBids);
    })

    const leadingBidder = 'Nick Tanner';
    const leadingBid = '45';

    return (
        <div className={`${styles.cardContainer} ${isShowingBids ? styles.noBottom : styles.bottom}`}>
            <div className={styles.lineOne}>
                <ImageComponent src={playerImageHelper(player._id)} className={styles.playerImage}/>
                <div className={styles.playerInfo}>
                    <p className={styles.playerName}>{player.fullName}</p>
                    <div className={styles.playerDetails}>
                        <p>{player.teamAbbr} / {player.position}</p>
                        <p className={styles.injuryStatus}>{player.injuryStatus}</p>
                    </div>
                </div>
            </div>
            <div className={styles.lineTwo}>
                <p className={`${styles.leadingBidder} ${styles.other}`}>{leadingBidder}  ${leadingBid}</p>
              
                <button className={`${styles.bidButton} ${ isShowingBids? styles.bRed : styles.bGreen }`} onClick={toggleBidButton}>
                    <FontAwesomeIcon icon={faHandHoldingUsd}/>
                </button>
            </div>
        </div>
    )
}