import React, { useState, useEffect } from "react";
import { MapPinIcon, TrashIcon } from "@heroicons/react/24/solid";

import Dropdown from "./Dropdown";
import * as types from "../../utils/types";
import { getCourses, getStudentsByCourseId } from "../../services";

export default function Booking() {
  const [courses, setCourses] = useState<types.Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const [students, setStudents] = useState<types.Student[]>([]);

  const populateCourses = async () => {
    const response = await getCourses();
    setCourses(response);
  };
  useEffect(() => {
    populateCourses();
  }, []);

  const populateStudents = async () => {
    const response = await getStudentsByCourseId({
      courseId: selectedCourseId,
    });
    setStudents(response);
  };
  useEffect(() => {
    populateStudents();
  }, [selectedCourseId]);

  const onSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  const deleteUser = (uuid: string) => {
    // TODO
    // const updatedData = students?.filter((student) => student.login.uuid !== uuid);
    // setData(updatedData);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-4">
          <Dropdown
            options={courses?.map((course) => ({
              id: course.id,
              name: course.course_name,
            }))}
            onSelectOption={onSelectCourse}
            selectedOption={
              courses.find((course) => course.id === selectedCourseId)
                ?.course_name || "Select course"
            }
          />
          <a
            href="/Bookings/AddBooking"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 sm:w-auto ml-2.5"
          >
            Add Booking
          </a>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-lime-700 shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Name / email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Personal No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Booking Date
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      ></th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-lime-700 shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
                    {students?.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://i.pinimg.com/originals/51/90/10/519010d9ee8167bfe445e616f260f758.png"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">
                                {student.first_name} {student.last_name}
                              </div>
                              <div className="text-sm text-stone-100">
                                {student.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">
                            <MapPinIcon className="inline-block w-5 h-5 mr-2 text-white" />
                            {student.city}
                          </div>
                          <div className="text-sm ml-7 text-stone-100">
                            {/* region */}
                            {student.kommun}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-lime-200 text-green-800">
                            {courses.find(
                              (course) => course.id === selectedCourseId
                            )?.course_name || "undefined course"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {student.personal_number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {new Date(student.booked_at).toLocaleDateString(
                            undefined,
                            { dateStyle: "medium" }
                          )}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="/Booking/AddBooking"
                            className="text-white hover:text-amber-400"
                          >
                            Edit
                          </a>
                        </td>

                        <button
                          onClick={() => deleteUser(student.id)}
                          className="text-white hover:text-amber-700"
                        >
                          <TrashIcon className="h-6 mt-6" />
                        </button>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {students.length === 0 && selectedCourseId === "" && (
                <h2 className="text-3xl text-amber-900 text-center mt-9">
                  Please select a course to show its booking(s)...
                </h2>
              )}
              {students.length === 0 && selectedCourseId !== "" && (
                <h2 className="text-3xl text-amber-900 text-center mt-9">
                  No booking has been made for the selected course.
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function setUsers(updatedUsers: any) {
  throw new Error("Function not implemented.");
}
