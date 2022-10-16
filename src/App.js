import React from "react";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import User from "./Pages/UserList/User";

//Routing
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/User" element={<User/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
