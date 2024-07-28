import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
const LogInAdmin = () => {
  const [loginAdminEmail, setLoginAdminEmail] = useState("");
  const [loginAdminPassword, setLoginAdminPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    const adminsData = await axios.get(
      `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/admins.json`
    );
    let foundAdminEmail = false;
    let foundAdminPassword = false;
    let isDeletedAdmin = false;
    let adminId = null;
    for (const key in adminsData.data) {
      console.log(adminsData.data[key].email);
      console.log(loginAdminEmail);
      console.log(adminsData.data[key].password);
      console.log(loginAdminPassword);
      if (
        adminsData.data[key].email === loginAdminEmail &&
        adminsData.data[key].password === loginAdminPassword
      ) {
        foundAdminEmail = true;
        foundAdminPassword = true;
        isDeletedAdmin = adminsData.data[key].isDeleted;
        adminId = key;
        console.log(foundAdminEmail);
        console.log(foundAdminPassword);
        console.log(isDeletedAdmin);
        console.log(adminId);
        navigate("/Admin");
        break;
      }

      if (!foundAdminEmail) {
        setShow(true);
        setErrorMessage("Incorrect email or password");
        setTimeout(() => {
          setShow(false);
        }, 3000);

        return;
      }

      if (isDeleted) {
        alert("You can't enter. Your account is deleted.");
        return;
      }

      if (!foundAdminPassword) {
        alert("You can't enter. Your password is incorrect.");
        return;
      }

      sessionStorage.setItem("adminId", adminId);

      setLoginAdminEmail("");
      setLoginAdminPassword("");
    }
  };

  return (
    <>
      <ErrorAlert error={errorMessage} show={show} />
      <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg mt-48 ">
        <h3 className="text-2xl font-semibold mb-6 text-center text-page1">Login</h3>
        <input
          id="LogEmailAdmin"
          type="emailAdmin"
          placeholder="Email..."
          value={loginAdminEmail}
          onChange={event => setLoginAdminEmail(event.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          id="LogPass"
          type="password"
          placeholder="Password..."
          value={loginAdminPassword}
          onChange={event => setLoginAdminPassword(event.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={login}
          className="w-full py-2 bg-red1 text-white rounded-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LogInAdmin;
