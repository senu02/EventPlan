import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../component/Button"; // Adjust path if needed
import { Link } from "react-router-dom";


import weddingImg from "./images/w1.jpg";
import birthdayImg from "./images/b2.jpg";
import getTogetherImg from "./images/g1.jpg";
import backgroundVideo from "./images/backgroundVideo.mp4"; // Import the video

import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";

import recent1 from "./images/recent1.jpeg"
import recent2 from "./images/recent2.jpeg"


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
            <li>Venue Decoration with floral arrangements & lighting</li>
            <li>Professional wedding photography & videography</li>
            <li>Catering with a customized wedding menu</li>
            <li>Live music or DJ entertainment</li>
            <li>Bride & Groom’s luxury transport</li>
            <li>Wedding cake & guest favors</li>
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
            <li>Themed party decorations (cartoon, superhero, elegant, etc.)</li>
            <li>Custom birthday cake & dessert table</li>
            <li>Fun activities like face painting & magic shows</li>
            <li>Balloon twisting & party games</li>
            <li>Professional event photography</li>
            <li>DJ & sound system for an unforgettable experience</li>
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
            <li>Cozy indoor or outdoor event setup</li>
            <li>Buffet catering with a variety of dishes</li>
            <li>Music & entertainment with a live band or DJ</li>
            <li>Photography & videography services</li>
            <li>Fun activities like karaoke, games, and dance-offs</li>
            <li>Custom party favors for guests</li>
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
      <section className="relative h-screen overflow-hidden text-white text-center flex items-center justify-center">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="relative z-10"
        >
          <h1 className="text-6xl font-bold drop-shadow-lg">Welcome to Festivo</h1>
          <p className="mt-4 text-lg">Plan and celebrate unforgettable events effortlessly.</p>
           {/* Link to Create Event Page */}
           <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }} 
            className="mt-6"
          >
            <Link to="/create-event">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
                Book Your Event
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

  {/* Event Packages Section */}
  <section id="Events" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Events</h2>
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

<section id="packages" className="py-12 bg-white">
    <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Event Packages</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Silver Package */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-gray-800">Silver Package</h3>
        <p className="text-gray-600 mt-2">Perfect for small gatherings and intimate events.</p>
        <ul className="mt-4 text-gray-700 text-sm space-y-2">
          <li>✔ Venue decoration</li>
          <li>✔ Basic catering service</li>
          <li>✔ DJ or music setup</li>
          <li>✔ Up to 50 guests</li>
        </ul>
      </div>

      {/* Gold Package */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-yellow-500">Gold Package</h3>
        <p className="text-gray-600 mt-2">A premium choice for grand celebrations.</p>
        <ul className="mt-4 text-gray-700 text-sm space-y-2">
          <li>✔ Venue decoration + floral setup</li>
          <li>✔ Full-course meal catering</li>
          <li>✔ Live band or DJ</li>
          <li>✔ Up to 100 guests</li>
        </ul>
      </div>

      {/* Premium Package */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-purple-600">Premium Package</h3>
        <p className="text-gray-600 mt-2">The ultimate package for luxury events.</p>
        <ul className="mt-4 text-gray-700 text-sm space-y-2">
          <li>✔ Exclusive venue access</li>
          <li>✔ Gourmet dining experience</li>
          <li>✔ Celebrity entertainment</li>
          <li>✔ Up to 200+ guests</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* About Us */}
      <section id="about" className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Festivo is your one-stop platform for planning and managing events effortlessly. Whether it's a wedding, conference, or party, we've got you covered!
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Have any questions? Reach out to us at <span className="font-semibold">support@festivo.com</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
  <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
    
    {/* Subscribe to Newsletter */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-gray-400 text-sm mb-4">
        No spam messages from us, only the latest offers that are best for you and your business.
      </p>
      <div className="flex items-center space-x-2">
        <input 
          type="email" 
          placeholder="Your email address.." 
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-white">
          Subscribe
        </button>
      </div>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-400 text-sm">
        <strong>Festivo Events, Sri Lanka</strong><br />
        Old Kottawa Rd, Maharagama, Sri Lanka.<br />
        <a href="mailto:info@festivo.com" className="text-indigo-400 hover:text-indigo-300">info@festivo.com</a>
      </p>
      <br />
      
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Our Services</h3>
      <ul className="text-gray-400 text-sm space-y-2">
        <li><a href="#" className="hover:text-indigo-400">Our Gallery</a></li>
        <li><a href="#" className="hover:text-indigo-400">Event Guides</a></li>
        <li><a href="#" className="hover:text-indigo-400">Latest News</a></li>
        <li><a href="#" className="hover:text-indigo-400">Pricing & Terms</a></li>
      </ul>
    </div>

    {/* Recent Posts */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Recent Events</h3>
      <div className="space-y-4">
        <div className="flex space-x-3">
          <img src={recent1} alt="Wedding" className="w-16 h-16 rounded-lg"/>
          <div>
            <p className="text-gray-300 hover:text-indigo-400 cursor-pointer">Wedding</p>
            <p className="text-gray-500 text-xs">March 4, 2025</p>
          </div>
        </div>
        <div className="flex space-x-3">
        <img src={recent2} alt="birthday" className="w-16 h-16 rounded-lg"/>
          <div>
            <p className="text-gray-300 hover:text-indigo-400 cursor-pointer">Birthday Celebration</p>
            <p className="text-gray-500 text-xs">Jan 8, 2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Partners & Social Media */}
  <div className="container mx-auto px-6 lg:px-20 mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
    
    {/* Our Top Partners */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Our Top Partners</h3>
      <div className="flex space-x-6">
      <img src={partner1} alt="Lassana Flora" className="h-12" />
      <img src={partner2} alt="NCG Express" className="h-12" />

</div>
    </div>

    {/* Social Media Icons */}
    <div className="mt-6 md:mt-0 flex space-x-6">
      <a href="#" className="text-gray-400 hover:text-indigo-500 text-2xl">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-indigo-500 text-2xl">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-indigo-500 text-2xl">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-gray-500 text-sm mt-10">
    &copy; {new Date().getFullYear()} Festivo. All rights reserved.
  </div>
</footer>

    </div>
  );
}
