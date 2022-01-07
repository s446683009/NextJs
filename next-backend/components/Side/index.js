import React from 'react'
import PropTypes from 'prop-types'
import {Box,List,IconButton,Avatar} from '@mui/material'
import styled from './Side.module.css'
import Menu from '../Menu/index'
function Side({translate:t}) {


    return (
        <Box className={styled.sideWrap} sx={{
            color:'text.primay'
        }}>
            <div className={styled.sideOperate}>
                <Box sx={{fontSize:'2rem',color:'primary.main',p:1}}>
                     <i className='iconfont icon-comment'></i>
                </Box>
               
                <IconButton sx={{fontSize:'1.4rem'}} size="large">
                    <i className='iconfont icon-shousuo'></i>
                </IconButton>
         
            </div> 
            <div className={styled.sideUserWrap}>
                <div className={styled.userContent}>
                    <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'>

                    </Avatar>
                    <Box sx={{ ml: 2, color: 'text.primary' }}>
                        <p className={styled.sideUserName} >SoloTravelling</p>
                        <p className={styled.sideIntroduct}>s446683009</p>
                    </Box>


                </div>
               
            </div>
            <div>
                <Menu></Menu>
            </div> 
         
        </Box>
    )
}

Side.propTypes = {

}

export default Side

