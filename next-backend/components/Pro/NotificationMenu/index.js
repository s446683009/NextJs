import React from 'react'
import {Page,List,ListItem,ListItemIcon,ListItemText, Typography,IconButton,Box} from '@mui/material'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'

import Image from 'next/image'
import styled from '../index.module.css'

function NotificationMenu({t}) {
const parentRef=React.useRef(null);
const iconComponent= <i className='iconfont icon-tongzhi1'></i>;
  return (
    
    <ExpendMenu id="notification" text={iconComponent} closeRef={parentRef}>
      <div>
      <Box className={styled.titleWrap}>
        <div>
         <Typography>{t("Notification")}</Typography>
         <Typography>您有两个未读消息</Typography>
        </div>
        <div>
          <IconButton>
              <i className='iconfont icon-tongzhi1'></i>
          </IconButton>  
        </div>
      </Box>
    
     <List>

     </List>
     </div> 
  </ExpendMenu>
  )
}

NotificationMenu.propTypes = {}

export default NotificationMenu
