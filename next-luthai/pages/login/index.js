import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useTitle} from '../../utils/hooks'
import { useTranslation } from 'next-i18next';
import Header from '../../components/Header/index'
import {getMenu} from '../api/hello'
import {Box} from '@mui/material'
import styled from './login.module.css'
export default function Index(props) {

    useTitle("鲁泰");
    let {t,i18n}=useTranslation('common');
    
    return (
      <div>
        <Header translateFun={t} menu={props.menu}></Header>
        <Box className={styled.loginBac}>
           <Box >

           </Box>
        </Box>
      </div>
      
       
    )
}
export const getStaticProps = async ({ locale }) => {
  
  const langs=await serverSideTranslations(locale, ['login','common']);
  const data=await getMenu(locale);
  return(
  {

    props: {
      ...langs,
      menu:data.data
    },
  })
}
  