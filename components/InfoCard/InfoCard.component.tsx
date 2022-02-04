import { useContext, useEffect, useState } from 'react';
import { DemoUserContext, PlayerBidsContext } from '../../shared/hooks/contexts';
import { calcBiddedAmount, findPlayerBids } from '../../shared/services/bid-helpers';
import styles from './InfoCard.module.scss';


export const InfoCard = () => {

	const { demoUser, balance, setBalance } = useContext(DemoUserContext);
	const { playerBids } = useContext(PlayerBidsContext);

	const [ ongoingBids, setOngoingBids ] = useState(findPlayerBids(playerBids, demoUser._id));

	useEffect(() => {
		setOngoingBids(findPlayerBids(playerBids, demoUser._id));
	}, [playerBids]);

	useEffect(() => {
		setBalance(300 - calcBiddedAmount(ongoingBids));
	}, [ongoingBids]);

	return (
		<div className={styles.infoCard}>
			<div className={styles.top}>
					<h5 className={styles.balanceLabel}>Balance</h5>
					<h5 className={styles.balance}>${balance}</h5>
			</div>
			<div className={styles.activeBids}>
				<h4>Active Bids</h4>
				{ ongoingBids.map(player => {
					return (
						<div className={`${styles.ongoingBid} ${player.userBid ? styles.userBid : styles.oppBid}`} key={player.playerName}>
							<h5 className={styles.bidDetails}>{player.playerName}</h5>
							{ !demoUser.isRunning ?					
								<> 
										{ player.userBid ? 
									<div><h5 className={`${styles.soldSignedText} ${styles.bidDetails} ${styles.signed}`}>SIGNED</h5></div>
									: 
									<div><h5 className={`${styles.soldSignedText} ${styles.bidDetails} ${styles.sold}`}>SOLD</h5></div>
									}
								</> : 
								<div></div>
							}
							<h5 className={styles.bidDetails}>${player.bidAmount}</h5>
						</div>
					)
				})}
			</div>
		</div>
	)

}