import React from 'react'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'
import {Page,List,ListItem,ListItemText, Typography, ListItemAvatar,Avatar} from '@mui/material'

import styled from '../index.module.css'

function GroupMenu({t}) {
const parentRef=React.useRef(null);
const iconComponent= <i className='iconfont icon-qunzu'></i>;
  return (
    
    <ExpendMenu id="group" text={iconComponent} closeRef={parentRef}>
      <div className={styled.notificationWrap}>
      <div className={styled.titleWrap}>
        <Typography className={styled.title} variant='h2' sx={{py:0.8,pl:1}}>{t("contacts")}（20）</Typography>
      </div>
    
     <List sx={{maxHeight:500,minHeight:200,overflowY:'auto'}}>
          {
            Array.from("12345678").map(t=>(
                <ListItem key={t} button>
                    <ListItemAvatar>
                    <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4' />
                    </ListItemAvatar>
                    <ListItemText primary="刘大仙" secondary="446683009@qq.com">

                    </ListItemText>

                </ListItem>

            ))
          }
     </List>
     </div>
  </ExpendMenu>
  )
}

GroupMenu.propTypes = {}

export default GroupMenu