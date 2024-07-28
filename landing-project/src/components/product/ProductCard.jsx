import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          
          <p className="text-gray-900 text-xl mt-2">₹{price}</p>
        </div>
        {/* <div className="px-6 py-4">
          <button className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Add To Cart
          </button>
        </div> */}
      </div>
    </div>
    
    </>

    
  );
};

export default ProductCard;
