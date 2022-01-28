import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { DemoUserContext } from '../../shared/hooks/contexts';
import { IDemoBid } from '../../shared/types/demo/IDemoBid';
import { IBid } from '../../shared/types/IBid';
import styles from './BidComponent.module.scss';

export interface IBidComponentProps {
  bid: IDemoBid;
}

export const BidComponent = ({ bid }: IBidComponentProps) => {


	const { demoUser } = useContext(DemoUserContext);
	const [isMyBid, setIsMyBid] = useState(false);

	useEffect(() => {
		if (bid.user_id === demoUser._id) {
			setIsMyBid(true);
		}
	}, [demoUser]);

	const getCleanDate = (time: Date) => {
		return moment(time).format('h:mm a');
	}

	return (
		<div className={`${styles.bidContainer}`}>
			<div className={`${styles.bid} ${isMyBid? styles.myBid : styles.otherBid} ${isMyBid? styles.my : styles.other}`}>
					
				<p className={`${styles.bidderName}`}>{bid.bidderName}</p>

				<p className={`${styles.bidAmount}`}>${bid.amount}</p>
			</div>

			<div className={`${styles.timeContainer} ${isMyBid? styles.my : styles.other}`}>
				<p className={`${isMyBid? styles.my : styles.other}`}>{getCleanDate(bid.createdAt)}</p>
			</div>
		</div>
	)
}