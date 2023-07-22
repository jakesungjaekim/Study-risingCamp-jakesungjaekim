import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import MainCard from './MainCard'
import { IPhoto } from '../../@types/IPhto';

// import { useFetchPhotosQuery } from '../../store';

const MainGrid = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [page,setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const { data, isFetching, error, refetch } = useFetchPhotosQuery({ page: pageRef.current, limit: 10 })

  const fetchPhotos = async () => {
    setLoading(true);
  
    const API_KEY = 'nYg5FUscjor5cOFcHxXlNJiNgqiGV0Aef7DyuL3Ya0U';
    const response = await axios.get('https://api.unsplash.com/photos/', {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        page: page,
        per_page: 5,
      },
    });
    const data = response.data;
    setPhotos(prevPhotos => [...prevPhotos, ...data]);
    setLoading(false);
  }
  
  // Fetching Data
    useEffect(() => {
      fetchPhotos();
    }, [page]);
  
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
      currentTarget.style.backgroundColor = 'red';
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

  if (loading) {
    content = <div>Loading...</div>;
  } else {
    content = photos.map(photo => (
      <MainCard size={windowSize} key={photo.id} photo={photo} />
    ));
  }



  return (
    <>
      <main className='w-screen px-10 mt-4'>
        <div className='grid w-full h-full grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-10 2xl:grid-cols-5 3xl:grid-cols-6'> 
          {content}
        </div>
      </main>
      <div ref={targetRef} id="scroll-target"  style={{ width: '100%',height: '10px' }}></div>
    </>
  )
}

export default MainGrid