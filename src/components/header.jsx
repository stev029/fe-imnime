import { useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, SetMenu] = useState(false)
  const [search, SetSearch] = useState(false)
  const [searchInput, SetSearchInput] = useState("")

  return (
    <div className="fixed w-full z-[1]">
      <div className="flex bg-gray-600 dark:bg-slate-200 w-full py-2 px-14 items-center border-slate-300 border-b-2">
        <div className="hidden relative text-2xl -left-6 sm:block">
          <FaBars className="cursor-pointer" onClick={() => SetMenu(!menu)} />
        </div>
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="text-2xl">IMNime</Link>
          <div className="flex justify-between items-center w-full sm:justify-start">
            <form action="" className="relative sm:static flex mx-10 items-center w-1/2">
              <Transition
                className={`absolute my-3 right-0 sm:left-1/2 w-full sm:top-full sm:-z-[1]`}
                show={search}
                enter="transition-all ease-in duration-800 origin-right"
                enterFrom="scale-x-0 sm:-translate-y-full"
                enterTo="scale-x-100 sm:translate-y-0"
                leave="transition-all ease-in duration-300"
                leaveFrom="w-full sm:translate-y-0"
                leaveTo="w-0 sm:-translate-y-full">
                <input className="p-1.5 rounded-md w-full sm:w-40 bg-gray-900 dark:bg-slate-400 text-slate-100 dark:text-black" type="text" name="search" placeholder="Search Anime" onChange={(e) => SetSearchInput(e.target.value)} value={searchInput} />
                {search && searchInput &&
                  <button className='absolute right-2 top-2 text-xl' type="button" onClick={() => SetSearchInput("")}>
                    <BiX />
                  </button>
                }
              </Transition>
              <div className="absolute flex space-x-1 items-center right-2 text-xl">
                <button type="button" onClick={() => SetSearch(!search)}>
                  <BiSearch />
                </button>
              </div>
            </form>
            <div className="flex gap-3 sm:hidden">
              <a href="#home">Home</a>
              <a href="#jadwal">Jadwal</a>
              <a href="#populer">Populer</a>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full" onClick={() => document.documentElement.classList.toggle('dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="relative hidden -right-6 sm:block cursor-pointer" onClick={() => SetSearch(!search)}>
          <BiSearch className="text-2xl" />
        </div> */}
      </div>
      {/* <Transition className={`absolute my-3 w-full -z-[1]`}
        show={search}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full">
        <div className="mx-6">
          <form className="relative" action="">
            <input className="w-full rounded-md py-2 px-4" type="text" placeholder="Search..." autoComplete="false" onChange={(e) => SetSearchInput(e.target.value)} value={searchInput} />
            <div className="flex absolute h-full right-3 top-0 items-center">
              {searchInput && <BiX className="mx-3 text-xl cursor-pointer" onClick={() => SetSearchInput("")} />}
              <button>
                <BiSearch className="text-xl" />
              </button>
            </div>
          </form>
        </div>
      </Transition> */}
      <Transition className="absolute left-0 h-screen w-64 bg-slate-800 text-white z-10" id="sidebar"
        show={menu}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full">
        <div className="flex items-center justify-end w-full bg-slate-900 p-4">
          <button onClick={() => SetMenu(false)} className="text-xl">
            <BiX />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <a href="#home" className="py-2 hover:bg-slate-700 rounded-md">Home</a>
          <a href="#jadwal" className="py-2 hover:bg-slate-700 rounded-md">Jadwal</a>
          <a href="#populer" className="py-2 hover:bg-slate-700 rounded-md">Populer</a>
          <a href="#kontak" className="py-2 hover:bg-slate-700 rounded-md">Kontak</a>
        </nav>
      </Transition>
    </div >
  );
};

export default Header;