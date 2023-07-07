import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashbordlayout from "./Layout/Dashbordlayout";
import CRM from "./pages/CRM/CRM";

export const ThemeContext = createContext();

export function App() {
  const routes = createBrowserRouter([
    {
      element: <Dashbordlayout />,
      children: [
        {
          element: <CRM />,
          path: "/CRM",
          index: true,
        },
        {
          element: <h1>Here is Analatics</h1>,
          path: "/Analytics",
        },
      ],
    },
  ]);
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")));


  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <RouterProvider router={routes} />
    </ThemeContext.Provider>
  );
}

export default App;
