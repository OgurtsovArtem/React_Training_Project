import React from "react";
import './Popup.css'
import ButtonClose from "../ButtonClose/ButtonClose.js";
import { useForm } from "react-hook-form";

function Popup(props) {
    //Функция из app.js которая управляет отрисовкой Popup
    const appFunction = props.a;

    const [registration, setRegistration] = React.useState(false)

    const { register, handleSubmit, errors } = useForm();

    const onSubmith =(data) => {
        console.log(data)
    }

    function changeForm() {
        setRegistration(!registration)
    }
    function closePopup() {
        appFunction()
    }
    React.useEffect(()=>{
        const buttonClose = document.getElementById('popup-button-close');
        buttonClose.addEventListener('click', closePopup)

        return ()=>{
            buttonClose.removeEventListener('click', closePopup)
        }
    })

    return(
        <section className="popup">
            <div className="popup__container" >
                <ButtonClose id='popup-button-close'/>
                <form className="popup__form" name={registration === true ? `login`: `registration`} onSubmit={handleSubmit(onSubmith)} noValidate>
                    <fieldset className="popup__fieldset">
                        <legend className="popup__title">{registration === true ? `Регистрация`: `Вход` }</legend>
                        <label htmlFor="email-login" className="popup__label">Email</label>
                        <input  
                            type="email" 
                            id='email-login'
                            name="Email" 
                            className="popup__input popup__input_type_name"
                            placeholder="Введите почту" 
                            ref={register({ required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
                            >
                        </input>
                        {errors.Email && errors.Email.type === 'required' && (<p className="error popup__error">This is required</p>)}
                        {errors.Email && errors.Email.type === 'pattern' && (<p className="error popup__error">Invalid email</p>)}
                        <label htmlFor="password-login" className="popup__label">Пароль</label>
                        <input 
                            type="password" 
                            name="Password" 
                            id='password-login' 
                            className="popup__input popup__input_type_link-url" 
                            placeholder="Введите пароль" 
                            ref={register({ required: true, minLength: 8 })}
                            >
                        </input>
                        {errors.Password && errors.Password.type === 'required' && (<p className="error popup__error">This is required</p>)}
                        {errors.Password && errors.Password.type === 'minLength' && (<p className="error popup__error">Min lenght 8</p>)}

                        {registration ? (
                        <>
                        <label htmlFor="name-registration" className="popup__label">Имя</label>
                        <input 
                            type="text" 
                            name="Name" 
                            id='name-registration' 
                            className="popup__input popup__input_type_link-url" 
                            placeholder="Введите своё имя"
                            ref={register({ required: true, maxLength: 30,  minLength: 2 })}
                            >
                        </input>
                        {errors.Name && errors.Name.type === 'required' && (<p className="error popup__error">This is required</p>)}
                        {errors.Name && errors.Name.type === 'maxLength' && (<p className="error popup__error">Max lenght 30</p>)}
                        {errors.Name && errors.Name.type === 'minLength' && (<p className="error popup__error">Min lenght 2</p>)}
                        </>
                        ) : (
                        ''
                        )}

                        <button type="submit" className="button button__presets popup__button popup__button-submith" >{registration === true ? `Зарегистрироваться`: `Войти` }</button>
                        <p className="popup__another-link">
                            <span className="popup__another-and">или</span>
                            <button type="button" className="button popup__button-another-form" onClick={changeForm}>
                                {registration === false ? `Зарегистрироваться`: `Войти` }
                            </button>
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Popup