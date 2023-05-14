import React from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import logo from '../images/logo.svg';

export default function Header({ loggedIn, userEmail, onSignOut }) {
    const location = useLocation();
    const linkText = location.pathname === "/sign-in" ? "Регистрация" : "Войти";
    const buttonText = loggedIn ? "Выйти" : linkText;
    return (
        <header className="header">
            <img className="header__logo"
                src={logo}
                alt="Логотип с надписью Место" />
            <div className="header__menu">
                <Routes>
                    <Route
                        path="/sign-in"
                        element={
                            <Link to="/sign-up"
                                className="header__button-link">Регистрация</Link>
                        } />
                    <Route
                        path="/sign-up"
                        element={
                            <Link to="/sign-in"
                                className="header__button-link">Войти</Link>
                        } />
                </Routes>
                {loggedIn && (
                    <nav className="header__nav">
                        <p className="header__email">{userEmail}</p>
                        <button
                            className="header__button-link header__button-link_type_auth"
                            onClick={() => onSignOut()}>
                            {buttonText}</button>
                    </nav>
                )}
            </div>
        </header>
    );
};