import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPlayer } from '../../shared/types/IPlayer';
import { playerImageHelper } from '../../shared/utils/player-image-helper';
import { ImageComponent } from '../shared/ImageComponent/ImageComponent';
import { TimerComponent } from '../TimerComponent/TimerComponent';
import styles from './BidHeaderComponent.module.scss';

export interface BidHeaderComponentProps {
    player: IPlayer;
    sold?: boolean;
    timer?: boolean;
    addButton?: boolean;
}

export const BidHeaderComponent = ({ player, addButton=false, sold=false, timer=false }: BidHeaderComponentProps) => {
    
    const onBidClick = (e) => {
    }

    return (
        <div className={`container-fluid ${styles.bidHeader}`}>
            <div className="row">
                <div className={`col ${styles.playerImage}`}>
                    <ImageComponent src={playerImageHelper(player._id)}/>
                </div>
                
                <div className="col pt-2">
                    <div className="row">
                        <p className="mb-0" >{player.firstName} {player.lastName}</p>
                    </div>
                    <div className="row">
                        <p className="col">{player.teamAbbr} / WR</p>
                    </div>
                </div>

                <div className={`col ${styles.rightContainer}`}>
                {
                    (() => {
                        if (addButton) {
                            return (<button type="button" className={`btn ${styles.addButton}`} onClick={(e) => onBidClick(e)}>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>)
                        } else if (sold) {
                            return <p className={styles.soldText}>SOLD</p>
                        } else if (timer) {
                            return <TimerComponent expTime={new Date(1637338926792)}/>
                        }
                    })()
                }
                </div>
            </div>
        
        </div>
    )
}