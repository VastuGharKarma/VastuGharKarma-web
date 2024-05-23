import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NumerologyForm from "./Components/Numerology/Form";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import Astro from "./Components/Astro/Astro";
import Vastu from "./Components/Vastu/Vastu";
import Settings from "./Components/Settings/Settings";
import { Fragment } from "react";
import { Col, Row } from "antd";
import NumerologyReport from "./Components/Numerology/NumerlogyReport";

export default function App() {
  const ProtectedRoute = ({ children }) => {
    // if (!currentUser) {
    //   return <Navigate to="/login" />;
    // }
    return children;
  };

  const Layout = () => {
    return (
      <Row>
        <Col span={4}>
          {" "}
          <Sidebar />
        </Col>
        <Col className="pr-8 pl-4 " span={20}>
          {" "}
          <Outlet />
        </Col>
      </Row>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/numerology",
          element: <NumerologyForm />,
        },
        {
          path: "/numerology/:id",
          element: <NumerologyReport />,
        },
        {
          path: "/astro",
          element: <Astro />,
        },
        {
          path: "/vastu",
          element: <Vastu />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },

    // {
    //   path: "/signup",
    //   element: <RegisterPage />,
    // },
    // {
    //   path: "/verify",
    //   element: <VerifyEmailPage />,
    // },
    // {
    //   path: "/verify-email",
    //   element: <VerifySuccessPage />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
