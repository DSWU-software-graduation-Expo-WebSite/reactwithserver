import Home from "./pages/Home/home";

import "./App.css";
import GraduateList from "./pages/developers/GraduateList";
import GuestBook from "./pages/guestbook/guestbook";
import REBIT from "./pages/team/team1";
import PUPPYWATCH from "./pages/team/team2";
import AIKIOSK from "./pages/team/team3";
import FULLHOUSEMALL from "./pages/team/team4";
import ADMIN from "./pages/team/team5";
import URECAR from "./pages/team/team6";
import BBANGYA from "./pages/team/team7";
import Thanksto from "./pages/ThanksTo/thanksto";
import Introduce from './pages/introduce/introduce'
import Header from "./Header/header_new";
import Footer from "./Footer/footer";

import React from "react";


import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import Arrayprc2 from "./pages/projects/projects_main";

import "./App.css";

function App() {  
    return (
        <>
                <div className="header">
        <Header></Header>
        </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/professor" exact element={<Thanksto/>} />
        <Route path="/introduce" exact element={<Introduce/>} />
        <Route path="/projects" exact element={<Arrayprc2/>} />
        <Route path="/developers" exact element={<GraduateList/>} />
        <Route path="/REBIT" exact element={<REBIT/>} />
        <Route path="/PUPPYWATCH" exact element={<PUPPYWATCH/>} />
        <Route path="/AIKIOSK" exact element={<AIKIOSK/>} />
        <Route path="/FULLHOUSEMALL" exact element={<FULLHOUSEMALL/>} />
        <Route path="/ADMIN" exact element={<ADMIN/>} />
        <Route path="/URECAR" exact element={<URECAR/>} />
        <Route path="/BBANGYA" exact element={<BBANGYA/>}/>
        <Route path="/guestbook" exact element={<GuestBook/>} />

      </Routes>


     
        </>

    );
}

export default App;