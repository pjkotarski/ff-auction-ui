import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchBox.module.scss';

export const SearchBox = () => {

    return (
        <div className={styles.searchBoxContainer}>
            <form className={styles.searchBox} action="">
                <input className={styles.searchInput} type="search" required/>
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
            </form>
        </div>
    )
}