import styles from './Alert.module.scss';

interface AlertComponentProps {
    message: string;
    error: boolean;
    className?: string;
}

export const AlertComponent = ({ message, error = false, className = null }: AlertComponentProps) => {
    return (
        <div className={`${styles.alertContainer} ${className}`}>
            { error ? <p className={styles.errorText}>{message}</p> : <p className={styles.successText}>{message}</p>}
        </div>
    )
}
