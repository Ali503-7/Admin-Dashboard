import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashbordlayout from "./Layout/Dashbordlayout";
import CRM from "./pages/CRM/Primary/CRM";
import Analytics from "./pages/Analytics/Primary/Analytics";
import EmailLayout from "./Layout/EmailLayout";
import EmailMain from "./pages/Email/EmailMain";

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
          element: <Analytics />,
          path: "/",
          index: true,
        },
        {
          element: <EmailLayout />,
          children: [
            {
              index: true,
              element: <EmailMain />,
              path: "/Email"
            },
          ]
        }
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
