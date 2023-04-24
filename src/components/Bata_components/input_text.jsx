import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Input_text({ env, env_right, label, check_box, arrows, placeholder }) {
  return (
    <div className="input-text">
      {label && (
        <label htmlFor="Text" className="block">
          {label}
        </label>
      )}
      <div className="input">
        {env && (
          <div className={env_right ? "env right-2" : "env left-2"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        )}
        {env_right && (
          <div className={env_right ? "env right-2" : "env left-2"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        )}
        {check_box && (
          <label className="Check">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        )}
        {arrows && (
          <div className="arrows">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
        <input
          type="text"
          name="Text"
          id="Text"
          placeholder={placeholder}
          className={env || check_box ? "!pl-8" : ""}
        />
      </div>
    </div>
  );
}

export default Input_text;
