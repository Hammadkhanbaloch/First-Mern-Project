import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function SignUp() {
  const[FormData,SetformData]=useState();
  const [error,setError]=useState(null);
  const [loading, setLoading]=useState(false)
  const navigate=useNavigate();
  const handleChange=(e)=>{
    SetformData({
      ...FormData,
      [e.target.id]:e.target.value
    });
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
    setLoading(true)
    const res= await fetch('/api/auth/signup',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(FormData)
      }
    );
    const data=await res.json();
    console.log(data);
    if(data.success==false){
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/LogIn');
  }catch(error){
    setLoading(false);
    setError(error.message);
  }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border p-3 rounded-lg  ' id='username' onChange={handleChange}/>
        <input type="text" placeholder='email' className='border p-3 rounded-lg  ' id='email' onChange={handleChange}/>
        <input type="text" placeholder='password' className='border p-3 rounded-lg  ' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95' >{loading? 'loading... ':'Sign Up'}</button>
      </form>
      <div className='flex gap-3'>
      <p>Have An Account ?</p>
      <span className=' text-blue-700'>
        <Link to='/LogIn'>Log In</Link>
        </span>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
