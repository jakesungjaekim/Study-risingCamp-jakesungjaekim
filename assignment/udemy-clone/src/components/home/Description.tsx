import ImageDesc1 from '../../assets/images/image-desc1.png'
import ImageDesc2 from '../../assets/images/image-desc2.png'
import ImageDesc3 from '../../assets/images/image-desc3.png'
import ImageDesc4 from '../../assets/images/image-desc4.png'
import ImageDesc5 from '../../assets/images/image-desc5.png'
import ImageDesc6 from '../../assets/images/image-desc6.png'
import ImageDesc7 from '../../assets/images/image-desc7.png'
import ImageDesc8 from '../../assets/images/image-desc8.png'

const Description = () => {
  return (
    <section>
      <article className='p-8 mt-16 mb-[96px] w-full h-[1263px] lg:h-[690px] lg:h-[690px'>
        <div className='flex flex-col items-center justify-center mb-6'>
          <h2 className='font-semibold text-[24px]'>13,400개 이상의 뛰어난 팀에서 신뢰함</h2>
          <p className='mt-2 min-w-[610px]'>선도적인 기업들은 동일한 강의를 활용하여 직원들이 기술을 최신으로 유지할 수 있도록 지원합니다.</p>
        </div>
        <div className='w-full xl1:max-w-[1340px] mx-auto'>
          <div className='grid grid-cols-3 gap-3 lg:grid-cols-6'>
            <div className='flex items-center justify-center'>
              <img className='object-right' src={ImageDesc1} alt="image-desc1" />
            </div>
            <div className='flex items-center justify-center'>
              <img className='object-center' src={ImageDesc2} alt="image-desc2" />
            </div>
            <div className='flex items-center justify-center'>
              <img className='object-center' src={ImageDesc3} alt="image-desc3" />
            </div>
            <div className='flex items-center justify-center'>
              <img className='object-center' src={ImageDesc4} alt="image-desc4" />
            </div>
            <div className='flex items-center justify-center'>
              <img className='object-center' src={ImageDesc5} alt="image-desc5" />
            </div>
            <div className='flex items-center justify-center'>
              <img className='object-center' src={ImageDesc6} alt="image-desc6" />
            </div>
          </div>
        </div>
      </article>
      <article className='mb-[96px] w-full h-[655px] lg:h-[400px] bg-cyan-100'>
      </article>
    </section>
  )
}

export default Description