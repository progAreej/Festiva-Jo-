

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// // import axios from "axios";

// // function Footer() {
// //   const [email, setEmail] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     // Simple email validation
// //     if (!email || !/\S+@\S+\.\S+/.test(email)) {
// //       setError("Please enter a valid email address.");
// //       return;
// //     }

// //     setError("");

// //     try {
// //       const response = await axios.post(
// //         "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
// //         { email }
// //       );

// //       if (response.status !== 200) {
// //         throw new Error("Network response was not ok.");
// //       }

// //       setEmail("");
// //       setSubmitted(true);
// //     } catch (error) {
// //       setError("There was an issue with the submission. Please try again.");
// //     }
// //   };

// //   return (
// //     <footer className="footer p-8 bg-gray-800 text-white">
// //       <div className="container mx-auto flex flex-col md:flex-col justify-between items-start">
      
// //         <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full md:w-2/3">
// //           <div className="footer-logo mb-6 md:mb-0 md:mr-8">
// //             <img
// //               src="./src/assets/img/Logo11.png"
// //               alt="Logo"
// //               className="w-24 h-24 object-contain"
// //             />
// //           </div>
// //           <div className="footer-content flex flex-col md:flex-row md:space-x-8">
// //             <div className="footer-section mb-6 md:mb-0">
// //               <h4 className="font-bold mb-2 text-xl text-gray-100">Quick Links</h4>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>
// //                   <Link to="/Admin" className="hover:underline">
// //                     Home
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/Details" className="hover:underline">
// //                     About
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/OurStory" className="hover:underline">
// //                     Our Story
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/contactUs" className="hover:underline">
// //                     Contact
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="bg-red1 text-white py-4 w-full md:w-full rounded-xl px-6 mb-6">
// //               <div className="text-center">
// //                 <h2 className="text-lg font-bold mb-2">Stay Updated</h2>
// //                 <p className="text-base mb-2">
// //                   Sign up for our newsletter to receive the latest news and
// //                   updates about upcoming festivals and events.
// //                 </p>
// //                 <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-2">
// //                   <input
// //                     type="email"
// //                     placeholder="Enter your email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     className="w-full sm:w-auto p-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                     required
// //                   />
// //                   <button
// //                     type="submit"
// //                     className="w-full sm:w-auto bg-white text-red-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
// //                   >
// //                     Subscribe
// //                   </button>
// //                 </form>
// //                 {error && <p className="text-red-300 mb-2">{error}</p>}
// //                 {submitted && (
// //                   <p className="text-green-300 mb-2">
// //                     Thank you for subscribing!
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
       
// //         <hr className="bg-white w-full mb-4" />
       
// //         <div className="w-full  flex flex-row items-center  space-x-4">
        
// //           <div className="footer-bottom flex flex-row items-center space-y-4 space-x-96">
// //             <p className="text-gray-400">
// //               &copy; {new Date().getFullYear()} Festiva Jo | All Rights Reserved
// //             </p>
// //             <div className="social-icons flex space-x-4">
// //               <a
// //                 href="https://facebook.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-600 hover:text-blue-800 transition duration-300"
// //               >
// //                 <FaFacebook className="text-2xl" />
// //               </a>
// //               <a
// //                 href="https://instagram.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-pink-600 hover:text-pink-800 transition duration-300"
// //               >
// //                 <FaInstagram className="text-2xl" />
// //               </a>
// //               <a
// //                 href="https://linkedin.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-700 hover:text-blue-900 transition duration-300"
// //               >
// //                 <FaLinkedin className="text-2xl" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;



// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "./Footer.css";
// import axios from "axios";
// import { useState } from "react";

// function Footer() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Simple email validation
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     setError("");

//     try {
//       const response = await axios.post(
//         "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
//         { email }
//       );

//       if (response.status !== 200) {
//         throw new Error("Network response was not ok.");
//       }

//       setEmail("");
//       setSubmitted(true);
//     } catch (error) {
//       setError("There was an issue with the submission. Please try again.");
//     }
//   };

//   return (
//     <footer className="footer p-2">
//       <div className="flex  items-start">
//         <div className="footer-logo">
//           <img
//             src="src/Logo11.png"
//             alt="Logo"
//             className="w-32 h-32 object-contain mx-20"
//           />
//         </div>
//         <div className="footer-content flex-grow">
//           <div className="footer-section">
//             <h4 className="font-bold mb-4">Quick Links</h4>
//             <ul>
//               <li className="mb-2">
//                 <Link to="/Admin" className="hover:underline">
//                   Home
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/Details" className="hover:underline">
//                   About
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/OurStory" className="hover:underline">
//                   Our Story
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/contactUs" className="hover:underline">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="bg-red1 text-white py-2 w-50 rounded-xl mx-20">
//           <div className="container mx-auto px-6 md:px-12 text-center">
//             <h2 className="text-xl md:text-2xl font-bold mb-6">Stay Updated</h2>
//             <p className="text-lg mb-0">
//               Sign up for our newsletter to receive the latest news and updates
//               about upcoming festivals and events.
//             </p>
//             <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//               <div className="flex flex-col sm:flex-row gap-1 mb-2">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//               {error && <p className="text-red-300 mb-4">{error}</p>}
//               {submitted && (
//                 <p className="text-green-300 mb-4">
//                   Thank you for subscribing!
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom mt-10">
//         <div className="social-icons flex justify-center gap-4 mt-4">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
//           </a>

//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800" />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
//           </a>
//         </div>
//         <div>
//           {" "}
//           <p className="text-center mt-4">
//             &copy; {new Date().getFullYear()} Festi Tecki | All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "./Footer.css";
// import axios from "axios";
// import { useState } from "react"
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