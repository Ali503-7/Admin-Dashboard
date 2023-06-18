import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { routes } from "./Routes";

export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
        <RouterProvider router={routes} />
    </ThemeContext.Provider>
  );
}

export default App;
