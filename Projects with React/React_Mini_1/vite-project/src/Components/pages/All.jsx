import React from "react";
import Component from "../Component";
import { useExtensions } from "../../context/ExtensionsContext";

const All = () => {
  const { getAllExtensions } = useExtensions();
  const allExtensions = getAllExtensions();

  return (
    <div className="main">
      <ul className="cards">
        {allExtensions.map((curElem, index) => {
          return <Component key={index} dat={curElem} />;
        })}
      </ul>
    </div>
  );
};

export default All;
