import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../component/Button"; // Adjust path if needed

import weddingImg from "./images/w1.jpg";
import birthdayImg from "./images/b2.jpg";
import getTogetherImg from "./images/g1.jpg";

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const eventPackages = [
    { 
      id: 1, 
      title: "Wedding", 
      img: weddingImg, 
      details: (
        <>
          <p>Make your dream wedding come true with our all-inclusive wedding package. We take care of every detail, from elegant decorations to a lavish reception, ensuring a magical and stress-free experience.</p>
          <h4 className="font-semibold mt-4">What's Included?</h4>
          <ul className="list-disc list-inside">
            <li>✅ Venue Decoration with floral arrangements & lighting</li>
            <li>✅ Professional wedding photography & videography</li>
            <li>✅ Catering with a customized wedding menu</li>
            <li>✅ Live music or DJ entertainment</li>
            <li>✅ Bride & Groom’s luxury transport</li>
            <li>✅ Wedding cake & guest favors</li>
          </ul>
        </>
      )
    },
    { 
      id: 2, 
      title: "Birthday Party", 
      img: birthdayImg, 
      details: (
        <>
          <p>Celebrate your special day in style! Our birthday package is designed to bring fun and excitement to all ages, with customized decorations, delicious treats, and engaging activities.</p>
          <h4 className="font-semibold mt-4">What's Included?</h4>
          <ul className="list-disc list-inside">
            <li>✅ Themed party decorations (cartoon, superhero, elegant, etc.)</li>
            <li>✅ Custom birthday cake & dessert table</li>
            <li>✅ Fun activities like face painting & magic shows</li>
            <li>✅ Balloon twisting & party games</li>
            <li>✅ Professional event photography</li>
            <li>✅ DJ & sound system for an unforgettable experience</li>
          </ul>
        </>
      )
    },
    { 
      id: 3, 
      title: "Get Together", 
      img: getTogetherImg, 
      details: (
        <>
          <p>Reunite with your loved ones and create unforgettable memories with our exclusive get-together package. Whether it's a family gathering, school reunion, or friends' night out, we handle everything so you can relax and enjoy.</p>
          <h4 className="font-semibold mt-4">What's Included?</h4>
          <ul className="list-disc list-inside">
            <li>✅ Cozy indoor or outdoor event setup</li>
            <li>✅ Buffet catering with a variety of dishes</li>
            <li>✅ Music & entertainment with a live band or DJ</li>
            <li>✅ Photography & videography services</li>
            <li>✅ Fun activities like karaoke, games, and dance-offs</li>
            <li>✅ Custom party favors for guests</li>
          </ul>
        </>
      )
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">Festivo</h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#Events" className="text-gray-700 hover:text-indigo-600">Events</a>
          <a href="#packages" className="text-gray-700 hover:text-indigo-600">Packages</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 text-center mt-16">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold">
          Welcome to Festivo
        </motion.h1>
        <p className="mt-4 text-lg">Plan and celebrate unforgettable events effortlessly.</p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
          <Button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
            Create Your Event
          </Button>
        </motion.div>
      </section>

      {/* Event Packages Section */}
      <section id="packages" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-600">Event Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gray-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <img src={pkg.img} alt={pkg.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{pkg.title}</h3>

              {/* Read More button (appears on hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Selected Package Details */}
      {selectedPackage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 w-96 text-center shadow-lg relative"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{selectedPackage.title}</h3>
            <p className="text-gray-700">{selectedPackage.details}</p>
          </motion.div>
        </div>
      )}

      {/* About Us */}
      <section id="about" className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Festivo is your one-stop platform for planning and managing events effortlessly. Whether it's a wedding, conference, or party, we've got you covered!
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Have any questions? Reach out to us at <span className="font-semibold">support@festivo.com</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} Festivo. All rights reserved.</p>
      </footer>
    </div>
  );
}
