import React,{ useEffect } from 'react'
import { useStore } from '../../../../zustand';
import { useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from 'configs/AppConfig';

const Logout = () => {
    const history = useHistory();

    const clearToken= useStore((store)=>{
        return store.clearToken
         })
    
         const setAuth = useStore((store)=>{
          return store.setAuth
           })
    

const Signout = ()=>{
    
    clearToken()
    setAuth(false)
    localStorage.setItem("auth",  false );
    localStorage.setItem("token",  null );
    localStorage.setItem("ip",  null );
    history.push({
        pathname: `${AUTH_PREFIX_PATH}/login`,      
      });
}

    useEffect(() => {
        Signout()    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

  return (
    <div></div>
  )
}

export default Logout