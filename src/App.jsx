import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="tailwind">
      <h1 className="text-red-500">
        nice to meet you Tailwind
      </h1>
    </div>
  );
}

export default App;
