import React, { useState } from "react";
import axios from "axios";

type NewCourse = {
  course_name: string;
  course_description: string;
  start_date: string;
  subcategory_names: string[];
  city_names: string[];
  days: string[];
};

const API_URL = "http://192.71.151.213:8080/courses";

const AddCourse: React.FC = () => {
  const [newCourse, setNewCourse] = useState<NewCourse>({
    course_name: "",
    course_description: "",
    start_date: "",
    subcategory_names: [],
    city_names: [],
    days: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newCourse, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          title: "Add Course",
          body: JSON.stringify(newCourse),
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

    setNewCourse({
      course_name: "",
      course_description: "",
      start_date: "",
      subcategory_names: [],
      city_names: [],
      days: [],
    });
  };

// Form for adding a new course to the database
// new  id ,course name, description, start date, subcategory, city, days.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-28 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-8 py-6 bg-white border border-gray-300 rounded-md shadow-md">
        <h1 className="text-xl font-medium text-center text-gray-700">
          Add Course
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-sm text-gray-700" htmlFor="course_name">
              Course Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring"
              type="text"
              name="course_name"
              id="course_name"
              value={newCourse.course_name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700" htmlFor="course_description">
              Course Description
            </label>
            <input
              className="w-full px-3 py-2 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring"
              type="text"
              name="course_description"
              id="course_description"
              value={newCourse.course_description}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700" htmlFor="start_date">
              Start Date
            </label>
            <input
              className="w-full px-3 py-2 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring"
              type="text"
              name="start_date"
              id="start_date"
              value={newCourse.start_date}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700" htmlFor="subcategory_names">
              Subcategory Names
            </label>
            <input
              className="w-full px-3 py-2 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring"
              type="text"
              name="subcategory_names"
              id="subcategory_names"
              value={newCourse.subcategory_names}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700" htmlFor="city_names">
              City Names
            </label>
            <input
              className="w-full px-3 py-2 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring"
              type="text"
              name="city_names"
              id="city_names"
              value={newCourse.city_names}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700" htmlFor="days">
              Days
            </label>
            <input
              className="w-full px-3 py-2 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring"
              type="text"
              name="days"
              id="days"
              value={newCourse.days}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-3 py-4 text-white bg-lime-500 rounded-md focus:bg-lime-600 focus:outline-none"
              type="submit"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
