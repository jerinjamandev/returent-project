import React, { useEffect } from 'react';
import { LuCoffee } from "react-icons/lu";
import { MdOutlineRiceBowl } from "react-icons/md";
import { RiDrinksLine } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles







const Browesmenu = () => {
    useEffect(()=>{
        AOS.init();

    },[])
    return (
        <div className='mt-24'>
            <h1 className='text-center text-3xl font-bold'>Browse Our Menu</h1>


            <div className='flex items-center justify-center gap-8 p-16 '>
                <div  data-aos-duration="2000" data-aos="flip-left" className='border-2 border-gray rounded-2xl text-center p-6'>
                    <div className='flex justify-center bg-gray-200 rounded-full w-[50px] px-3 py-2 mx-auto'>
                        <LuCoffee fontSize={40} />
                    </div>
                    <h2 className='font-bold text-3xl my-2'>Breakfast</h2>
                    <h3>In the new era of technology we <br />
                        lookin the future with certainty <br />
                        and pride for our life.</h3>

                    <h3 className='text-[#AD343E]'>Explore Menu</h3>
                </div>

                <div  data-aos-duration="2000" data-aos="flip-left" className='border-2 border-gray rounded-2xl text-center p-6'>
                    <div  className='flex justify-center bg-gray-200 rounded-full w-[50px] px-3 py-2 mx-auto'>
                        <MdOutlineRiceBowl fontSize={40} />
                    </div>
                    <h2 className='font-bold text-3xl my-2'>Main Dishes</h2>
                    <h3>In the new era of technology we <br />
                        lookin the future with certainty <br />
                        and pride for our life.</h3>

                    <h3 className='text-[#AD343E]'>Drinks</h3>
                </div>

                <div data-aos-duration="2000" data-aos="flip-left" className='border-2 border-gray rounded-2xl text-center p-6'>
                    <div className='flex justify-center bg-gray-200 rounded-full w-[50px] px-3 py-2 mx-auto'>
                        <RiDrinksLine fontSize={40} />
                    </div>
                    <h2 className='font-bold text-3xl my-2'>Desserts</h2>
                    <h3>In the new era of technology we <br />
                        lookin the future with certainty <br />
                        and pride for our life.</h3>

                    <h3 className='text-[#AD343E]'>Explore Menu</h3>
                </div>

                <div  data-aos-duration="2000" data-aos="flip-left" className='border-2 border-gray rounded-2xl text-center p-6'>
                    <div className='flex justify-center bg-gray-200 rounded-full w-[50px] px-3 py-2 mx-auto'>
                        <GiCakeSlice fontSize={40} />

                    </div>
                    <h2 className='font-bold text-3xl my-2'>Breakfast</h2>
                    <h3>In the new era of technology we <br />
                        lookin the future with certainty <br />
                        and pride for our life.</h3>
                    <h3 className='text-[#AD343E]'>Explore Menu</h3>
                </div>
            </div>
        </div>
    );
};

export default Browesmenu;