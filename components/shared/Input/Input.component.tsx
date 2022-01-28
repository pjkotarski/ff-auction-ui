import { useEffect, useState } from 'react';
import { AlertComponent } from '../../AlertComponent/Alert.component';
import styles from './Input.module.scss';

interface InputProps {
    value?: string;
    onChange?: (val: string) => void;
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
    register?: Function;
    validators?: Object;
    errors?: Object;
    name?: string;
    errorMessage?: string;
}

export const Input = ({ value, 
        onChange = (_) => {}, 
        label='', 
        type='text', 
        className='', 
        placeholder='', 
        register = (_) => {}, 
        validators={},
        errors={},
        name='',
        errorMessage='Please add a valid entry'
    }: InputProps) => {

    const [error, setError] = useState(null);

    useEffect(() => {
        setError(errors[name]);
    }, [errors])

    return (
        <div className={`${styles.inputContainer} ${className}`}>
            { label &&<p className={styles.label}>{label}</p>}
            <input {...register(name, validators)}
                name={name}
                value={value} 
                onChange={({ target: { value }}) => onChange(value) } 
                className={styles.input} 
                type={type} 
                placeholder={placeholder}/>
            { !!error && <AlertComponent className={styles.alert} message={errorMessage} error={true}/> }
        </div> 
    )
}