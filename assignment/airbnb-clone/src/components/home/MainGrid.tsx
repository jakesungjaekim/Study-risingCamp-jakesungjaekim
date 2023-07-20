import { useEffect, useState } from 'react';

import MainCard from './MainCard'


const MainGrid = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className='w-screen px-10 mt-4'>
      <div className='grid w-full h-full grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-10 2xl:grid-cols-5 3xl:grid-cols-6'> 
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
        <MainCard size={windowSize}/>
      </div>
    </main>
  )
}

export default MainGrid