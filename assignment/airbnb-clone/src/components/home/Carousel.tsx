// import { useState } from 'react'
import ImgFilter from '../../assets/images/image-filter.svg'

const Carousel:React.FC = () => {
  
  return (
    <section className='sticky w-screen px-10 pt-5'>
      <div className='flex w-full h-[78px]'>
        <div className='w-full md:min-w-[587.23px] lg:min-w-[843.23px] xl:min-w-[1099.23px] 2xl:px-20 2xl:min-w-[1279.23px] 3xl:w-full h-full bg-rose-50 transition duration-500'></div>
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