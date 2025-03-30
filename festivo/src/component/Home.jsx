import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../component/Button"; // Relative path


export default function HomePage() {
    const [events, setEvents] = useState([
      { id: 1, title: "Music Festival 2025", date: "June 15, 2025", location: "New York" },
      { id: 2, title: "Tech Conference", date: "August 20, 2025", location: "San Francisco" },
      { id: 3, title: "Wedding Gala", date: "December 10, 2025", location: "Paris" },
    ]);
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
          <h1 className="text-2xl font-bold text-indigo-600">Festivo</h1>
          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#Events" className="text-gray-700 hover:text-indigo-600">Events</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact Us</a>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 text-center mt-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Welcome to Festivo 🎉
          </motion.h1>
          <p className="mt-4 text-lg">Plan and celebrate unforgettable events effortlessly.</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
              Create Your Event
            </Button>
          </motion.div>
        </section>
  
        {/* Featured Events */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">📅 {event.date}</p>
                <p className="text-gray-600">📍 {event.location}</p>
              </motion.div>
            ))}
          </div>
        </section>
  
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