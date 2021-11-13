import React from 'react'
import { IPlayer } from '../../types/IPlayer'
import { PlayerSlide } from '../PlayerSlideComponent/PlayerSlide'
import styles from './PlayersContainer.module.css';

export interface PlayersContainerProps {
    players: IPlayer[];
}

export const PlayersContainer = ({players}: PlayersContainerProps) => {
    return (
        <div className={`d-md-inline-block ${styles.playersContainer}`}>
          { players.map(player => (
              <PlayerSlide player={player} addButton={true} key={player._id}/>
            )
          )}
        </div>
    )
}
