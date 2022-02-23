import React from 'react'
import {Page,List,ListItem,ListItemIcon,ListItemText, Typography,IconButton,Avatar} from '@mui/material'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'


import styled from '../index.module.css'

function UserMenu({t}) {
const parentRef=React.useRef(null);
const iconComponent=  <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'/>;
  return (
    
    <ExpendMenu id="user" sx={{p:0}} text={iconComponent} closeRef={parentRef}>
      <>
      <div className={styled.titleWrap}>
        <div>
         <Typography>{t("Notification")}</Typography>
         <Typography>您有两个未读消息</Typography>
        </div>
        <div>
          <IconButton>
              <i className='iconfont icon-tongzhi1'></i>
          </IconButton>  
        </div>
      </div>
    
     <List>

     </List>
     </>
  </ExpendMenu>
  )
}

UserMenu.propTypes = {}

export default UserMenu
