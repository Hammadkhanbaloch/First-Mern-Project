import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  try{
  return (
    
    <header className='bg-slate-200 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl max-auto p-3 mx-10'>
        <Link to="/">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-700'>Hammad</span>
        <span className='text-slate-500'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
            <input type='text' placeholder='Search...' className='focus outline-none' />
        </form>
        <ul className='flex gap-4'> 
          
          <li className='hidden sm:inline text-slate-700 hover:underline'>
           <Link to="/">Home</Link>
            </li> 
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              <Link to="/About">About</Link>
              </li>
            <li className=' text-slate-700 hover:underline'>
              <Link to="/SignUp">SignUp</Link>
              </li>
        </ul>
        </div>
    </header>
    
  )
}catch(err){
  console.log(err)
}
}
