import React, { useState, useEffect } from "react";
import { MapPinIcon, TrashIcon } from "@heroicons/react/24/solid";

import AddCourse from "./AddCourse";
import * as types from "../../utils/types";
import { getCoursesWithCategoriesAndLocations } from "../../services";
import { getCoursesWithDetails } from "../../services/helpers";

const CourseList = () => {
  const [coursesWithDetails, setCoursesWithDetails] = useState<
    types.CoursesWithDetails[]
  >([]);

  const populateCourses = async () => {
    const response = await getCoursesWithCategoriesAndLocations();
    const data = getCoursesWithDetails({
      courses: response.courses,
      categories: response.categories,
      districts: response.districts,
    });
    setCoursesWithDetails(data);
  };
  useEffect(() => {
    populateCourses();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center mt-4">
        <a
          href="/Courses/AddCourse"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 sm:w-auto"
        >
          Add course
        </a>
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
                        Name / Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Dates / Times
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Cities / Kommun
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Max Seats
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Price
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
                    {coursesWithDetails?.map((courseWithDetails) => (
                      <tr key={courseWithDetails.course.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-white">
                                {courseWithDetails.course.course_name}
                              </div>
                              <div className="text-sm text-amber-200">
                                <span className="font-bold">
                                  {courseWithDetails.categories.join(", ")}
                                </span>{" "}
                                • {courseWithDetails.subcategories.join(", ")}
                              </div>
                              <div className="text-sm text-amber-50">
                                {courseWithDetails.course.course_description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          <div className="flex items-left flex-col">
                            <div className="text-sm font-medium text-white">
                              {new Date(
                                courseWithDetails.course.start_date
                              ).toLocaleDateString(undefined, {
                                dateStyle: "medium",
                              })}{" "}
                              -{" "}
                              {new Date(
                                courseWithDetails.course.end_date
                              ).toLocaleDateString(undefined, {
                                dateStyle: "medium",
                              })}
                            </div>
                            <div className="text-sm text-amber-200">
                              {courseWithDetails.course.days}
                            </div>
                            <div className="text-sm text-amber-50">
                              {courseWithDetails.course.hours}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">
                            <MapPinIcon className="inline-block w-5 h-5 mr-2 text-white" />
                            {courseWithDetails.cities.join(", ")}
                          </div>
                          <div className="text-sm ml-7 text-amber-200">
                            {/* region */}
                            {courseWithDetails.kommun.join(", ")}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-center">
                          {courseWithDetails.course.max_seats}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {courseWithDetails.course.price} SEK
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="/Bookings/AddBookings"
                            className="text-white hover:text-amber-400"
                          >
                            Edit
                          </a>
                        </td>

                        <td className="px-6 py-4">
                          <button
                            // onClick={() => deleteUser(student.id)}
                            className="text-white hover:text-amber-600"
                          >
                            <TrashIcon className="h-6" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
