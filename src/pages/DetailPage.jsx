import { useParams } from 'react-router-dom';
import { useGetGameDetailQuery } from '../apiSlice/api';
import Carousel from '../components/Crousel';
import Loading from '../components/Loading';

export default function DetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetGameDetailQuery(id);

  const images = [data?.thumbnail || [], ...(data?.screenshots?.map(i => i.image) || [])];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='body-font xl:h-[90vh] overflow-hidden dark:text-white'>
      <div className='py-16 w-[100%]'>
        <div className='xl:w-4/5 xl:mx-auto mx-14 flex flex-wrap'>
          <div id='default-carousel' className='relative xl:w-1/2 w-full h-[500px] object-cover object-center rounded animate-[wiggle_0.5s_ease-in-out]' data-carousel='slide'>
            <Carousel images={images} />
          </div>
          <div className='xl:h-[80vh] overflow-auto xl:w-1/2 w-full xl:pl-10 lg:py-6 mt-6 xl:mt-0 animate-[wiggle-one_0.5s_ease-in-out]'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              {data.developer} - <span>Release Date: {data.release_date}</span>
            </h2>
            <h1 className='dark:text-white text-gray-600 text-3xl title-font font-bold my-1'>{data.title}</h1>
            <p className='leading-relaxed'>{data.description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
              <div className='flex'>
                <span className='mr-3'>Platform: {data.platform}</span>
                <span className='mr-3'>Genre: {data.genre}</span>
              </div>
            </div>
            {Object.keys(data?.minimum_system_requirements || {})?.length ? (
              <div className='flex flex-col mt-6 justify-center pb-5 border-b-2 border-gray-100 mb-5'>
                <span className='text-2xl mb-5'>Minimum System Requirements</span>
                <div className='flex flex-col'>
                  {Object.keys(data.minimum_system_requirements || {})?.map(i => (
                    <span key={i} className='mr-3'>
                      {i}: {data.minimum_system_requirements[i]}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            <div className='flex'>
              <span className='mr-1'>URL: </span>
              <a target='_blank' href={data.game_url} className='title-font font-medium underline text-blue-500' rel='noreferrer'>
                {data.game_url}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
