import React from "react";
import Component from "../Component";
import { useExtensions } from "../../context/ExtensionsContext";

const Inactive = () => {
  const { getInactiveExtensions } = useExtensions();
  const inactiveExtensions = getInactiveExtensions();

  return (
    <div className="main">
      <ul className="cards">
        {inactiveExtensions.map((curElem, index) => {
          return <Component key={index} dat={curElem} />;
        })}
      </ul>
    </div>
  );
};

export default Inactive;
