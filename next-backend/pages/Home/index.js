import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Side from '../../components/Side'
import Main from '../../components/Main'
import useTitle from '../../utils/hooks/useTitle'
function Home(props) {
    useTitle("MUI");
    const [model, setModel] = useState("full")
    return (
       <div>
           <Side model={model} setModel={setModel}></Side>
            <Main>

            </Main>
       </div>
    )
}

Home.propTypes = {

}

export default Home
