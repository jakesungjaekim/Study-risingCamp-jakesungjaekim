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




    // <header className=''>
    //   <div className='p-1 w-screen h-[56px] md:h-[72px] flex items-center justify-between border border-b-gray-200 shadow-md md:shadow-none'>
    //     {/* HambergerMenu */}
    //     <div className='px-3 md:hidden'>
    //       <HiOutlineMenu className="w-6 h-6"/>
    //     </div>
    //     {/* Udemy Logo */}
    //     <div className='flex items-center justify-start'>
    //     <Link to='/' className='pl-3 pr-3 md:pr-0'>
    //       <img src={UdemyLogo} alt="Udemy Logo" className='sm:w-[75px] sm:h-[28px] md:w-[200px] md:h-[34px]'/>
    //     </Link> 
    //       <div className='hidden text-sm md:w-[66px] md:h-[48px] md:flex md:items-center mx-3 md:justify-center'>카테고리</div>
    //     </div>
    //     {/* SearchBar */} 
    //     <div className='hidden md:items-center md:flex md:w-[270px] lg:w-full'>
    //       <form className='hidden md:w-full md:flex md:items-center p-6 border rounded-full md:h-[46px] border-black '>
    //         <span>
    //           <HiOutlineSearch className="w-6 h-6 mr-4 cursor-pointer text-grey1"/>
    //         </span>
    //         <input 
    //           className='text-sm bg-transparent outline-none'
    //           type="text" placeholder='무엇이든 검색하기'/>
    //       </form>
    //     </div>
    //     {/* Search, Cart + @ (Login, SignUp, Global)*/}
    //     <div className='flex items-center justify-center'>
    //       <div className='hidden text-xs px-3 w-[117px] h-[48px] lg2:flex lg2:justify-center lg2:items-center'>Udemy Business</div>
    //       <div className='hidden text-xs px-3 w-[117px] h-[48px] lg:flex lg:justify-center lg:items-center'>Udemy에서 가르치기</div>
    //       <div className='px-3 md:hidden'>
    //         <HiOutlineSearch className="w-6 h-6"/>
    //       </div>
    //       <div className='px-3'>
    //         <GrCart className="w-6 h-6"/>
    //       </div>
    //       <span className='hidden space-x-3 md:flex'>
    //         <Button white>로그인</Button>
    //         <Button black>가입하기</Button>
    //         <Button white global>
    //           <AiOutlineGlobal className="w-5 h-5"/>
    //         </Button>
    //       </span>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Header


{/* <div
  className="relative flex flex-col items-start justify-start bg-white"
  style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.08), 0px 4px 12px 0 rgba(0,0,0,0.08)" }}
>
  <div className="flex-grow-0 flex-shrink-0 w-[1920px] h-[72px] relative bg-white">
    <svg
      width={91}
      height={34}
      viewBox="0 0 91 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[91px] h-[34px] absolute left-6 top-[19px]"
      preserveAspectRatio="none"
    >
      <g clip-path="url(#clip0_35_14)">
        <path
          d="M14.05 8.112L7.024 4.056L0 8.112V4.056L7.025 0L14.051 4.056L14.05 8.112Z"
          fill="#A435F0"
        />
        <path
          d="M0 11.518H3.68V20.459C3.68 22.769 5.405 23.895 7.025 23.895C8.659 23.895 10.371 22.739 10.371 20.428V11.518H14.051V20.672C14.051 22.8 13.382 24.442 12.044 25.568C10.705 26.693 9.033 27.241 6.994 27.241C4.957 27.241 3.284 26.694 1.977 25.568C0.669 24.443 0 22.862 0 20.763V11.518ZM45.866 22.63C44.752 23.622 43.483 24.108 42.036 24.108C39.396 24.108 37.626 22.604 37.426 20.275H49.316C49.316 20.275 49.396 19.523 49.396 18.817C49.396 16.627 48.696 14.802 47.266 13.312C45.868 11.822 44.044 11.092 41.823 11.092C39.482 11.092 37.565 11.822 36.044 13.312C34.554 14.802 33.794 16.748 33.794 19.182V19.302C33.794 21.705 34.554 23.621 36.044 25.051C37.534 26.48 39.511 27.21 41.914 27.21C44.708 27.21 46.931 26.108 48.599 24.208L45.866 22.63ZM38.872 15.167C39.692 14.528 40.697 14.194 41.822 14.194C42.886 14.194 43.768 14.528 44.529 15.198C45.255 15.808 45.647 16.557 45.681 17.418H37.52C37.638 16.528 38.088 15.778 38.873 15.168L38.872 15.167ZM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8V30.738H77.142C77.966 30.738 78.732 30.428 79.462 28.744L80.192 27.058L73.896 11.518H77.637L82.108 22.71L86.701 11.518H90.441L82.91 29.276ZM28.377 5.64905V12.906C27.171 11.826 25.295 11.183 23.481 11.183C21.321 11.183 19.497 11.943 18.007 13.493C16.547 15.014 15.817 16.899 15.817 19.18C15.817 21.462 16.547 23.347 18.007 24.898C19.497 26.419 21.322 27.18 23.481 27.18C25.971 27.18 27.545 26.201 28.377 25.434V26.845H32.027V5.65005L28.377 5.64905ZM27.282 22.527C26.4 23.409 25.275 23.866 23.967 23.866C22.659 23.866 21.595 23.409 20.713 22.527C19.863 21.645 19.436 20.52 19.436 19.182C19.436 17.843 19.862 16.718 20.713 15.836C21.595 14.954 22.659 14.498 23.967 14.498C25.275 14.498 26.4 14.954 27.282 15.836C28.194 16.718 28.652 17.843 28.652 19.182C28.652 20.52 28.194 21.645 27.282 22.527ZM68.222 11.214C65.45 11.214 64.009 12.364 63.022 13.472C62.627 12.719 61.515 11.214 58.917 11.214C56.721 11.214 55.427 12.324 54.781 13.114V11.52H51.163V26.847H54.781V18.027C54.781 15.959 56.059 14.469 57.761 14.469C59.496 14.469 60.499 15.777 60.499 17.875V26.846H64.118V18.026C64.118 15.928 65.364 14.468 67.158 14.468C68.892 14.468 69.895 15.776 69.895 17.873V26.845H73.545V17.357C73.545 13.361 71.397 11.215 68.222 11.215V11.214Z"
          fill="black"
        />
      </g>
      <defs>
        <clippath id="clip0_35_14">
          <rect width={91} height={34} fill="white" />
        </clippath>
      </defs>
    </svg>
    <p className="absolute left-[135px] top-[25.2px] text-sm text-center text-[#1c1d1f]">
      Categories
    </p>
    <div className="flex justify-start items-start absolute left-[225.34px] top-3 p-px rounded-full bg-[#f7f9fa] border border-[#1c1d1f]">
      <div className="absolute left-0 flex-grow-0 flex-shrink-0 w-px overflow-hidden h-7 top-px">
        <p className="w-[57.39px] h-[51.59px] absolute left-0 top-[-16.19px] text-sm font-bold text-left text-[#1c1d1f]">
          <span className="w-[57.39px] h-[51.59px] text-sm font-bold text-left text-[#1c1d1f]">
            Search
          </span>
          <br />
          <span className="w-[57.39px] h-[51.59px] text-sm font-bold text-left text-[#1c1d1f]">
            for
          </span>
          <br />
          <span className="w-[57.39px] h-[51.59px] text-sm font-bold text-left text-[#1c1d1f]">
            anything
          </span>
        </p>
      </div>
      <div className="flex flex-row-reverse justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 pl-3 pr-6 py-[11px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[937.72998046875px] py-px">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#6a6f73]">
            Search for anything
          </p>
        </div>
        <svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative flex-grow-0 flex-shrink-0 w-6 h-6"
          preserveAspectRatio="none"
        >
          <g opacity="0.5" clip-path="url(#clip0_35_23)">
            <path
              d="M15.84 14H15.05L14.77 13.73C15.7838 12.554 16.3411 11.0527 16.34 9.5C16.34 8.21442 15.9588 6.95772 15.2445 5.8888C14.5303 4.81988 13.5151 3.98676 12.3274 3.49479C11.1397 3.00282 9.83276 2.87409 8.57188 3.1249C7.311 3.3757 6.15282 3.99477 5.24377 4.90381C4.33473 5.81285 3.71567 6.97104 3.46486 8.23192C3.21406 9.49279 3.34278 10.7997 3.83475 11.9874C4.32672 13.1752 5.15984 14.1903 6.22876 14.9046C7.29768 15.6188 8.55439 16 9.83997 16C11.45 16 12.93 15.41 14.07 14.43L14.34 14.71V15.5L19.34 20.49L20.83 19L15.84 14ZM9.83997 14C7.34997 14 5.33997 11.99 5.33997 9.5C5.33997 7.01 7.34997 5 9.83997 5C12.33 5 14.34 7.01 14.34 9.5C14.34 11.99 12.33 14 9.83997 14Z"
              fill="#1C1D1F"
            />
          </g>
          <defs>
            <clippath id="clip0_35_23">
              <rect width={24} height={24} fill="white" transform="translate(0.339966)" />
            </clippath>
          </defs>
        </svg>
      </div>
    </div>
    <p className="absolute left-[1386.08px] top-[25.2px] text-sm text-left text-[#1c1d1f]">
      Udemy Business
    </p>
    <p className="absolute left-[1511.52px] top-[25.2px] text-[13px] text-left text-[#1c1d1f]">
      Teach on Udemy
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[1636px] top-6"
      preserveAspectRatio="none"
    >
      <g clip-path="url(#clip0_35_31)">
        <path
          d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9643 5.32843 21.0075 5.15747 21.0054 4.98406C21.0034 4.81064 20.956 4.64077 20.8681 4.49126C20.7803 4.34175 20.6548 4.21778 20.5043 4.13162C20.3538 4.04546 20.1834 4.00009 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
          fill="#1C1D1F"
        />
      </g>
      <defs>
        <clippath id="clip0_35_31">
          <rect width={24} height={24} fill="white" />
        </clippath>
      </defs>
    </svg>
    <div className="flex justify-start items-start absolute left-[1680px] top-4 pl-[20.5px] pr-[21.5px] pt-[10.59000015258789px] pb-[12.40999984741211px] border border-[#1c1d1f]">
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#1c1d1f]">Log in</p>
    </div>
    <div className="flex justify-start items-start absolute left-[1768px] top-4 pl-[15.25px] pr-[17.75px] pt-[10.59000015258789px] pb-[12.40999984741211px] bg-[#1c1d1f]">
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Sign up</p>
    </div>
    <div className="flex justify-start items-start absolute left-[1856px] top-4">
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative flex-grow-0 flex-shrink-0 w-10 h-10"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_35_40)">
          <path
            d="M19.9917 11.6666C15.3917 11.6666 11.6667 15.4 11.6667 20C11.6667 24.6 15.3917 28.3333 19.9917 28.3333C24.6001 28.3333 28.3334 24.6 28.3334 20C28.3334 15.4 24.6001 11.6666 19.9917 11.6666ZM25.7667 16.6666H23.3084C23.0476 15.6345 22.6614 14.6382 22.1584 13.7C23.6785 14.2233 24.9594 15.2764 25.7667 16.6666ZM20.0001 13.3666C20.6917 14.3666 21.2334 15.475 21.5917 16.6666H18.4084C18.7667 15.475 19.3084 14.3666 20.0001 13.3666ZM13.5501 21.6666C13.4167 21.1333 13.3334 20.575 13.3334 20C13.3334 19.425 13.4167 18.8666 13.5501 18.3333H16.3667C16.3001 18.8833 16.2501 19.4333 16.2501 20C16.2501 20.5666 16.3001 21.1166 16.3667 21.6666H13.5501ZM14.2334 23.3333H16.6917C16.9584 24.375 17.3417 25.375 17.8417 26.3C16.3201 25.7795 15.0383 24.7256 14.2334 23.3333ZM16.6917 16.6666H14.2334C15.0383 15.2743 16.3201 14.2204 17.8417 13.7C17.3388 14.6382 16.9526 15.6345 16.6917 16.6666ZM20.0001 26.6333C19.3084 25.6333 18.7667 24.525 18.4084 23.3333H21.5917C21.2334 24.525 20.6917 25.6333 20.0001 26.6333ZM21.9501 21.6666H18.0501C17.9751 21.1166 17.9167 20.5666 17.9167 20C17.9167 19.4333 17.9751 18.875 18.0501 18.3333H21.9501C22.0251 18.875 22.0834 19.4333 22.0834 20C22.0834 20.5666 22.0251 21.1166 21.9501 21.6666ZM22.1584 26.3C22.6584 25.375 23.0417 24.375 23.3084 23.3333H25.7667C24.9594 24.7235 23.6785 25.7766 22.1584 26.3ZM23.6334 21.6666C23.7001 21.1166 23.7501 20.5666 23.7501 20C23.7501 19.4333 23.7001 18.8833 23.6334 18.3333H26.4501C26.5834 18.8666 26.6667 19.425 26.6667 20C26.6667 20.575 26.5834 21.1333 26.4501 21.6666H23.6334Z"
            fill="#1C1D1F"
          />
        </g>
        <rect x="0.5" y="0.5" width={39} height={39} stroke="#1C1D1F" />
        <defs>
          <clippath id="clip0_35_40">
            <rect width={20} height={20} fill="white" transform="translate(10 10)" />
          </clippath>
        </defs>
      </svg>
      <div className="flex-grow-0 flex-shrink-0 w-px h-px absolute left-[-1px] top-10 overflow-hidden">
        <p className="w-[46.31px] h-[18px] absolute left-0 top-0 text-sm text-left text-[#5624d0]">
          English
        </p>
      </div>
    </div>
  </div>
</div>; */}