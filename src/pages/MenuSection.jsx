import React, { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import MenuTab from '../components/MenuCatagory';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import axiosinstance from '../hook/useAxios';


const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];


const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const {data=[],error,isError,isLoading}=useQuery({
    queryKey:['food'],
    queryFn:async()=>{
      const res=await axiosinstance.get('/foods')
      return res.data
    }
  }) 
  console.log(data);
  

  if (isLoading) {
    return <>loading</>
  }
  
  if (isError) {
    return <>data not found</>
  }



  const filteredItems = data?.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );


  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-5xl font-serif text-gray-800 mb-4">
          Our Menu
        </h2>
        <p className="text-gray-600 mb-12 max-w-lg mx-auto">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <MenuTab 
              key={index} 
              category={cat}
              isActive={cat === activeCategory}
              onClick={setActiveCategory}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;