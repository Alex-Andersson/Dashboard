import React, { useState } from "react";
import { BriefcaseIcon, MapPinIcon, TrashIcon, CalendarIcon } from "@heroicons/react/24/solid";

const initialCards = [
  {
    id: 1,
    type: "Backend Developer",
    lastUpdated: "22 Aug 2017",
  },
  {
    id: 2,
    type: "Frontend Developer",
    lastUpdated: "01 Jan 2020",
  },
  {
    id: 3,
    type: "Fullstack Developer",
    lastUpdated: "15 Mar 2019",
  },
  {
    id: 4,
    type: "React Course",
    lastUpdated: "20 Dec 2018",
  },
  {
    id: 5,
    type: "Rust Course",
    lastUpdated: "17 Oct 2017",
  },
];

const Courses = () => {
  const [cards, setCards] = useState(initialCards);

  const deleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
      {cards.map((card) => (
        <div key={card.id} className="bg-white shadow-[-2px_2px_0px_rgba(0,0,0,0.3)] rounded-lg  pl-8">
          <div className="flex-1 flex flex-col">
            <h3 className=" text-gray-900 text-xl font-medium">{card.type}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {card.lastUpdated}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-600 font-medium">
                  <BriefcaseIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <h3 className="ml-3">Full-time</h3>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-600 font-medium">
                  <MapPinIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <h4 className="ml-3">remote</h4>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-600 font-medium">
                  <CalendarIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <h4 className="ml-3">Closing on {card.lastUpdated}</h4>
                </div>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-600 font-medium">
                 <button> 
                  <TrashIcon
                    onClick={() => deleteCard(card.id)}
                    className="w-5 h-5 text-red-400"
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

export default Courses;
