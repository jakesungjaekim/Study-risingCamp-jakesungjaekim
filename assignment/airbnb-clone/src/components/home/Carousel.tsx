import { useState, useRef, useEffect } from 'react'

import ImgFilter from '../../assets/images/image-filter.svg'
import { CAROUSELDATA } from '../../constants/CAROUSELDATA'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Carousel:React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const checkScroll = () => {
    console.log("cheking Y", isScrolled)
    setIsScrolled(window.scrollY > 10)
  }

  useEffect(() => {
    console.log("isScrolled:", isScrolled);
    
    window.addEventListener('scroll', checkScroll)

    return() => {
      window.removeEventListener('scroll', checkScroll)
    }
  },[isScrolled])
  

  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const slideRef = useRef<HTMLDivElement>(null)
  const slideWidth = 200; // 이동할 픽셀값

  const handlePrevSlide = () => {
    if(currentSlide - slideWidth >= 0) {
      setCurrentSlide(currentSlide - slideWidth)
    }
  }

  const handleNextSlide = () => {
    // 전체 슬라이드 길이를 예측한 값입니다. 이 값은 실제 슬라이드 항목 수와 각 항목의 너비에 따라 달라질 수 있습니다.
    const totalSlideWidth = 1853; 
    if(currentSlide + slideWidth < totalSlideWidth) {
      setCurrentSlide(currentSlide + slideWidth)
    }
  }

  useEffect(() => {
    if(slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out'
      slideRef.current.style.transform = `translateX(-${currentSlide}px)`
    }
  }, [currentSlide])

  const renderedCarouselData = CAROUSELDATA.map((data, idx) => (
    <div key={data.id} className={`flex items-center justify-center min-w-[100px] overflow-hidden h-full transition duration-300 ease-in-out ${currentSlide === idx ? 'border-b-2 border-black' : ''}`}>
      <div className='flex flex-col items-center justify-center h-12 space-y-2 w-14'>
        <img className='w-6 h-6' src={data.url} alt="image" />
        <p className='text-[12px] whitespace-nowrap'>{data.name}</p>
      </div>
    </div>
  ));

  
  return (
    <>
    <section className={`sticky w-screen px-10 pt-5 bg-white top-20 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className='flex w-full h-[78px]'>
        <div ref={slideRef} className='relative flex items-center justify-between overflow-x-hidden w-full md:min-w-[587.23px] lg:min-w-[843.23px] xl:min-w-[1099.23px]  2xl:min-w-[1279.23px] 3xl:w-full h-full transition duration-500'>
        {renderedCarouselData}
        </div>
        <button onClick={handlePrevSlide} disabled={currentSlide === 0} className='flex items-center justify-center w-7 h-7 absolute left-10 top-[40%] bg-white rounded-full border hover:shadow-xl hover:scale-105 duration-200'><FaAngleLeft/></button>
        <button onClick={handleNextSlide} disabled={currentSlide === slideWidth -1} className='flex items-center justify-center w-7 h-7 absolute xs:right-[25%]  md:right-[16%] lg:right-[10%] 2xl:right-[8%] 3xl:right-[6%] top-[40%] bg-white rounded-full border hover:shadow-xl hover:scale-105 duration-200'><FaAngleRight/></button>
        <div className='flex items-center justify-center min-w-[100.7px] h-full pl-6'>
          <button className='flex items-center justify-center w-full h-12 border border-gray-200 rounded-xl'>
            <img src={ImgFilter} alt="image-filter" />
            <p className='ml-2.5 font-AirbnbMedium text-[12px]'>필터</p>
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Carousel