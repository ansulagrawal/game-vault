import { Link } from "react-router-dom";

function Card({ id, title, thumbnail, short_description, publisher, release_date }) {
  return (
    <Link to={`/${id}`} className='p-4 lg:w-1/4 md:w-1/2 bg-gray-900'>
      <div className='h-full flex flex-col items-center text-center'>
        <img alt='team' className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4' src={thumbnail} />
        <div className='w-full'>
          <h2 className='title-font font-medium text-lg text-white'>{title}</h2>
          <h3 className='text-white mb-3'>{publisher} - {release_date}</h3>
          <p className='mb-4 text-white'>{short_description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
