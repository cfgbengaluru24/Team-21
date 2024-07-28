
import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is properly imported

const Aboutus = () => {
  return (
    <div className="flex flex-wrap justify-between p-6 bg-gray-100">
      <div className="w-full lg:w-1/2 p-2">
        <img src="https://static.independent.co.uk/2023/04/06/12/newFile-4.jpg" />
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-green-400 text-2xl font-bold">ABOUT US</h2>
        <h1 className="text-4xl font-bold mt-2 text-green-700">Creating a Circular Economy around Lantana – for Indigenous Livelihoods and Forest Restoration</h1>
        <p className="text-green-400 text-lg mt-4">
        The Shola Trust is a non-profit, Charitable Trust involved in nature conservation in the Nilgiri region of South India. A group of young people based in Gudalur, at the edge of the Mudumalai Tiger Reserve, who are keen on doing something to protect the natural world around us. Most of us have ‘regular’ jobs, but spend the better part of our time working on conservation. We believe everyone is a wildlife enthusiast, excited at the prospect of seeing an elephant or tiger, and we try to help channel this enthusiasm towards conservation.

The Sholas are a unique forest type, endemic to the southern part of the western ghats, and were the inspiration for us to start this organisation, hence the name.
        </p>
        
      </div>
    </div>
  );
}

export default Aboutus;

