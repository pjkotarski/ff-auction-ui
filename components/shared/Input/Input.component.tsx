import styles from './Input.module.scss';

interface InputProps {
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
}

export const Input = ({ label='', type='text', className='', placeholder='' }: InputProps) => {
    
    return (
        <div className={`${styles.inputContainer} ${className}`}>
            { label &&<p className={styles.label}>{label}</p>}
            <input className={styles.input} type={type} placeholder={placeholder}/>
        </div>
    )
}