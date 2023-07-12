import CarouselCard from './components/CarouselCard'


const Carousel = () => {
  return (
    <section className='mt-16 xl1:max-w-[1340px] px-6 mx-auto'>
      <h2 className='text-[24px] font-bold'>수강생이 보고 있는 강의</h2>
      <article className='mt-4 min-h-[306px] bg-rose-50 grid xs1:grid-cols-2 sm1:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <CarouselCard />
      </article>
    </section>
  )
}

export default Carousel