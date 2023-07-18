import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/images/image-logo.svg'

const Header:React.FC = () => {
  return (
    <header className='relative w-screen h-20 px-10'>
      <div className="flex items-center w-full h-full justfify-center">
        {/* LOGO */}
        <div className='w-[30px] h-full'>
          <Link to="/">
            <img src={ImgLogo} alt="logo" className="w-[30px] h-full" />
          </Link>
        </div>
        {/* SEARCH // width 고정값 (358.5) h: 48px px-6*/}
        <div className='px-6'>
          <div className='w-[334.7px] h-12 rounded-full shadow-md hover:shadow-lg'>

          </div>
        </div>
        {/* ETC */}
        <div className='flex items-center justify-between h-full'>
          <div className='p-3 text-sm rounded-full hover:bg-gray-100 font-AirbnbMedium'>당신의 공간을 에어비앤비하세요</div>
          <div className='p-3 rounded-full hover:bg-gray-100'>234</div>
          <div className='p-3 ounded-full hover:bg-gray-100'>3456456</div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200'/>
      
      <div className='font-AirbnbBlack'>테스트 테스트</div>
      <div className='font-AirbnbBold'>테스트 테스트</div>
      <div className='font-AirbnbBook'>테스트 테스트</div>
      <div className='font-AirbnbLight'>테스트 테스트</div>
      <div className='font-AirbnbMedium'>테스트 테스트</div>
    </header>
    
  )
}

export default Header