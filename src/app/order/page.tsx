// src/app/order/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

interface DeliveryService {
  name: string;
  logo: string;
  link: string;
}

export default function Order() {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('delivery');
  
  const deliveryServices: DeliveryService[] = [
    {
      name: 'Uber Eats',
      logo: 'uber-eats.svg',
      link: 'https://www.ubereats.com'
    },
    {
      name: 'DoorDash',
      logo: 'doordash.svg',
      link: 'https://www.doordash.com'
    },
    {
      name: 'Grubhub',
      logo: 'grubhub.svg',
      link: 'https://www.grubhub.com'
    }
  ];
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Order Online</h1>
        <p className="mt-4 text-xl text-gray-600">Get your favorite pizza delivered hot and fresh to your door</p>
      </div>
      
      {/* Order Type Selection */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How would you like to receive your order?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setOrderType('delivery')}
              className={`flex-1 flex flex-col items-center p-6 rounded-lg border-2 ${
                orderType === 'delivery' ? 'border-red-600' : 'border-gray-200'
              } hover:border-red-600 transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 mb-4 ${orderType === 'delivery' ? 'text-red-600' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-lg font-medium">Delivery</span>
            </button>
            
            <button
              onClick={() => setOrderType('pickup')}
              className={`flex-1 flex flex-col items-center p-6 rounded-lg border-2 ${
                orderType === 'pickup' ? 'border-red-600' : 'border-gray-200'
              } hover:border-red-600 transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 mb-4 ${orderType === 'pickup' ? 'text-red-600' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-lg font-medium">Pickup</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Location Section */}
      {orderType === 'pickup' && (
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pickup Location</h2>
            
            <div className="mb-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="font-medium">Zesto Pizza - Main Location</p>
                <p className="text-gray-600">123 Pizza Lane, Your City, ST 12345</p>
                <p className="text-gray-600">Open today until 10:00 PM</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-lg mb-4">Ready to place your order?</p>
              <Link 
                href="/menu" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                View Menu & Order
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Delivery Services */}
      {orderType === 'delivery' && (
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose a Delivery Service</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliveryServices.map((service) => (
                <a
                  key={service.name}
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-red-600 hover:shadow-md transition-all"
                >
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {/* Logo placeholder - replace with actual logos */}
                    <span className="text-lg font-bold">{service.name.charAt(0)}</span>
                  </div>
                  <span className="text-lg font-medium">{service.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-center">
                Delivery services connect you directly to our restaurant.<br />
                You can also call us directly at <a href="tel:+15551234567" className="text-red-600 font-medium">(555) 123-4567</a>.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Information Section */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ordering Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Delivery Area</h3>
              <p className="text-gray-600">We deliver within a 5-mile radius of our restaurant location. For addresses outside of this area, please use a delivery service or choose pickup.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Delivery Hours</h3>
              <p className="text-gray-600">Monday - Thursday: 11:30am - 9:30pm<br />Friday - Saturday: 11:30am - 11:30pm<br />Sunday: 12:30pm - 8:30pm</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Pickup Instructions</h3>
              <p className="text-gray-600">Please have your order number ready when you arrive. For curbside pickup, call us when you arrive and we'll bring your order to your car.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center">
        <Link 
          href="/menu" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
        >
          View Our Menu
        </Link>
      </div>
    </div>
  );
}