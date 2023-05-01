import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='bg-gray-800 h-[50px] text-white body-font sticky top-0 left-0 right-0 shadow-[0_10px_10px_rgba(0,0,0,0.3)]'>
      <div className='w-full p-5 flex flex-wrap  py-2 flex-col md:flex-row items-center'>
        <Link to="/" className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
          <h1 className='ml-3 text-2xl'>GameVault</h1>
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          {/* <a className='mr-5 hover:text-gray-900'>First Link</a>
          <a className='mr-5 hover:text-gray-900'>Second Link</a>
          <a className='mr-5 hover:text-gray-900'>Third Link</a>
          <a className='mr-5 hover:text-gray-900'>Fourth Link</a> */}
        </nav>
        {/* <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
          Button
          <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-1' viewBox='0 0 24 24'>
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}

export default Header;
