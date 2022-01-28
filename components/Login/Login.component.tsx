import { Title } from '../shared/Title/Title.component';
import GoogleLogin from 'react-google-login';
import styles from './Login.module.scss';
import { GOOGLE_CLIENT_ID } from '../../shared/utils/env.config';
import { AuthAPI } from '../../shared/api/auth.api';
import GoogleButton from 'react-google-button';
import { useContext } from 'react';
import { AuthContext } from '../../shared/hooks/contexts';
import { useRouter } from 'next/router';
import { handleGoogleLogin } from '../../shared/utils/handle-login';
export const Login = () => {

    const router = useRouter();
    const { setAuthUser } = useContext(AuthContext);    

    const handleLoginFailure = () => {
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.mediaContent}>
            </div>
            <div className={styles.loginFormContainer}>
                <Title className={styles.title}/>                
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    onSuccess={data => handleGoogleLogin(data, router, setAuthUser)}
                    onFailure={handleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                    )}
                />

            </div>
        </div>
    )
}