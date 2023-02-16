import React from 'react'
import { UserGroupIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

function CatagoryCard() {
    return (
      <div className="grid gap-12 grid-cols-3 pt-32 pl-12 h-9 ">
        <button >
          <a href="/Stuidents/Stuidents">
      <div className="p-14 py-12 flex items-center justify-around rounded-md bg-[#1e2936] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
        <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>35</span>
        <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>City</span>
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
        <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>District</span>
        <h5 className='w-16 h-14 flex items-center justify-center'>
        <PencilSquareIcon className="h-8 w-10 text-white"/>
        </h5>
      </div>
      </a>
      </button>
      <div className="p-8 py-12 flex items-center w-96 justify-around rounded-md bg-[#1e2936] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
        <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>8</span>
        <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Catagory</span>
        <h5 className='w-16 h-14 flex items-center justify-center'> 
        <UserGroupIcon className="h-8 w-10 text-white"/>
        </h5>
      </div>
      <div className="mt-16 text-center">
          
      </div>
      </div>
    );
}

export default CatagoryCard