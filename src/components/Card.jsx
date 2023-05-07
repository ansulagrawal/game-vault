import { Link } from 'react-router-dom';

function Card({ id, title, thumbnail, short_description, publisher, release_date, index }) {
  let className = '';

  if ((index + 1) % 3 === 0) {
    className = `xl:animate-[card-0_1s_ease-in-out]`;
  }
  if ((index + 1) % 3 === 1) {
    className = `xl:animate-[card-1_1s_ease-in-out]`;
  }
  if ((index + 1) % 3 === 2) {
    className = `xl:animate-[card-2_1s_ease-in-out]`;
  }

  return (
    <Link to={`/${id}`} className={`${className} p-4 xl:w-1/4 lg:w-1/2 w-full h-[400px] shadow-xl dark:bg-gray-900 bg-white lg:hover:scale-110 transition ease-in-out rounded-lg duration-700`}>
      <div className='h-full relative overflow-hidden group flex flex-col items-center text-center'>
        <img alt='team' className='image flex-shrink-0 rounded-lg w-full h-full object-cover object-center' src={thumbnail} />
        <div className='absolute w-full rounded-lg transition opacity-80 bottom-0 top-0 duration-300 delay-150 bg-gray-200 dark:bg-black translate-y-[100%] group-hover:translate-y-[0%] text-3xl flex place-items-center justify-center'>
          <div className='w-full p-3'>
            <h2 className='title-font font-medium text-3xl dark:text-white'>{title}</h2>
            <h3 className='dark:text-white mb-3 text-sm'>
              {publisher} - {release_date}
            </h3>
            <p className='mb-4 dark:text-white text-base'>{short_description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
