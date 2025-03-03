import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import MenuAside from "./components/Aside/Menu.aside";
import Router from "./components/Router";

const Home = () => {
    const isAdmin = useSelector((state: any) => state.auth.email); // Используем `any` для упрощения

    const isActive = useSelector((state: any) => state.auth.status); // Используем `any` для упрощения
    const navigate = useNavigate();

    useEffect(() => {
        if (!isActive) {
            navigate("/login");
        } }, []); 

    return (
        <>
        <div className="grid">
            <MenuAside /><h1 className="title">Главная страница</h1>
        </div>
        </>
    );
};

export default Home;
