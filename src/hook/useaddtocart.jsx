import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../provider/Authprovider';
import axiosinstance from './useAxios';


const useaddtocart = () => {
  
      const { user, logout } = useContext(Authcontext)
        const {data:carts=[],error,isError,isLoading,refetch}=useQuery({
    queryKey:['Addtocart',user?.email],
    queryFn:async()=>{
      const res=await axiosinstance.get(`/addtocart?email=${user?.email}`)
      return res.data
    }
  }) 

 
  return [carts,isError,isLoading,refetch]
  

};

export default useaddtocart;