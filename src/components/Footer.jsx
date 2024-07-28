


import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo11 from "../assets/img/Logo11.png"
export default function Footer(){
  return(<>
  
  <footer className="bg-page1 rounded-lg shadow dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://flowbite.com/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src={logo11}
          className="h-20"
          alt="Festiva Logo"
        />
    
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-red1 sm:mb-0 dark:text-gray-400">
      <Link to="/" className="hover:underline me-4 md:me-6">
           <li>
              Home  
           </li>
        </Link>
      <Link to="/OurStory" className="hover:underline me-4 md:me-6">
           <li>
              Our Story
           </li>
        </Link>
      <Link to="/Catalog" className="hover:underline me-4 md:me-6">
           <li>
              Festivals 
           </li>
        </Link>
      <Link to="/ContactUs" className="hover:underline me-4 md:me-6">
           <li>
              Contact Us
           </li>
        </Link>
     
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-red1 sm:text-center dark:text-gray-400">
      © 2024{" "}
      <a href="/" className="hover:underline">
        Festiva JO™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  </>)
}