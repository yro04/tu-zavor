import { motion } from "framer-motion";
import React from "react";
import logo from "./assets/tu-zavor-logo.jpeg";

const dishes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://www.marthastewart.com/thmb/S9xVtnWSHldvxPHKOxEq0bALG-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-338686-spaghetti-carbonara-hero-3x2-69999-560b45d1dd9f4741b717176eff024839.jpeg",
  },
  {
    id: 2,
    name: "Grilled Steak",
    description: "Perfectly cooked steak served with a side of fresh vegetables.",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Bobby-Grilling-013_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1382539247827.webp",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with creamy Caesar dressing and parmesan cheese.",
    image: "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-900 text-white font-sans">
      {/* Header */}
      <header className="bg-green-700 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <img src={logo} alt="Tu Zavor Logo" className="h-16 w-auto" />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-green-700 to-green-600">
        <h1 className="text-5xl font-bold mb-6">Welcome to Tu Zavor</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Discover a variety of delicious dishes, freshly made and delivered to your door!
        </p>
        <a
          href="#menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Explore Menu
        </a>
      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-700 mb-4">{dish.description}</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-green-800 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Tu Zavor, we are passionate about bringing you the finest quality food and
          exceptional service. Our chefs carefully prepare every dish using the freshest
          ingredients to ensure a delightful dining experience.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-900 py-16 text-center text-gray-300">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-4">We would love to hear from you! Reach out to us via:</p>
        <p className="text-lg">
          <a href="mailto:info@tuzavor.com" className="text-yellow-500 hover:underline">
            info@tuzavor.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 py-6 text-center text-gray-300">
        &copy; 2024 Tu Zavor. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
