import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useTitle} from '../../utils/hooks'
import { useTranslation } from 'next-i18next';
import Header from '../../components/Header/index'
import {getMenu} from '../api/hello'
export default function Index(props) {

    useTitle("鲁泰");
    let {t,i18n}=useTranslation('common');
    
    return (
      <div>
        <Header translateFun={t} menu={props.menu}></Header>
        
      </div>
      
       
    )
}
export const getStaticProps = async ({ locale }) => {
  const langs=await serverSideTranslations(locale, ['login','common']);
  const data=await getMenu();
  console.log(data)
  return(
  {

    props: {
      ...langs,
      menu:data.data
    },
  })
}
  