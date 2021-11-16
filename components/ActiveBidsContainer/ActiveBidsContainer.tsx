import { useRef } from 'react';
import { useInWindow } from '../../shared/hooks/useInWindow.hook';
import styles from './ActiveBidsContainer.module.css';

export const ActiveBidsContainer = () => {


    return (
        <>  
            <h2 className={`d-inline-block ${styles.testContainer}`}>IS THIS IN VIEW ^^^</h2>
        </>

    )
}
