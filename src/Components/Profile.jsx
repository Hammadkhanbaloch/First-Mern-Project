import React from 'react'
import {useSelector} from 'react-redux'
import {useRef} from 'react'
import {useState} from 'react'
import { updateStart,updateSuccess,updateFailure} from '../redux/user/userslice'
import {deleteStart,deleteSuccess,deleteFailure} from '../redux/user/userslice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { use } from 'react'

export default function Profile() {
    const [formData,setFormData]=useState({}) 
    const dispatch=useDispatch()
    const loading=useSelector(state=>state.user.loading)
    const currentUser=useSelector(state=>state.user.currentUser)
    const navigate=useNavigate()
    const fileRef=useRef()
    // console.log("Current User:", currentUser);
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
          dispatch(updateStart())
          if (!currentUser || !currentUser._id) {
          console.log('User not found');
        }
          const res=await fetch(`/api/auth/update/${currentUser._id}`,
          {
            method:'POST',
          headers:{'Content-Type':'application/json'},
          credentials: 'include',
          body:JSON.stringify(formData)})
          const data=await res.json()
          if(data.success===false){
            dispatch(updateFailure(data.message))
            return;
          }
          dispatch(updateSuccess(data))
        }
        catch(err){
            dispatch(updateFailure(err.message))
        }

    }
    const handledelete=async()=>{
      try{
        dispatch(deleteStart())
        if (!currentUser || !currentUser._id) {
          console.log('User not found');
        }
        const res=await fetch(`/api/auth/delete/${currentUser._id}`,
        {
          method:'DELETE',
        headers:{'Content-Type':'application/json'},
        credentials: 'include',
        })
        const data=await res.json()
        if(data.success===false){
          dispatch(deleteFailure(data.message))
          return;
        }
        dispatch(deleteSuccess(data.message))
        navigate('/login');
      }catch(err){
        dispatch(deleteFailure(err.message))
      }
    }
    const handlesignout=async()=>{
      try{
        dispatch(deleteStart())
        const res=await fetch('/api/auth/logout',
        {
          method:'GET',
        headers:{'Content-Type':'application/json'},
        credentials: 'include',
        })
        const data=await res.json()
        if(data.success===false){
          dispatch(deleteFailure(data.message))
          return;
        }
        dispatch(deleteSuccess(data.message))
        navigate('/login');
      }catch(err){
        dispatch(deleteFailure(err.message))
      }
    }
  return (
    <div className='p-3 max-w-lg  border rounded-lg shadow-lg my-10 mx-auto '>
        <h1 className='text-3xl text-center font-semibold  my-7'>Profile</h1>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-4 '>
            <input type='file' ref={fileRef} className='hidden' accept='images/.*' />
            <img src={currentUser.avatar} onClick={()=>fileRef.current.click()} alt='Profile' className='w-24 h-24 rounded-full object-cover mx-auto cursor-pointer self-center mt-2'/>
            <input type='text' id='username' placeholder='UserName' defaultValue={currentUser.username} onChange={handleChange} className=' p-3 border  rounded-lg'/>
            <input type='email'  id='email' placeholder='Email' defaultValue={currentUser.email} onChange={handleChange} className=' p-3 border  rounded-lg'/>
            <input type='text' placeholder='password' id='password'  onChange={handleChange} className=' p-3 border  rounded-lg'/>
            <button  disabled={loading}  className='bg-blue-700 text-white p-4 rounded-lg uppercase hover:opacity-95 text-center'>
             {loading?'Loading...':'Update'}
             </button>
             <div className='p-4 bg-green-500 rounded-lg text-white text-center my-1'>
        <Link to='/create_listing' className=' text-white-700 my-0  hover:opacity-95 uppercase'> create listing</Link>
        </div>
        </form>
        <div className='flex justify-between '>
          <span  onClick={handledelete} className='text-red-700 my-3 cursor-pointer'> Delete Account</span>
          <span  onClick={handlesignout} className='text-blue-700 my-3 cursor-pointer'> Sign out</span>
        </div>
    </div>
  )
}
