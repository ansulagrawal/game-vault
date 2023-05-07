import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Moon from './Moon';
import Drawer from './Drawer';
import FilterComponent from './FilterComponent';
import FilterIcon from './FilterIcon';

function Header() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (localStorage.getItem('mode') === 'true') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const darkModeHandler = () => {
    setDark(!dark);
    localStorage.setItem('mode', !dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <header className='dark:bg-gray-800 bg-white h-[80px] flex align-middle z-40 dark:text-white body-font sticky top-0 left-0 right-0 shadow-[0_10px_10px_rgba(0,0,0,0.1)]'>
        <div className='w-full p-5 flex flex-wrap align-middle justify-between  py-2 flex-col md:flex-row items-center'>
          <Link to='/' className='flex title-font font-medium items-center text-gray-800 dark:text-white'>
            <h1 className='ml-3 text-3xl'>GameVault</h1>
          </Link>
          <nav className='flex gap-10'>
            {!id ? (
              <button className='flex items-center gap-[10px]' onClick={() => setOpen(i => !i)}>
                <FilterIcon />
                <span className='text-[14px] md:text-[17px]'>Filter</span>
              </button>
            ) : null}
            <button className='flex items-center gap-[10px] focus:outline-none' onClick={darkModeHandler}>
              <Moon dark={dark} className='w-[20px] h-[20px]' />
              <span className='text-[14px] md:text-[17px]'>{dark ? 'Light' : 'Dark'} Mode</span>
            </button>
          </nav>
        </div>
      </header>
      <Drawer open={open} setOpen={setOpen} title='Filter'>
        <FilterComponent />
      </Drawer>
    </>
  );
}

export default Header;
