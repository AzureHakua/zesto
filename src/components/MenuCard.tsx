// src/components/MenuCard.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';

interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const MenuCard = ({ title, description, price, image, category }: MenuItemProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-300 relative">
        {/* Use Next.js Image component with proper sizing */}
        <div className="relative h-full w-full">
          <Image 
            src={`/images/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold">${price.toFixed(2)}</span>
          <Link 
            href="/order" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;