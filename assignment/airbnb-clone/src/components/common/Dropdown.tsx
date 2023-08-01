import ReactDOM  from 'react-dom'
import { IPropsDropdown } from '../../@types/IPropsDropdown'

const Dropdown: React.FC<IPropsDropdown> = ({ onOpenModal }) => {

  const handleClick = () => { 
    console.log('handleOpen')
    onOpenModal()
  }

  return ReactDOM.createPortal(
    <>
      <div className='fixed inset-0'>
        <div className="fixed top-[75px] right-10 z-50 p-2 shaodw shadow-xl dropdown-content menu bg-base-100 rounded-box w-60">
          <li onClick={handleClick}><a className='font-semibold '>로그인</a></li>
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