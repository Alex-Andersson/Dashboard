import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

function CatagoryCard() {
  return (
    <div className="grid gap-12 grid-cols-3 pt-32 pl-12 h-9 ">
      <button >
        <a href="/Catagory/AddCity">
          <div className="p-14 py-12 flex items-center justify-center rounded-t-lg opacity-90 bg-[#10161c] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
            <span className='capitalize text-4xl mt-0.5	text-white'>City</span>
            <h5 className='w-16 h-14 flex items-center justify-center'>
              <PencilSquareIcon className="h-8 w-10 text-white" />
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
        <a href="/Catagory/AddDistrict">
          <div className="p-8 py-12 flex items-center w-96 justify-center rounded-t-lg opacity-90 bg-[#10161c] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
            <span className='capitalize text-4xl mt-0.5	text-white'>District</span>
            <h5 className='w-16 h-14 flex items-center justify-center'>
              <PencilSquareIcon className="h-8 w-10 text-white" />
            </h5>
          </div>
          <div className="p-14 py-12 flex flex-col  items-center w-96 justify-around rounded-b-lg opacity-90 bg-[#151c24] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
            <div className='w-96 border '>
              <h3>City</h3>
            </div>
            <div className='w-96 border'>
              <h3>City</h3>
            </div>
            <div className='w-96 border'>
              <h3>City</h3>
            </div>
          </div>
        </a>
      </button>
      <button >
        <a href="/Courses/Courses">
          <div className="p-8 py-12 flex items-center w-96 justify-center rounded-t-lg opacity-90 bg-[#10161c] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)]">
            <span className='m-0 capitalize -boldtext-5xl text-4xl mt-0.5	text-white'>Catagory</span>
            <h5 className='w-16 h-14 flex items-center justify-center'>
              <PencilSquareIcon className="h-8 w-10 text-white" />
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