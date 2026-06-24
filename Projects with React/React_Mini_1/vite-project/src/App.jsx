import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ExtensionsProvider } from "./context/ExtensionsContext";
import Component from "./Components/Component";
import Head_line from "./Components/pages/Head_line";
import Header from "./Components/pages/Header";
import All from "./Components/pages/All";
import Active from "./Components/pages/Active";
import Inacvtive from "./Components/pages/Inacvtive";

const App = () => {
  return (
    <ThemeProvider>
      <ExtensionsProvider>
        <Head_line />

        {/* react-router dom */}
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/all" replace />} />
          <Route path="/all" element={<All />} />
          <Route path="/active" element={<Active />} />
          <Route path="/inactive" element={<Inacvtive />} />
        </Routes>
      </ExtensionsProvider>
    </ThemeProvider>
  );
};

export default App;
