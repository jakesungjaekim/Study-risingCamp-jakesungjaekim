import React,{ useState } from 'react'

import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/images/image-logo.svg'
import ImgLogo2 from '../../assets/images/image-logoText.svg'
import ImgGlobal from '../../assets/images/image-global.svg'
import ImgMenu from '../../assets/images/image-menu.svg'
import ImgPerson from '../../assets/images/image-person.svg'
import ImgSearch from '../../assets/images/image-search.svg'
import Dropdown from './Dropdown'
import AuthModal from './AuthModal'

const Header:React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false)

  const handleShowDropdown = () => {
    setDropdown(prev => !prev)
  }

  const handleOpenModal = () => {
    setShowAuthModal(true);
    setDropdown(false);
  }

  const handleCloseModal = () => {
    setShowAuthModal(false);
  }

  return (
    <header className='sticky top-0 w-screen h-20 px-10 bg-white'>
      <div className="flex items-center w-full h-full justfify-center">
        {/* LOGO */}
          <Link to="/" className='min-w-[30px] w-full h-full flex items-center justify-start'>
            <img src={ImgLogo} alt="logo" className="w-[30px] h-full" />
            <img src={ImgLogo2} alt='logo' className='hidden xl:ml-2 xl:block' />
          </Link>
        {/* SEARCH // width 고정값 (358.5) h: 48px px-6*/}
        <div className='px-6'>
          <div className='min-w-[300px] lg:min-w-[334.71px] duration-500 lg:justify-between text-sm font-AibnMedium flex items-center h-12 border border-gray-200 rounded-full shadow-md hover:shadow-lg'>
            <button className='pl-2 min-w-[80px] h-full'>
              <div className='max-w-[79px] lg:max-w-[81px] w-full px-4 overflow-hidden whitespace-nowrap text-ellipsis'>어디든지</div>
            </button>
            <span className='h-[24px] border-r border-gray-200'/>
            <button className='min-w-[96.07px] h-full  flex items-center justify-center'>
              <div className='max-w-[75px] lg:max-w-[95px] overflow-hidden whitespace-nowrap text-ellipsis'>언제든 일주일</div>
            </button>
            <div className='h-[24px] border-r border-gray-200'/>
            <button className='min-w-[122.14px] flex items-center h-full text-gray-400 truncate'>
              <p className='px-4 max-w-[81.1px] lg:max-w-[122px] overflow-hidden whitespace-nowrap text-ellipsis'>게스트 추가</p>
              <img className='w-8 h-8 mr-[7px] my-[7px]' src={ImgSearch} alt="" />
            </button>
          </div>
        </div>
        {/* ETC */}
        <div className='relative flex items-center justify-between w-full h-full md:justify-end'>
          <div className='flex items-center justify-center p-3 text-sm rounded-full hover:bg-gray-100 font-AirbnbMedium whitespace-nowrap'>
            당신의 공간을 에어비앤비하세요
          </div>
          <button className='flex items-center justify-center w-10 h-[42px] rounded-full hover:bg-gray-100 mr-2'>
            <img src={ImgGlobal} alt="image-global" />
          </button>
            <div onClick={handleShowDropdown} className='dropdown dropdown-bottom dropdown-end flex items-center justify-between w-[77px] h-[42px] px-3 py-[5px] border border-gray-200 rounded-full hover:shadow-lg'>
              <img src={ImgMenu} alt="" />
              <img className='ml-3' src={ImgPerson} alt="" />
            </div>
            {dropdown && <Dropdown onCloseDropdown={handleShowDropdown} onOpenModal={handleOpenModal} />}
            {showAuthModal && <AuthModal onClose={handleCloseModal} />}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200'/>
    </header>
    
  )
}

export default Header