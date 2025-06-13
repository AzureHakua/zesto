// src/app/page.tsx
"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="bg-[url('/images/zestofront.jpg')] bg-cover bg-center h-full"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Handmade Artisan Pizza</h1>
            <p className="text-xl text-white mb-8">Made with love, served with passion.</p>
            <Link
              href="/order"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Zesto Pizza?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">We source only the freshest, locally grown ingredients for our pizzas.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfort and Convenience</h3>
              <p className="text-gray-600">Fast delivery or convenient pickup - you choose how to enjoy your perfect pizza.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Artisan Quality</h3>
              <p className="text-gray-600">Handcrafted by our expert pizza chefs dedicated to perfection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Most Popular Items</h2>
            <p className="mt-4 text-gray-600">Try our customer favorites</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 relative">
                <div className="bg-[url('/images/special.jpg')] bg-cover bg-center h-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Gourmet Pizza</h3>
                <p className="text-gray-600 mb-4">A hearty combination of pepperoni, sausage, hamburger, onions, green peppers, and mushrooms.</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">$15.75 / $22.99</span>
                  <Link
                    href="/order"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Item Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 relative">
                <div className="bg-[url('/images/steakbomb.jpg')] bg-cover bg-center h-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Steak Bomb Sub</h3>
                <p className="text-gray-600 mb-4">Grilled flank steak with roasted peppers, mushrooms, onions, cooked salami, and American cheese on a 10" sub roll.</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">$14.25</span>
                  <Link
                    href="/order"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Item Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 relative">
                <div className="bg-[url('/images/grilledchickensalad.jpg')] bg-cover bg-center h-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Grilled Chicken Salad</h3>
                <p className="text-gray-600 mb-4">Our fresh garden salad topped with our specialty marinated grilled chicken, served with our house dressing. Comes with Syrian bread.</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold">$14.99</span>
                  <Link
                    href="/order"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="text-red-600 hover:text-red-700 font-bold text-lg inline-flex items-center"
            >
              View Full Menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="mb-4">
                <h4 className="font-semibold">Michael T.</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">"We got pizza from Zesto Saturday night and it was really tasty! The pepperoni and sausage were both really good and the crust on all the pizzas was on point. Not too crispy, not too soft. Will be ordering again soon!"</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="mb-4">
                <h4 className="font-semibold">Avril H.</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">"My husband and I first went to Zesto in 2021 during our dragracing honeymoon. We go up to New England Dragway a few times a year, and always have lunch at Zesto first. We were there today and met the new owners. Wonderful people. And the food was fantastic! Very fresh, very delicious! If you've never been to Zesto, or haven't gone in a while, definitely make it a point to stop by and enjoy a delicious meal."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="mb-4">
                <h4 className="font-semibold">M. McKayla</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">"The staff here are very friendly. One of the best Chicken Caesar Wraps on the seacoast. Food made with love. I love their Caesar dressing, Always fresh ingredients, with fresh Syrian bread."</p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Hungry? Order Now!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Experience the best pizza in town. Order online for pickup or delivery.</p>
          <Link
            href="/order"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  )
};