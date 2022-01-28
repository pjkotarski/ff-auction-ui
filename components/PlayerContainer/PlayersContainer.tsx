import React, { useEffect, useRef, useState } from 'react'
import styles from './PlayersContainer.module.scss';
import { useInWindow } from '../../shared/hooks/useInWindow.hook';
import { PlayerGroup } from '../PlayerGroupComponent/PlayerGroupComponent';
import { PlayersHeaderComponent } from '../PlayersHeaderComponent/PlayerHeaderComponent';

export const PlayersContainer = () => {

  const [page, setPage] = useState(0);
  const loadMoreRef = useRef();
  const shouldLoadMore = useInWindow(loadMoreRef);

  useEffect(() => setPage(page+1), [shouldLoadMore]);

  const playerGroups = [];
  for (let i=0; i <= page; i++ ) {
    playerGroups.push(<PlayerGroup page={i} key={i}/>)
  }

  return (
    <div className={`${styles.playersContainer}`}>
      <PlayersHeaderComponent/>
      {playerGroups}
      <div className={styles.nextDiv} ref={loadMoreRef}></div>
    </div>
  )
}
