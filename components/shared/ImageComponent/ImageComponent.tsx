import styles from './ImageComponent.module.scss';

export interface ImageComponentProps {
    src: string;
    className?: string;
}

export const ImageComponent = ({ src, className = '' }: ImageComponentProps) => {
    return (
        <div className={`${styles.imgContainer} ${className}`}>
            <img className={`rounded-circle img-response ${styles.slideImage}`} src={src} alt='player image'/> 
        </div>
    )
}
