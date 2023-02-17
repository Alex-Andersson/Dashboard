import React from "react";
import { UserGroupIcon, PencilSquareIcon } from '@heroicons/react/24/solid'



const Home = () => {
  return (
    <div className="grid gap-12 grid-cols-3 pt-6 pl-12 h-9">
      <button>
        <a href="/Stuidents/Stuidents">
    <div className="p-12 py-12 opacity-90 flex items-center w-96 justify-around rounded-md bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
      <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>85</span>
      <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Students</span>
      <h5 className='w-16 h-14 flex items-center justify-center'> 
      <UserGroupIcon className="h-8 w-10 text-white"/>
      </h5>
    </div>
    </a>
    </button>
    <button >
    <a href="/Courses/Courses">
    <div className="p-12 py-12 flex opacity-90 items-center w-96 justify-around rounded-md bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
      <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>7</span>
      <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Courses</span>
      <h5 className='w-16 h-14 flex items-center justify-center'>
      <PencilSquareIcon className="h-8 w-10 text-white"/>
      </h5>
    </div>
    </a>
    </button>
    <button >
    <a href="/Catagory/catagory">
    <div className="p-8 py-12 flex items-center w-96  justify-around rounded-md opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
      <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>8</span>
      <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Catagory</span>
      <h5 className='w-16 h-14 flex items-center justify-center'> 
      <UserGroupIcon className="h-8 w-10 text-white"/>
      </h5>
    </div>
    </a>
    </button>
    <div className="mt-16 text-center">
    </div>
    </div>
  );
};

export default Home;
