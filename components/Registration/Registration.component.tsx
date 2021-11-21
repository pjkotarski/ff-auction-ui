import Link from 'next/Link';
import { Input } from '../shared/Input/Input.component';
import { Title } from '../shared/Title/Title.component';
import styles from './Registration.module.scss';

export const Registration = () => {
    return (
        <div className={styles.registrationBackground}>
            <Title/>
            <div className={styles.registrationContainer}>
                <h2 className={styles.formTitle}>Registration</h2>
                <div className={styles.formSection}>
                    <h4>name</h4>
                    <Input placeholder="first name" className={styles.formInput}/>
                    <Input placeholder="last name" className={styles.formInput}/>
                </div>
                <div className={styles.formSection}>
                    <h4>email</h4>
                    <Input placeholder="email" className={styles.formInput}/>
                </div>
                <div className={styles.formSection}>
                    <h4>league information</h4>
                    <Input placeholder="League ID" className={styles.formInput}/>
                    <Input placeholder="team name" className={styles.formInput}/>
                </div>
                <div className={styles.formSection}>
                    <h4>password info</h4>
                    <Input placeholder="password" className={styles.formInput} type="password"/>
                    <Input placeholder="confirm password" className={styles.formInput} type="password"/>
                </div>
            </div>
            <p className={styles.backToLogin}>Already have an account?<Link href='/login'><a className={styles.linkStyle}>Back to login</a></Link></p>
        </div>
    )
}