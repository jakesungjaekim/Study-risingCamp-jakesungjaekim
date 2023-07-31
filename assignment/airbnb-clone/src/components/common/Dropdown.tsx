import { useState } from 'react'
import ReactDOM  from 'react-dom'
import AuthModal from './AuthModal'
import { IPropsDropdown } from '../../@types/IPropsDropdown'

const Dropdown: React.FC<IPropsDropdown> = ({ onCloseDropdown }) => {
  console.log('Dropdown Mounted')
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false)

  const handleOpen = () => { 
    console.log('handleOpen')
    setShowAuthModal(prev => !prev)
  }
  console.log(showAuthModal)

  const handleClose = () => {
    setShowAuthModal(false)
  }

  const handleClick = () => {
    handleOpen()
  }

  const authModal = <AuthModal onClose={handleClose} onCloseDropdown={onCloseDropdown}/>

  
  return ReactDOM.createPortal(
    <>
      { showAuthModal && authModal }
      <div>
        <div className="absolute top-[75px] right-10 z-50 p-2 shaodw shadow-xl dropdown-content menu bg-base-100 rounded-box w-60">
          <li onClick={handleOpen}><a className='font-semibold '>로그인</a></li>
          <li onClick={handleClick}><a className=''>회원가입</a></li>
          <div className='my-3 w-full h-[1px] border-t border-gray-300'/>
          <li ><a className=''>당신의 공간을 에어비앤비하세요</a></li>
          <li ><a className=''>도움말</a></li>
        </div>
      </div>
    </>,
      document.querySelector('.dropdown-container') as Element
  )
}

export default Dropdown