import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import { Title } from '../shared/Title/Title.component';
import styles from './RegistrationBackground.module.scss';

interface RegistrationBackgroundProps {
    children: React.ReactNode;
    moveBackwards: () => void;
};

export const RegistrationBackground = ({ children, moveBackwards }) => {
    return (
        <div className={styles.registrationBackground}>
            <div className={styles.registrationContainer}>
                <div className={styles.header}>
                    <button className={styles.backArrow} onClick={moveBackwards}>
                        <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
                    </button>
                    <Title/>
                </div>

                <div className={styles.separator}></div>
                <div className={styles.registrationContent}>
                    { children }
                </div>
            </div>
        </div>
    )
}