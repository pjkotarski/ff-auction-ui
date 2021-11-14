import React from 'react'
import { IPlayer } from '../../types/IPlayer'
import { PlayerSlide } from '../PlayerSlideComponent/PlayerSlide'
import styles from './PlayersContainer.module.css';
import useSWRInfinite from 'swr/infinite';
import { PlayersAPI } from '../../shared/api/players.api';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null
  return `/api/players/get-players/${pageIndex}`;
}

export const PlayersContainer = () => {

    const { data, error, size ,setSize } = useSWRInfinite(getKey, PlayersAPI.getPlayersByPage);

    if (error) return <div>There was an error</div>;
    if (!data) return <div>Loading</div>

    return (
        <div className={`d-md-inline-block ${styles.playersContainer}`}>
          { data.map((playersPage: IPlayer[]) => {
            return playersPage.map(player => <PlayerSlide player={player} addButton={true} key={player._id}/>);
          })}

          <button onClick={() => setSize(size + 1)}>Load More</button>
        </div>
    )
}
