import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthContext, { useAuth, authProvider } from "../components/contexts/auth";
import SignIn from "../views/SignIn";
import Home from "../views/Home";
import Layout from "../views/Layout";
import Calendar from "../views/Calendar/Calendar";
import AddCourses from "../views/Courses/AddCourse";
import Stuidents from "../views/Stuidents/Stuidents";
import NotFound from "../views/Errors/NotFound";
import ServerError from "../views/Errors/ServerError";
import SignUp from "../views/SignUp";
import Courses  from "../views/Courses/Courses";
import Catagory from "../views/Category/Catagory";
import AddStudients from "../views/Stuidents/AddStudients";
import ScrumBoard from "../views/ScrumBoard/Home/ScrumBoard";
import Task from "../views/Task/Task";
import AddOverlay from "../views/Task/AddOverlay";






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
          <Route path="Catagory">
            <Route path="Catagory" element={<Catagory />} />
          </Route>
          <Route path="Stuidents">
            <Route path="Stuidents" element={<Stuidents />} />
            <Route path="AddStuidents" element={<AddStudients />} />
          </Route>
          <Route path="calender">
            <Route path="calender" element={<Calendar />} />
          </Route>
          <Route path="ScrumBoard">
            <Route path="ScrumBoard" element={<ScrumBoard />} />
          </Route>
          <Route path="Task">
            <Route path="Task" element={<Task />} />
            <Route path="AddOverlay" element={<AddOverlay />} />
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

  auth.signin(user, () => {});

  return children;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);

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
