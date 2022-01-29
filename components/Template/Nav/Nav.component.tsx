import { useRouter } from 'next/dist/client/router';
import Link from 'next/Link';
import { Title } from '../../shared/Title/Title.component';
import styles from './Nav.module.scss';

export const Nav = () => {

    const router = useRouter();

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">

                <Link href="/home"><a className={styles.titleLink}><Title className="navbar-brand"/></a></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/auction"><a className={`nav-link ${styles.tabTitle} ${router.pathname === '/auction'? styles.active : ''}`}>Demo</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/profile"><a className={`nav-link ${styles.tabTitle} ${router.pathname === '/profile'? styles.active : ''}`}>About</a></Link>
                        </li>
                    </ul>
                
                    <span className="navbar-text">
                        <Link href="/about"><a className={`${styles.tabTitle} ${router.pathname === '/about'? styles.active : ''}`}>Pierce K</a></Link>
                    </span>
                </div>

            </div>
            
        </nav>
    )
}