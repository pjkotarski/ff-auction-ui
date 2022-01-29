import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { PlayerBidsContext } from '../../shared/hooks/contexts';
import styles from './SearchBox.module.scss';

export const SearchBox = () => {

    const [searchValue, setSearchValue] = useState('');
    const { setSearchQuery } = useContext(PlayerBidsContext);

    const onKey = (e) => {
        if (e.charCode === 13) {
            setSearchQuery(searchValue);
        }
    }

    return (
        <div className={styles.searchBoxContainer}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyPress={onKey}/>
                <button className={styles.searchButton} onClick={() => setSearchQuery(searchValue)}>
                    <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
                </button>
            </div>
        </div>
    )
}