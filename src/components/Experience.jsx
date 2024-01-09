import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className=' h-72'>
      <h3 className=' pt-20 text-xl text-gray-500 text-center font-bold'>
        Experience :
      </h3>
      <div
        id='experience'
        className='flex flex-wrap justify-center items-center gap-4   mt-8
        '
      >
        <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-28 h-8'>
          <FaHtml5 className='text-orange-600 text-xl' />
          <p>Html5</p>
        </div>
        <div className=' flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-24 h-8'>
          <FaCss3 className='text-xl text-blue-400' />
          <p>Css3</p>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-28 h-8'>
          <SiNextdotjs className='text-xl' />
          <p>Next.js</p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-32 h-8
      '>
          <SiJavascript color='yellow' />
          <p>JavaScript</p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-28 h-8
        '>
          <FaNodeJs className='text-green-400' />
          <p>Node.js</p>
        </div>
        <div id='experience' className='flex flex-wrap items-center justify-center gap-4 pt-1 
        max-sm:p-3'>
          <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-32 h-8
          '>
            <SiExpress className='text-xl' />
            <p>Express</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-32 h-8'>
            <SiTypescript className=' text-blue-500' />
            <p>TypeScript</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-32 h-8
          '>
            <SiMongodb className='text-green-700' />
            <p>MongoDB</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-24 h-8
          '>
            <FaSass className='text-pink-700' />
            <p>Sass</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-28 h-8
          '>
            <FaReact className='text-blue-300' />
            <p>React.js</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 border-2 border-gray-700 rounded-full  text-center pt-1 w-36 h-8
          '>
            <SiTailwindcss className='text-blue-400' />
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
