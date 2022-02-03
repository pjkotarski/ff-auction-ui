import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Title } from '../../shared/Title/Title.component';
import styles from './Nav.module.scss';

export const Nav = () => {

    const router = useRouter();

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">

                <Link href="/demo"><a className={styles.titleLink}><Title className="navbar-brand"/></a></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/demo"><a className={`nav-link ${styles.tabTitle} ${router.pathname === '/demo'? styles.active : ''}`}>Demo</a></Link>
                        </li>
                        <li className="nav-item">
                            <a href="http://www.google.com" className={`nav-link ${styles.tabTitle}`}>About me</a>
                        </li>
                    </ul>
                
                </div>

            </div>
            
        </nav>
    )
}