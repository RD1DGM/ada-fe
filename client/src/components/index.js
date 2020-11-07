import React from "react";
import "../scss/main.scss";
import MainContent from "./main_content";
import SideBar from "./sidebar";

function App() {
  return (
    <div className="app_container">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
