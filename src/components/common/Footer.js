import React from 'react';

const Footer = () => {
    const footerStyles = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1f2937'
      };
  return (
    <footer style={footerStyles} className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center">
          {/* Social Icons */}
          {/* You can create a separate component for social icons for better organization */}
          {/* I'm providing the content directly here for simplicity */}
          {Array.from(Array(7).keys()).map(index => (
            <a
              key={index}
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* You can add the appropriate paths for each social icon */}
                {/* Replace with appropriate paths for each social icon */}
                <path d="M0 0"></path>
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full p-4 text-center" style={{ backgroundColor: '#1f2937' }}>
        © 2023 Copyrighted by 
        <a className="text-white ml-2" href="#">
           Mashiour
        </a>
      </div>
    </footer>
  );
};

export default Footer;
