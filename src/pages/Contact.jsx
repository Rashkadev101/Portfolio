//import React from 'react'

const Contact = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };
  return (
    <div id='contactPage' className='text-white mt-8'>
      <div onClick={handleLogoClick} className="max-sm:text-center max-md:text-center ">
        <button className='text-gray-300 font-bold pl-32 max-sm:pl-0 max-md:pl-0 capitalize cursor-pointer hover:underline transition ease-out hover:text-gray-200'>
          back home page!
        </button>
      </div>
      <div className='ml-[70vh] pt-8 max-sm:text-center max-sm:m-0 max-md:text-center max-md:m-0 '>
        <h3 className='text-lg font-bold capitalize'>Contact us page!</h3>
        <p>let`s talk about working together</p>
      </div>
      <div className='flex flex-row flex-wrap justify-center space-x-3 items-center  mt-5 max-sm:flex max-sm:flex-col max-sm:space-x-0  max-sm:gap-3 max-md:space-x-0 max-md:gap-3'>
        <button className='border-2 w-40 h-10 capitalize cursor-pointer rounded max-sm:w-[85%] max-md:w-[85%]'>
          book call
        </button>
        <button className='border-2 w-40 h-10 capitalize cursor-pointer rounded max-sm:w-[85%] max-md:w-[85%]'>
          email *
        </button>
        <button className='border-2 w-40 h-10 capitalize cursor-pointer rounded max-sm:w-[85%] max-md:w-[85%]'>
          twit me
        </button>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <div className='flex flex-wrap justify-center items-center space-x-4 mt-5 max-sm:space-x-0  max-sm:gap-3 '>
          <input
            type='text'
            placeholder='your name'
            className='w-60 h-10 rounded pl-5 max-sm:w-[85%] max-md:w-80'
          />
          <input
            type='email'
            placeholder='email'
            className='w-64 h-10 rounded pl-5 max-sm:w-[85%] max-md:w-72 '
          />
        </div>
        <textarea
          placeholder='your message...'
          className='w-[37.5%] h-64 rounded pl-5 mt-5 max-sm:w-[85%] max-sm:h-52 max-md:w-[85%] max-md:h-48'
        />
        <button className='w-[37.5%] h-10 font-bold capitalize cursor-pointer rounded mt-5 bg-white text-black max-sm:w-[85%] max-sm:mt-2 max-md:w-[85%] max-md:mt-2'>
          send
        </button>
      </div>
    </div>
  );
};

export default Contact;
