import { IPlayer } from '../../types/IPlayer'
import { ActiveBidsContainer } from '../ActiveBidsContainer/ActiveBidsContainer'
import { PlayersContainer } from '../PlayerContainer/PlayersContainer'


export interface HomeComponentProps { 
    playerData: IPlayer[];
}

export const HomeComponent = ({playerData}: HomeComponentProps) => {
    return (
        <div className="container">
            <PlayersContainer players={playerData}/>
            <ActiveBidsContainer/>
        </div>
    )

}
