import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/twitter';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';
import 'react-social-icons/tiktok';

const Header = () => {
  return (
    <header id='header' className='flex items-start justify-between text-white max-w-7xl mx-auto p-5 z-20 xl:items-center'>
      {/**social icons */}
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        id='socialIcons'
      >
        <SocialIcon
          url='https://www.facebook.com/dahir.abdirashid.925'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitter.com/101Dahir28024'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/rashka_othman101/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/dahir-abdirashid-othman-%E2%9A%A1%EF%B8%8F-14ba0b236/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex items-center'
      >
        <SocialIcon
          className='cursor-pointer text-xs'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <div id='headerRight'>
          <p className=' hidden md:inline-flex text-sm uppercase text-gray-400'>
            get in touch
          </p>
          <p className='hidden md:block text-xs text-gray-400'>
            rashkadev443@gmail.com
          </p>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
