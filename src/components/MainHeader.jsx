import React, {useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const showNavBarFn = () => {
    setShowNavBar(true);
  };

  const hideNavBarFn = () => {
    setShowNavBar(false);
  };


  return (
    <>
      <div className='flex justify-end md:mb-4'>
        <div className={`w-[40%] h-[100vh] bg-gray-700 fixed top-0 duration-700 text-white ${(showNavBar) ? 'right-0' : 'right-[-40%]'} md:flex md:flex-row md:h-auto md:w-[100vw] md:right-0`}>
          <button className='text-3xl ml-1 md:hidden' onClick={hideNavBarFn}>&times;</button>
          <ul className='flex flex-col items-center justify-between h-[40%] md:flex md:flex-row md:justify-end md:h-auto md:w-full md:items-center md:my-4'>
           
            <li className='md:mx-8'>
              <NavLink onClick={() => { setShowNavBar(false); }} to='/' className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-white"}`}>
                Registerd Users
              </NavLink>
            </li>

            <li className='md:mx-8'>
              <NavLink onClick={() => { setShowNavBar(false); }} to='/quotes' className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-white"}`}>
                Users Queries
              </NavLink>
            </li>

            <li className='md:mx-8'>
              <NavLink onClick={() => { setShowNavBar(false); }} to='/contact-us' className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-white"}`}>
                Contact us
              </NavLink>
            </li>
            

          </ul>
        </div>
        <button className='text-3xl mt-2 mr-4' onClick={showNavBarFn}>&#9776;</button>
      </div>
    </>
  );
};

export default MainHeader;
