import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IPropsAuthModal } from '../../@types/IPropsAuthModal'

const AuthModal:React.FC<IPropsAuthModal> = ({ onClose, onCloseDropdown }) => {
  console.log("AuthModal Mounted")
  useEffect(() => {
    onCloseDropdown()
  },[])

  useEffect(()=>{
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }

  },[])

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='fixed inset-0 bg-[#222222] opacity-60'>
      </div>
    </div>,
    document.querySelector('.modal-container') as Element
  )
}

export default AuthModal
