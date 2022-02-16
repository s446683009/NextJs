import React from 'react'
import PropTypes from 'prop-types'
import { Box,IconButton, Typography } from '@mui/material'
import styled from './Header.module.css'
import LanguageMenu from '../Pro/LanguageMenu'
function Header(props) {
    return (
        <Box className={styled.headerWrap}>
              <IconButton  sx={{ fontSize: '1rem' }} size="large">
                        <i className='iconfont icon-sousuo'></i>
               </IconButton>
            <div className={styled.Box}>
             <LanguageMenu>

             </LanguageMenu>

            </div> 


        </Box>

    )
}

Header.propTypes = {

}

export default Header

