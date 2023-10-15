import React from 'react';

const Footer = () => {
    const footerStyles = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#111827',
        zIndex: 1,
      };
  return (
    <footer style={footerStyles} className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        
      </div>

      {/* Copyright section */}
      <div className="w-full p-3 text-center" style={{ backgroundColor: '#111827' }}>
        © 2023 Copyrighted by 
        <a className="text-white ml-2" href="#">
           Mashiour
        </a>
      </div>
    </footer>
  );
};

export default Footer;
