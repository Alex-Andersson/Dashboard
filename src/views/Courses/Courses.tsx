import React, { useState, useEffect } from "react";
import axios from "axios";
import { BriefcaseIcon, MapPinIcon, TrashIcon, CalendarIcon } from "@heroicons/react/24/solid";
import Courses from "../Courses/Courses";

type Course = {
  id: string;
  course_name: string;
  course_description: string;
  start_date: string;
  subcategory_names: string[];
  city_names: string[];
  days: string[];
};

type AsyncData = Array<Course> | undefined;

const API_URL = "http://192.71.151.213:8080/courses";

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<AsyncData>(undefined);
  const [error, setError] = useState<string | null>(null);

  const getCourses = async (): Promise<void> => {
    try {
      const response = await axios.get(API_URL);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      setCourses(response.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  if (!courses) {
    return <div>Loading...</div>;
  }

  const addCourse = async (course: Course) => {
    try {
      const response = await axios.post(API_URL, course, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          title: "Add Course",
          body: JSON.stringify(course),
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
  };

const updateCourse = async (id: string, course: Course) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, course, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          title: "Update Course",
          body: JSON.stringify(course),
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
  };

const deleteCourse = (id: string) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            <div className="sm:flex sm:items-center">
        <div className="mt-4 ">
          <a
            href="/Courses/AddCourse"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-400 focus:outline-none focus:ring-2 sm:w-auto"
          >
            Add Course
          </a>
        </div>
      </div>
      {courses?.map((course) => (
        <div key={course.id} className="bg-[#1e2936] shadow-[-2px_2px_0px_rgba(0,0,0,0.3)] rounded-lg  pl-8">
          <div className="flex-1 flex flex-col">
            <h3 className=" text-white text-xl font-medium">{course.course_name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-lime-400 rounded-full">
                {course.subcategory_names}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-white">
              <div className="w-0 flex-1 flex">
                <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium">
                  <BriefcaseIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <h3 className="ml-3">Full-time</h3>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium">
                  <MapPinIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <h4 className="ml-3">remote</h4>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium">
                  <CalendarIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <h4 className="ml-3">{course.days}</h4>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium">
                  <MapPinIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <div>
                    {course.city_names.map((city) => (
                      <h4 className="ml-3">{city}</h4>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-600 font-medium">
                 <button> 
                  <TrashIcon
                    onClick={() => deleteCourse(course.id)}
                    className="w-5 h-5 text-red-600"
                    aria-hidden="true"
                  />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

};

export default CourseList;

