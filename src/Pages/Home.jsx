import { hash } from 'bcryptjs';
import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { modelFailure,modelStart,modelSuccess } from '../redux/user/userslice';
export default function Home() {
  const {loading,error}=useSelector((state)=>state.user);
  const dispatch=useDispatch();
const [formData,setData]=useState();
const handleChange=(e)=>{
  setData({
    ...formData,
    [e.target.id]:e.target.value
  });
};
const handleSubmit=async (e)=>{
  e.preventDefault();
try
{
  dispatch(modelStart());
  const res= await fetch('/api/model',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }
  );
  const data=await res.json();
  console.log(data);
  if(data.success==false){
    dispatch(modelFailure(data.message));
    return;
  }
  dispatch(modelSuccess(data));
}
catch(error){
  dispatch(modelFailure(error.message));
}
};
return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
          Welcome to Our Trained Model
        </h1>
        <form  onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Grade" className="text-lg font-semibold text-gray-700 mb-1">
              Overall Grade
            </label>
            <select
              name="Grade"
              id="Grade"
              onChange={handleChange}
              className="border p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Obedient" className="text-lg font-semibold text-gray-700 mb-1">
              Obedient
            </label>
            <select
              name="Obedient"
              id="Obedient"
              onChange={handleChange}
              className="border p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Attendance" className="text-lg font-semibold text-gray-700 mb-1">
              Research Score
            </label>
            <input
              type="number"
              id="ResearchScore"
              name="ResearchScore"
              onChange={handleChange}
              placeholder="Enter Research Score"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ProjectScore" className="text-lg font-semibold text-gray-700 mb-1">
              Project Score
            </label>
            <input
              type="number"
              id="ProjectScore"
              name="ProjectScore"
              onChange={handleChange}
              placeholder="Enter Project Score"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="col-span-2">
            <button
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              {loading ? 'Submitting...' : "Submit"}</button>
          </div>
        </form>
        <p className="text-green-600 text-lg text-center mt-5 font-semibold">
          🎉 Congrats! You Have Been Recommended!
        </p>
      </div>
    </div>
  );
}

