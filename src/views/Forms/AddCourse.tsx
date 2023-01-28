import React from "react";

const AddCourse = () => {
  return (
    <>
      <form
        action="#"
        method="POST"
        className="mt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="shadow rounded overflow-hidden">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Course"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course
                </label>
                <input
                  type="text"
                  name="Course"
                  id="id"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#81c341] focus:ring-[#81c341] sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Start-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start-date
                </label>
                <input
                  type="text"
                  name="Start-date"
                  id="Start-date"
                  autoComplete="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#81c341] focus:ring-[#81c341] sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="Course-End"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course-End
                </label>
                <input
                  type="text"
                  name="Course-End"
                  id="Course-End"
                  autoComplete="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#81c341] focus:ring-[#81c341] sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Courses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Courses
                </label>
                <select
                  id="Courses"
                  name="Courses"
                  autoComplete="Courses-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#81c341] focus:outline-none focus:ring-[#81c341] sm:text-sm"
                >
                  <option>Web-devoloper</option>
                  <option>Systemintergration</option>
                  <option>Front-End</option>
                  <option>Back-End</option>
                </select>
              </div>

            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-[#81c341] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-[#81c341] focus:outline-none focus:ring-2 focus:ring-indigo-[#81c341] focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <form
        action="#"
        method="POST"
        className="mt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="shadow rounded overflow-hidden">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <fieldset>
              <legend className="sr-only">By Email</legend>
              <div
                className="text-base font-medium text-gray-900"
                aria-hidden="true"
              >
                Settings
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="Settings"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-400 text-lime-600 focus:ring-lime-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Course Time
                    </label>
                    <p className="text-gray-500">
                      Full-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="Settings"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-400 text-lime-600 focus:ring-lime-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Course Time
                    </label>
                    <p className="text-gray-500">
                      Full-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-400 text-lime-600 focus:ring-lime-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-700"
                    >
                      Candidates
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-400 text-lime-600 focus:ring-lime-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Offers
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="contents text-base font-medium text-gray-900">
                Push Notifications
              </legend>
              <p className="text-sm text-gray-500">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-everything"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-email"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Same as email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCourse;
