import React from "react";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar />
          <div className="others">
            Other pages
          </div>
      </div>
    </div>
  );
}

export default App;
