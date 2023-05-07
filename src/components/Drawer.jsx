import { useEffect, useRef } from 'react';

function Drawer({ title = 'demo', open = false, setOpen, children }) {
  const drawerRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [drawerRef, setOpen]);

  return (
    <div ref={drawerRef} className={`fixed right-0 bg-white h-full top-0 transition duration-75 ease-in z-50 w-[25vw] shadow-[-10px_0_10px_rgba(0,0,0,0.1)] ${!open ? 'translate-x-[100%]' : ''}`}>
      {open && (
        <>
          <div className='dark:bg-gray-800 h-[80px] text-gray-600 flex place-items-center justify-between dark:text-white text-3xl px-10 shadow-[0_10px_10px_rgba(0,0,0,0.1)]'>
            <span>{title}</span>
            <button className='focus:outline-none' onClick={() => setOpen(i => !i)}>
              X
            </button>
          </div>
          <div className=''>{children}</div>
        </>
      )}
    </div>
  );
}

export default Drawer;
