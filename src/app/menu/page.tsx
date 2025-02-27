// src/app/menu/page.tsx
"use client";

import { useState } from 'react';
import MenuCard from '../../components/MenuCard';
import { menuItems, categories } from '../../data/menuData';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Menu</h1>
        <p className="mt-4 text-xl text-gray-600">Handcrafted with the freshest ingredients</p>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'All'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          } transition-colors`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}