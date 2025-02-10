import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
export default function Header() {
  try{
    const currentUser=useSelector(state=>state.user)
    console.log(currentUser)
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
              
              <Link to="/Profile"> 
              {currentUser?(
              <img src={currentUser.avatar} alt='profile' className='w-7 h-7 rounded-full object-cover'/>
            ):(
            <li className=' text-slate-700 hover:underline'>SignUp</li>)
            }
              </Link>
        </ul>
        </div>
    </header>
    
  )
}catch(err){
  console.log(err)
}
}
