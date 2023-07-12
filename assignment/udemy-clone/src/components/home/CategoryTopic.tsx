const CategoryTopic = () => {
  return (
    <section className='w-full min-h-[480px] lg:min-h-[490px] mt-16 px-6 py-16 mx-auto bg-gray-100'>
      <div className='xl1:max-w-[1340px] mx-auto'>
        <h2 className='text-[24px] font-bold mb-6'>카테고리별 추천 주제</h2>
        <div className='grid grid-cols-2 gap-4 xs1:grid-cols-4 lg:gap-6 xl:gap-8'>
          {/* Items 1 */}
          <div className='w-[300px] h-[244px] flex flex-col items-start justify-center'>
            <p className='font-bold text-[19px] mb-6'>Development</p>
            <div>
              <a className='font-bold underline text-violet1' href="#">Python</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">Web Development</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">Machine Learning</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
          </div>
          {/* Items 2 */}
          <div className='w-[300px] h-[244px] flex flex-col items-start justify-center'>
            <p className='font-bold text-[19px] mb-6'>Business</p>
            <div>
              <a className='font-bold underline text-violet1' href="#">Financial Analysis</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">SQL</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">PMP</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
          </div>
          {/* Items 3 */}
          <div className='w-[300px] h-[244px] flex flex-col items-start justify-center'>
            <p className='font-bold text-[19px] mb-6'>IT and Software</p>
            <div>
              <a className='font-bold underline text-violet1' href="#">Amazon AWS</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">Ethical Hacking</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">Cyber Security</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
          </div>
          {/* Items 4 */}
          <div className='w-[300px] h-[244px] flex flex-col items-start justify-center'>
            <p className='font-bold text-[19px] mb-6'>Design</p>
            <div>
              <a className='font-bold underline text-violet1' href="#">Photoshop</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">Graphic Design</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
            <div className='mt-6'>
              <a className='font-bold underline text-violet1' href="#">Drawing</a>
              <p className='mt-2 text-[14px] text-grey1'>36,363,635 students</p>
            </div>
          </div>
        </div>
        <div>
          <button className='flex items-center justify-center text-[14px] font-bold w-full xs1:w-[140px] h-[38px] p-2 border border-black1'>더 많은 주제 둘러보기</button>
        </div>
      </div>
    </section>
  )
}

export default CategoryTopic