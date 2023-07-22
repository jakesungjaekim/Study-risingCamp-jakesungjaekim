// import { useState, useRef } from 'react'

import ImgFilter from '../../assets/images/image-filter.svg'
import { CAROUSELDATA } from '../../constants/carouselData'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Carousel:React.FC = () => {

  const renderedCarouselData = CAROUSELDATA.map((data) => {
    return (
      <div className='flex items-center justify-center w-full h-full transition duration-300 ease-in-out relatvie hover:border-b-2 hover:border-b-black'>
        <div className='flex flex-col items-center justify-center h-12 space-y-2 w-14' key={data.id}>
          <img className='w-6 h-6' src={data.url} alt="image" />
          <p className='text-[12px] whitespace-nowrap'>{data.name}</p>
        </div>
      </div>
    )
  })

  
  return (
    <section className='sticky w-screen px-10 pt-5 bg-white top-20'>
      <div className='flex w-full h-[78px]'>
        <div className='relative flex items-center justify-between overflow-x-hidden w-full md:min-w-[587.23px] lg:min-w-[843.23px] xl:min-w-[1099.23px]  2xl:min-w-[1279.23px] 3xl:w-full h-full transition duration-500'>
        {renderedCarouselData}
        <button className='flex items-center justify-center w-7 h-7 absolute left-0 top-[40%] bg-white rounded-full border hover:shadow-xl hover:scale-105 duration-200'><FaAngleLeft/></button>
        <button className='flex items-center justify-center w-7 h-7 absolute right-0 top-[40%] bg-white rounded-full border hover:shadow-xl hover:scale-105 duration-200'><FaAngleRight/></button>
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

export default Carousel