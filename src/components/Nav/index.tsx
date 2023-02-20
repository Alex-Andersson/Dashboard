import {
  CalendarIcon,
  HomeIcon,
  PencilSquareIcon,
  TableCellsIcon,
  DocumentIcon,
  AcademicCapIcon,
  ViewColumnsIcon,
  FolderOpenIcon
} from "@heroicons/react/24/outline";
import List from "./List";

const Nav = () => {
  const navs = [
    {
      title: "DASHBOARDS",
      items: [
        {
          path: "home",
          name: "Home",
          icon: <HomeIcon className="h-5 w-5 stroke-white" />,
        },
      ],
    },
    {
      title: "COMPONENTS",
      items: [
        {
          name: "Courses",
          icon: <PencilSquareIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Courses",
              path: "Courses/Courses",
            },
            {
              name: "Add Courses",
              path: "Courses/AddCourse",
            },
          ],
        },
        {
          name: "Categories",
          icon: <TableCellsIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Categories",
              path: "Categories/Categories",
            },
            {
              name: "SubCategories",
              path: "Categories/SubCategories",
            },
            {
              name: "AddSubCategories",
              path: "Categories/AddSubCategories",
            },
            {
              name: "AddCategories",
              path: "Categories/AddCategories",
            },
          ],
        },
        {
          name: "Bookings",
          icon: <AcademicCapIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Bookings",
              path: "Bookings/Bookings",
            },
            {
              name: "Add Booking",
              path: "Bookings/AddBooking",
            },
          ],
        },
        {
          name: "Calender",
          icon: <CalendarIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Calender",
              path: "calender/calender",
            },
          ],
        },
        {
          name: "ScrumBoard",
          icon: <ViewColumnsIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "ScrumBoard",
              path: "ScrumBoard/ScrumBoard",
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="mt-4">
      <ul className="flex flex-col gap-2 text-white">
        {navs.map((i) => (
          <List nav={i} key={i.title} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
