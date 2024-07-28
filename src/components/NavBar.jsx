
// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { NavLink } from "react-router-dom";
// // // import "./NavBar.css";

// // // function NavBar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   return (
// // //     <nav>
// // //       <Link to="/" className="title">
// // //         Festi Tecki
// // //       </Link>
// // //       <div
// // //         className="menu"
// // //         onClick={() => {
// // //           setMenuOpen(!menuOpen);
// // //         }}
// // //       >
// // //         <span></span>
// // //         <span></span>
// // //         <span></span>
// // //       </div>
// // //       <ul className={menuOpen ? "open" : ""}>
// // //         <li>
// // //           <NavLink to="/Admin">Home</NavLink>
// // //         </li>
// // //         <li>
// // //           <NavLink to="/Details">About</NavLink>
// // //         </li>
// // //         <li>
// // //           <NavLink to="/OurStory">Our Story</NavLink>
// // //         </li>
// // //         <li>
// // //           <NavLink to="/contactUs">Contact</NavLink>
// // //         </li>
// // //         <li>
// // //           <NavLink to="/Catalog">Event</NavLink>
// // //         </li>
// // //         <li>
// // //           <NavLink to="/Signup">
// // //             <button className="signup-button">Signup</button>
// // //           </NavLink>{" "}
// // //           {/* Added Signup button */}
// // //         </li>
// // //       </ul>
// // //     </nav>
// // //   );
// // // }

// // // export default NavBar;
// // // ///////////////////

// // import React, { useState } from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import "./NavBar.css";

// // function NavBar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <nav className="navbar">
// //       <Link to="/" className="navbar-title">
// //         Festi Tecki
// //       </Link>
// //       <div
// //         className="navbar-menu"
// //         onClick={() => {
// //           setMenuOpen(!menuOpen);
// //         }}
// //       >
// //         <span></span>
// //         <span></span>
// //         <span></span>
// //       </div>
// //       <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
// //         <li>
// //           <NavLink to="/" ClassName="active" exact>
// //             Home
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/Details" ClassName="active">
// //             About
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/OurStory" ClassName="active">
// //             Our Story
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/contactUs" ClassName="active">
// //             Contact
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/Catalog" ClassName="active">
// //             Event
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/Booking" ClassName="active">
// //             Booking
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/Profile" ClassName="active">
// //             Profile
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/SignUp" ClassName="active">
// //             <button className="navbar-signup-button">SignUp</button>
// //           </NavLink>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default NavBar;




// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
//       <Link to="/" className="navbar-title">
//         <img
//           src="src/Logo11.png"
//           alt="Logo"
//           className="navbar-logo"
//           width="75px"
//           height="auto"
//         />
//       </Link>
//       <div
//         className="navbar-menu"
//         onClick={() => {
//           setMenuOpen(!menuOpen);
//         }}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
//         <li>
//           <NavLink to="/" ClassName="active" exact>
//             Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/OurStory" ClassName="active">
//             Our Story
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contactUs" ClassName="active">
//             Contact
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Catalog" ClassName="active">
//             Event
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/Profile" ClassName="active">
//             Profile
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/SignUp" ClassName="active">
//             <button className="navbar-signup-button">SignUp</button>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;


import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const userId = sessionStorage.getItem('customerId');
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []); 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleLogout = () => {
    sessionStorage.removeItem('customerId');
    sessionStorage.removeItem('register');

    setIsLoggedIn(false);
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-title">
        <img
          src="./src/assets/img/logo11.png"
          alt="Logo"
          className="navbar-logo"
          width="75px"
          height="auto"
        />
      </Link>
      <div
        className="navbar-menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/OurStory" className="active">
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/Catalog" className="active">
            Festivals
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactUs" className="active">
            Contact Us
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/Profile" className="active">
              Profile
            </NavLink>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button className="navbar-signup-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/SignUp" className="active">
              <button className="navbar-signup-button">Sign Up</button>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;