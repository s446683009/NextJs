import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Metro from '../../../utils/oidc/SecurityService'
import Home from '../_layout'
function DashBoard(props) {

    // useEffect(()=>{
    //     Metro.signIn();
        
    // },[])
    return (
       <Home>
           快乐你我存在 
       </Home>
           
     
    )
}

DashBoard.propTypes = {

}

export default DashBoard

