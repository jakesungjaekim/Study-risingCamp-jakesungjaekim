import { FaAngleRight } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi'

const Dashboard = () => {
  return (
    <section className='xl1:max-w-[1340px] px-6 mx-auto'>
      {/* min-width < 640px */}
      <div className='mx-auto mt-6 sm1:hidden'>
        <h1 className='text-[24px] mb-4'>수강생 감사 할인</h1>
        <p className='text-[16px] w-full'>7월 13일까지 수강료 ₩14,000부터 판매되는 강의로 특별 감사 할인 혜택을 받아보세요.</p>
      </div>
      {/* 600 px ≤ min-width < 640px (SearchBar)*/}
      <aside className='container mt-12 sm1:hidden'>
        <div className='flex items-center justify-between w-full p-3 border border-black1'>
          <input type="text" placeholder='무엇을 배우시겠습니까?' className='outline-none text-grey1'/>
          <HiOutlineSearch className="text-xl font-bold text-black1"/>
        </div>
      </aside>
      {/* min-width > 640px */}
      <div className='mt-6 sm1:mt-12 sm1:px-0 xs1:block'>
        <h1 className='text-[24px] lg:text-[32px] mb-4 w-full'>광범위한 강의 모음</h1>
        <p className='text-[19px] w-full'>210,000개 이상의 온라인 동영상 강의 중에서 선택하세요. 매월 새롭게 강의가 추가됩니다.</p>
      </div>
      {/* DashBoard Tap */}
      <article className='hidden xs1:block'>
        <div className='flex items-center justify-between'>
          <div className='space-x-2 max-w-[607px] mt-6 flex items-center justify-between sm1:px-0 text-[16px] text-grey1 font-bold'>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>Python</div>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>Excel</div>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>웹 개발</div>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>JavaScript</div>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>데이터 과학</div>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>Amazon AWS</div>
            <div className='flex items-center justify-center cursor-pointer px-1 py-2 h-[48px] hover:text-black1 active:text-black1'>드로잉</div>
          </div>
          <div className='flex items-center justify-center mt-6 cursor-pointer px-1 py-2 h-[48px] text-[24px] text-violet1'><FaAngleRight/></div>
        </div>
      </article>
      {/* DashBoard Box */}
      <article className='px-6 border sm:min-w-[640px] h-[567px]'>

      </article>
    </section>
  )
}

export default Dashboard