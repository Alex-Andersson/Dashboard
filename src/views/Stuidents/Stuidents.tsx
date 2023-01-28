// fetch API data from https://randomuser.me/api/?results=10 and display it in a table like this:

import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
// import { AcademicCapIcon, UserGroupIcon } from "@heroicons/react/24/solid";

type AsyncData =
  | Array<{
      [x: string]: string | undefined //randomuser.me/api/?results=10 and display it in a table like this:
      ;
      name: any;
      location: any;
      city: string;
      email: string;
      status: string;
      picture:  any;
      title: string;
      login: any;
      uuid: string;
    }>
  | undefined;
// type AsyncData = Array<string>;

const API_URL = "https://randomuser.me/api/?results=10";

export default function Stuidents() {

  const [data, setData] = React.useState<AsyncData>(undefined);

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
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name / email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Login ID
                      </th>
                      <th
                        scope="col"
                        className="relative px-6 py-3"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
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
                              <div className="text-sm font-medium text-gray-900">
                                {user.name.first} {user.name.last}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <MapPinIcon className="inline-block w-5 h-5 mr-2 text-gray-400" />
                            {user.location.city}
                          </div>
                          <div className="text-sm ml-7 text-gray-500">
                            {/* region */}
                            {user.location.state}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Web-devoloper
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.login.uuid}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-red-800 hover:text-lime-600"
                          >
                            Edit
                          </a>
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
}
















//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-xl font-semibold text-gray-900">Users</h1>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, title, email and role.
//           </p>
//         </div>
//         <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
//           <button
//             type="button"
//             className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
//           >
//             Add user
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flex flex-col">
//         <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//               <table className="min-w-full divide-y divide-gray-300">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
//                       Name
//                     </th>
//                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Title
//                     </th>
//                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Status
//                     </th>
//                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Role
//                     </th>
//                     <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
//                       <span className="sr-only">Edit</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 bg-white">
//                   {data?.map((person) => (
//                     <tr>
//                       <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
//                         <div className="flex items-center">
//                           <div className="h-10 w-10 flex-shrink-0">
//                           </div>
//                           <div className="ml-4">
//                             <div className="font-medium text-gray-900">{person.name}</div>
//                             <div className="text-gray-500">{person.email}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         <div className="text-gray-900">{person.role}</div>
//                         <div className="text-gray-500">{person.status}</div>
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
//                           Active
//                         </span>
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
//                       <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
//                         <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                           Edit<span className="sr-only">, {person.name}</span>
//                         </a>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




