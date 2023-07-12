import { IPropsButton } from '../../@types/common/IPropsButton'
import className from 'classnames'

const Button: React.FC<IPropsButton> = ({ white, black, global, children, ...rest }) => {
  const classes = className(
    'h-[40px] text-[14px] font-bold border border-black flex justify-center items-center',
    {
      'w-[80px] bg-white text-black border hover:bg-gray-100 hover:opacity-80': white,
      'w-[80px] bg-black text-white hover:bg-grey1 hover:opacity-80': black,
      'w-[40px] hover:bg-gray-100 hover:opacity-80': global,
    }
    )


  return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Button