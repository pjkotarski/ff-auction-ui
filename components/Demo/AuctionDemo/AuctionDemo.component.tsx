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
import { LoadingComonent } from '../../LoadingComponent/Loading.component';
import { AlertComponent } from '../../AlertComponent/Alert.component';

export const AuctionDemo = () => {

  const { demoUser } = useContext(DemoUserContext);

  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const loadMoreRef = useRef();
  const [refreshInterval, setRefreshInterval] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const shouldLoadMore = useInWindow(loadMoreRef);
  const [recentlyAddedPlayer, setRecentlyAddedPlayer] = useState(null);

  useEffect(() => {
    setPage(page+1);
  }, [shouldLoadMore]);

  let { data: playerBids, error, mutate } = useSWR(['/api/demo/bidded-players', searchQuery], DemoApi.searchPlayers, {
    refreshInterval: refreshInterval
  });

  useEffect(() => {
    if (demoUser.isRunning) {
      setRefreshInterval(3000);
    }
  }, [demoUser.isRunning]);

  const onFinish = () => {
    setShowLoadMore(false);
  }

  useEffect(() => setShowLoadMore(true), [searchQuery]);

  const playerPages = [];
  for (let i=0; i<=page; i++) {
    playerPages.push(<PlayerPage page={i} key={i} onFinish={onFinish}/>);
  }

  const manuallyRefreshBids = async() => {
    playerBids = await mutate();
  }

  const addPlayer = (player: IPlayer) => {
    setRecentlyAddedPlayer(player);
    mutate([...playerBids, player]);
  }

  const clearPlayers = () => {
    mutate([]);
  }

  return (
    <PlayerBidsContext.Provider value = {{ playerBids, searchQuery, setSearchQuery, addPlayer, clearPlayers, setRefreshInterval, manuallyRefreshBids, recentlyAddedPlayer, setRecentlyAddedPlayer }}>
      <div className={`content ${styles.bidsContainer}`}>
        <div className={styles.flexWrapper}>
          <div className={styles.infoBox}>
            <StartTimer/>
            <SearchBox/>
            <InfoCard/>
          </div>
          { !!playerBids && playerBids.map(player => <ActiveBidsElement player={player} isBidded={true} key={`bids_${player._id}`}/>) }
          {playerPages}
          { error && <AlertComponent error={true} message="An error occured, could not load players."/>}
        </div>
        { showLoadMore && <div className={styles.loadingContainer} ref={loadMoreRef}>
          <LoadingComonent/>
        </div>}
      </div>
    </PlayerBidsContext.Provider>
  )

}