//import React from 'react'

const About = () => {
  return (
    <div className='text-white mt-20'>
      {/*  */}
      <div
        id='aboutUs'
        className=' flex flex-row justify-center items-center space-x-8'
      >
        <h2 className='hidden lg:inline-flex md:inline-flex'>About us!</h2>
        <div className='max-sm:flex max-sm:flex-col max-sm:justify-center flex items-center space-x-2'>
          <p className='max-sm:pt-3 text-lg text-gray-500 font-bold capitalize'>
            nece to meet you! i am{' '}
          </p>
          <img
            src='/image/me3.jpg'
            alt=''
            className='w-10 h-10 rounded-full max-sm:w-48 max-sm:h-48 max-sm:mt-4 max-sm:rounded '
          />
          <p className='max-sm:pt-4'>
            <span className='capitalize'>dahir.</span> I design & code
            beatifully simple things.
          </p>
        </div>
      </div>
      <div
        id='aboutText'
        className='flex flex-col justify-center items-center  pt-8  max-sm:text-sm max-sm:pl-12 max-sm:pt-8 max-sm:p-3'
      >
        <p className=' max-sm:text-sm max-sm:pl-2  text-gray-400'>
          Contrary to popular belief, Lorem Ipsum is not simply random text.{' '}
         
          It has roots <br /> in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old
        </p>
        <p className='pt-7 text-gray-400  max-sm:text-sm max-sm:pt-4 max-sm:pl-2'>
          Contrary to popular belief, Lorem Ipsum is not simply random text.{' '}
         
          It has roots <br /> in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old
          <p className='pt-6'>
            {' '}
            Here are a few technologies I’ve been working with recently:
          </p>
        </p>
      </div>
      <div className=' max-sm:flex max-sm:justify-center max-sm:items-center max-sm:m-auto max-sm:mt-7 max-md:flex max-md:justify-center max-md:items-center max-md:m-auto max-md:mt-7 flex justify-around space-x-8 mt-7 text-gray-400 w-96 ml-96 h-36 p-5'>
        {/**left */}
        <div className='flex flex-col gap-1'>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            ➡ Html
          </p>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            ➡ JavaScript (ES7)
          </p>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            {' '}
            ➡ React.js
          </p>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            {' '}
            ➡ Css3
          </p>
        </div>
        {/**right */}
        <div className='flex flex-col gap-1'>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            {' '}
            ➡ Next.js
          </p>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            {' '}
            ➡ Tailwind Css
          </p>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            {' '}
            ➡ Node.js
          </p>
          <p className='hover:text-white transition ease-out cursor-pointer'>
            {' '}
            ➡ MongoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
