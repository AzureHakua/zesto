// src/data/menuData.ts

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: 1,
    title: "Margherita",
    description: "Fresh mozzarella, tomatoes, and basil on our signature crust.",
    price: 12.99,
    image: "margherita.jpg",
    category: "Pizza"
  },
  {
    id: 2,
    title: "Pepperoni",
    description: "Classic pepperoni with mozzarella cheese and our special sauce.",
    price: 14.99,
    image: "pepperoni.jpg",
    category: "Pizza"
  },
  {
    id: 3,
    title: "Supreme",
    description: "Loaded with pepperoni, sausage, bell peppers, onions, and olives.",
    price: 16.99,
    image: "supreme.jpg",
    category: "Pizza"
  },
  {
    id: 4,
    title: "Veggie Delight",
    description: "Mushrooms, bell peppers, onions, olives, and fresh tomatoes.",
    price: 15.99,
    image: "veggie.jpg",
    category: "Pizza"
  },
  {
    id: 5,
    title: "BBQ Chicken",
    description: "Grilled chicken, red onions, and BBQ sauce with a blend of cheeses.",
    price: 17.99,
    image: "bbq-chicken.jpg",
    category: "Pizza"
  },
  {
    id: 6,
    title: "Hawaiian",
    description: "Ham, pineapple, and extra cheese on our hand-tossed crust.",
    price: 15.99,
    image: "hawaiian.jpg",
    category: "Pizza"
  },
  
  // Appetizers
  {
    id: 7,
    title: "Garlic Knots",
    description: "Twisted pizza dough knots brushed with garlic butter and herbs.",
    price: 6.99,
    image: "garlic-knots.jpg",
    category: "Appetizer"
  },
  {
    id: 8,
    title: "Mozzarella Sticks",
    description: "Breaded mozzarella sticks fried to perfection. Served with marinara.",
    price: 8.99,
    image: "mozzarella-sticks.jpg",
    category: "Appetizer"
  },
  {
    id: 9,
    title: "Buffalo Wings",
    description: "Crispy wings tossed in buffalo sauce. Served with ranch or blue cheese.",
    price: 11.99,
    image: "buffalo-wings.jpg",
    category: "Appetizer"
  },
  
  // Salads
  {
    id: 10,
    title: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
    price: 8.99,
    image: "caesar-salad.jpg",
    category: "Salad"
  },
  {
    id: 11,
    title: "Italian Salad",
    description: "Mixed greens, tomatoes, onions, olives, pepperoncini, and Italian dressing.",
    price: 9.99,
    image: "italian-salad.jpg",
    category: "Salad"
  },
  
  // Pasta
  {
    id: 12,
    title: "Spaghetti & Meatballs",
    description: "Classic spaghetti with homemade meatballs and marinara sauce.",
    price: 13.99,
    image: "spaghetti.jpg",
    category: "Pasta"
  },
  {
    id: 13,
    title: "Fettuccine Alfredo",
    description: "Fettuccine pasta in a rich and creamy alfredo sauce.",
    price: 14.99,
    image: "fettuccine.jpg",
    category: "Pasta"
  },
  
  // Desserts
  {
    id: 14,
    title: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
    price: 6.99,
    image: "tiramisu.jpg",
    category: "Dessert"
  },
  {
    id: 15,
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center. Served with vanilla ice cream.",
    price: 7.99,
    image: "lava-cake.jpg",
    category: "Dessert"
  }
];

export const categories = Array.from(new Set(menuItems.map(item => item.category)));