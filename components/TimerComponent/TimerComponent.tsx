import moment from 'moment';
import { useEffect, useState } from 'react';
import styles from './TimerComponent.module.scss';

export interface TimerComponentProps {
    expTime: Date;
}

export const TimerComponent = ({ expTime }: TimerComponentProps)  => {
    
    const getTimeLeft = () => {
        const expMoment = moment(expTime, 'HH:mm:ss');
        const nowMoment = moment(new Date(), 'HH:mm:ss');

        return moment(expMoment.diff(nowMoment)).format('m:ss');
    }

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());


    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
    });

    return (
        <div>
            {timeLeft}
        </div>
    )
}