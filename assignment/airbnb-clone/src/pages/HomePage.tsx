import axios from 'axios'
import { useEffect, useState } from 'react'

// import Carousel from '../components/home/Carousel'
import MainGrid from '../components/home/MainGrid'
import HomeFooter from '../components/home/HomeFooter'
import DaisyCarousel from '../components/home/DaisyCarousel'

import { IPhoto } from '../@types/IPhoto'

const HomePage: React.FC = () => {
  const [page,setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>('default')

  const sortPhotos = (photos: IPhoto[]) => {
    if (sortType === 'likes') {
      return [...photos].sort((a, b) => b.likes - a.likes);
    }
    return photos;
  };

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
    const sortedData = sortPhotos(data);
    setPhotos((prevPhotos) => [...prevPhotos, ...sortedData]);
    setLoading(false);
  }

    // Fetching Data
    useEffect(() => {
      fetchPhotos();
    }, [page]);

    useEffect(() => {
      const sortedPhotos = sortPhotos(photos);
      setPhotos(sortedPhotos);
    }, [sortType]);

  return (
    <>
      <DaisyCarousel data={photos} onChangeSort={setSortType}/>
      {/* <Carousel /> */}
      <MainGrid setPage={setPage} photos={photos} loading={loading}/>
      <HomeFooter />
    </>
  )
}

export default HomePage