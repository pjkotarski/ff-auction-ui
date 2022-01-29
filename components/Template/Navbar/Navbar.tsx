import { faDollarSign, faFootballBall, faHammer, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { Title } from '../../shared/Title/Title.component';
import styles from './Navbar.module.scss';

export const Navbar = () => {

    const router = useRouter();


    return (
        <div className={styles.navBar}>
            
            <Title/>

            <div className={styles.tabContainer}>
                <button className={`${styles.tabTitle} ${router.pathname === '/auction'? styles.active : styles.inactive}`} onClick={() => router.push('/auction')}>Auction</button>
                <button className={`${styles.tabTitle} ${router.pathname === '/profile'? styles.active : styles.inactive}`} onClick={() => router.push('/profile')}>About</button>
            </div>


            <div className={styles.tabContainer}>
                <button className={`${styles.tabTitle} ${router.pathname === '/about'? styles.active : styles.inactive}`} onClick={() => router.push('/about')}>Pierce K</button>
            </div>
        </div>
    )
}