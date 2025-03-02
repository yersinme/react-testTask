import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import RegisterForm from "./Login/Login";
import React from "react";
import Personage from "./Pages/Personage";
import Planets from "./Pages/Planets";
import Spaceships from "./Pages/Spaceships";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<RegisterForm />} />
                <Route path="/personage" element={<Personage />}/>
                <Route path="/planets" element={<Planets />}/>
                <Route path="/spaceships" element={<Spaceships />}/>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
