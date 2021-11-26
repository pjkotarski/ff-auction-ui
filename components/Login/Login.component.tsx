import Link from 'next/Link';
import { Input } from '../shared/Input/Input.component';
import { Title } from '../shared/Title/Title.component';
import styles from './Login.module.scss';

export const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.mediaContent}>
            </div>
            <div className={styles.loginFormContainer}>
                <Title/>
                <form className={styles.loginForm}>
                    <Input label="username" className={styles.loginInput}/>
                    <Input label="password" className={styles.loginInput} type='password'/>
                </form>
                <button className={styles.loginButton}>Login</button>
                <div className={styles.loginText}>
                    <p>Don't have an account?</p><Link href="/registration"><a className={styles.link}>Sign up here</a></Link>
                </div>
            </div>
        </div>
    )
}