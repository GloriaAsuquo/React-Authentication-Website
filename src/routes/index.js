import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error404 from "../Component/404";
import Authenticated from "../layouts/authenticated";
import Unauthenticated from "../layouts/unauthenticated";
import Login from "../pages/login";
import ForttenPassword from "../pages/ForgottenPassword";
import SignUp from "../pages/Signup";
import OTPPage from "../pages/OTP";

const MainBAR = ({ children }) => {
  return (
    <main className="h-screen w-full bg-slate-50">
      {children ? children : <Outlet />}
    </main>
  );
};

// /auth/register

const MainRoute = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainBAR />,
      children: [
        {
          index: true,
          element: <Authenticated />,
        },
        {
          path: "auth",
          element: <Unauthenticated />,
          children: [
            {
              index: true,
              element: <Login />,
              errorElement: <Error404 />,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
            {
              path: "reset-password",
              children: [
                {
                  index: true,
                  element: <ForttenPassword />,
                },
                {
                  path: ":email",
                  element: <OTPPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default MainRoute;
