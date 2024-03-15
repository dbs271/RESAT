import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Calendar from "../pages/calendar/Calendar";
import Carousel from "../pages/carousel/Carousel";
import Carousel2 from "../pages/carousel2/carousel2";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import Nav from "../pages/responsive-nav/Nav";
import Timer from "../pages/timer/Timer";
import Todo from "../pages/todo/Todo";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/resat",
        element: <Main />,
      },
      {
        path: "/resat/day1",
        element: <Timer />,
      },
      {
        path: "/resat/day2",
        element: <Todo />,
      },
      {
        path: "/resat/day3",
        element: <Calendar />,
      },
      {
        path: "/resat/day5",
        element: <Carousel />,
      },
      {
        path: "/resat/day6",
        element: <Carousel2 />,
      },
      {
        path: "/resat/day7",
        element: <Nav />,
      },
      {
        path: "/resat/day8",
        element: <Login />,
      },
    ],
  },
]);

export default router;
