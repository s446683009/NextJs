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
      <div className={styled.notificationWrap}>
      <div className={styled.titleWrap}>
        <Typography className={styled.title} variant='h2' sx={{py:1}}>{t("contacts")}（20）</Typography>
      </div>
    
     <List sx={{maxHeight:500,minHeight:200}}>
          {
           
          }
     </List>
     </div>
  </ExpendMenu>
  )
}

GroupMenu.propTypes = {}

export default GroupMenu
