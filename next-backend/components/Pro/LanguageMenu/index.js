import React from 'react'
import PropTypes from 'prop-types'
import ExpendMenu from '../../ExpendMenu/ClickExpendMenu'
import {Page,MenuList,MenuItem,ListItemIcon,ListItemText} from '@mui/material'
import Image from 'next/image'
import {getLanguage,getLanuages} from '../../../utils/languages'
import styled from '../index.module.css'
const languages=getLanuages();
function LanguageMenu({lng='zh'}) {
 const [language,setLanguage]=React.useState(lng);

 const langObj=getLanguage(language);
 const switchLanguage=(lng)=>{
   setLanguage(lng);

  }
 const iconComponent= <Image  src={langObj?.icon} width={25} height={25} alt='language'/>;
  return (
    <ExpendMenu id="languge" text={iconComponent} >
        <MenuList>
          {
            languages.map(t=>(
              <MenuItem key={t.key} onClick={switchLanguage.bind(null,t.key)}>
              <ListItemIcon>
                <Image  src={t.icon} width={25} height={25}  alt='language'/>
              </ListItemIcon>
              <ListItemText>{t.name}</ListItemText>
            </MenuItem>
            ))
          }
          </MenuList>
 
    </ExpendMenu>
  )
}

LanguageMenu.propTypes = {}

export default LanguageMenu
