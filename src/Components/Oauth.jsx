import React from 'react'
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/user/userslice';
import { useNavigate } from 'react-router-dom';
export default function Oauth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick=async ()=>{
        try{
            const provider = new GoogleAuthProvider();
            const auth= getAuth(app);
            const result= await signInWithPopup(auth,provider);
            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
            });
            const data=await res.json();
            dispatch(loginSuccess(data));
            navigate('/');
        }catch(error){
            console.log(error);
            }
    }
  return (
    <button onClick={handleGoogleClick} type='button' 
    className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95' > Continue With Google </button>
  )
}
