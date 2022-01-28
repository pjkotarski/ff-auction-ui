import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { PlayerBidsContext } from '../../shared/hooks/contexts';
import styles from './SearchBox.module.scss';

export const SearchBox = () => {

    const { searchQuery, setSearchQuery } = useContext(PlayerBidsContext);

    return (
        <div className={styles.searchBoxContainer}>
            <form className={styles.searchBox} action="">
                <input className={styles.searchInput} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" required/>
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
            </form>
        </div>
    )
}