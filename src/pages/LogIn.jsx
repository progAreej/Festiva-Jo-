import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // You may want to update your user state here if needed
    });

    return unsubscribe;
  }, []);

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const login = async () => {
    setError("");

    if (!validateEmail(loginEmail)) {
      setError("Invalid email format");
      return;
    }

    if (loginPassword.length < 6) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      // Fetch customer data based on loginEmail
      const customersData = await axios.get(
        `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json`
      );

      // Check if loginEmail exists and account is not marked as deleted or inactive
      let foundEmail = false;
      let isDeleted = false;
      let active = true;
      let customerId = null;

      for (const key in customersData.data) {
        if (customersData.data[key].email === loginEmail) {
          foundEmail = true;
          isDeleted = customersData.data[key].isDeleted || false; // Default to false if isDeleted is not defined
          active = customersData.data[key].active;
          customerId = key;
          break;
        }
      }

      if (!foundEmail) {
        setError("No customer found with this email.");
        return;
      }

      if (isDeleted) {
        setError("You can't enter. Your account is deleted.");
        return;
      }

      if (!active) {
        setError("You can't enter. Your account is inactive.");
        return;
      }

      // Store customer ID in sessionStorage if account is not deleted or inactive
      sessionStorage.setItem("customerId", customerId);

      // Clear input fields after successful login
      setLoginEmail("");
      setLoginPassword("");

      console.log("User successfully logged in:", userCredential.user);

      // Redirect to home page
      navigate("/");
    } catch (error) {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div
      className="pg-page flex items-center justify-center p-36  bg-cover bg-center bg-gray-800"
      style={{ backgroundImage: `url(./src/assets/img/bg.png)` }}
    >
      <div className="max-w-md  m-16 p-8 bg-white  bg-opacity-80 shadow-lg rounded-lg  ">
        <h3 className="text-2xl font-semibold mb-6 text-cener">Login</h3>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          id="LogEmail"
          type="email"
          placeholder="Email..."
          value={loginEmail}
          onChange={event => setLoginEmail(event.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
        />
        <input
          id="LogPass"
          type="password"
          placeholder="Password..."
          value={loginPassword}
          onChange={event => setLoginPassword(event.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
        />
        <button
          onClick={login}
          className="w-full py-2 bg-red1 text-white rounded-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <Link to="/SignUp" className="text-blue-500 hover:underline">
            <p>Don't have an account yet?</p>
          </Link>
          <Link to="/resetPassword" className="text-blue-500 hover:underline">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
