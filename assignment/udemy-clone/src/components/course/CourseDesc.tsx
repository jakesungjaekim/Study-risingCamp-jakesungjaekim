import { BsCheck2 } from 'react-icons/bs'
import ImageDesc1 from '../../assets/images/image-desc1.png'
import ImageDesc2 from '../../assets/images/image-desc2.png'
import ImageDesc3 from '../../assets/images/image-desc3.png'
import ImageDesc4 from '../../assets/images/image-desc4.png'
import ImageDesc5 from '../../assets/images/image-desc5.png'


const CourseDesc = () => {
  return (
    <section className='pt-8 px-12 lg:w-[1184px] h-[367px] mx-auto'>
      <div className='w-[700px] h-full space-y-8'>
        <div className='px-4 py-5 w-full h-[228px] border border-gray-300'>
          <h2 className='font-semibold text-[24px]'>배울 내용</h2>
          <div className='grid grid-cols-2 gap-6 mt-4 text-[14px] text-grey1'>
            <div className='flex space-x-3'>
              <span><BsCheck2 /></span>
              <p className='leading-4'>자바스크립트로 코드를 작성하는 방법에 대해 <br /> 고민해봅니다.</p>
            </div>
            <div className='flex space-x-3'>
              <span><BsCheck2 /></span>
              <p>코드를 작성할 때 위험을 예방하고 관리합니다.</p>
            </div>
            <div className='flex space-x-3'>
              <span><BsCheck2 /></span>
              <p>JavaScript의 특성을 파악합니다.</p>
            </div>
            <div className='flex space-x-3'>
              <span><BsCheck2 /></span>
              <p>흔히 알려진 JavaScript 코드 스타일에 대한 견해를 탐구합니다.</p>
            </div>
            <div className='flex space-x-3'>
              <span><BsCheck2 /></span>
              <p className='leading-4'>클린 코드가 무엇인지를 JavaScript를 통해<br /> 학습합니다.</p>
            </div>
          </div>
        </div>
        <div className='px-4 py-5 space-y-3 w-full h-[140px] border border-gray-300'>
          <h3 className='font-semibold text-[16px]'>최고의 기업이 이 강의를 직원에게 제공합니다.</h3>
          <p className='text-[14px] text-grey1 mb-4'>이 강의는 전 세계 기업에서 신뢰하는 당사 평점 TOP 강의의 컬렉션을 위해 선택되었습니다. <span className='underline text-violet1'>자세히 알아보기</span></p>
          <div className='flex items-center justify-between'>
              <img src={ImageDesc1} alt="" />
              <img src={ImageDesc2} alt="" />
              <img src={ImageDesc3} alt="" />
              <img src={ImageDesc4} alt="" />
              <img src={ImageDesc5} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDesc