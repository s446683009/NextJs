import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import  Layout from '../index'
import Main from '../../../components/Main'
import Metro from '../../../utils/oidc/SecurityService'
import { Box } from '@mui/system'

function DashBoard(props) {

    // useEffect(()=>{
    //     Metro.signIn();
        
    // },[])

    return (
        <Box>
            <Main>
            </Main>
        </Box>
        
           
     
    )
}
DashBoard.getLayout=function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

DashBoard.propTypes = {

}

export default DashBoard

