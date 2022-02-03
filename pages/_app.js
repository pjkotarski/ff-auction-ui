import '../shared/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthAPI } from './../shared/api/auth.api';
import { AuthContext } from '../shared/hooks/contexts';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const [authObject, setAuthObject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mounted, isMounted] = useState(false);
  
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setLoading(true);
    isMounted(true);

    const fetchStartData = async() => {
      try {
        await AuthAPI.authenticateToken('/api/auth/resolve-token');
        setLoading(false);
      } catch(e) {
        if (!e.response || e.response.status !== 500) {
        } 
      }
    }
    fetchStartData();
  }, []);

  return (
    <AuthContext.Provider value={{authObject, setAuthObject, loading, setLoading}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></Script>
      <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></Script>
      <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></Script>
      { mounted &&
        <Component {...pageProps} />
      }
    </AuthContext.Provider>
  )
}

export default MyApp
