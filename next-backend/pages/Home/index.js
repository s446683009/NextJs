import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Side from '../../components/Side'
import Main from '../../components/Main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTitle  from '../../utils/hooks/useTitle'
import { useTranslation } from 'next-i18next';
function Home(props) {
    useTitle("MUI");
    const { t, i18n } = useTranslation('common');
    const [model, setModel] = useState("full")


    return (
       <div>
           <Side model={model} setModel={setModel}></Side>
            <Main t={t}>

            </Main>
       </div>
    )
}

Home.propTypes = {

}
export default Home;

export const getStaticProps = async ({ locale }) => {

    const langs = await serverSideTranslations(locale, ['login', 'common']);
    //const data = await getMenu(locale);
    return (
      {
  
        props: {
          ...langs,
          //menu: data.data
        },
      })
  }
  
