import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
