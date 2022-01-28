import { InfoCard } from '../../InfoCard/InfoCard.component';
import { SearchBox } from '../../SearchBox/SearchBox.component';
import styles from './AuctionDemo.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { useInWindow } from '../../../shared/hooks/useInWindow.hook';
import { PlayerPage } from '../PlayerPage/PlayerPage.component';
import useSWR from 'swr';
import { DemoApi } from '../../../shared/api/demo.api';
import { ActiveBidsElement } from '../../ActiveBidsComponent/ActiveBidsComponent';
import { StartTimer } from '../../StartTimerComponent/StartTimer.component';
import { DemoUserContext, PlayerBidsContext } from '../../../shared/hooks/contexts';
import { IPlayer } from '../../../shared/types/IPlayer';

export const AuctionDemo = () => {

  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const loadMoreRef = useRef();
  const [refreshInterval, setRefreshInterval] = useState(3000);
  const shouldLoadMore = useInWindow(loadMoreRef);

  useEffect(() => setPage(page+1), [shouldLoadMore])

  let { data: playerBids, error, mutate } = useSWR(['/api/demo/bidded-players', searchQuery], DemoApi.searchPlayers, {
    refreshInterval: refreshInterval
  });

  const playerPages = [];
  for (let i=0; i<=page; i++) {
    playerPages.push(<PlayerPage page={i} key={i}/>);
  }

  const manuallyRefreshBids = async() => {
    playerBids = mutate(await DemoApi.getBiddedPlayers(searchQuery));
  }


  const addPlayer = (player: IPlayer) => {
    mutate([...playerBids, player]);
  }

  const clearPlayers = () => {
    mutate([]);
  }

  return (
    <PlayerBidsContext.Provider value = {{ playerBids, searchQuery, setSearchQuery, addPlayer, clearPlayers, setRefreshInterval, manuallyRefreshBids }}>
      <div className={`content ${styles.bidsContainer}`}>
        <div className={styles.flexWrapper}>
          <div className={styles.infoBox}>
            <StartTimer/>
            <SearchBox/>
            <InfoCard/>
          </div>
          { !!playerBids && playerBids.map(player => <ActiveBidsElement player={player} isBidded={true} key={`bids_${player._id}`}/>) }
          {playerPages}
        </div>
        <div ref={loadMoreRef}>load more</div>
      </div>
    </PlayerBidsContext.Provider>
  )

}