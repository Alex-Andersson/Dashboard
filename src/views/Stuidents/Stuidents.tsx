/* eslint-disable jsx-a11y/anchor-is-valid */
// fetch API data from https://randomuser.me/api/?results=10 and display it in a table like this:

import React from "react";
import { MapPinIcon, TrashIcon } from "@heroicons/react/24/solid";


type AsyncData =
  | Array<{
      [x: string]: string | undefined; //randomuser.me/api/?results=10 and display it in a table like this:
      name: any;
      location: any;
      city: string;
      email: string;
      status: string;
      picture: any;
      title: string;
      login: any;
      uuid: string;
    }>
  | undefined;
// type AsyncData = Array<string>;

const API_URL = "https://randomuser.me/api/?results=10";

export default function Stuidents() {
  const [data, setData] = React.useState<AsyncData>(undefined);



  const deleteUser = (uuid: string) => {
    const updatedData = data?.filter((user) => user.login.uuid !== uuid);
    setData(updatedData);
  };

  React.useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-4 ">
          <a
            href="/Stuidents/AddStuidents"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 sm:w-auto"
          >
            Add user
          </a>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#111827] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
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
                        Login ID
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
                  <tbody className="bg-[#111827] shadow-[-5px_6px_2px_rgba(0,0,0,0.3)]">
                    {data?.map((user) => (
                      <tr key={user.location.city}>
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
                                {user.name.first} {user.name.last}
                              </div>
                              <div className="text-sm text-stone-400">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">
                            <MapPinIcon className="inline-block w-5 h-5 mr-2 text-white" />
                            {user.location.city}
                          </div>
                          <div className="text-sm ml-7 text-stone-400">
                            {/* region */}
                            {user.location.state}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800">
                            Web-devoloper
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {user.login.uuid}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="/Stuidents/AddStuidents"
                            className="text-white hover:text-lime-600"
                          >
                            Edit
                          </a>
                        </td>

                        <button
                          onClick={() => deleteUser(user.login.uuid)}
                          className="text-white hover:text-red-600"
                        >
                          <TrashIcon className="h-6 mt-6" />
                        </button>
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
}
function setUsers(updatedUsers: any) {
  throw new Error("Function not implemented.");
}
