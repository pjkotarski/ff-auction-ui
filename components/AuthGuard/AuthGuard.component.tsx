import { Router, useRouter } from 'next/dist/client/router';
import { ReactNode, useContext, useEffect } from 'react'
import { AuthContext } from '../../shared/hooks/contexts'


interface AuthGuardProps {
    children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {

    const { authUser, setAuthUser, loading, setLoading  } = useContext(AuthContext);
    const router = useRouter();
    /*
    useEffect(() => {
        if (!loading) {
            if (!authUser) {
                router.push('/login');
            }
        }

    }, [authUser, loading])*/

    if (loading) { 
        return <h3>Loading</h3>
    } else {
        return <>{children}</>
    }
}
