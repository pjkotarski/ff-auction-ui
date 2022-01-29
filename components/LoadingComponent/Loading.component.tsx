import styles from './Loading.module.scss';

interface LoadingComponentProps {
  className?: string;
	hidden?: boolean;
}

export const LoadingComonent = ({ className='', hidden=false }: LoadingComponentProps) => {
	return (
			<>
				{ hidden ?
					<div className={styles.hidden}></div> :
					<div className={styles.dRing}></div>
				}
			</>
	)	
}