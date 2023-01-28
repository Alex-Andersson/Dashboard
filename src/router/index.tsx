import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthContext, { useAuth, authProvider } from "../contexts/auth";
import SignIn from "../views/SignIn";
import Home from "../views/Home";
import Saas from "../views/Saas";
import Layout from "../views/Layout";
import Calendar from "../views/Calendar/Calendar";
import AddCourses from "../views/Forms/AddCourse";
import Stuidents from "../views/Stuidents/Stuidents";
import NotFound from "../views/Errors/NotFound";
import ServerError from "../views/Errors/ServerError";
import SignUp from "../views/SignUp";
import Courses  from "../views/Forms/Courses";
import AddStudients from "../views/Stuidents/AddStudients";


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
          <Route path="saas" element={<Saas />} />
          <Route path="forms">
            <Route path="AddCourse" element={<AddCourses />} /> 
            <Route path="courses" element={<Courses />} /> 
          </Route>
          <Route path="Stuidents">
            <Route path="Stuidents" element={<Stuidents />} />
            <Route path="AddStuidents" element={<AddStudients />} />
          </Route>
          <Route path="calender">
            <Route path="calender" element={<Calendar />} />
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
