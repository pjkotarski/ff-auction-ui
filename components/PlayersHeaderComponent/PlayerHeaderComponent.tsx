import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PlayersHeaderComponent.module.scss';

export const PlayersHeaderComponent = () => {

    return (
        <div className={styles.playersHeader}>
            
            <form className={styles.searchBox} action="">
                <input className={styles.searchInput} type="search" required/>
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
            </form>

        </div>
    )
}