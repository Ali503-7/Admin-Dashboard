import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
      <button className="btn-c2  arrow">
        Button
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default App;