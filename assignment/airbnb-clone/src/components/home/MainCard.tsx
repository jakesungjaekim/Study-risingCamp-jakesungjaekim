import { useState } from 'react'
import className from 'classnames'
import { AiTwotoneStar } from 'react-icons/ai'

interface IPropsMainCard {
  size: number
  photo: any
}

const MainCard = ({
  size,
  photo
}: IPropsMainCard) => {
  let selectedSize;

  if(size < 1024) {
    selectedSize = 'md';
  } else if(size < 1280) {
    selectedSize = 'lg';
  } else if(size < 1540) {
    selectedSize = 'xl';
  } else if(size < 1920) {
    selectedSize = 'twoXl';
  } else {
    selectedSize = 'threeXl';
  }

  const classes = className('w-full rounded-2xl', {
    'min-w-[332px] h-[415.4px]': selectedSize === 'md',
    'min-w-[298.7px] h-[383.7px]': selectedSize === 'lg',
    'min-w-[257px] h-[344.15px]': selectedSize === 'xl',
    'min-w-[295px] h-[381.2px]': selectedSize === 'threeXl',
  })

  const classesImg = className('w-full mb-3 rounded-2xl object-cover', {
    'min-h-[315.875px]': selectedSize === 'md',
    'min-h-[283.73px]': selectedSize === 'lg',
    'min-h-[267.9px]': selectedSize === 'xl',
    'min-h-[281.2px]': selectedSize === 'threeXl',
  })

  const [money, setMoney] = useState<number>(1844242341)

  const addComma = (price: number) => {
    let commaNumber = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return commaNumber
  }
  

  return (
    <article className={classes}>
      <div className="object-cover">
        <img className={classesImg} src={photo.urls.small_s3} alt="image" style={{ maxHeight: '280px'}} />
      </div>
      <div className='text-sm cursor-pointer'>
        {/* 지명, 별점 */}
        <div className='flex items-center justify-between font-AirbnbBold text-[15px]'>
          <p>{photo.id}</p>
          <p className='flex items-center justify-center font-AirbnbBlack'><AiTwotoneStar className="mr-1"/>5.00</p>
        </div>
        {/* 위치 날짜 */}
        <div className='text-gray-400'>
          <p>산 및 정원 전망</p>
          <p>9월11일~16일</p>
        </div>
        {/* 가격 */}
        <div className='font-AirbnbBold mt-[6px]'>
          <p>{addComma(money)}<span>/❤️{photo.likes}</span></p>
        </div>
      </div>
    </article>
  )
}

export default MainCard


// 768 md: (332 x 415.4) // Grid2
// 1024 lg: (298.66 x 383.73) // Grid3
// 1280 xl: (257 x 344.15) // Grid4
// 1920 3xl: (296 x 381.2) // Grid5