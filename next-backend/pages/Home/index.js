import React,{useState} from 'react'
import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import Side from '../../components/Side'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTitle  from '../../utils/hooks/useTitle'
import { useTranslation } from 'next-i18next';
import Header from '../../components/Header';


function Home({children}) {
    useTitle("MUI");
    const { t, i18n } = useTranslation('common');
    const [model, setModel] = useState("full")
    
    return (
      <>

        <Header model={model} t={t} setModel={setModel}></Header>
        <Box className='wrap'>
    
          <Side model={model} setModel={setModel}></Side>
        
          <Box className="main">{children}</Box> 
        </Box>

      </>
       
    )
}

Home.propTypes = {

}
export default Home;

export const getStaticProps = async ({ locale }) => {
    const langs = await serverSideTranslations(locale, ['login', 'common']);
    //const data = await getMenu(locale);
    return (
      {
  
        props: {
          ...langs,
          //menu: data.data
        },
      })
  }
  
