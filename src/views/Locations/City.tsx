import React, { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  MapPinIcon,
  TrashIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

import * as types from "../../utils/types";
import { getLocations } from "../../services";

const City = () => {
  const [locations, setLocations] = useState<types.Location[]>([]);

  const populateLocations = async () => {
    const response = await getLocations();
    setLocations(response);
  };
  useEffect(() => {
    populateLocations();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        District
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      ></th>
                      <th scope="col" className="relative px-6 pamber-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-lime-700 shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
                    {locations?.map((district) => {
                      return district.cities.map((city) => (
                        <tr key={city.city_id}>
                          <td className="px-6 py-4 whitespace-namber">
                            <div className="flex items-center">
                              <div className="text-base font-medium text-white">
                                <MapPinIcon className="inline-block w-7 h-7 mr-2 text-white" />
                                {city.city_name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-left">
                            {district.district_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="/Bookings/AddBookings"
                              className="text-white hover:text-amber-400"
                            >
                              Edit
                            </a>
                          </td>

                          <td className="px-6 py-4 text-right">
                            <button
                              // onClick={() => deleteUser(student.id)}
                              className="text-white hover:text-amber-600"
                            >
                              <TrashIcon className="h-6" />
                            </button>
                          </td>
                        </tr>
                      ));
                    })}
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

export default City;
