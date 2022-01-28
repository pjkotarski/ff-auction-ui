import { faDollarSign, faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Title.module.scss';

interface TitleProps {
    className?: string;
}

export const Title = ({ className='' }: TitleProps) => {
    return (
        <div className={`${styles.titleContainer} ${className}`}>
                <div className={styles.titleIcon}>
                    <FontAwesomeIcon icon={faDollarSign} size="2x"/>
                </div>
                <h1 className={styles.title}>Auction</h1>
                <div className={styles.titleIcon}>
                    <FontAwesomeIcon icon={faFootballBall} size="2x"/>
                </div>
            </div>
    )
}