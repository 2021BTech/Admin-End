import React from "react";
import "./App.css";
//Components
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";

//Pages
import Home from "./Pages/Home/Home";
import User from "./Pages/UserList/User";
import CreateUser from "./Pages/User/CreateUser";

//Routing
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/User" element={<User/>} />
          <Route  path="/User/:userId" element={<CreateUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
