import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";



type Course = {
  course_name: string;
  course_description: string;
  start_date: any;
  end_date: any;
  csn_entitled: boolean;
  max_seats: number;
  image: string;
  days: string;
  hours: string;
  price: number;
  sessions: number;
  visible: boolean;
  city_ids: string[];
  subcategory_ids: string[];
};



const API_URL = "http://192.71.151.213:8080/course";

export default function Example() {
  const [open, setOpen] = useState(true);
  const [Course, setCourse] = useState<Course>({
    course_name: "",
    course_description: "",
    start_date: "",
    end_date: "",
    csn_entitled: false,
    max_seats: 0,
    image: "",
    days: "",
    hours: "",
    price: 0,
    sessions: 0,
    visible: false,
    city_ids: [],
    subcategory_ids: [],
  });

  // const test = new Date();
  // test = test.toISOString();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse({ ...Course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, Course, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          });
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      console.log(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
  }, [Course]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => setOpen(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto relative w-[32rem] ">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full overflow-y-auto backdrop-blur-xl  p-8">
                  <div className="space-y-6 pb-16 ">
                    <div>
                      <div className="mt-4 flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-medium text-lime-500">
                            Add a new Course
                          </h2>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2  gap-x-8 ">
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Course Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="course_name"
                          value={Course.course_name}
                          onChange={handleChange}
                          placeholder="Course Name"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Course Description
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
                          type="text"
                          name="course_description"
                          value={Course.course_description}
                          onChange={handleChange}
                          placeholder="Course Description"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Start Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="date"
                          name="start_date"
                          value={Course.start_date}
                          onChange={handleChange}
                          placeholder="date"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          End Date
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="date"
                          name="end_date"
                          value={Course.end_date}
                          onChange={handleChange}
                          placeholder="End Date"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Max Seats
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="max_seats"
                          value={Course.max_seats}
                          onChange={handleChange}
                          placeholder="Max Seats"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Image
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="image"
                          value={Course.image}
                          onChange={handleChange}
                          placeholder="Image"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Days
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="days"
                          value={Course.days}
                          onChange={handleChange}
                          placeholder="Days"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Hours
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="hours"
                          value={Course.hours}
                          onChange={handleChange}
                          placeholder="Hours"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Price
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="price"
                          value={Course.price}
                          onChange={handleChange}
                          placeholder="Price in SEK"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Sessions
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="sessions"
                          value={Course.sessions}
                          onChange={handleChange}
                          placeholder="Sessions"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          City
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"          
                          name="city_ids"
                          value={Course.city_ids}
                          placeholder="City Ids"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          Subcategory
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          name="subcategory_ids"
                          value={Course.subcategory_ids}
                          onChange={handleChange}
                          placeholder="Subcategory"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                          CSN Entitled
                        </label>
                        <input
                          className="focus:ring-lime-500 h-4 w-4 text-lime-600 border-gray-300 rounded"
                          type="checkbox"
                          name="csn_entitled"
                          value={"true"}
                          onChange={handleChange}
                          placeholder="CSN Entitled"
                        />
                        <h3 className="text-white">yes</h3>
                      </div>
                    </form>
                    <div className="flex">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex-1 rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="ml-3 flex-1 rounded-md border border-red-600 bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}





// type NewCourse = {
//   course_name: string;
//   course_description: string;
//   start_date: string;
//   end_date: string;
//   csn_entitled: boolean;
//   max_seats: number;
//   image: string;
//   days: string;
//   hours: string;
//   price: number;
//   sessions: number;
//   visible: boolean;
//   city_ids: string[];
//   subcategory_ids: string[];
// };