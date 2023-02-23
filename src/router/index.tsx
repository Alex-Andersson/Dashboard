import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthContext, {
  useAuth,
  authProvider,
} from "../components/contexts/auth";
import SignIn from "../views/SignIn";
import Home from "../views/Home";
import Layout from "../views/Layout";
import Calendar from "../views/Calendar/Calendar";
import AddCourses from "../views/Courses/AddCourse";
import Bookings from "../views/Bookings/Bookings";
import NotFound from "../views/Errors/NotFound";
import ServerError from "../views/Errors/ServerError";
import SignUp from "../views/SignUp";
import Courses  from "../views/Courses/Courses";
import Categories from "../views/Categories/Categories";
import SubCategories from "../views/Categories/SubCategories";
import ScrumBoard from "../views/ScrumBoard/Home/ScrumBoard";
import AddCategories from "../views/Categories/AddCategories";
import District from "../views/Locations/District";
import City from "../views/Locations/City";
import AddSubcategory from "../views/Categories/AddSubCategories";






const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Courses">
            <Route path="AddCourse" element={<AddCourses />} />
            <Route path="courses" element={<Courses />} />
          </Route>
          <Route path="Categories">
            <Route path="Catagories" element={<Categories />} />
            <Route path="SubCategories" element={<SubCategories />} />
            <Route path="AddCategories" element={<AddCategories/>} />
            <Route path="AddSubcategory" element={<AddSubcategory categories={[]} />} />
          </Route>
          <Route path="Bookings">
            <Route path="Bookings" element={<Bookings />} />

          </Route>
          <Route path="Locations">
              <Route path="City" element={<City />} />
              <Route path="District" element={<District />} />
          </Route>
          <Route path="calender">
            <Route path="calender" element={<Calendar />} />
          </Route>
          <Route path="ScrumBoard">
            <Route path="ScrumBoard" element={<ScrumBoard />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  let user = auth.user;
  const sessionUser = window.sessionStorage.getItem("user");
  if (sessionUser) {
    user = sessionUser;
  }

  const localStorage = window.localStorage.getItem("user");
  if (localStorage) {
    user = localStorage;
  }

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  //auth.signin(user, () => {});

  return children;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<unknown>(null);

  const signin = (user: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setUser(user);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default Router;
