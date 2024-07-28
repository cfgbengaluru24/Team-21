// //import React from 'react';
// //import React from 'react';
// import { Link } from 'react-router-dom';
// //import logo from '../assets/logo.png'; // Update this path to where your logo is stored

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div>
//               {/* <Link to="/" className="flex items-center py-5 px-2">
//                 <img src={logo} alt="Logo" className="h-10 w-auto" />
//               </Link> */}
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <Link to="/about-us" className="py-5 px-3 text-gray-700 hover:text-gray-900">ABOUT US</Link>
//               <Link to="/our-work" className="py-5 px-3 text-gray-700 hover:text-gray-900">OUR WORK</Link>
//               <Link to="/campaigns" className="py-5 px-3 text-gray-700 hover:text-gray-900">CAMPAIGNS</Link>
//               <Link to="/get-involved" className="py-5 px-3 text-gray-700 hover:text-gray-900">GET INVOLVED</Link>
//               <Link to="/media-center" className="py-5 px-3 text-gray-700 hover:text-gray-900">MEDIA CENTRE</Link>
//               <Link to="/resource-center" className="py-5 px-3 text-gray-700 hover:text-gray-900">RESOURCE CENTER</Link>
//               <Link to="/contact-us" className="py-5 px-3 text-gray-700 hover:text-gray-900">CONTACT US</Link>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link to="/support-a-cause" className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">SUPPORT A CAUSE</Link>
//             <button className="text-gray-700 hover:text-gray-900">
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 4a6 6 0 100 12 6 6 0 000-12z"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

//import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import logo from '../../assets/logo.png'; // Update this path to where your logo is stored

const Navbar = () => {
    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate('/Contact');
    
    };
    const handleShopClick = () => {
        navigate('/ProductCard');
    };
    const handleAboutUsClick = () => {
        navigate('/Aboutus');
      };
    const handleVolunteerClick = () => {
        navigate('/Volunteer');
      };
      const handleLoginClick = () => {
        navigate('/Login');
      };
      
      
  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <div>
              <Link to="/" className="flex items-center py-5 px-2">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </Link>
            </div> */}
            <div className="hidden md:flex items-center space-x-1">
           

<a href="#" className="py-5 px-3 text-green-500 hover:text-green-700" onClick={handleAboutUsClick}>ABOUT US</a>
<a href="#" className="py-5 px-3 text-green-500 hover:text-green-700" onClick={handleShopClick}>SHOP</a>
<a href="#" className="py-5 px-3 text-green-500 hover:text-green-700" onClick={handleVolunteerClick}>JOIN US</a>
<a href="http://127.0.0.1:5000//home" target='_blank' className="py-5 px-3 text-green-500 hover:text-green-700" onClick={handleLoginClick}>LOG IN</a>

<a href="#" className="py-5 px-3 text-green-500 hover:text-green-700" onClick={handleContactClick}>CONTACT</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/support-a-cause" className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">SUPPORT A CAUSE</Link>
            <button className="text-gray-700 hover:text-gray-900">
              
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
