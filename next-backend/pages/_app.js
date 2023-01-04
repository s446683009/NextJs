import React from 'react';
import { appWithTranslation } from 'next-i18next'
import { StyledEngineProvider } from '@mui/material/styles';
import '../public/app.css'
import '../public/css/iconfont/iconfont.css'
import getTheme from '../utils/getTheme'
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';


const theme = getTheme();

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const getLayout = Component.getLayout || ((page) => page)

  


  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
   
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
        
          {getLayout(<Component {...pageProps} />)}
        
        </StyledEngineProvider>

      </ThemeProvider>
     
    </React.Fragment>

  )

}

export default appWithTranslation(MyApp)
