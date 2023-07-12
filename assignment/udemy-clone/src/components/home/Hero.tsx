import ImageHero from '../../assets/images/image-hero.png'
import ImageHeor2 from '../../assets/images/image-hero2.png'


const Hero = () => {

  return (
    <article className='xl1:container xl1:min-h-[350px] sm1:min-h-[210px] md:min-h-[300px] xl:min-h-[350px] xl1:mx-auto'>
      <div className='relative w-full h-full sm1:flex '>
        <img className='object-cover w-full h-full mb-4 sm1:hidden' src={ImageHero} alt="image-hero" />
        <img className="hidden object-cover w-full h-full mb-12 sm1:block"  src={ImageHeor2} alt="image-hero2" />
        <div className='hidden absolute top-[24px] left-[48px] sm1:block p-6 min-w-[340px] lg:min-w-[400px] xl1:top-[64px] xl1:left-[72px] min-h-[157px] border shadow-md bg-white'>
          <h1 className='text-[32px] mb-2 tracking-wider'>수강생 감사 할인</h1>
          <p className='text-[16px] leading-6'>7월 13일까지 수강료 ₩14,000부터 판매되는<br/>강의로 특별 감사 할인 혜택을 받아보세요</p>
        </div>
        </div>
    </article>
  )
}

export default Hero