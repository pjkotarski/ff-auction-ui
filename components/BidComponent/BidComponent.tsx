import styles from './BidComponent.module.scss';

export interface IBidComponentProps {
    myBid: boolean;
}

export const BidComponent = ({ myBid }: IBidComponentProps) => {
    return (
        <div className={`${styles.bidContainer}`}>
            <div className={`${styles.bid} ${myBid? styles.myBid : styles.otherBid} ${myBid? styles.my : styles.other}`}>
                
                <div className={`${styles.bidOwner}`}>
                    <p className={`${styles.bidderTeam}`}>The Senate</p>
                    <p className={`${styles.bidderName}`}>Nick Tanner</p>
                </div>

                <p className={`${styles.bidAmount}`}>$45</p>

            </div>

            <div className={`${styles.timeContainer} ${myBid? styles.my : styles.other}`}>
                <p className={`${myBid? styles.my : styles.other}`}>4:45 PM</p>
            </div>
        </div>
    )
}