import { useContext, useEffect, useRef, useState } from 'react';
import { DemoUserContext, PlayerBidsContext } from '../../shared/hooks/contexts';
import { IPlayer } from '../../shared/types/IPlayer';
import { BidComponent } from '../BidComponent/BidComponent';
import { BidInputComponent } from '../BidInputComponent/BidInputComponent';
import { PlayerCard } from '../PlayerCard/PlayerCard.component';
import styles from './ActiveBidsComponent.module.scss';

export interface ActiveBidsComponentProps {
    isBidded: boolean;
    player: IPlayer;
    filterPlayer?: (number) => void;
}

export const ActiveBidsElement = ({ player, isBidded, filterPlayer=(_)=>{}}: ActiveBidsComponentProps) => {

  const { demoUser } = useContext(DemoUserContext);
  const { addPlayer, recentlyAddedPlayer } = useContext(PlayerBidsContext);
  const [bids, updateBids] = useState(player.bids);
  const bidHistoryRef = useRef(null);
  const activeBidsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isBidded && recentlyAddedPlayer && recentlyAddedPlayer._id === player._id) {
      activeBidsRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [recentlyAddedPlayer]);

  useEffect(() => {
    if (bidHistoryRef.current) {
      bidHistoryRef.current.scrollTop = bidHistoryRef.current.scrollHeight;
    }
  }, [bidHistoryRef]);

  useEffect(() => {
    updateBids(player.bids);
  }, [player.bids])

  const onBidUpdate = (newPlayer: IPlayer) => {
    if (isBidded) {
      updateBids(newPlayer.bids);
    } else {
      addPlayer(newPlayer);
      filterPlayer(newPlayer._id);
    }
  }

  return (
    <div className={`${styles.bidsComponent}`} ref={activeBidsRef}>
      <PlayerCard player={player} isShowingBids={isBidded} onBidUpdate={onBidUpdate} />
      { isBidded &&
        <>
          <div className={`float-right ${styles.bidHistory}`} ref={bidHistoryRef}>
            { bids &&
                bids.map(bid => {
                  return <BidComponent bid={bid} key={bid._id}/>
                })
            }
          </div>
          <div className={styles.inputContainer}>
            { !demoUser.isRunning ? <p className={styles.soldText}>SOLD</p> 
            : 
            <BidInputComponent player={player} onBidUpdate={onBidUpdate} style={styles.bidInputPosition}/> }                       
          </div>
        </> }
    </div>
  )
}
