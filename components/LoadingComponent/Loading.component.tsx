import styles from './Loading.module.scss';

export const LoadingComonent = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}