import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { setLogLevel } from 'firebase/app';
export const Authcontext=createContext(null)
const Authprovider = ({children}) => {

    const [user,setuser]=useState(null)
    const[loading,setloading]=useState(true)
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser);

            setuser(currentuser)
            setloading(true)  
        })

        return()=>unsubscribe()
    },[])
    const logout=()=>{
        return signOut(auth)
    }
    const authinfo={user,loading,logout}
    return (



       <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    );
};

export default Authprovider;