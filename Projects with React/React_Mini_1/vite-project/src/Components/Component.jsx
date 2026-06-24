import React from "react";
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import { useExtensions } from "../context/ExtensionsContext";

const Component = ({ dat }) => {
  const { logo, name, description, isActive } = dat;
  const { removeExtension, toggleExtensionStatus } = useExtensions();

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to remove ${name}?`)) {
      removeExtension(name);
    }
  };

  const handleToggle = () => {
    toggleExtensionStatus(name);
  };

  return (
    <li className="card">
      <div className="upper_part">
        <img src={logo} alt={name} />
        <div className="upper_text">
          <p className="dev">{name}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="Lower_part">
        <button onClick={handleRemove}>Remove</button>
        <div
          className="togg"
          onClick={handleToggle}
          style={{ color: isActive ? "#4CAF50" : "#9E9E9E" }}
        >
          {isActive ? <LiaToggleOnSolid /> : <LiaToggleOffSolid />}
        </div>
      </div>
    </li>
  );
};

export default Component;
