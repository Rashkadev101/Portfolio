import { SiVercel } from 'react-icons/si';

import { FaFolder, FaGithub, FaNodeJs } from 'react-icons/fa';

const Work = () => {
  return (
    <div className='text-white mt-8'>
      <h3 id='build' className='text-center pt-7'>
        I build things for the web
      </h3>
      <div className='flex flex-wrap justify-center gap-3   pt-7 items-center max-sm:flex max-sm:flex-col  max-md:flex max-md:flex-wrap'>
        {/**card1 */}
        <div
          className='bg-gray-900 text-gray-400 w-[25%] h-60   p-5 rounded
        max-sm:w-[80%] max-md:w-[40%]'
        >
          <div className='flex justify-between'>
            <FaFolder />
            <FaGithub />
          </div>
          <h3 id='projectTitle'>rashid cafe</h3>
          <div className='flex items-center space-x-3 pt-3'>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              React.js
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-32 h-8'>
              Tailwind Css
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-24 h-8'>
              MongoDB
            </p>
          </div>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a pag
          </p>
        </div>
        {/**card2 */}
        <div
          className='bg-gray-900 text-gray-400 w-[25%] h-60 p-5 rounded
        max-sm:w-[80%] max-md:w-[40%]'
        >
          <div className='flex justify-between'>
            <FaFolder />
            <div className='flex items-center space-x-3'>
              <FaGithub />
              <FaNodeJs />
            </div>
          </div>
          <h3 id='projectTitle'>car rental</h3>
          <div className='flex items-center space-x-3 pt-3'>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              React.js
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Express
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Node.js
            </p>
          </div>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a pag
          </p>
        </div>
        {/**card3 */}
        <div
          className='bg-gray-900 text-gray-400 w-[25%] h-60 p-5 rounded
        max-sm:w-[80%] max-md:w-[40%]'
        >
          <div className='flex justify-between'>
            <FaFolder />
            <FaGithub />
          </div>
          <h3 id='projectTitle'>blog apllication</h3>
          <div className='flex items-center space-x-3 pt-3'>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Next.js
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-32 h-8'>
              Tailwind Css
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Express
            </p>
          </div>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a pag
          </p>
        </div>
        {/**card4 */}
        <div
          className='bg-gray-900 text-gray-400 w-[25%] h-60 p-5 rounded
        max-sm:w-[80%] max-md:w-[40%]'
        >
          <div className='flex justify-between'>
            <FaFolder />
            <FaGithub />
          </div>
          <h3 id='projectTitle'>house rental</h3>
          <div className='flex items-center space-x-3 pt-3'>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Html5
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Css3
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-28 h-8'>
              JavaScript
            </p>
          </div>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a pag
          </p>
        </div>
        {/**card5 */}
        <div
          className='bg-gray-900 text-gray-400 w-[25%] h-60 p-5 rounded
        max-sm:w-[80%] max-md:w-[40%]'
        >
          <div className='flex justify-between'>
            <FaFolder />
            <div className='flex items-center space-x-2 cursor-pointer'>
              <SiVercel />
              <FaGithub />
            </div>
          </div>
          <h3 id='projectTitle'>haboon deqa</h3>
          <div className='flex items-center space-x-3 pt-3'>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              React.js
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-32 h-8'>
              Tailwind Css
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-28 h-8'>
              TypeScript
            </p>
          </div>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a pag
          </p>
        </div>
        {/**card6 */}
        <div
          className='bg-gray-900 text-gray-400 w-[25%] h-60 p-5 rounded
        max-sm:w-[80%] max-md:w-[40%]'
        >
          <div className='flex justify-between'>
            <FaFolder />
            <FaGithub />
          </div>
          <h3 id='projectTitle'>travel app</h3>
          <div className='flex items-center space-x-3 pt-3'>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-20 h-8'>
              Next.js
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-28 h-8'>
              TypeScript
            </p>
            <p className='bg-gray-600 rounded-full text-white text-center pt-1 w-24 h-8'>
              MongoDB
            </p>
          </div>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a pag
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
