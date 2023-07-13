import ImageLogo from '../../assets/images/logo-udemy.svg'
import ImageDesc1 from '../../assets/images/image-desc1.png'
import ImageDesc2 from '../../assets/images/image-desc2.png'
import ImageDesc3 from '../../assets/images/image-desc3.png'
import ImageDesc4 from '../../assets/images/image-desc4.png'
import ImageDesc5 from '../../assets/images/image-desc5.png'
import ImageDesc6 from '../../assets/images/image-desc6.png'
import ImageDesc9 from '../../assets/images/image-desc9.png'

const Description = () => {
  return (
    <section>
      <article className='p-8 mt-16 mb-[64px] w-full h-[1263px] lg:h-[690px]'>
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
        <div className='mt-16 flex lg:flex-row-reverse lg:items-start flex-col items-center justify-center w-full xl1:max-w-[1340px] mx-auto'>
          <div className='lg:ml-16 w-[600px] h-[600px] lg:w-[400px] lg:h-[400px] bg-cover bg-[url(https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg)]'></div>
          <div className=''>
            <div className='flex items-center justify-center mt-6 space-x-2 lg:justify-start'>
              <img src={ImageLogo} alt="" />
              <img src={ImageDesc9} alt="" />
            </div>
            <div className=''>
              <h2 className='mt-4 text-[32px] font-bold w-[600px] lg:w-[400px] tracking-wider'>Udemy Business로 팀의 스킬을 향상하세요</h2>
              <ul className='px-5 mt-4 space-y-4 w-[600px] lg:w-[400px]'>
                <li className='list-disc text-[19px]'> 언제 어디서든 22,000개가 넘는 Udemy 최고의 강의를 무제한 이용하세요</li>
                <li className='list-disc text-[19px]'> 14개 언어로 제공되는 다국어 강의 모음</li>
                <li className='list-disc text-[19px]'> 기술 및 비즈니스 분야 최고의 자격증</li>
              </ul>
              <div className='flex items-center justify-between w-full mt-5 space-x-3 lg:justify-start'>
                <button className='font-bold w-1/2 lg:w-[220px] p-4 text-center text-white bg-black1'>Udemy Business 구매하기</button>
                <button className='font-bold w-1/2 lg:w-[140px] p-4 text-center bg-white border border-black1'>자세히 알아보기</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className='mt-4 px-8 mb-[96px] w-full h-[655px] lg:h-[400px]'>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:space-x-[96px]'>
          <div className='mb-4 p-1 w-[600px] h-[450px] lg:w-[400px] lg:h-[400px]'>
            <div className='bg-contain bg-[url(https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg)] w-full h-full'></div>
          </div>
          <div className='h-full max-w-[600px] lg:max-w-[400px] flex flex-col items-center justify-center lg:items-start'>
            <h2 className='text-center lg:text-start w-full text-[32px] mb-4'>강사 등록</h2>
            <p className='text-center lg:text-start w-full leading-8 lg:tracking-tight text-[19px] mb-4'>전 서계 강사들이 수백만 명의 수강생들을 Udemy에서 가르치고 있습니다. Udemy에서는 좋아하는 것을 가르칠 수 있는 도구와 기술을 제공합니다.</p>
            <button className='text-white px-3 w-[145px] h-[50px] bg-black1'>지금 교육 시작하기</button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Description