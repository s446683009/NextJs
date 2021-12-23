
import { appWithTranslation } from 'next-i18next'
import '../public/app.css'
import '../public/css/iconfont/iconfont.css'
import getTheme from '../utils/getTheme'
import { ThemeProvider } from '@mui/material/styles';

const theme= getTheme();

const MyApp = ({ Component, pageProps }) =>{

   
    
    return(
      <ThemeProvider theme={theme}>
            <Component {...pageProps} />
      </ThemeProvider>
    )
    
}

export default appWithTranslation(MyApp)
