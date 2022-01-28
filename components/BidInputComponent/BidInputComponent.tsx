import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DemoApi } from '../../shared/api/demo.api';
import { DemoUserContext } from '../../shared/hooks/contexts';
import { IPlayer } from '../../shared/types/IPlayer';
import { AlertComponent } from '../AlertComponent/Alert.component';
import styles from './BidInputComponent.module.scss';

export interface BidInputComponentProps {
	player: IPlayer;
	onBidUpdate?: Function;
}

export const BidInputComponent = ({ player, onBidUpdate=(_)=>{} }: BidInputComponentProps) => {

	const { demoUser } = useContext(DemoUserContext);
	const [bidAmount, setBidAmount] = useState('');
	const [showError, setShowError] = useState(false);

	const submitBid = async() => {

		setShowError(false);
		
		try {
			const postBidResponse = await DemoApi.postBid({
				player_id: player._id,
				user_id: demoUser._id,
				league_id: demoUser._id,
				amount: parseInt(bidAmount, 10),
				bidderName: demoUser.name
			});

			if (postBidResponse.status === 200) 
				onBidUpdate(postBidResponse.data);
			
		} catch(e) {
			setShowError(true)
		}
	}

	return (
		<>
			<div className={`${styles.bidInputPrepend}`}>
				<span className={`${styles.prependSpan}`}>$</span>
			</div>
			<input type="tel" className={`${styles.bidInput}`} onChange={(e) => setBidAmount(e.target.value)} value={bidAmount} placeholder="BID" aria-label="Bid Amount" aria-describedby="basic-addon2"/>
			<button className={`btn  ${styles.submitBid}`} onClick={submitBid} type="button" disabled={!demoUser.isRunning || bidAmount <= 0}>
				<FontAwesomeIcon icon={faArrowUp}/>
			</button>
			{ showError && <AlertComponent message="please enter a valid bid" error={true}></AlertComponent>}
		</>
	)
}