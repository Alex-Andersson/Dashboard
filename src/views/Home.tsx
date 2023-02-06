import React from "react";
import { AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/solid'


const Home = () => {
  return (
    <div className="grid gap-12 grid-cols-3 pt-6 pl-12 h-9">
      <button >
        <a href="/Stuidents/Stuidents">
    <div className="p-8 py-12 flex items-center w-96 justify-around rounded-md bg-[#1e2936] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
      <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>145</span>
      <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Students</span>
      <h5 className='w-16 h-14 flex items-center justify-center'> 
      <UserGroupIcon className="h-8 w-10 text-white"/>
      </h5>
    </div>
    </a>
    </button>
    <button >
    <a href="/Courses/Courses">
    <div className="p-8 py-12 flex items-center w-96 justify-around rounded-md bg-[#1e2936] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
      <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>7</span>
      <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Courses</span>
      <h5 className='w-16 h-14 flex items-center justify-center'>
      <AcademicCapIcon className="h-8 w-10 text-white"/>
      </h5>
    </div>
    </a>
    </button>
    <div className="p-8 py-12 flex items-center w-96 justify-around rounded-md bg-[#1e2936] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
      <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>8</span>
      <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Teachers</span>
      <h5 className='w-16 h-14 flex items-center justify-center'> 
      <UserGroupIcon className="h-8 w-10 text-white"/>
      </h5>
    </div>
    <div className="mt-16 text-center">
        
    </div>
    </div>
  );
};

export default Home;
