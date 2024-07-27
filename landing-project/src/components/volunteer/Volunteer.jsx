import React from 'react';

const Volunteer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8">VOLUNTEER APPLICATION</h2>
        <form className="space-y-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-green-400 text-xs font-bold mb-2" htmlFor="name">
                NAME
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-green-400 text-xs font-bold mb-2" htmlFor="phone">
                PHONE NUMBER
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-400 text-xs font-bold mb-2" htmlFor="email">
                E-MAIL
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
 
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:shadow-outline"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
