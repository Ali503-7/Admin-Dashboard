import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/DashbordLayout";
import Analytics from "./pages/Analytics";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Analytics />,
      },
    ],
  },
]);
