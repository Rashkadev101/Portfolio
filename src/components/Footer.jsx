//import React from 'react'

import { FaAngleUp } from 'react-icons/fa';

const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      id='footer'
      className='flex justify-center items-center space-x-16 text-gray-500 h-44
      max-sm:mt-12 max-sm:text-sm'
    >
      <div className='hidden md:block'>
        <p className=' text-sm uppercase text-gray-400'>get in touch</p>
        <p className='text-xs text-gray-400'>rashkadev443@gmail.com</p>
      </div>
      <div>
        <p>&copy; by Rashid Othman</p>
      </div>
      <div className='bg-white w-6 h-6 text-center text-xl cursor-pointer transition ease-out'>
        <button onClick={handleScrollUp}>
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
