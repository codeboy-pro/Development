import React, { createContext, useContext, useState } from "react";
import { extensionsData } from "../data/extensionsData";

const ExtensionsContext = createContext();

export const useExtensions = () => {
  const context = useContext(ExtensionsContext);
  if (!context) {
    throw new Error("useExtensions must be used within an ExtensionsProvider");
  }
  return context;
};

export const ExtensionsProvider = ({ children }) => {
  const [extensions, setExtensions] = useState(extensionsData);

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const toggleExtensionStatus = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const getAllExtensions = () => extensions;

  const getActiveExtensions = () => extensions.filter((ext) => ext.isActive);

  const getInactiveExtensions = () => extensions.filter((ext) => !ext.isActive);

  return (
    <ExtensionsContext.Provider
      value={{
        extensions,
        removeExtension,
        toggleExtensionStatus,
        getAllExtensions,
        getActiveExtensions,
        getInactiveExtensions,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};
