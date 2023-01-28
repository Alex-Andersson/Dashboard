import {
  CalendarIcon,
  HomeIcon,
  PencilSquareIcon,
  TableCellsIcon,
  DocumentIcon,
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
              path: "forms/courses",
            },
            {
              name: "Add Courses",
              path: "forms/AddCourse",
            },
          ],
        },
        {
          name: "Stuidents",
          icon: <TableCellsIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Stuidents",
              path: "Stuidents/Stuidents",
            },
            {
              name: "Add Stuidents",
              path: "Stuidents/AddStuidents",
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
      ],
    },
    {
      title: "PAGES",
      items: [
        {
          name: "Pages",
          icon: <DocumentIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Sign In",
              path: "sign-in",
            },
            {
              name: "Sing Up",
              path: "sign-up",
            },
            {
              name: "404 Error",
              path: "404",
            },
            {
              name: "500 Error",
              path: "500",
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
