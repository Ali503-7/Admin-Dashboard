import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="tailwind">
      <div className="input-text">
        <label htmlFor="Text" className="block">
          Text Label
        </label>
        <div className="input">
          <div className="env right-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input type="text" name="Text" id="Text" placeholder="Text field" className="!pr-10"/>
        </div>
      </div>
    </div>
  );
}

export default App;
