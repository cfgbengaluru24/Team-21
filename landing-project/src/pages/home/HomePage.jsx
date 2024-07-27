// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const HomePage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="w-full">
//         <Slider {...settings} className="w-full">
//           <div>
//             <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://st2.depositphotos.com/3591429/11974/i/450/depositphotos_119741292-stock-photo-people-drawing-banner.jpg)' }}>
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="text-center text-white p-4">
//                   <h2 className="text-4xl font-bold">Let's Build The Better World Together</h2>
//                   <p className="mt-4">Provident tenetur...</p>
//                   <div className="mt-4">
//                     <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
//                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://irp.cdn-website.com/3f4c882c/dms3rep/multi/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a.webp)' }}>
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="text-center text-white p-4">
//                   <h2 className="text-4xl font-bold">Another Slide</h2>
//                   <p className="mt-4">Lorem ipsum dolor sit...</p>
//                   <div className="mt-4">
//                     <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
//                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Add more slides as needed */}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default HomePage;
//import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Programs from '../../components/Program/Programs';
// import AboutSection from '../../components/About/AboutSection';
import VideoSection from '../../components/Video/VideoSection';

import elephant1 from '../../assets/images/elephant1.png';
import elephant2 from '../../assets/images/elephant2.png';
import Footer from '../../components/footer/Footer';


const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Navbar />
      <div className="w-full overflow-hidden mt-8">
        <Slider {...settings} className="w-full">
          <div>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${elephant1})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-4xl font-bold">Weeds to Wealth</h2>
                  <p className="mt-4">Creating a Circular Economy around Lantana – for Indigenous Livelihoods and Forest Restoration</p>
                  <div className="mt-4">
                    <button className="bg-green-400 text-white px-4 py-2 rounded mr-2">Donate fund</button>
                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${elephant2})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-4xl font-bold">The Lantana Elephants</h2>
                  <div className="mt-10">
                    <button className="bg-green-400 text-white px-4 py-2 rounded mr-2">Shop Here</button>
                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
        {/* <AboutSection /> */}
        <Programs/>
        <VideoSection/>
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;