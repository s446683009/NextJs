import {useEffect} from 'react'


export const useTitle=(title)=>{
    if(typeof(title)!=="string"){
        throw "title type must be string";
    }
    
    useEffect(()=>{
        document.title=title;
    },[title])
}