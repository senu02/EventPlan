import { useState } from "react";
import { useNavigate } from "react-router-dom";
import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";

import recent1 from "./images/recent1.jpeg"
import recent2 from "./images/recent2.jpeg"


export default function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    date: "",
    location: "",
    locationType: "",
    guests: "",
    package: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      
      // Automatically assign package based on number of guests
      if (name === "guests") {
        if (value === "Less than 50") {
          updatedData.package = "Silver";
        } else if (value === "50-100") {
          updatedData.package = "Gold";
        } else if (value === "100-200") {
          updatedData.package = "Premium";
        } else if (value === "200+") {
          updatedData.package = "Premium"; // Default for large events
        }
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
    alert("🎉 Event Created Successfully!");
    navigate("/"); // Redirect to Home Page
  };

  return (
<div className="min-h-screen bg-gradient-to-r from-sky-300 to-indigo-200 flex flex-col">
{/* Navbar */}
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">Festivo</h1>
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#Events" className="text-gray-700 hover:text-indigo-600">Events</a>
          <a href="#packages" className="text-gray-700 hover:text-indigo-600">Packages</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact Us</a>
        </div>
      </nav>
<br></br><br></br><br></br><br></br>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-black-700">
            Book Your Event 
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Event Name */}
            <div>
              <label className="block text-gray-700 font-medium">Event Name</label>
              <input 
                type="text" 
                name="eventName" 
                value={formData.eventName} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Enter event name"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-gray-700 font-medium">Event Type</label>
              <select 
                name="eventType" 
                value={formData.eventType} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Get Together">Get Together</option>
                <option value="Conference">Conference</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Concert">Concert</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium">Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Enter event location"
              />
            </div>

            {/* Location Type */}
            <div>
              <label className="block text-gray-700 font-medium">Location Type</label>
              <select 
                name="locationType" 
                value={formData.locationType} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
              >
                <option value="">Select Location Type</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-gray-700 font-medium">Number of Guests</label>
              <select 
                name="guests" 
                value={formData.guests} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
              >
                <option value="">Select Number of Guests</option>
                <option value="Less than 50">Less than 50</option>
                <option value="50-100">50-100</option>
                <option value="100-200">100-200</option>
                <option value="200+">200+</option>
              </select>
            </div>

            {/* Event Package (auto assigned) */}
            <div>
              <label className="block text-gray-700 font-medium">Event Package</label>
              <input 
                type="text" 
                name="package" 
                value={formData.package} 
                readOnly
                className="w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-100"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                rows="4"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Add event details..."
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Book Event
            </button>
          </form>

          {/* Back to Home */}
          <button 
            onClick={() => navigate("/")} 
            className="mt-6 w-full text-indigo-700 hover:underline text-center font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
      <br></br><br></br>

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
