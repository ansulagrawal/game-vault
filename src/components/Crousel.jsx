import { useState } from 'react';

export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='relative h-full'>
      <img src={images?.[activeIndex]} key={activeIndex} alt='screenshot' className='shadow-lg w-full h-full object-cover rounded-3xl' />
      <div className='absolute inset-0 bg-black opacity-10 rounded-3xl'></div>
      <div className='absolute inset-0 flex items-end rounded-lg justify-center text-white pb-8'>
        {images.map((item, index) => (
          <button
            key={item}
            className={`${index === activeIndex ? 'bg-white text-gray-600' : 'bg-gray-600 text-white'} py-1 px-4 rounded-full mr-2 transition duration-500`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
