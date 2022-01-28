import { PlayersContainer } from '../PlayerContainer/PlayersContainer'
import styles from './HomeComponent.module.css';

export const HomeComponent = () => {
    return (
        <div className={`container ${styles.homeContainer}`}>
            <PlayersContainer/>
        </div>
    )

}
