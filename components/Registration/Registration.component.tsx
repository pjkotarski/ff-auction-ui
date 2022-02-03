import Link from 'next/link';
import { Input } from '../shared/Input/Input.component';
import { Title } from '../shared/Title/Title.component';
import styles from './Registration.module.scss';

export const Registration = () => {
    return (
        <div className={styles.registrationBackground}>
            <div className={styles.registrationContainer}>
                <Title className={styles.appTitle}/>
                <h3 className={styles.formTitle}>Registration</h3>
                <div className={styles.formSection}>
                    <h4 className={styles.sectionTitle}>name</h4>
                    <Input placeholder="first name" className={styles.formInput}/>
                    <Input placeholder="last name" className={styles.formInput}/>
                </div>
                <div className={styles.formSection}>
                    <h4 className={styles.sectionTitle}>email</h4>
                    <Input placeholder="email" className={styles.formInput}/>
                </div>
                <div className={styles.formSection}>
                    <h4 className={styles.sectionTitle}>league information</h4>
                    <Input placeholder="League ID" className={styles.formInput}/>
                    <Input placeholder="team name" className={styles.formInput}/>
                </div>
                <div className={styles.formSection}>
                    <h4 className={styles.sectionTitle}>password info</h4>
                    <Input placeholder="password" className={styles.formInput} type="password"/>
                    <Input placeholder="confirm password" className={styles.formInput} type="password"/>
                </div>
                <button className={styles.sharedButton}>Reigster</button>
                <p className={styles.backToLogin}>Already have an account?<Link href='/login'><a className={styles.linkStyle}>Back to login</a></Link></p>
            </div>
        </div>
    )
}