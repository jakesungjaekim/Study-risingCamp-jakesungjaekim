import { HiOutlineMenu, HiOutlineSearch } from 'react-icons/hi'
import { AiOutlineGlobal } from 'react-icons/ai'
import UdemyLogo from '../../assets/images/logo-udemy.svg'
import ImageCart from '../../assets/images/image-cart.svg'
import { Link } from 'react-router-dom'
import Button from './Button'



const Header: React.FC = () => {
  return (
    <header className='w-screen h-[56px] md:h-[72px] border shadow-lg'>
    {/* @min-width < 800px */}
      <div className='flex items-center justify-between h-full p-1 md:hidden'>
        <div className='px-3 cursor-pointer'>
          <HiOutlineMenu className="w-6 h-6"/>
        </div>
        <Link to="/">
          <img className='w-full h-[28px]' src={UdemyLogo} alt="logo-udemy" />
        </Link>
        <div className='flex items-center justify-center'>
          <div className='px-3 cursor-pointer'>
            <HiOutlineSearch className="w-5 h-5"/>
          </div>
          <div className='px-3 cursor-pointer'>
              <img src={ImageCart} alt="image-cart" />
          </div>
        </div>
      </div>
    {/* @min-width > 800px */}
      <div className='hidden h-full px-6 md:flex md:items-center md:justify-between'>
        <div className='flex items-center justify-center'>
          <Link to="/">
              <img className='w-full h-[34px]' src={UdemyLogo} alt="logo-udemy" />
          </Link>
          <p className='ml-2 flex items-center justify-center text-[14px] w-[74px] md1:w-[80px] xl:w-[90px] h-[48px] px-3'>카테고리</p>
        </div>
        <div className='mr-3 w-2/5 md1:1/5 xl:w-3/5 flex items-center p-6 border border-black1 rounded-full h-[46px] bg-grey2'>
          <span>
            <HiOutlineSearch className="w-6 h-6 mr-4 cursor-pointer text-grey1"/>
          </span>
          <input className="w-full bg-transparent outline-none" type="text" placeholder='무엇이든 검색하기'/>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <div className='w-[141px] h-[72px] text-[14px] items-center justify-center hidden lg1:flex'>
            Udemy Business
          </div>
          <div className='w-[141px] h-[72px] text-[14px] items-center justify-center hidden md1:flex xl:w-[165px] lg1:w-[145px]'>
            Udemy에서 가르치기
          </div>
          <div className='flex itmes-center justify-center px-3 w-[48px] h-[48px]'>
            <img src={ImageCart} alt="image-cart" />
          </div>
          <Button white>로그인</Button>
          <Button black>가입하기</Button>
          <Button global>
            <AiOutlineGlobal className="w-5 h-5"/>
          </Button>
        </div>
      </div>
    </header>

    
  )
}

export default Header

