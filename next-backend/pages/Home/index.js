import React from 'react'
import PropTypes from 'prop-types'
import Side from '../../components/Side'
import {useTitle} from '../../utils/hooks/index'
function index(props) {
    useTitle("MUI");

    return (
       <main>
           <Side></Side>
       </main>
    )
}

index.propTypes = {

}

export default index

