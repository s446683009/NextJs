// import Link from 'next/link'
// import { useRouter } from 'next/router'

// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useEffect} from 'react'
import Metro from '../utils/oidc/SecurityService'
const Homepage = (props) => {

  // const { t } = useTranslation('common')

  // return (
  //   <div></div> 
  // )


    useEffect(()=>{
        Metro.signIn();
        
    },[])
    return (
       <div>
           你好
       </div>
           
     
    )

}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'footer']),
//   },
// })

export default Homepage
