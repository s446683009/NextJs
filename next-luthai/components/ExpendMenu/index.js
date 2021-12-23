import * as React from 'react';
import {Button,Typography,Popover} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from './index.module.css'
import PropTypes from 'prop-types'
 function BasicMenu({id,name,children,className}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
 
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log(1)
    setAnchorEl(null);
  };


  return (
    <div className={styled.expendArea}>
    <Typography
      aria-owns={open ?id : undefined}
      aria-haspopup="true"
      onMouseEnter={handleOpen}
    
      className={className}
    >
     {name}
     <i className='iconfont icon-webicon215'></i>
    </Typography>
    <div className={styled.expendAbs}>
      {children}
     </div> 
    {/* <Popover
      id={id}
      container={anchorEl?.parentElement}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      anchorReference={'anchorEl'}
      transformOrigin={{
        vertical: 'top',
  
      }}
      elevation={4}
      
      sx={{
        pointerEvents: 'none',
      }}
      hideBackdrop
      keepMounted
    >
     
     
     {children}
    </Popover> */}
  </div>
  );
}

BasicMenu.propTypes={
    id:PropTypes.number,
    name:PropTypes.string,
    // menulist:PropTypes.array,
    // menuItemClick:PropTypes.func,
    // menuItemClassName:PropTypes.string,
    className:PropTypes.string
}

export default BasicMenu;
