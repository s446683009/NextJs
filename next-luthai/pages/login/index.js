import React,{useState,useEffect} from 'react'
import {useTitle} from '../../utils/hooks'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const myLoader = ({ src, width, quality }) => {
    return `http://120.55.117.95:3780/${src}?w=${width}&q=${quality || 75}`
  }
export default function Index(props) {
    console.log(props)
    //useTitle("login");

    let {t}=useTranslation('login');

    return (
        <div>
            <h1>{t("welcome")}</h1>
            {/* <Image width='600' height='400' src="/images/login/bac.png"></Image>
            <Image width='600' height='400' src="/images/login/bac.png"></Image>
            <Image width='600' height='400' src="/images/login/bac.png"></Image>
            <Image width='600' height='400' src="/images/login/bac.png"></Image>
            <Image width='600' height='400' src="/images/login/bac.png"></Image>
            <Image  loader={myLoader} src={'/image/carousel/ad2_xs.jpg'} width='500' height='400'></Image> */}
            
        </div>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['login']),
    },
  })
  