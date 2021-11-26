import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './InfoCard.module.scss';

interface InfoCardProps {

}

export const InfoCard = ( {}: InfoCardProps ) => {

    const ongoingBids = [
        { name: 'Khalil Mack', leadingBid: 20 },
        { name: 'Khalil Mack', leadingBid: 20 },
        { name: 'Khalil Mack', leadingBid: 20 }
    ];

    return (
        <div className={styles.infoCard}>
            
            <div className={styles.top}>
                <h5 className={styles.balanceLabel}>Balance</h5>
                <h5 className={styles.balance}>$745</h5>
            </div>

            <div className={styles.activeBids}>
                <h4>Active Bids</h4>
                { ongoingBids.map(player => {
                    return (
                        <div className={styles.ongoingBid}>
                            <h5 className={styles.bidDetails}>{player.name}</h5>
                            <h5 className={styles.bidDetails}>${player.leadingBid}</h5>
                        </div>

                    )
                })}


            </div>
        
        </div>
    )

}