import { AiFillStar, AiOutlineGlobal, AiOutlineTrophy } from 'react-icons/ai'
import { BsStarHalf,BsPatchExclamationFill } from 'react-icons/bs'
import { HiOutlineClock, HiOutlineHeart } from 'react-icons/hi'
import { PiMonitorPlayBold } from 'react-icons/pi'
import { FaMobileAlt } from 'react-icons/fa'
import { BiInfinite } from 'react-icons/bi'



const CourseTitle = () => {
  return (
    <section className='py-8 w-full lg:min-h-[295px] bg-black1 text-white'>
      <div className='relative w-[1084px] h-full space-y-4 mx-auto'>
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
        {/* 사이드바 */}
        <aside className='shadow-lg absolute top-0 right-0 bg-white w-[340px] h-[866.5px]'>
          <div className='w-full h-[657px]'>
            <div className='cursor-pointer border border-white w-full h-[191.25px] bg-cover bg-[url(https://img-b.udemycdn.com/course/750x422/4253080_1e23.jpg)]'>
            </div>
            <div className='p-6 text-black1'>
              <div className='space-x-2'>
                <span className='text-[32px] font-bold'>₩15,000</span>
                <span className='line-through text-grey1'>₩88,000</span>
                <span className='text-grey1'>83% 할인</span>
              </div>
              <div className='flex items-center justify-start w-full mt-3 space-x-2 text-red1'>
                  <HiOutlineClock />
                  <span className='text-[14px]'>이 가격으로 <strong>2시간</strong> 동안 더 구입이 가능합니다!</span>
              </div>
              <div className='flex flex-col justify-center mt-4'>
                <div className='flex items-center justify-center mb-2 space-x-2'>
                  <button className='flex items-center justify-center w-4/5 p-4 text-white bg-violet3'>장바구니에 추가</button>
                  <button className='flex items-center justify-center w-1/5 p-3 border border-gray-400'><HiOutlineHeart className="text-2xl"/></button>
                </div>
                <button className='flex items-center justify-center w-full p-4 font-bold border border-gray-400'>지금 구매</button>
                <div className='flex items-center justify-center mt-3'>
                  <p className='text-[12px] text-grey1'> 30일 환불 보장</p>
                </div>
                <div className='flex flex-col items-start mt-6 space-y-4'>
                  <p className='font-bold'>이 강의는 다음을 포함합니다</p>
                  <p className='text-[14px] flex'><PiMonitorPlayBold className="mr-3"/>10.5시간 주문형 동영상</p>
                  <p className='text-[14px] flex'><FaMobileAlt className="mr-3"/>모바일 및 TV에 대한 액세스</p>
                  <p className='text-[14px] flex'><BiInfinite className="mr-3"/>평생 이용권</p>
                  <p className='text-[14px] flex'><AiOutlineTrophy className="mr-3"/>수료증</p>
                </div>
                <div className='text-[14px] font-bold flex items-center justify-between w-11/12 mx-auto mt-5 underline'>
                  <p className=''>공유</p>
                  <p className=''>이 강의 선물하기</p>
                  <p className=''>쿠폰 적용</p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 w-full h-[209.5px] border border-gray-200 '>
            <div className='w-full h-full space-y-3 text-black1'>
              <h2 className='text-[19px] font-semibold leading-6'>5명 이상의 사람들을<br /> 트레이닝하시나요?</h2>
              <p className='text-[14px] tracking-tight text-grey1 leading-4'>여러분의 팀이 언제 어디에서나 Udemy에서 제공하는 22,000개 이상의 최고의 강의를 이용할 수 있도록 하세요.</p>
              <button className='py-3 font-bold w-full flex items-center justify-center text-[14px] border border-black'>Udmey Business 사용해보기</button>
            </div> 
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CourseTitle