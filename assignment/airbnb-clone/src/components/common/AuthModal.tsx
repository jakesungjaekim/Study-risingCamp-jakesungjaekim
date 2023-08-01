import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IPropsAuthModal } from '../../@types/IPropsAuthModal'

const AuthModal:React.FC<IPropsAuthModal> = ({ onClose }) => {

  useEffect(()=>{
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }

  },[])
  
  const innerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return ReactDOM.createPortal(
    <div >
      <div onClick={onClose} style={{backgroundColor: 'rgba(34, 34, 34, 0.6)'}}  className='fixed inset-0 flex items-center justify-center'>
        <div onClick={innerClick} className='fixed bg-white min-w-[568px] min-h-[746px] rounded-lg'>

        </div>
      </div>
    </div>,
    document.querySelector('.modal-container') as Element
  )
}

export default AuthModal

// md:left-[100px] lg:left-[260px] md:bottom-[230px] xs:bottom-0 
