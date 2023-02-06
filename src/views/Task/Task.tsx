// code a tabble that shows the courses, fetch from my api and render out the data.
//fetch id, course_name, course_description, start_date, city_names.
// render out the data in a table.
// typescript, react and tailwindcss

import React, { useState, useEffect } from "react";

type Course = {
  id: string;
  course_name: string;
  course_description: string;
  start_date: string;
  city_names: string[];
};

type AsyncData = Array<Course> | undefined;

const API_URL = "http://192.71.151.213:8080/courses";

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<AsyncData>(undefined);
  const [error, setError] = useState<string | null>(null);

  const getCourses = async (): Promise<void> => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          mode: "no-cors",
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setCourses(data);
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

  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Course Name</th>
          <th className="px-4 py-2">Course Description</th>
          <th className="px-4 py-2">Start Date</th>
          <th className="px-4 py-2">City Names</th>
        </tr>
      </thead>
      <tbody>
        {courses?.map((course) => (
          <tr key={course.id}>
            <td className="border px-4 py-2">{course.id}</td>
            <td className="border px-4 py-2">{course.course_name}</td>
            <td className="border px-4 py-2">{course.course_description}</td>
            <td className="border px-4 py-2">{course.start_date}</td>
            <td className="border px-4 py-2">{course.city_names.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;


