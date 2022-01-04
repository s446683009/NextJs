import React from 'react'
import PropTypes from 'prop-types'
import styled from './header.module.css'
import { Box, Skeleton } from '@mui/material'
import ExpendMenu from '../ExpendMenu/index'

import { getMenu } from '../../pages/api/hello'

function Header({ translateFun: t, menu }) {

 
  return (
    <Box backgroundColor="background.default" color="text.primary" className={styled.header}>
      <div className={styled.headerWrap}>
        {
          (menu.Left || []).map(t => {
            if (t.HasChildren) {
              return (
                <ExpendMenu key={t.MenuId} id={t.MenuId} name={t.MenuName} className={styled.headerItem}>
                  <div className={styled.poverWrap}>
                    {t.subMenus.map(t => <Box key={t.MenuId} sx={{ "&:hover": { backgroundColor: 'primary.hover', color: 'text.primary' } }} className={styled.menuLi}>{t.MenuName}</Box>)}
                  </div>
                </ExpendMenu>
              )
            } else {
              return (
                <Box key={t.MenuId} sx={{ color: 'text.primary' }} className={styled.headerItem}>{t.MenuName}</Box>

              )
            }

          })


        }

      </div>
      <div className={styled.headerWrap}>
       {
             (menu.Right || []).map(t => {
              if (t.HasChildren) {
                return (
                  <ExpendMenu key={t.MenuId} id={t.MenuId} type={t.ShowTypeStr} name={t.MenuName} className={styled.headerItem}>
                    <div className={styled.poverWrap}>
                      {t.subMenus.map(t => <Box key={t.MenuId} sx={{ "&:hover": { backgroundColor: 'primary.hover', color: 'text.primary' } }} className={styled.menuLi}>{t.MenuName}</Box>)}
                    </div>
                  </ExpendMenu>
                )
              } else {
                return (
                  <Box key={t.MenuId}  sx={{ color: 'text.primary' }} className={styled.headerItem}>{
                    t.ShowTypeStr=='Icon'?<i className={`iconfont ${styled.headerIcon} ${t.MenuName}`} ></i>:t.MenuName
                    }</Box>
  
                )
              }
  
            })
       }
      </div>
    </Box>
  )
}

Header.propTypes = {
  isLogin: PropTypes.bool,
  translateFun: PropTypes.func,
  menu: PropTypes.object
}

export default Header


