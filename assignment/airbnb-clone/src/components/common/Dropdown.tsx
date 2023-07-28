import ReactDOM  from 'react-dom'

const Dropdown = () => {
  
  return ReactDOM.createPortal(
      <div className="absolute top-[75px] right-10 z-50 p-2 shaodw shadow-xl dropdown-content menu bg-base-100 rounded-box w-60">
        <li ><a className='font-semibold '>로그인</a></li>
        <li ><a className=''>회원가입</a></li>
        <div className='my-3 w-full h-[1px] border-t border-gray-300'/>
        <li ><a className=''>당신의 공간을 에어비앤비하세요</a></li>
        <li ><a className=''>도움말</a></li>
      </div>,
      document.querySelector('.dropdown-container') as Element
  )
}

export default Dropdown