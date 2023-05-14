import React from "react";
import { Link } from "react-router-dom";

export default function AuthForm({ onSubmit, name, title, register, buttonText, children }) {
    return (
        <div className="auth">
            <h2 className="auth__title">{title}</h2>
            <form
                className={`auth__form auth__form_${name}`}
                name={name}
                onSubmit={onSubmit}>
                {children}
                <button
                    className="auth__form_submit"
                    type="submit"
                    name="submit"
                >{buttonText}</button>
            </form>
            {register && (
                <Link to="/sign-in"
                    className="auth__login">
                    Уже зарегистрированы? Войти</Link>
            )};
        </div>
    );
};