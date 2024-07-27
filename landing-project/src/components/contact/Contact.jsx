//Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="p-4" > {/* Use padding as needed */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScUm_egezyEBhAk2kTfLsmDS69bjtWNn7Uo-eDFs8FV80nN8Q/viewform?embedded=true" 
        height="640"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="yes"
        className="w-full h-screen"  // Adjust height as needed
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;