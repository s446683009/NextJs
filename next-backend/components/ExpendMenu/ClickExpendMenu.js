import React from 'react'
import PropTypes from 'prop-types'
import Popover from '@mui/material/Popover';
import {Button,IconButton} from '@mui/material';


function ClickExpendMenu({children,sx,className,text,type='text',closeRef}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  closeRef.current=handleClose;
  //ref.current=handleClose;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const ApplyNode=type=='icon'?Button:IconButton;
  return (
    <div>
      {
      <ApplyNode sx={sx} className={className} aria-describedby={id}  onClick={handleClick}>
        {text}
      </ApplyNode>
       
      }
      <Popover
        id={id}
        open={open}
        
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </div>
  );
}

ClickExpendMenu.propTypes = {
    children:PropTypes.oneOfType([PropTypes.element.isRequired,PropTypes.string]),
    sx:PropTypes.object,
    className:PropTypes.string,
    text:PropTypes.element,
    closeRef:PropTypes.object
}

export default ClickExpendMenu

