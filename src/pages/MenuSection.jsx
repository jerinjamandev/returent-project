import React, { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import MenuTab from '../components/MenuCatagory';


const menuItems = [
  { id: 1, category: 'Breakfast', price: 9.99, title: "Fried Eggs", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "fried-eggs-image-url" },
  { id: 2, category: 'Main Dishes', price: 15.99, title: "Hawaiian Pizza", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "hawaiian-pizza-image-url" },
  { id: 3, category: 'Drinks', price: 7.25, title: "Martinez Cocktail", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "martinez-cocktail-image-url" },
  { id: 4, category: 'Desserts', price: 20.99, title: "Butterscotch Cake", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "butterscotch-cake-image-url" },
  { id: 5, category: 'Drinks', price: 5.89, title: "Mint Lemonade", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "mint-lemonade-image-url" },
  { id: 6, category: 'Desserts', price: 18.05, title: "Chocolate Icecream", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "chocolate-icecream-image-url" },
  { id: 7, category: 'Main Dishes', price: 12.55, title: "Cheese Burger", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "cheese-burger-image-url" },
  { id: 8, category: 'Breakfast', price: 12.99, title: "Classic Waffles", description: "Made with eggs, lettuce, salt, oil and other ingredients.", image: "classic-waffles-image-url" },
];

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];


const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems.filter(item => 
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