import { faCheck, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./DropDown.css";

function DropDown({ title , array }) {
  const [open, setopen] = useState(false);
  const dropdown = () => {
    setopen(!open);
  };

  return (
    <div className="dropdown">
      <div className="div-team">
        <button className="btn-dropdown" onClick={dropdown}>
          <p>{title}</p>
          <FontAwesomeIcon icon={faDownLong} className="arrow" />
        </button>
        <div className={`div-dropdown ${open ? "active" : ""}`}>
          <ul>
            {Array &&
              array.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheck} />
                  {item.text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
