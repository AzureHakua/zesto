// src/data/menuData.ts

export interface PizzaPricing {
  small: number;
  large: number;
}

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number | PizzaPricing; // Can be either a single price or pizza pricing
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: 1,
    title: "Cheese",
    description: "Handmade crust with our homemade sauce and a blend of mozzarella and cheddar cheese.",
    price: { small: 10.50, large: 14.50 },
    image: "cheese.jpg",
    category: "Pizza"
  },
  {
    id: 2,
    title: "Pepperoni",
    description: "Our classic cheese pizza topped with premium pepperoni.",
    price: { small: 13.00, large: 17.25 },
    image: "blank.jpg",
    category: "Pizza"
  },
  {
    id: 3,
    title: "Special",
    description: "A hearty combination of pepperoni, sausage, hamburger, onions, green peppers, and mushrooms.",
    price: { small: 15.75, large: 22.99 },
    image: "special.jpg",
    category: "Pizza"
  },
  {
    id: 4,
    title: "Vegetarian",
    description: "Topped with fresh onions, green peppers, tomatoes, mushrooms, and olives.",
    price: { small: 15.75, large: 22.99 },
    image: "veggie.jpg",
    category: "Pizza"
  },
  {
    id: 5,
    title: "Greek",
    description: "A Mediterranean blend of spinach, onions, tomatoes, olives, and feta cheese.",
    price: { small: 15.75, large: 22.99 },
    image: "blank.jpg",
    category: "Pizza"
  },
  {
    id: 6,
    title: "All-Meat",
    description: "Loaded with sausage, ham, pastrami, bacon, and hamburger.",
    price: { small: 15.75, large: 22.99 },
    image: "all-meat.jpg",
    category: "Pizza"
  },
  {
    id: 7,
    title: "Mexican",
    description: "Features zesty chicken with onions, tomatoes, jalapeños, and olives.",
    price: { small: 15.75, large: 22.99 },
    image: "mexican.jpg",
    category: "Pizza"
  },
  {
    id: 8,
    title: "Bianco",
    description: "A rich blend of mozzarella, cheddar, ricotta, and feta with fresh garlic (no red sauce).",
    price: { small: 15.75, large: 22.99 },
    image: "bianco.jpg",
    category: "Pizza"
  },
  {
    id: 9,
    title: "Mediterranean",
    description: "Topped with fresh garlic, spinach, eggplant, tomatoes, and feta cheese.",
    price: { small: 15.75, large: 22.99 },
    image: "mediterranean.jpg",
    category: "Pizza"
  },
  {
    id: 10,
    title: "Chicken Primavera",
    description: "Features tender chicken with fresh garlic, broccoli, onions, and tomatoes.",
    price: { small: 15.75, large: 22.99 },
    image: "primavera.jpg",
    category: "Pizza"
  },
  {
    id: 11,
    title: "Custom Calzones",
    description: "Choose any pizza toppings to be baked into our handmade dough (price listed before toppings are added).",
    price: 10.75,
    image: "blank.jpg",
    category: "Pizza"
  },

  // Subs
  {
    id: 12,
    title: "Steak & Cheese",
    description: "Tender grilled flank steak with American cheese on a 10\" sub roll.",
    price: 11.99,
    image: "steakcheese.jpg",
    category: "Subs"
  },
  {
    id: 13,
    title: "Steak Bomb",
    description: "Grilled flank steak with roasted peppers, mushrooms, onions, cooked salami, and American cheese on a 10\" sub roll.",
    price: 14.25,
    image: "steakbomb.jpg",
    category: "Subs"
  },
  {
    id: 14,
    title: "BLT",
    description: " Crispy bacon, fresh lettuce, and ripe tomatoes on a 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 15,
    title: "Caesar Wrap",
    description: "Crisp romaine lettuce, crunchy croutons, and parmesan cheese with creamy Caesar dressing wrapped in soft Syrian bread.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 16,
    title: "Chicken Caesar Wrap",
    description: "Crisp romaine lettuce, crunchy croutons, parmesan cheese, and our specialty marinated chicken with creamy Caesar dressing wrapped in soft Syrian bread.",
    price: 13.75,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 17,
    title: "Cheeseburger Sub",
    description: "Juicy hamburger patties cooked well done, topped with melted American cheese on a 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 18,
    title: "Chicken Cutlet",
    description: "Golden fried breaded chicken breast with fresh lettuce, ripe tomatoes, onions, and pickles on a 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 19,
    title: "Chicken Finger Sub",
    description: "Golden fried breaded chicken tenders with fresh lettuce, ripe tomatoes, onions, and pickles on a 10\" sub roll.",
    price: 10.99,
    image: "chickenfingersub.jpg",
    category: "Subs"
  },
  {
    id: 20,
    title: "Chicken Gyro Wrap",
    description: "Our specialty marinated chicken with fresh onions, ripe tomatoes, and creamy tzatziki sauce wrapped in warm pita bread.",
    price: 9.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 21,
    title: "Chicken Parm",
    description: "Golden fried breaded chicken breast topped with rich marinara sauce and melted provolone cheese on a toasted 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 22,
    title: "Eggplant Parm",
    description: "Golden fried breaded eggplant topped with rich marinara sauce and melted provolone cheese on a toasted 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 23,
    title: "Genoa Salami",
    description: "Premium Genoa salami with fresh lettuce, ripe tomatoes, pickles, and onions on a 10\" sub roll.",
    price: 10.75,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 24,
    title: "Griilled Chicken",
    description: "Our specialty marinated grilled chicken with fresh lettuce, ripe tomatoes, onions, and pickles on a 10\" sub roll.",
    price: 13.25,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 25,
    title: "Ham & Cheese",
    description: "Sliced ham and American cheese topped with fresh lettuce, ripe tomatoes, onions, and pickles on a 10\" sub roll.",
    price: 10.75,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 26,
    title: "Italian",
    description: "Premium mortadella, genoa salami, and cooked salami with provolone cheese, topped with fresh lettuce, ripe tomatoes, pickles, and onions on a 10\" sub roll with oil.",
    price: 10.75,
    image: "italian.jpg",
    category: "Subs"
  },
  {
    id: 27,
    title: "Meatball",
    description: "Meatballs topped with rich marinara sauce and melted provolone cheese on a toasted 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 28,
    title: "Pastrami",
    description: "Hot, tender pastrami with mustard on a 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 29,
    title: "Sausage",
    description: "Grilled Italian sausage slices on a 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 30,
    title: "Turkey",
    description: "Tender sliced turkey with fresh lettuce, ripe tomatoes, onions, and pickles on a 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 31,
    title: "Veal Cutlet",
    description: "Golden fried breaded veal topped with rich marinara sauce and melted provolone cheese on a toasted 10\" sub roll.",
    price: 10.99,
    image: "blank.jpg",
    category: "Subs"
  },
  {
    id: 32,
    title: "Vegetarian",
    description: "Fresh lettuce, ripe tomatoes, pickles, onions, and green peppers with American and provolone cheese on a 10\" sub roll.",
    price: 9.99,
    image: "blank.jpg",
    category: "Subs"
  },

  // Salads
  {
    id: 33,
    title: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with crunchy croutons, parmesan cheese, and creamy Caesar dressing. Comes with Syrian bread.",
    price: 11.99,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 34,
    title: "Chicken Caesar Salad",
    description: "Our classic Caesar salad topped with our specialty marinated grilled chicken. Comes with Syrian bread.",
    price: 15.99,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 35,
    title: "Garden Salad",
    description: "A fresh bed of crisp iceberg lettuce with ripe tomatoes, red cabbage, shredded carrots, cucumbers, and kalamata olives, served with our house dressing. Comes with Syrian bread.",
    price: 9.99,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 36,
    title: "Chef Salad",
    description: "Our garden salad generously topped with tender chopped turkey, ham, and provolone cheese, served with our house dressing. Comes with Syrian bread.",
    price: 12.25,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 37,
    title: "Chicken Finger Salad",
    description: "Our fresh garden salad topped with golden fried chicken tenders, served with our house dressing. Comes with Syrian bread.",
    price: 15.99,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 38,
    title: "Greek Salad",
    description: "Our garden salad with fresh onions and creamy feta cheese, served with our house dressing. Comes with Syrian bread.",
    price: 13.50,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 39,
    title: "Greek Chicken Salad",
    description: "Our garden salad with fresh onions, creamy feta cheese, and our specialty marinated chicken, served with our house dressing. Comes with Syrian bread.",
    price: 18.25,
    image: "blank.jpg",
    category: "Salads"
  },
  {
    id: 40,
    title: "Grilled Chicken Salad",
    description: "Our fresh garden salad topped with our specialty marinated grilled chicken, served with our house dressing. Comes with Syrian bread.",
    price: 14.99,
    image: "grilledchickensalad.jpg",
    category: "Salads"
  },
  {
    id: 41,
    title: "Turkey Salad",
    description: "Our garden salad topped with tender sliced turkey, served with our house dressing. Comes with Syrian bread.",
    price: 10.99,
    image: "blank.jpg",
    category: "Salads"
  },

  // Dinner Plates
  {
    id: 42,
    title: "Spaghetti",
    description: "Al dente spaghetti pasta tossed with your choice of rich marinara or savory garlic butter sauce, served with warm garlic bread. Option to add one meat choice for an additional fee.",
    price: 12.99,
    image: "blank.jpg",
    category: "Dinner Box"
  },
  {
    id: 43,
    title: "Grilled Chicken",
    description: "Our specialty marinated grilled chicken served with golden French fries.",
    price: 17.50,
    image: "blank.jpg",
    category: "Dinner Box"
  },
  {
    id: 44,
    title: "Chicken Fingers",
    description: "Golden fried breaded chicken tenders served with crispy French fries.",
    price: 17.50,
    image: "chickenfingers.jpg",
    category: "Dinner Box"
  },
  {
    id: 45,
    title: "Chicken Gyro",
    description: "Our delicious chicken gyro served with golden French fries.",
    price: 13.99,
    image: "blank.jpg",
    category: "Dinner Box"
  },

  // Sides
  {
    id: 46,
    title: "French Fries",
    description: "Deep-fried till golden brown, with a crunchy exterior and fluffy interior seasoned with salt.",
    price: 5.50,
    image: "fries.jpg",
    category: "Sides"
  },
  {
    id: 47,
    title: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with a hint of natural sweetness.",
    price: 5.99,
    image: "sweetfries.jpg",
    category: "Sides"
  },
  {
    id: 48,
    title: "Onion Rings",
    description: "Thick-cut onion rings breaded and fried until crispy and golden.",
    price: 7.75,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 49,
    title: "Garlic Bread with Cheese",
    description: "Toasted garlic bread topped with melted mozzarella cheese.",
    price: 4.99,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 50,
    title: "Bread Sticks with Cheese",
    description: "Warm, soft bread sticks topped with melted mozzarella cheese, perfect for sharing.",
    price: 9.99,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 51,
    title: "Chicken Fingers (Side Order)",
    description: "Crispy golden fried chicken tenders served with your choice of dipping sauce.",
    price: 10.99,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 52,
    title: "Buffalo Fingers",
    description: "Golden fried chicken tenders tossed in spicy buffalo sauce, served with your choice of dipping sauce.",
    price: 11.99,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 53,
    title: "Fried Ravioli",
    description: "Cheese-filled ravioli breaded and fried until golden, served with marinara sauce for dipping.",
    price: 10.75,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 54,
    title: "Jalapeno Poppers",
    description: "Fresh jalapeños stuffed with cream cheese, breaded and fried until crispy.",
    price: 10.75,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 55,
    title: "Macaroni and Cheese Bites",
    description: "Creamy macaroni and cheese breaded and fried into bite-sized golden nuggets.",
    price: 10.75,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 56,
    title: "Mozzarella Sticks",
    description: "Stretchy mozzarella cheese sticks breaded and fried until golden, served with marinara sauce.",
    price: 9.99,
    image: "blank.jpg",
    category: "Sides"
  },
  {
    id: 57,
    title: "Chicken Wings",
    description: "A choice of plain or hot chicken wings served with dipping sauce.",
    price: 18.50,
    image: "wings.jpg",
    category: "Sides"
  },

  // Bubble Tea
  {
    id: 58,
    title: "Black Tiger Milk Tea",
    description: "Rich black tea with milk and tapioca pearls, finished with a drizzle of brown sugar syrup.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 59,
    title: "Coconut Milk Tea",
    description: "Smooth black tea blended with coconut milk and tapioca pearls for a tropical twist.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 60,
    title: "Matcha Milk Tea",
    description: "Premium matcha green tea powder blended with milk and tapioca pearls.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 61,
    title: "Okinawa Milk Tea",
    description: "Traditional milk tea sweetened with Okinawa brown sugar and served with tapioca pearls.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 62,
    title: "Taro Milk Tea",
    description: "Purple taro root blended with milk tea and tapioca pearls for a unique, nutty flavor.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 63,
    title: "Mango Tea",
    description: "Tropical mango-flavored tea with tapioca pearls for a burst of summer sweetness.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 64,
    title: "Lychee Tea",
    description: "Delicate floral tea with sweet lychee flavor and tapioca pearls.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 65,
    title: "Orange Peach Tea",
    description: "Refreshing tea blend with citrusy orange and sweet peach flavors, served with tapioca pearls.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 66,
    title: "Pineapple Tea",
    description: "Tropical pineapple-flavored tea with tapioca pearls for a taste of paradise.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },
  {
    id: 67,
    title: "Peach Tea",
    description: "Sweet and refreshing peach-flavored tea served with tapioca pearls.",
    price: 6.25,
    image: "blank.jpg",
    category: "Bubble Tea"
  },

  // Smoothies
 {
    id: 68,
    title: "Mango Smoothie",
    description: "Tropical mango smoothie blended to perfection.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  },
  {
    id: 69,
    title: "Matcha Frappe",
    description: "Iced matcha green tea blended with milk for a refreshing caffeinated treat.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  },
  {
    id: 70,
    title: "Matcha Latte",
    description: "Premium matcha green tea powder blended with steamed milk for a smooth, earthy flavor.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  },
  {
    id: 71,
    title: "Pineapple Smoothie",
    description: "Tropical pineapple blended into a refreshing smoothie.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  },
  {
    id: 72,
    title: "Taro Smoothie",
    description: "Smooth purple taro root blended into a rich, nutty smoothie.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  },
  {
    id: 73,
    title: "Taro Coconut Smoothie",
    description: "Taro root blended with coconut for a unique, nutty tropical smoothie.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  },
  {
    id: 74,
    title: "Piña Colada Smoothie",
    description: "Classic tropical blend of pineapple and coconut for the ultimate beach drink.",
    price: 6.25,
    image: "blank.jpg",
    category: "Smoothies"
  }
];

export const categories = Array.from(new Set(menuItems.map(item => item.category)));

// Helper functions
export const isPizza = (item: MenuItem): boolean => {
  return item.category === "Pizza";
};

export const hasPizzaPricing = (price: number | PizzaPricing): price is PizzaPricing => {
  return typeof price === "object" && price !== null && "small" in price && "large" in price;
};

export const getPrice = (item: MenuItem, size?: "small" | "large"): number => {
  if (hasPizzaPricing(item.price)) {
    return size ? item.price[size] : item.price.small; // Default to small if no size specified
  }
  return item.price;
};

export const formatPrice = (item: MenuItem, size?: "small" | "large"): string => {
  if (hasPizzaPricing(item.price)) {
    if (size) {
      return `$${item.price[size].toFixed(2)}`;
    }
    return `Small: $${item.price.small.toFixed(2)} | Large: $${item.price.large.toFixed(2)}`;
  }
  return `$${item.price.toFixed(2)}`;
};