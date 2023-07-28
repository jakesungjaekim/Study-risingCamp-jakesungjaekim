const Dropdown = () => {
  return (
      <div className="absolute top-[75px] right-10 z-10 p-2 shaodw shadow-xl dropdown-content menu bg-base-100 rounded-box w-60">
        <li ><a className='z-10'>로그인</a></li>
        <li ><a className='z-10'>회원가입</a></li>
        <div className='my-3 w-full h-[1px] border-t border-gray-300'/>
        <li ><a className='z-10'>당신의 공간을 에어비앤비하세요</a></li>
        <li ><a className='z-10'>도움말</a></li>
      </div>
  )
}

export default Dropdown