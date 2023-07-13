import { AiFillStar, AiOutlineGlobal } from 'react-icons/ai'
import { BsStarHalf,BsPatchExclamationFill } from 'react-icons/bs'

const CourseTitle = () => {
  return (
    <section className='py-8 w-full lg:min-h-[295px] bg-black1 text-white'>
      <div className='w-[1084px] h-full space-y-4 mx-auto'>
        <span className='block text-[13px] font-bold text-violet2'> Development {">"} Web Development {">"} JavaScript </span>
        <h1 className='w-full text-[32px]'>클린코드 자바스크립트 (2023 업데이트)</h1>
        <p className='w-full text-[19px] leading-7'>자바스크립트를 위한 코드 스타일부터 습관 그리고 클린 코드에 대해 함께 고민해보고 그 이유에<br/> 대해 탐구하고 또 학습해보는 시간을 가집니다.</p>
        <div className='text-[13px] flex items-center justify-start space-x-2'>
          <span className='font-bold text-yellow2'>4.7</span>
          <div className='flex text-yellow2'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <BsStarHalf/>
          </div>
          <span className='underline text-violet2'>(483개의 평점)</span>
          <span>4,087명의 수강생</span>
        </div>
        <div className='text-[13px] space-x-1'>
          <span className=''>생성자</span>
          <span className='underline text-violet2'>Poco Jang</span>
        </div>
        <div className='flex items-center justify-start text-[13px] space-x-2'>
          <span className='text-white'><BsPatchExclamationFill /></span>
          <span className=''>마지막 업데이트:2023.5</span>
          <span className=''><AiOutlineGlobal/></span>
          <span>한국어</span>
        </div>
      </div>
    </section>
  )
}

export default CourseTitle