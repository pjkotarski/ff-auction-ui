import { faDollarSign, faFootballBall, faHammer, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { Title } from '../../shared/Title/Title.component';
import Link from 'next/Link';
import styles from './Navbar.module.scss';

export const Navbar = () => {

    const router = useRouter();


    return (
        <div className={styles.navBar}>
            
            <Title/>

            <div className={styles.tabContainer}>
                <button className={`${styles.tabTitle} ${router.pathname === '/auction'? styles.active : styles.inactive}`} onClick={() => router.push('/auction')}>Auction</button>
                <button className={`${styles.tabTitle} ${router.pathname === '/profile'? styles.active : styles.inactive}`} onClick={() => router.push('/profile')}>Profile</button>
                <button className={`${styles.tabTitle} ${router.pathname === '/commissioner' ? styles.active : styles.inactive}`} onClick={() => router.push('/commissioner')}>Commissioner</button>
            </div>


            <div className={styles.tabContainer}>
                <button className={`${styles.tabTitle} ${router.pathname === '/about'? styles.active : styles.inactive}`} onClick={() => router.push('/about')}>About</button>
            </div>
        </div>
    )
}