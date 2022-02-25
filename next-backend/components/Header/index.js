import React from 'react'
import { Box,IconButton, Typography,Avatar } from '@mui/material'
import PropTypes from 'prop-types'
import styled from './Header.module.css'
import LanguageMenu from '../Pro/LanguageMenu'
import NotificationMenu from '../Pro/NotificationMenu'
import GroupMenu from '../Pro/GroupMenu'
import UserMenu from '../Pro/UserMenu'
function Header({t,model}) {

    const headerWrap=model=="simple"?`${styled.headerWrap} ${styled.simpleWrap}`:styled.headerWrap;
    return (
        <Box className={headerWrap}>
              <IconButton  sx={{ fontSize: '1rem' }} size="large">
                        <i className='iconfont icon-sousuo'></i>
               </IconButton>
            <div className={styled.Box}>
                <Box sx={{ px: 0.5 }}>
                    <LanguageMenu  />
                </Box>
                <Box sx={{ px: 0.5 }}>
                    <NotificationMenu  t={t} />
                </Box>
                <Box sx={{ px: 0.5 }}>
                    <GroupMenu t={t} />
                </Box>
                <Box sx={{ px: 0.5 }}>
                   <UserMenu t={t}></UserMenu>
                </Box>
               


            </div> 


        </Box>

    )
}

Header.propTypes = {

}

export default Header

