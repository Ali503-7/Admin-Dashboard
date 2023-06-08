import "./App.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./components/Super_components/Home_Page/Home";

const routes = createBrowserRouter([ 
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
