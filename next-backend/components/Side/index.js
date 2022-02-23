import React from 'react'
import PropTypes from 'prop-types'
import {Box,List,IconButton,Avatar} from '@mui/material'
import {useState} from 'react'

import styled from './Side.module.css'
import Menu from '../Menu/index'


function Side({translate:t,model="full",setModel}) {
   const isSimple=model=='simple';
   const [simple, setSimple] = useState(isSimple);
 
   const sideIconClass=isSimple?styled.sideExpend:styled.sideZoom;

   const handSimpleHover=(flag)=>{
       if(isSimple){
         setSimple(flag);
       }
   };
   const switchModel=()=>{
        const model=isSimple?'full':'simple';
        setModel(model);
        setSimple(model=='simple');
   }


    return (
        <Box className={`${styled.sideWrap} ${simple?styled.simapleSideWrap:''}`} 
        
        onMouseEnter={()=>{handSimpleHover(false)}}
        onMouseLeave={()=>{handSimpleHover(true)}}
        sx={{
            color:'text.primay'
        }} 
    
        >
            <div className={styled.sideOperate}>
                <Box sx={{fontSize:'2rem',color:'primary.scr',p:1}}>
                     <i className='iconfont icon-comment'></i>
                </Box>
                {
                    simple?null:
                    <IconButton className={sideIconClass} sx={{ fontSize: '1rem' }} size="large" onClick={switchModel}>
                        <i className='iconfont icon-shousuojiantou'></i>
                    </IconButton>
                }
               
         
            </div> 
            <div className={styled.sideUserWrap}>
                <div className={styled.userContent}>
                    <Avatar src='https://avatars.githubusercontent.com/u/37138998?s=40&v=4'>

                    </Avatar>
                    <Box className={styled.userInfo} sx={{ ml: 2, color: 'text.primary' }}>
                        <p className={styled.sideUserName} >SoloTravelling</p>
                        <p className={styled.sideIntroduct}>s446683009</p>
                    </Box>


                </div>
               
            </div>
            <div>
                <Menu simapleMenu={simple}></Menu>
            </div> 
         
        </Box>
    )
}

Side.propTypes = {
    model:PropTypes.oneOf(['simple', 'full']),
}

export default Side

