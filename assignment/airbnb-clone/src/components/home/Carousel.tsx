import { useState } from 'react'
import ImgFilter from '../../assets/images/image-filter.svg'

const Carousel:React.FC = () => {
  
  return (
    <section className='w-screen px-10 pt-5'>
      <div className='flex w-full h-[78px]'>
        <div className='min-w-[646.23px] h-full bg-rose-50'></div>
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