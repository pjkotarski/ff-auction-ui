import { faArrowCircleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent } from 'react';
import styles from './BidInputComponent.module.scss';

export interface BidInputComponentProps {
    value?: string;
    onInputChange?: (val: string) => void;
}

export const BidInputComponent = ({ value='', onInputChange=()=> null }: BidInputComponentProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('handling change', event.target.value);
    }

    return (
        <div className={`${styles.bidInputContainer}`}>
            <div className={`${styles.bidInputPrepend}`}>
                <span className={`${styles.prependSpan}`}>$</span>
            </div>
            <input type="tel" className={`${styles.bidInput}`} placeholder="BID" aria-label="Bid Amount" aria-describedby="basic-addon2"/>
            <button className={`btn  ${styles.submitBid}`} type="button">
                <FontAwesomeIcon icon={faArrowUp}/>
            </button>
        </div>
    )
}