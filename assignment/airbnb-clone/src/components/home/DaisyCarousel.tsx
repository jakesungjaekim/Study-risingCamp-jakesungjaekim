import { useState, useEffect } from 'react'
import ImgFilter from '../../assets/images/image-filter.svg'
import { CAROUSELDATA } from '../../constants/CAROUSELDATA'
import { IPropsDaisyCarousel } from '../../@types/IPropsDaisyCarousel'

const DaisyCarousel: React.FC<IPropsDaisyCarousel> = ({ data, onChangeSort }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    return() => {
      window.removeEventListener('scroll', checkScroll)
    }
  },[isScrolled])

  const handleChangeSlide = (id: number) => {
    console.log(id)
    setCurrentSlide(id)
    handleChangeSort('likes')
  }

  const handleChangeSort = (newType: string) => {
    onChangeSort(newType)
  }

  const renderedCarouselData = CAROUSELDATA.map((data) => (
    <div key={data.id} onClick={()=>handleChangeSlide(data.id)} className={`flex items-center justify-center min-w-[100px] overflow-hidden h-full transition duration-150 ease-in-out hover:border-b-2 hover:border-gray-200 ${currentSlide === data.id ? 'border-b-2 border-black' : ''} `}>
      <div className='flex flex-col items-center justify-center h-12 space-y-2 w-14'>
        <img className='w-6 h-6' src={data.url} alt="image" />
        <p className='text-[12px] whitespace-nowrap'>{data.name}</p>
      </div>
    </div>
  ));


  return (
    <section className={`sticky w-screen px-5 pt-5 bg-white top-20 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className='flex items-center justify-between'>
        <div className="w-full h-[78px] bg-white carousel carousel-center rounded-box">
          <div className="carousel-item">
            {renderedCarouselData}
          </div> 
        </div>
        <div className='flex items-center justify-center min-w-[100.7px] h-full pl-6'>
          <button className='flex items-center justify-center w-full h-12 border border-gray-200 rounded-xl'>
            <img src={ImgFilter} alt="image-filter" />
            <p className='ml-2.5 font-AirbnbMedium text-[12px]'>필터</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DaisyCarousel