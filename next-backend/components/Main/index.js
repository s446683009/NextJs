import React from 'react'
import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import Header from '../Header'
function Main({sx,t,model,children}) {
    return (
        <>
       
        <Box  sx={sx}>
            {children}
        </Box>
        </>
      
    )
}

Main.propTypes = {

}

export default Main

