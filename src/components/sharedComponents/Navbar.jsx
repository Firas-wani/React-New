// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "../../styles/Navbar.css";
// import api from '../../utils/AxiosInstance';
// import { ToastContainer, toast } from "react-toastify";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user data to determine login status
//   const getUserData = async () => {
//     try {
//       const res = await api.get("/user/getuser"); // Fetch user details
//       if (res.data.userDetails && res.data.userDetails.email) {
//         setIsLoggedIn(true);
//         // setUsername(res.data.userDetails.username);
//         console.log(res.data);
        
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setIsLoggedIn(false); // User is not logged in
//       setUsername(null);
//     }
//   };

//   useEffect(() => {
//     getUserData(); // Call on component mount
    
    
//   }, []);

//   // Handle Logout
//   const handleLogout = async () => {
//     try {
//       const res = await api.post('/user/logout'); // Call logout API
//       if (res.data.message === "User logged out successfully") {
//         toast.success("User logged out successfully");
//         setIsLoggedIn(false); // Update state
//         setUsername(null);
//         navigate('/login'); // Redirect to login
//       } else {
//         toast.error("Failed to log out. Please try again.");
//       }
//     } catch (error) {
//       console.error('Logout failed:', error);
//       toast.error("An error occurred while logging out.");
//     }
//   };

//   return (
//     <nav className='navbar'>
//       <div className="logo">
//         <Link to="/"><h1>Smart Home Devices</h1></Link>
//       </div>

//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/categories">Categories</Link>
//         </li>

//         {!isLoggedIn ? (
//           <>
//             <li>
//               <Link to="/signup">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </>
//         ) : (
//           <>
//           <li>
//         <span className="navbar-username">Welcome, {username}</span>
//       </li>
//             <li>
//               <button onClick={handleLogout} className="logout-btn">Logout</button>
//             </li>
//             <li>
//               <Link to="/cart">Cart</Link>
//             </li>
//           </>
//         )}
//       </ul>
//       <ToastContainer />
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/Navbar.css";
import api from '../../utils/AxiosInstance';
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  // Fetch user data to determine login status
  const getUserData = async () => {
    try {
      const res = await api.get("/user/getuser"); // Fetch user details
      if (res.data.userDetails && res.data.userDetails.email) {
        setIsLoggedIn(true);
        // setUsername(res.data.userDetails.username);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoggedIn(false); // User is not logged in
      setUsername(null);
    }
  };

  useEffect(() => {
    getUserData(); // Call on component mount
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      const res = await api.post('/user/logout'); // Call logout API
      if (res.data.message === "User logged out successfully") {
        toast.success("User logged out successfully");
        setIsLoggedIn(false); // Update state
        setUsername(null);
        navigate('/login'); // Redirect to login
      } else {
        toast.error("Failed to log out. Please try again.");
      }
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error("An error occurred while logging out.");
    }
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to="/"><h1>Smart Home Devices</h1></Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className="dropdown" 
          onMouseEnter={() => setShowDropdown(true)} 
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link to="/categories">Categories</Link>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/allcategories">All Categories</Link></li>
              <li><Link to="/smartspeakers">Smart Speakers</Link></li>
              <li><Link to="/smartlighting">Smart Lighting</Link></li>
              <li><Link to="/smartdisplays">Smart Displays</Link></li>
              <li><Link to="/smartsecurity">Smart Security</Link></li>
              <li><Link to="/smartswitches">Smart Switches</Link></li>
            </ul>
          )}
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/signup">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <span className="navbar-username">Welcome, {username}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </>
        )}
      </ul>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
