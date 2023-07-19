import ReactDOM  from 'react-dom'

import { BsFillMapFill } from 'react-icons/bs'
import { IoIosArrowUp } from 'react-icons/io'
import { LuGlobe } from 'react-icons/lu'

const HomeFooter = () => {
  
  return ReactDOM.createPortal(
    <div className='fixed bottom-0 w-full h-auto'>
      <div className='flex items-start justify-center mb-10'>
        <button className='flex items-center justify-center text-sm p-4 w-[140px] h-12 text-white bg-black rounded-full hover:scale-105 hover:shadow-lg duration-300'>
          지도 표시하기
          <BsFillMapFill className="ml-2 text-white bg-black text-md"/>
        </button>
      </div>
      <div className='w-full px-10 lg:px-20 h-[133px] lg:h-[120px] xl:h-[100px] 2xl:h-[88px] bg-gray-100 border-t border-gray-300'>
        <div className='flex items-center justify-between pt-[13px] pb-[14px] w-full h-[67px] lg:h-[47px] text-sm'>
          <div className='w-full max-w-[311.5px] lg:max-w-[620px] tracking-wide text-slate-500'>
            <span>&#169;</span>2023 Airbnb, Inc. <span>&#183; </span><span className='cursor-pointer hover:underline'>개인정보 처리방침</span><span>&#183; </span> <span className='cursor-pointer hover:underline'>이용약관</span> <span>&#183; </span> <span className='cursor-pointer hover:underline'>사이트맵</span> <span>&#183; </span> <span className='cursor-pointer hover:underline'>한국의 변경된 환불 정책</span> <span>&#183; </span> <span className='cursor-pointer hover:underline'>회사 세부정보</span>
          </div>
          <div className='space-x-3 flex items-center justify-center min-w-[290px]'>
            <LuGlobe className="text-lg"/> <span className='cursor-pointer hover:underline'>한국어(KR)</span><span className='cursor-pointer hover:underline'>₩ &nbsp; KRW</span><span className='cursor-pointer hover:underline'>지원 및 참고자료</span><IoIosArrowUp className="text-lg font-bold"/>
          </div>
        </div>
        <div className='w-full h-[1px] border border-gray-200' />
        <div className='pt-2 pb-2 text-slate-400 text-[4px] leading-3 tracking-tighter'>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
        </div>
      </div>
    </div>,
  document.querySelector('.footer-container') as Element
  )
}

export default HomeFooter