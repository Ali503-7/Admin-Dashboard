import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
export const ThemeContext = createContext();

import Analytics from "./pages/Analytics";
import { createBrowserRouter } from "react-router-dom";
import Dashbordlayout from "./Layout/Dashbordlayout";

export function App() {
  const routes = createBrowserRouter([
    {
      element: <Dashbordlayout />,
      children: [
        {
          element: <Analytics />,
          path: "/",
          index: true,
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
