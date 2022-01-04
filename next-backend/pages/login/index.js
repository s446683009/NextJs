import {useRef} from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTitle } from '../../utils/hooks'
import { useTranslation } from 'next-i18next';
import Header from '../../components/Header/index'
import { getMenu } from '../api/hello'
import { Box, TextField, FormControlLabel, Checkbox, Button ,Grid,Link, useFormControl} from '@mui/material'
import Footer from '../../components/Footer'
import styled from './login.module.css'
export default function Index(props) {
   const  userNameRef= useRef();
   const pswRef = useRef();
  const handlogin=()=>{
    console.log(userNameRef.current);
    console.log(pswRef.current);
    return;
  }

  useTitle("鲁泰");
  const { t, i18n } = useTranslation('common');
  const control= useFormControl();
  return (
    <div>
      <Header translateFun={t} menu={props.menu}></Header>
      <Box className={styled.loginBac}>
        <Box className={styled.loginFormWrap}>
          <Box color="text.primary" className={styled.loginTitle}>{t("login_title")}</Box>
          <Box  component="form" noValidate sx={{ mt: 1 }}  onSubmit={handlogin}>
            <div className={styled.loginItem}>
              <TextField
                margin="normal"
                inputRef={userNameRef}
                required
                fullWidth
                id="userName"
                label={t("login_form_title_username")}
                name="userName"
             
                autoFocus
              />
            </div>
            <div className={styled.loginItem}>
              <TextField
                required
                fullWidth
                inputRef={pswRef}
                margin="normal"
                name="password"
                label={t("login_name_passwd")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </div>
            <div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("login_remberPsw")}
             
            />
            </div>
            <div >
              <Button
                type="submit"
               
                fullWidth
                variant="contained"
                sx={{mt:2, pt: 1.5, pb: 1.5 }}
              >
               {t("login_button")}
              </Button>
            </div> 
            <div >
            <Grid container sx={{py:1}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                 {t("login_forgetPass")}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {t("login_register_link")}
                </Link>
              </Grid>
            </Grid>
            </div>
          </Box>
        </Box>
      </Box>
      {/* <div className={styled.footWrap}>
        <Footer trasnalte={t}></Footer>
      </div> */}
    
    </div>


  )
}
export const getStaticProps = async ({ locale }) => {

  const langs = await serverSideTranslations(locale, ['login', 'common']);
  const data = await getMenu(locale);
  return (
    {

      props: {
        ...langs,
        menu: data.data
      },
    })
}
