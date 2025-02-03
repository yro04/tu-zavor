import { motion } from "framer-motion";
import React from "react";
import logo from "./assets/tu-zavor-logo.jpeg";

const dishes = [
  {
    id: 1,
    name: "Lunes",
    description:
      "Arroz Blanco, Habichuelas Rojas, Pollo Guisado o Pollo Frito, Ensalada Coll ",
    image: "https://shorturl.at/a2Y0L", // Shortened URL for the image
  },
  {
    id: 2,
    name: "Martes",
    description:
      "Moro de Guandules, Cerdo Guisado o Pollo Guisado, Ensalada verde.",
    image: "https://shorturl.at/a2Y0L", // Shortened URL for the image
  },
  {
    id: 3,
    name: "Miércoles",
    description:
      "Arroz Blanco, Guadules con Coco, Costilla Guisada o Pollo Frito, Ensalada de Pasta con Maíz.",
    image: "https://shorturl.at/a2Y0L", // Shortened URL for the image
  },
  {
    id: 4,
    name: "Jueves",
    description:
      "Arroz Blanco, Habichuelas Rojas, Chuleta Fresca Salteada con Vegetales o Pollo Frito, Ensalada Coll.",
    image: "https://shorturl.at/a2Y0L", // Shortened URL for the image
  },
  {
    id: 5,
    name: "Viernes",
    description:
      "Arroz Blanco, Habichuelas rojas, Res Guisada, Platano Maduro Frito.",
    image: "https://shorturl.at/a2Y0L", // Shortened URL for the image
  },
];

const App: React.FC = () => {
  const handleOrderClick = (dish: {
    name: string;
    description: string;
    image: string;
  }) => {
    const message = `Hola! Me gustaría ordenar para hoy ${dish.name}: \n\n${dish.description}\n\nImage: ${dish.image}`;
    const whatsappUrl = `https://wa.me/18492699834?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-900 text-white font-sans">
      {/* Header */}
      <header className="bg-green-700 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <img src={logo} alt="Tu Zavor Logo" className="h-80 w-auto" />
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center">
              <li>
                <a href="#menu" className="hover:underline">
                  Menu Semanal
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contáctanos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-green-700 to-green-600">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenidos a Tu Zavor
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-8">
          ¡Descubre una variedad de platos deliciosos, recién hechos y
          entregados directamente a tu puerta!
        </p>
        <a
          href="#menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Explore Nuestras Ofertas Semanales
        </a>
      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestro Menú Semanal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dish Cards */}
          {dishes.map((dish, index) => (
            <div key={dish.id} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-full max-w-xs"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mb-4">
                    {dish.description}
                  </p>
                  <button
                    onClick={() => handleOrderClick(dish)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
                  >
                    Lo Quiero!
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-green-800 py-16 text-center">
        <h2 className="text-3xl text-white font-bold mb-8">Sobre Nosotros</h2>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto">
          Nos dedicamos a servir comidas deliciosas elaboradas con los mejores
          ingredientes, preparadas con amor y cuidado. Explora nuestro menú y
          descubre tu nuevo plato favorito.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-green-900 py-16 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
        <p className="text-lg mb-4">
          ¿Tiene alguna pregunta o necesita más información? ¡No dude en ponerse
          en contacto con nosotros!
        </p>
        <p className="text-lg mb-8">
          Llámanos al <span className="font-semibold">+1 (849) 699-9834</span> o
          contáctanos por correo electrónico y WhatsApp.
        </p>
        <a
          href="mailto:contact@tuzavor.com"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-full"
        >
          Envíenos un correo electrónico
        </a>
      </section>

      {/* WhatsApp Floater */}
      <a
  href="https://wa.me/18492699834"
  target="_blank"
  className="fixed bottom-10 right-10 p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Icons"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    className="w-12 h-12"
  >
    <style type="text/css">
      {`
        .st0 { fill: #FFFFFF; }
        .st8 { fill: #25D366; }
      `}
    </style>
    <path className="st8" d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32c0.1,0,0.3,0,0.4-0.1l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z"/>
    <path className="st0" d="M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"/>
  </svg>
</a>

    </div>
  );
};

export default App;
