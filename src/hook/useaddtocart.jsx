import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../provider/Authprovider';
import axiosinstance from './useAxios';


const useaddtocart = () => {
  
      const { user, logout } = useContext(Authcontext)
        const {data=[],error,isError,isLoading}=useQuery({
    queryKey:['Addtocart',user?.email],
    queryFn:async()=>{
      const res=await axiosinstance.get(`/addtocart?email=${user?.email}`)
      return res.data
    }
  }) 
 
  return [data,isError,isLoading]
  

};

export default useaddtocart;