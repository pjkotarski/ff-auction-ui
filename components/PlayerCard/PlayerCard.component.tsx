import { IPlayer } from '../../shared/types/IPlayer';
import { playerImageHelper } from '../../shared/utils/player-image-helper';
import { BidInputComponent } from '../BidInputComponent/BidInputComponent';
import { ImageComponent } from '../shared/ImageComponent/ImageComponent';
import styles from './PlayerCard.module.scss';

interface PlayerCardProps {
    player?: IPlayer;
    isShowingBids: boolean;
    onBidUpdate?: Function;
}

export const PlayerCard = ({ player = null, isShowingBids, onBidUpdate=(_) => {} }: PlayerCardProps) => {
    
    return (
        <div className={`${styles.cardContainer} ${isShowingBids ? styles.showingBids : styles.noBids}`}>
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
            {!isShowingBids && <div className={styles.lineTwo}>              
                <BidInputComponent onBidUpdate={onBidUpdate} player={player}/>
            </div> }
        </div>
    )
}