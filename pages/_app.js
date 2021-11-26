import '../shared/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  )
}

export default MyApp
