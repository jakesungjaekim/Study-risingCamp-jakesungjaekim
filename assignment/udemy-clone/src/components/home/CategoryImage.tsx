import ImgCategory1 from '../../assets/images/image-category1.png'
import ImgCategory2 from '../../assets/images/image-category2.png'
import ImgCategory3 from '../../assets/images/image-category3.png'
import ImgCategory4 from '../../assets/images/image-category4.png'
import ImgCategory5 from '../../assets/images/image-category5.png'
import ImgCategory6 from '../../assets/images/image-category6.png'
import ImgCategory7 from '../../assets/images/image-category7.png'
import ImgCategory8 from '../../assets/images/image-category8.png'


const CategoryImage = () => {
  return (
    <section className='mt-16 xl1:max-w-[1340px] px-6 mx-auto'>
      <h2 className='font-bold text-[24px] mb-6'>인기 카테고리</h2>
      <article className='xs:hidden xs1:block min-h-[710px] sm:min-h-[806px] sm1:min-h-[433px] md:min-h-[478px] lg:min-h-[568px] lg1:min-h-[618px]  xl1:min-h-[725px]'>
        {/* Grid */}
        <div className='grid gap-4 xs1:grid-cols-3 sm1:grid-cols-4'>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory1} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>디자인</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory2} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>개발</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory3} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>마케팅</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory4} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>IT 및 소프트웨어</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory5} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>자기 계발</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory6} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>비즈니스</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory7} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>사진</div>
          </div>
          <div>
            <img className='transition duration-300 ease-in-out hover:scale-105' src={ImgCategory8} alt="image-cate1" />
            <div className='pt-2 pb-4 font-bold'>음악</div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default CategoryImage