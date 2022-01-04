
import { appWithTranslation } from 'next-i18next'
import '../public/app.css'
import '../public/css/iconfont/iconfont.css'
import getTheme from '../utils/getTheme'
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

const theme= getTheme();

const MyApp = ({ Component, pageProps }) =>{

   
    
    return(
      <>
      <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
            <Component {...pageProps} />
      </ThemeProvider>
      </>
      
    )
    
}

export default appWithTranslation(MyApp)
