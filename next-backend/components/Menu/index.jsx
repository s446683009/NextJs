import React, { useState, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Box,List,ListItem,ListItemIcon,ListItemText,Collapse} from '@mui/material';
import styled from './Menu.module.css';


import menus from '../../utils/getMenu'

const slectMenuSX={
    color:'primary.main',
    backgroundColor:'primary.hover',
  

};

const mapList=(menu,options,leavel=1)=>{
    const {openKey,selectMenuId,onMenuClick,onMenuExpend}=options;
    
   
    return menu.map(function(t){
        const bl=openKey.includes(t.menuId);
        const icon=leavel>1?'icon-dian1':'icon-yonghuming';
        const itemClass=leavel>1?styled.subMenuItem:styled.menuItem;
        const selectClass=t.menuId==selectMenuId?styled.selectMenu:'';
        const ssx={...(t.menuId==selectMenuId?slectMenuSX:{}),pl:leavel}
       
        return (
            <div key={t.menuId}>
                <ListItem className={`${itemClass} ${selectClass}`}  sx={ssx} button onClick={onMenuClick.bind(null,t.menuId,t.hasChildren)}>

                    <ListItemIcon className={styled.menuIcon} sx={{mr:1}}>
                    <i className={`iconfont ${icon} ${styled.iconfont}`} />
                    </ListItemIcon>

                    <ListItemText primary={t.menuName} />
                    {t.hasChildren?
                        bl?<i className='iconfont icon-zhankai'  />:<i className='iconfont icon-zhankai'  />
                    :null}
                </ListItem>
                {
                    t.hasChildren?
                        <Collapse  in={bl} timeout="auto" unmountOnExit >
                          {mapList(t.children,options,leavel+1)}
                        </Collapse>
                    : null
                }
            </div>
        )

    })

}

function CustomMenu() {
 
    const [selectMenuId, setselectMenuId] = useState('')
    const [expendMenu, setExpendMenu] = useState([])
 
    const handleOpen=useCallback((menuKey,e)=>{
            setExpendMenu((menu)=>{
            let index=menu.findIndex(t=>t===menuKey);

              if(index<0){
                return [...menu,menuKey];
              }
              
               menu.splice(index,1);
               //不能返回原对象，比较指针会认为没有改变
               return [...menu];
            });

         
        
    },[])
    const handClick=useCallback(
        (menuId,hasChildren,e) => {
            if(hasChildren){
                handleOpen(menuId,e);
            }
            setselectMenuId(menuId)
        },
        []
    )

    return (
        <Box    className={styled.menuWrap}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {
                    mapList(menus,{
                        openKey:expendMenu,
                        selectMenuId:selectMenuId,
                        selectMenuClass:styled.selectMenu,
                        onMenuExpend:handleOpen,
                        onMenuClick:handClick
                    })
                }
            </List>
        </Box>
    )
}




CustomMenu.propTypes = {

}






export default React.memo(CustomMenu)

