// Type: Functional Component that returns a form for adding a new course to the database
// typescript 

import React, { useEffect, useState } from "react";
import axios from "axios";


type Course = {
  course_name: string;
  course_description: string;
  start_date: string;
  end_date: string;
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



const AddCourse = () => {
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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setCourse({ ...Course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, Course, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          title: "Add Course",
          body: JSON.stringify(Course),
          userId: Math.random().toString(36).slice(2),
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
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Course Name</label>
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
        <label className="block text-gray-700 text-sm font-bold mb-2">Course Description</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="course_description"
          value={Course.course_description}
          onChange={handleChange}
          placeholder="Course Description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="start_date"
          value={Course.start_date}
          onChange={handleChange}
          placeholder="Start Date"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="end_date"
          value={Course.end_date}
          onChange={handleChange}
          placeholder="End Date"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">CSN Entitled</label>
        <input
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          type="checkbox"
          name="csn_entitled"
          value={"true"}
          onChange={handleChange}
          placeholder="CSN Entitled"
        />
        <h3>yes</h3>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Max Seats</label>
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
        <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="image"
          value={Course.image}
          onChange={handleChange}
          placeholder="Image"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Days</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="days"
          value={Course.days}
          onChange={handleChange}
          placeholder="Days"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Hours</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="hours"
          value={Course.hours}
          onChange={handleChange}
          placeholder="Hours"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="price"
          value={Course.price}
          onChange={handleChange}
          placeholder="Price in DKK"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Sessions</label>
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
        <label className="block text-gray-700 text-sm font-bold mb-2">Visible</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="visible"
          value={"true"}
          onChange={handleChange}
          placeholder="Visible"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">City Ids</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="city_ids"
          value={Course.city_ids}
          onChange={handleChange}
          placeholder="City Ids"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Subcategory Ids</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="subcategory_ids"
          value={Course.subcategory_ids}
          onChange={handleChange}
          placeholder="Subcategory Ids"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Add Course
        </button>
      </div>
    </form>
  );
};


export default AddCourse;






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