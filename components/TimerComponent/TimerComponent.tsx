import moment from 'moment';
import { useContext, useEffect, useRef, useState } from 'react';
import { DemoUserContext, PlayerBidsContext } from '../../shared/hooks/contexts';
import styles from './TimerComponent.module.scss';

export const TimerComponent = ()  => {
	
	const { setRefreshInterval, manuallyRefreshBids } = useContext(PlayerBidsContext);
	const { demoUser, setIsRunningOnUser, setExpirationTimeOnUser } = useContext(DemoUserContext);
	const [timeLeft, setTimeLeft] = useState(null);

	const intervalRef = useRef(null);

	const checkExpired = (expiration_time) => {
		return moment(expiration_time).isBefore(moment());
	}

	const getTimeLeft = (expiration_time) => {
		if (expiration_time) {

			if (moment(expiration_time).isBefore(moment())) {
				manuallyRefreshBids();
				setRefreshInterval(0);
				return null;
			}

			const expMoment = moment(expiration_time, 'HH:mm:ss');
			const nowMoment = moment(new Date(), 'HH:mm:ss');
			return moment(expMoment.diff(nowMoment)).format('m:ss');
		} 
		return null;
	}

	useEffect(() => {

		if (demoUser.expiration_time && !checkExpired(demoUser.expiration_time)) {

			setTimeLeft(getTimeLeft(demoUser.expiration_time));
			
			intervalRef.current = setInterval(() => {
				
				if (checkExpired(demoUser.expiration_time)) {
					setExpirationTimeOnUser(null);
					setIsRunningOnUser(false);
					clearInterval(intervalRef.current);
				}

				setTimeLeft(getTimeLeft(demoUser.expiration_time));
			
			}, 1000);
		}
	}, [demoUser.expiration_time]);

	return (
		<>
			{ !!timeLeft && <h5 className={styles.timer}>{ timeLeft }</h5>}
		</>
	)
}