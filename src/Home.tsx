import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Router, useNavigate } from "react-router-dom";
import MenuAside from "./components/Aside/Menu.aside";

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
            <MenuAside /><p>dsd</p>
        </div>
        </>
    );
};

export default Home;
