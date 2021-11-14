import { ActiveBidsContainer } from '../ActiveBidsContainer/ActiveBidsContainer'
import { PlayersContainer } from '../PlayerContainer/PlayersContainer'

export const HomeComponent = () => {
    return (
        <div className="container">
            <PlayersContainer/>
            <ActiveBidsContainer/>
        </div>
    )

}
