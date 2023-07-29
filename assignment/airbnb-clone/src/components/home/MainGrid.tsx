import { useEffect, useState, useRef } from 'react';
import MainCard from './MainCard'
import { IPropsMainGrid } from '../../@types/IPropsMainGrid';
// import { useFetchPhotosQuery } from '../../store';



const MainGrid: React.FC<IPropsMainGrid> = ({setPage, photos, loading}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const { data, isFetching, error, refetch } = useFetchPhotosQuery({ page: pageRef.current, limit: 10 })

  // INFINITE SCROLL
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, { threshold: 0.3 }
  )
  
  // IntersectionObserver
  useEffect(()=>{
    const currentTarget = targetRef.current;
  
    if(currentTarget) {
      observer.observe(currentTarget)
    }
    return () => {
      if(currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  },[targetRef])
  

  // 반응형 Grid point Props
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Rendered Contents
  let content;

    content = photos.map(photo => (
      <MainCard size={windowSize} key={photo.id} photo={photo} />
    ));



  return (
    <>
      <main className='w-screen px-10 mt-4'>
        <div className='grid w-full h-full grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-10 2xl:grid-cols-5 3xl:grid-cols-6'> 
        {content}
        {loading && <div>Loading...</div>}
        </div>
      </main>
      <div ref={targetRef} id="scroll-target"  style={{ width: '100%',height: '10px' }}></div>
    </>
  )
}

export default MainGrid
