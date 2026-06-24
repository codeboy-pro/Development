import React from "react";
import Component from "../Component";
import { useExtensions } from "../../context/ExtensionsContext";

const Active = () => {
  const { getActiveExtensions } = useExtensions();
  const activeExtensions = getActiveExtensions();

  return (
    <div className="main">
      <ul className="cards">
        {activeExtensions.map((curElem, index) => {
          return <Component key={index} dat={curElem} />;
        })}
      </ul>
    </div>
  );
};

export default Active;
