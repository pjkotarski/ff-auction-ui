import React from 'react';
import { ButtonTypes } from '../../../shared/enums/enums';
import styles from './Button.module.scss';

interface InputProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    type?: ButtonTypes;
    primaryColor?: boolean;
};

export const Button = ({ onClick, className='', children, disabled = false, type=ButtonTypes.button, primaryColor = true }: InputProps) => {

    return (
        <div className={`${className}`}>
            <button className={`${styles.button} ${primaryColor ? styles.primary : styles.secondary}`} onClick={onClick} disabled={disabled} >{children}</button>
        </div>
    )
}