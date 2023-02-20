import React, { useState, useEffect } from "react";
import { BriefcaseIcon, MapPinIcon, TrashIcon, CalendarIcon } from "@heroicons/react/24/solid";


import * as types from "../../utils/types";
import { getCoursesWithCategoriesAndLocations } from "../../services";
import { getCoursesWithDetails } from "../../services/helpers";

const Categories = () => {
  const [coursesWithDetails, setCoursesWithDetails] = useState<types.CoursesWithDetails[]>([]);

  const populateCourses = async () => {
    const response = await getCoursesWithCategoriesAndLocations();
    const data = getCoursesWithDetails({
      courses: response.courses,
      categories: response.categories,
      districts: response.districts,
    })
    setCoursesWithDetails(data)
  }
  useEffect(() => {
    populateCourses();
  }, []);

  return (
    <div className=" flex flex-col">
      <div className="mt-8 flex justify-center">
        <div className="flex flex-col">
          <div className=" overflow-x-auto sm:-mx-3 lg:-mx-2">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full w-[32rem] divide-y divide-gray-200 mt-16">
                  <thead className="bg-[#111827] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-7 flex justify-center text-xl text-white uppercase tracking-wider"
                      >
                        Categories
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xl  text-white uppercase tracking-wider"
                      ></th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#111827] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
                    {coursesWithDetails?.map((courseWithDetails) => (
                      <tr key={courseWithDetails.course.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-medium text-white">
                            <span className="font-bold">
                              {courseWithDetails.categories.join(", ")}
                            </span>{" "}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="/Stuidents/AddStuidents"
                            className="text-white hover:text-lime-600"
                          >
                            Edit
                          </a>
                        </td>

                        <td className="px-6 py-4">
                          <button
                            // onClick={() => deleteUser(student.id)}
                            className="text-white hover:text-red-600"
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
      <div className="sm:flex sm:items-center mt-16 flex justify-center">
        <a
          href="/Categories/AddCategories"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 sm:w-auto"
        >
          Add Category
        </a>
      </div>
    </div>
  );

};

export default Categories;



// {courseWithDetails.subcategories.join(", ")}