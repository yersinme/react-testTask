import React, { useState } from "react";
import './Login.style.css'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/AuthStore/Auth.store";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const status = useSelector((state: any) => state.auth);

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        status: true
    })

    const [login, SetLogin] = useState(loginData)



    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (loginData.email === 'admin@admin' && loginData.password === '1234') {
            dispatch(authActions.setAuth({ ...loginData }));
            console.log("Ok", status);
            navigate("/")
        } else {
            console.error("Error");
        }
    };



    return (
        <div className="form-container">
            <form className="form" >
                <label htmlFor="email" className="label">
                    Email: admin@admin
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input"

                    onChange={e => setLoginData(prev => ({
                        ...prev, email: e.target.value
                    }))}
                    value={loginData.email}
                />
                <label htmlFor="password" className="label">
                    Password: 1234
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="input"

                    onChange={e => setLoginData(prev => ({
                        ...prev, password: e.target.value
                    }))}
                    value={loginData.password}
                />
                <button className="submit" onClick={e => handleRegister(e)}>
                    login
                </button>
            </form></div>
    );
};

export default RegisterForm;
