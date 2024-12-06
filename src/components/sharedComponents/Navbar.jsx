import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";
import api from "../../utils/AxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); 

  
  const getUserData = async () => {
    try {
      const res = await api.get("/user/getuser");
      
      setUsername(res.data.userDetails.email); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  
  useEffect(() => {
    
    if (!username) {
      getUserData(); // Only call this if the user is not logged in or username is null
    }
  }, [setUsername]); // This effect depends on the username state

  // Handle Logout
  const handleLogout = async () => {
    Cookies.remove("token");
    setUsername("");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#E73879" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h1 className="text-white">Smart Home Devices</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/allcategories"
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/allcategories" className="dropdown-item">
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link to="/smartspeakers" className="dropdown-item">
                    Smart Speakers
                  </Link>
                </li>
                <li>
                  <Link to="/smartlighting" className="dropdown-item">
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link to="/smartdisplays" className="dropdown-item">
                    Smart Displays
                  </Link>
                </li>
                <li>
                  <Link to="/smartsecurity" className="dropdown-item">
                    Smart Security
                  </Link>
                </li>
                <li>
                  <Link to="/smartswitches" className="dropdown-item">
                    Smart Switches
                  </Link>
                </li>
              </ul>
            </li>

            {!username ? (
              <>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link text-white">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link text-white dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {username}
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <button onClick={handleLogout} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                    <li>
                      <Link to="/usercart" className="dropdown-item">
                        Cart
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;


