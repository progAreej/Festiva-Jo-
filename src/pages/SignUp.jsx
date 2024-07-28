import { auth } from "../firebase-config/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex = /^(?=.*[A-Za-z]).{6,}$/;
    return regex.test(password);
  };

  const register = async () => {
    setError("");
    if (!validateEmail(registerEmail)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(registerPassword)) {
      setError(
        "Password must be at least 8 characters long and include at least one letter and one number"
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const customersData = await axios.get(
        "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json"
      );
      const customersLength = customersData.data
        ? Object.keys(customersData.data).length
        : 0;

      await axios.put(
        `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersLength}.json`,
        {
          active: true,
          email: registerEmail,
          isDeleted: false,
          name: registerName,
          role: "Customer",
        }
      );

      sessionStorage.setItem("register", customersLength);
      await Swal.fire({
        title: "Congratulations!",
        text: "You get a 10% discount. Your code for DISCOUNT is: DISCOUNT10",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          title: "text-lg font-bold",
          content: "text-base",
          confirmButton: "bg-red1 text-white hover:bg-red2",
        },
      });

      navigate("/login");
      console.log("User successfully registered:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const customersData = await axios.get(
        "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json"
      );
      const customersLength = customersData.data
        ? Object.keys(customersData.data).length
        : 0;

      await axios.put(
        `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersLength}.json`,
        {
          active: true,
          email: user.email,
          isDeleted: false,
          name: user.displayName,
          role: "Customer",
        }
      );

      sessionStorage.setItem("register", customersLength);
      // alert("Congratulations! You get a 10% discount.");
      await Swal.fire({
        title: "Congratulations!",
        text: "You get a 10% discount. Your code for DISCOUNT is: DISCOUNT10",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          title: "text-lg font-bold",
          content: "text-base",
          confirmButton: "bg-red1 text-white hover:bg-blue-600",
        },
      });
      navigate("/login");
      console.log("User signed in with Google:", user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="pg-page flex items-center justify-center p-36  bg-cover bg-center bg-gray-800"
      style={{ backgroundImage: `url(./src/assets/img/bg.png)` }}
    >
      <div className="max-w-md mx-auto p-8 bg-white  bg-opacity-80 shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold mb-8 text-center text-page1">
          SignUp{" "}
        </h3>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          id="RrgName"
          type="text"
          placeholder="Name..."
          value={registerName}
          onChange={event => setRegisterName(event.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
        />
        <input
          id="RrgEmail"
          type="email"
          placeholder="Email..."
          value={registerEmail}
          onChange={event => setRegisterEmail(event.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
        />
        <input
          id="RrgPassword"
          type="password"
          placeholder="Password..."
          value={registerPassword}
          onChange={event => setRegisterPassword(event.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
        />
        <button
          onClick={register}
          className="w-full py-2 bg-red1 text-white rounded-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1 mb-4"
        >
          SignUp
        </button>
        <div className="flex justify-center mb-4">
          <GoogleButton onClick={handleGoogleSignUp} />
        </div>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
