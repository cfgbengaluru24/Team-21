//import React from 'react';

const Cards = () => {
  return (
    <>
    <h1 className='text-center text-orange-800 text-4xl mt-20'> GET INVOLVED</h1>
    <h1 className='text-center text-3xl text-black mt-8'> Lets Make A Difference Today</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 ml-20 mr-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfU2vvq7dET0LlF1n99MIFJggkoDLwADsbTHNwQaTP4FIu7d8A"
          alt="Placeholder image"
          className="w-34 h-52 object-cover ml-28"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-orange-700">Card Title 1</h3>
          <p className="text-gray-700 mb-3">Card description goes here.</p>
          <button className="px-3 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Join Us Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 ml-20 mr-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOelFp3QW32AYFW43G-sHstAT-pgpPLfefDpVA0buQVCLeqpI"
          className="w-34 h-52 object-cover ml-28 "
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-orange-700">Card Title 2</h3>
          <p className="text-gray-700 mb-3">Card description goes here.</p>
          <button className="px-3 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Donate Now
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 ml-20 mr-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDi_RaTS3YX3KDrnJMlcOZmqTmmLhxTnaU20O5GD9I_IkzIenb2koZD_cIFJOzxfe3Ps&usqp=CAU"
          alt="Placeholder image"
          className="w-34 h-48 object-cover ml-24"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-orange-700">Card Title 3</h3>
          <p className="text-gray-700 mb-3">Card description goes here.</p>
          <button className="px-3 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cards;
