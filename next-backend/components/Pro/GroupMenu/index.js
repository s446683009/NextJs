import React from 'react'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'
import {Page,List,ListItem,ListItemIcon,ListItemText, Typography,IconButton} from '@mui/material'

import styled from '../index.module.css'

function GroupMenu({t}) {
const parentRef=React.useRef(null);
const iconComponent= <i className='iconfont icon-qunzu'></i>;
  return (
    
    <ExpendMenu id="group" text={iconComponent} closeRef={parentRef}>
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

GroupMenu.propTypes = {}

export default GroupMenu
