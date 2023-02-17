import React from 'react'
import { UserGroupIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

function CatagoryCard() {
    return (
      <div className="grid gap-12 grid-cols-3 pt-32 pl-12 h-9 ">
        <button >
          <a href="/Stuidents/Stuidents">
      <div className="p-14 py-12 flex items-center justify-around rounded-t-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
        <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>35</span>
        <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>City</span>
        <h5 className='w-16 h-14 flex items-center justify-center'> 
        <UserGroupIcon className="h-8 w-10 text-white"/>
        </h5>
      </div>
      </a>
      <div className="p-14 py-12 flex items-center justify-around rounded-b-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
        <div>
          <h3>City</h3>
        </div>
      </div>
      </button>
      <button >
      <a href="/Courses/Courses">
      <div className="p-8 py-12 flex items-center w-96 justify-around rounded-t-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
        <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>7</span>
        <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>District</span>
        <h5 className='w-16 h-14 flex items-center justify-center'>
        <PencilSquareIcon className="h-8 w-10 text-white"/>
        </h5>
      </div>
      <div className="p-14 py-12 flex items-center w-96 justify-around rounded-b-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
        <div>
        <h3>City</h3>
        </div>
      </div>
      </a>
      </button>
      <button >
      <a href="/Courses/Courses">
      <div className="p-8 py-12 flex items-center w-96 justify-around rounded-t-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
        <span className='block font-boldtext-5xl text-4xl text-[#81c341]'>7</span>
        <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Catagory</span>
        <h5 className='w-16 h-14 flex items-center justify-center'>
        <PencilSquareIcon className="h-8 w-10 text-white"/>
        </h5>
      </div>
      <div className="p-14 py-12 flex items-center w-96 justify-around rounded-b-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
        <div>
        <h3>City</h3>
        </div>
      </div>
      </a>
      </button>
      </div>
    );
}

export default CatagoryCard