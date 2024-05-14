import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../enums/routes.ts";
import { MainLayout } from "@features/layout";
import { ErrorPage, HomePage, TripPage } from "@pages";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: Routes.Landing,
        element: <HomePage />,
      },
      {
        index: true,
        path: Routes.Trip,
        element: <TripPage />,
      },
    ],
  },
]);
