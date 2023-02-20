import React from "react";


const AddSubCategories = () => {

  return (
    <>
      <form
        action="#"
        method="POST"
        className="mt-4 flex justify-center pt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="shadow rounded overflow-hidden w-[32rem]">
          <div className="bg-[#10161c] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)] opacity-90 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-white"
                >
                  District
                </label>
                <select
                  name="District"
                  placeholder="District"
                  datatype="dropdown"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                >
                  <option>Södermanland</option>
                  <option>Östergötland</option>
                  <option>Halland</option>
                  <option>Skåne</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Course"
                  className="block text-sm font-medium text-white"
                >
                  Course
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Web-Deveoleper</option>
                  <option>Systemintegration</option>
                  <option>Back-End</option>
                  <option>Front-End</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-white"
                >
                  Region / State
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                />
              </div>
              
            </div>
          </div>
          <div className="bg-[#10161c] shadow-[-1px_2px_3px_rgba(0,0,0,0.9)] opacity-100 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-lime-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>     
    </>
  );
};

export default AddSubCategories;