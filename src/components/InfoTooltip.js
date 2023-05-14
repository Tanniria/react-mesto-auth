import React from "react";
import iconSuccess from "../images/iconSuccess.svg";
import iconUnsuccess from "../images/iconUnsuccess.svg";
import usePopupClose from '../hooks/usePopupClose';

export default function InfoTooltip({ isOpen, onClose, success }) {
    usePopupClose(isOpen, onClose);
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <div className="popup_event">
                    <h2 className="popup_event-title">
                        {success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте еще раз."}
                    </h2>
                    <img
                        className="popup_event-icon"
                        src={success ? iconSuccess : iconUnsuccess}
                        alt={success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте еще раз."} />
                </div>
                <button
                    className="popup__button-close"
                    type="button"
                    aria-label="Выход"
                    onClick={onClose} />
            </div>
        </div>
    );
};