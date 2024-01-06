import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashbordlayout from "./Layout/Dashbordlayout";
import CRM from "./pages/CRM/Primary/CRM";
import Analytics from "./pages/Analytics/Primary/Analytics";
import EmailLayout from "./Layout/EmailLayout";
import EmailList from "./pages/Email/EmailList";
import ShowEmail from "./pages/Email/ShowEmail/Primary/ShowEmail";
import LaunchingSoon from "./pages/LaunchingSoon/LaunchingSoon";
import NotFound from "./pages/NotFound/NotFound";

export const ThemeContext = createContext();

export function App() {
  const routes = createBrowserRouter([
    {
      element: <Dashbordlayout />,
      children: [
        {
          element: <CRM />,
          path: "/CRM",
        },
        {
          element: <Analytics />,
          path: "/",
          index: true,
        },
        {
          element: <EmailLayout />,
          path: "email",
          children: [
            {
              element: <EmailList />,
              index: true,
            },
            {
              element: <ShowEmail />,
              path: ":id",
            },
          ],
        },
      ],
    },
    {
      element: <LaunchingSoon />,
      path: "chat",
    },
    {
      element: <LaunchingSoon />,
      path: "calendar",
    },
    {
      element: <LaunchingSoon />,
      path: "/dialog-examples",
    },
    {
      element: <NotFound />,
      path: "*",
    },
  ]);

  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")));

  // this line is for the body background yes we don't need it for any thing but the scrollbar track
  window.document.body.style.background = dark ? "#28243D" : "#F4F5FA";

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? "dark" : ""}>
        <RouterProvider router={routes} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
