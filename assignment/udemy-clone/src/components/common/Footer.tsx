import ImageLogoW from '../../assets/images/image-logo-w.png'
import Imagelnc from '../../assets/images/image-lnc.png'
import { AiOutlineGlobal } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='flex flex-col px-8 xl1:px-12 py-6 h-[633px] sm1:h-[293px] bg-black1 text-white'>
      <div className='flex items-start justify-between'>
        <div className='grid grid-cols-1 gap-6 sm1:grid-cols-3 lg:gap-24 xl:gap-28'>
          <div className='space-y-2 text-[13px] w-[157px] flex flex-col items-start justify-center'>
            <a href='#' className='py-1 hover:underline'>Udemy Business</a>
            <a href='#' className='py-1 hover:underline'>Udemy에서 가르치기</a>
            <a href='#' className='py-1 hover:underline'>앱 다운로드</a>
            <a href='#' className='py-1 hover:underline'>회사 소개</a>
            <a href='#' className='py-1 hover:underline'>문의하기</a>
          </div>
          <div className='space-y-2 text-[13px] w-[157px] flex flex-col items-start justify-center'>
            <a href='#' className='py-1 hover:underline'>채용 정보</a>
            <a href='#' className='py-1 hover:underline'>블로그</a>
            <a href='#' className='py-1 hover:underline'>도움말 및 지원</a>
            <a href='#' className='py-1 hover:underline'>제휴사</a>
            <a href='#' className='py-1 hover:underline'>투자자</a>
          </div>
          <div className='space-y-2 text-[13px] w-[157px] flex flex-col items-start justify-center'>
            <a href='#' className='py-1 hover:underline'>이용 약관</a>
            <a href='#' className='py-1 hover:underline'>개인정보 보호 정책</a>
            <a href='#' className='py-1 hover:underline'>쿠키 설정</a>
            <a href='#' className='py-1 hover:underline'>사이트맵</a>
            <a href='#' className='py-1 hover:underline'>접근 가능성 진술서</a>
          </div>
        </div>
        <button className='w-[140px] h-[38px] flex items-center justify-start p-4 text-white border border-white'>
          <span className='mr-3'>
            <AiOutlineGlobal />
          </span>
          한국어
        </button>
      </div>
      <div className='flex items-center justify-between mt-16'>
        <img src={ImageLogoW} alt="image-logo" />
        <img src={Imagelnc} alt="image-lnc" />
      </div>
    </footer>
  )
}

export default Footer