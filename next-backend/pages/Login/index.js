import React,{useRef} from 'react'
import PropTypes from 'prop-types'
import {Box} from '@mui/material'

import styled from './Login.module.css'
import {bacArr} from '../../utils/constant'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LoginForm from '../../components/LoginForm'
function Login({backArr=bacArr}) {

  var length=backArr.length;
  const randomRef=useRef(Math.floor(Math.random()*length));

  return (
    <Box className={styled.loginBac} >
      <Box className={styled.loginWrap}>
      
        <Box className={styled.loginArea}>
             <LoginForm />
        </Box>
     
      
        {/* <Box className={styled.loginLeft}></Box> */}
      </Box>
      
    </Box>
  )
}

Login.propTypes = {
  backArr:PropTypes.array

}

export default Login

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


