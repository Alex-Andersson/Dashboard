import React, { useState, useEffect } from "react";
import axios from "axios";
import { BriefcaseIcon, MapPinIcon} from "@heroicons/react/24/solid";


type Locations = {
  district_id: string;
  district_name: string;
  cities: string;
  city_id: string;
  subcategory_names: string[];
  city_name: string[];
};

type AsyncData = Array<Locations> | undefined;

const API_URL = "http://192.71.151.213:8080/locations";

const District: React.FC = () => {
  const [locations, setLocations] = useState<AsyncData>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  
  const getCourses = async (): Promise<void> => {
    try {
      const response = await axios.get(API_URL);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      setLocations(response.data);
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

  if (!locations) {
    return <div>Loading...</div>;
  }

// const deleteCourse = (id: string) => {
//     const updatedCourses = locations.filter((locations) => locations.district_id !== id);
//     setLocations(updatedCourses);
//   };

  
  const handleOnClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            <div className="sm:flex sm:items-center">
        <div className="mt-4 ">
          <button
            onClick={handleOnClick}
            
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-400 focus:outline-none focus:ring-2 sm:w-auto"
          >
            Add Course
          </button>
        </div>
      </div>
      {locations?.map((locations) => (
        <div key={locations.district_id} className="glass bg-[#1e2936] shadow-[-2px_2px_0px_rgba(0,0,0,0.3)] rounded-lg  pl-8">
          <div className="flex-1 flex flex-col">
            <h3 className=" text-white text-xl font-medium">{locations.district_name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
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
              {/* <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium">
                  <MapPinIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <div>
                    {locations.city_name.map((city_name) => (
                      <h4 className="ml-3">{city_name}</h4>
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-600 font-medium">
                 <button> 
                  {/* <TrashIcon
                    onClick={() => deleteCourse(locations.district_id)}
                    className="w-5 h-5 text-red-600"
                    aria-hidden="true"
                  /> */}
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

export default District;