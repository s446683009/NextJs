import React from 'react'
import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import Header from '../Header'
function Main({sx,t,model}) {
    return (
        <>
        <Header model={model} t={t}></Header>
        <Box sx={sx}>
            
        </Box>
        </>
      
    )
}

Main.propTypes = {

}

export default Main

