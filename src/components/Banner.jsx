import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['App ideas', 'Websites', '&', "I'm a full stack developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='text-white'>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
        className='flex flex-col justify-center items-center pt-28'
      >
        <img src='/image/me3.jpg' alt='' className='w-32 h-32  rounded-full' />
        <h2 id='title'>hey, i`m rashid othman 👋</h2>
        <p id='jobText'>full stack developer!</p>
        <p id='based' className='text-gray-400 text-xs'>
          ( based in somalia )
        </p>
        <h1 className='text-gray-400 pt-3'>
          A designer with
          <span id='idea' className='pl-2 text-blue-400'>
            {text}
          </span>
          <Cursor cursorColor='#4529ea' />
        </h1>
        <div
          id='buttons'
          className='flex items-center space-x-3 max-sm:flex max-sm:flex-col max-sm:space-x-0'
        >
          <Link
            to='/contact'
            className='max-sm:w-96 max-sm:flex max-sm:justify-center flex items-center pl-4 border-2 w-36  border-gray-900 h-10 capitalize cursor-pointer rounded'
          >
            contact us <FaEnvelope className='ml-2' />{' '}
          </Link>
          {/* <button className='max-sm:w-96 max-sm:flex max-sm:justify-center flex items-center pl-4 border-2 w-36  border-gray-900 h-10 capitalize cursor-pointer rounded'>
            contact me
            <FaEnvelope className='ml-2' />
          </button> */}
          <p>or</p>
          <button className='max-sm:w-96 max-sm:flex max-sm:justify-center max-sm:pt-2 border-2 w-36  border-gray-900 h-10 capitalize cursor-pointer rounded'>
            email *
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
