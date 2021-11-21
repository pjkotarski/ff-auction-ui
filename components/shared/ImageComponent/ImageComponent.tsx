import styles from './ImageComponent.module.scss';

export interface ImageComponentProps {
    src: string;
}

export const ImageComponent = ({ src }: ImageComponentProps) => {
    return (
        <div className={styles.imgContainer}>
            <img className={`rounded-circle img-response ${styles.slideImage}`} src={src}/> 
        </div>
    )
}
