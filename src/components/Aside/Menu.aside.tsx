import React from 'react';
import { useState } from "react"
import { Aside } from "./Aside.data"
import AsideLinks from "./Aside.links"
import './Aside.style.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/AuthStore/Auth.store';
import { useNavigate } from 'react-router-dom';

const MenuAside = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <div className="aside">
                <div className="logo">Logo</div>
                {Aside.map(link => (<AsideLinks key={link.id} link={link} />))}

                <div className="log_out_btn">
                    <button onClick={() => {navigate("/login")}}>Выйти</button>
                </div>
            </div >
        </div>
    )
}



export default MenuAside;
