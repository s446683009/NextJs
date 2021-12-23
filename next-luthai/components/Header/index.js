import React from 'react'
import PropTypes from 'prop-types'
import styled from './header.module.css'
import { Box, Skeleton } from '@mui/material'
import ExpendMenu from '../ExpendMenu/index'

import { getMenu } from '../../pages/api/hello'

function Header({ translateFun: t, menu }) {


  return (
    <div className={styled.header}>
      <div className={styled.headerWrap}>
        {
          (menu.Left || []).map(t => {
            if (t.HasChildren) {
              return (
                <ExpendMenu key={t.MenuId} id={t.MenuId} name={t.MenuName} className={styled.headerItem}>
                  <div className={styled.poverWrap}>
                    {t.subMenus.map(t => <Box key={t.MenuId} sx={{ "&:hover": { backgroundColor: 'primary.hover', color: 'text.primary' } }} className={styled.menuLi} key={t.MenuId}>{t.MenuName}</Box>)}
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
        <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
        </div>
        <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
        </div>
        <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
        </div>
        <div>
          <Skeleton variant="circular" width={36} height={36}></Skeleton>
        </div>
        <div>
          <Skeleton variant='rectangular' width={80} height={36}></Skeleton>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  isLogin: PropTypes.bool,
  translateFun: PropTypes.func,
  menu: PropTypes.object
}

export default Header


