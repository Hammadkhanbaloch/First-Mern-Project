import React from 'react'
import {useSelector} from 'react-redux'
import {useRef} from 'react'
export default function Profile() {
    const currentUser=useSelector(state=>state.user)
    const fileRef=useRef()
  return (
    <div className='p-3 max-w-lg  border rounded-lg shadow-lg my-10 mx-auto '>
        <h1 className='text-3xl text-center font-semibold  my-7'>Profile</h1>
        <form  className='flex flex-col gap-4 '>
            <input type='file' ref={fileRef} className='hidden' accept='images/.*' />
            <img src={currentUser.avatar} onClick={()=>fileRef.current.click()} alt='Profile' className='w-24 h-24 rounded-full object-cover mx-auto cursor-pointer self-center mt-2'/>
            <input type='text' id='username' placeholder='UserName' className=' p-3 border  rounded-lg'/>
            <input type='email'  id='email' placeholder='Email' className=' p-3 border  rounded-lg'/>
            <input type='text' placeholder='password' id='password' className=' p-3 border  rounded-lg'/>
            <button className='bg-blue-500 text-white p-3 rounded-lg'>Update</button>
        </form>
        <div className='flex justify-between '>
          <span className='text-red-700 cursor-pointer'> Delete Account</span>
          <span className='text-blue-700 cursor-pointer'> Sign out</span>

        </div>
    </div>
  )
}
