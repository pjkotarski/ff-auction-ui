import '../shared/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthAPI } from './../shared/api/auth.api';
import { AuthContext } from '../shared/hooks/contexts';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const router = useRouter();
  const [authObject, setAuthObject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async() => {
    import("bootstrap/dist/js/bootstrap");
    setLoading(true);

    try {
      const data = await AuthAPI.authenticateToken('/api/auth/resolve-token');
      setLoading(false);
   
    } catch(e) {
      if (!e.response || e.response.status !== 500) {
      }
        
    }    
  }, []);

  return (
    <AuthContext.Provider value={{authObject, setAuthObject, loading, setLoading}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
      </Head>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
