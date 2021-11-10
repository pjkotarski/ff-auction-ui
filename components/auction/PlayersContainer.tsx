import React from 'react'
import { IPlayer } from '../../types/IPlayer'
import { PlayerSlide } from './PlayerSlide'

export interface PlayersContainerProps {
    players: IPlayer[];
}

export const PlayersContainer = ({players}: PlayersContainerProps) => {
    
    return (
        <div className="container-fluid auction-block">
          <ul className="list-group">
            { players.map(player => (
                <PlayerSlide player={player} addButton={true}/>
              )
            )}
          </ul>  
        </div>
    )
}
