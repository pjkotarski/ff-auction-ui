import { ActiveBidsContainer } from '../ActiveBidsContainer/ActiveBidsContainer';
import { PlayersContainer } from '../PlayerContainer/PlayersContainer';
import styles from './Auction.module.scss';

export const Auction = () => {
    return (
        <div className={styles.auctionContainer}>
            <PlayersContainer/>
            <ActiveBidsContainer/>
        </div>
    )
}