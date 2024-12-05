// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // import '../styles/Categories.css'; 
// const AllCategories = () => {
//   const navigate = useNavigate();

//   // Handler to navigate to specific pages
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="container py-5 text-center">
//       <h1 className="mb-4">Categories</h1>
//       <div className="row g-3">
//         <div className="col-md-4 col-sm-6">
//           <button
//             className="btn btn-outline-dark w-100 py-3"
//             onClick={() => handleNavigation('/smartdisplays')}
//           >
//             Smart Displays
//           </button>
//         </div>
//         <div className="col-md-4 col-sm-6">
//           <button
//             className="btn btn-outline-dark w-100 py-3"
//             onClick={() => handleNavigation('/smartlighting')}
//           >
//              Smart Lighting
//           </button>
//         </div>
//         <div className="col-md-4 col-sm-6">
//           <button
//             className="btn btn-outline-dark w-100 py-3"
//             onClick={() => handleNavigation('/smartsecurity')}
//           >
//           Smart Security
//           </button>
//         </div>
//         <div className="col-md-4 col-sm-6">
//           <button
//             className="btn btn-outline-dark w-100 py-3"
//             onClick={() => handleNavigation('/smartspeakers')}
//           >
//             Smart Speakers
//           </button>
//         </div>
//         <div className="col-md-4 col-sm-6">
//           <button
//             className="btn btn-outline-dark w-100 py-3"
//             onClick={() => handleNavigation('/smartswitches')}
//           >
//             Smart Switches
//           </button>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default AllCategories;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllCategories = () => {
  const navigate = useNavigate();

  // Handler to navigate to specific pages
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container py-5">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Explore Our Categories</h1>
        <p className="lead text-muted">Find the smart devices that suit your needs</p>
      </div>

      {/* Categories Grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Category: Smart Displays */}
        <div className="col">
          <div
            className="card shadow-sm border-0"
            onClick={() => handleNavigation('/smartdisplays')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Smart Displays</h5>
              <p className="card-text text-muted">Enhance your experience with interactive screens.</p>
            </div>
          </div>
        </div>

        {/* Category: Smart Lighting */}
        <div className="col">
          <div
            className="card shadow-sm border-0"
            onClick={() => handleNavigation('/smartlighting')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Smart Lighting</h5>
              <p className="card-text text-muted">Light up your space with smart solutions.</p>
            </div>
          </div>
        </div>

        {/* Category: Smart Security */}
        <div className="col">
          <div
            className="card shadow-sm border-0"
            onClick={() => handleNavigation('/smartsecurity')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Smart Security</h5>
              <p className="card-text text-muted">Secure your home with advanced systems.</p>
            </div>
          </div>
        </div>

        {/* Category: Smart Speakers */}
        <div className="col">
          <div
            className="card shadow-sm border-0"
            onClick={() => handleNavigation('/smartspeakers')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Smart Speakers</h5>
              <p className="card-text text-muted">Enjoy crystal-clear audio with voice control.</p>
            </div>
          </div>
        </div>

        {/* Category: Smart Switches */}
        <div className="col">
          <div
            className="card shadow-sm border-0"
            onClick={() => handleNavigation('/smartswitches')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Smart Switches</h5>
              <p className="card-text text-muted">Control appliances with modern ease.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
