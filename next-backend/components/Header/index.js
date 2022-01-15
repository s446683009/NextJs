import React from 'react'
import PropTypes from 'prop-types'
import { Box,IconButton } from '@mui/material'
import styled from './Header.module.css'

function Header(props) {
    return (
        <Box className={styled.headerWrap}>
              <IconButton className={sideIconClass} sx={{ fontSize: '1rem' }} size="large" onClick={switchModel}>
                        <i className='iconfont icon-icon-sousuo'></i>
               </IconButton>
            <div className={styled.Box}>


            </div> 


        </Box>

    )
}

Header.propTypes = {

}

export default Header

