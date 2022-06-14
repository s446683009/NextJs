import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Home from '../index'
import Metro from '../../../utils/oidc/SecurityService'
function DashBoard(props) {

    useEffect(()=>{
        Metro.signIn();
        
    },[])
    return (
       <div>
           你好
       </div>
           
     
    )
}

DashBoard.propTypes = {

}

export default DashBoard

