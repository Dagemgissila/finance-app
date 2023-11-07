import React from 'react'
import { useState } from 'react';
import {close,menu,logo} from '../assets';
import {navLinks} from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 flex-between navbar'>
       <img src={logo} alt="hoo bank" className='w-[124px] h-[32px]' />
           <ul className='list-none sm:flex hidden justify-end flex-1'>
              {
                navLinks.map((nav,index)=>(
                  <li key={nav.id} className={`font-poppins font-normal cursot-pointer text-[16px]
                   text-white ${index===navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))
              }
           </ul>
           <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ?close :menu }
             alt="menu" 
             className='h-[28px] w-[28px] object-contain'
               onClick={()=>setToggle((prev)=> !prev)}
             />

             <div className={`${toggle ? 'flex': 'hidden'} 
             p-6 bg-black-gradient absolute top-20 right-0 
             mx-1 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className='list-none flex flex-col justify-end flex-1'>
              {
                navLinks.map((nav,index)=>(
                  <li key={nav.id} className={`font-poppins font-normal cursot-pointer text-[16px]
                   text-white ${index===navLinks.length -1 ? 'mr-0' : 'mb-4'}`}>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))
              }
           </ul>
             </div>
           </div>
    </nav>
  )
}

export default Navbar