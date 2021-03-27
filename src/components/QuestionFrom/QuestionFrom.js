import React from "react";
import './QuestionFrom.css'
import { useForm } from "react-hook-form";

function QuestionFrom(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmith =(data) => {
        console.log(data)
    }

    return(
        <form className="questionFrom__form" name='questionFrom' onSubmit={handleSubmit(onSubmith)} noValidate>
            <fieldset className="questionFrom__fieldset">
                <legend className="questionFrom__title">Let’s Get in Touch</legend>
                
                <input 
                    type="text" 
                    name="Name" 
                    className="questionFrom__input" 
                    placeholder="Your name"
                    ref={register({ required: true, maxLength: 30,  minLength: 2 })}
                    >
                </input>
                {errors.Name && errors.Name.type === 'required' && (<p className="error questionFrom__error">This is required</p>)}
                {errors.Name && errors.Name.type === 'maxLength' && (<p className="error questionFrom__error">Max lenght 30</p>)}
                {errors.Name && errors.Name.type === 'minLength' && (<p className="error questionFrom__error">Min lenght 2</p>)}

                <input  
                    type="email" 
                    name="Email" 
                    className="questionFrom__input"
                    placeholder="Your e-mail" 
                    ref={register({ required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
                    >
                </input>
                {errors.Email && errors.Email.type === 'required' && (<p className="error questionFrom__error">This is required</p>)}
                {errors.Email && errors.Email.type === 'pattern' && (<p className="error questionFrom__error">Invalid e-mail</p>)}
                
                <input 
                    type="tel" 
                    name="Phone" 
                    className="questionFrom__input" 
                    placeholder="Your phone" 
                    ref={register({ required: true, minLength: 9 })}
                    >
                </input>
                {errors.Phone && errors.Phone.type === 'required' && (<p className="error questionFrom__error">This is required</p>)}
                {errors.Phone && errors.Phone.type === 'type' && (<p className="error questionFrom__error">only number</p>)}
                {errors.Phone && errors.Phone.type === 'minLength' && (<p className="error questionFrom__error">Min lenght 8</p>)}

                <textarea 
                    type="text" 
                    name="Text" 
                    className="questionFrom__input questionFrom__textArea" 
                    placeholder="Your massage" 
                    ref={register({ required: true, minLength: 9 })}
                    >
                </textarea>
                {/* {errors.Text && errors.Text.type === 'required' && (<p className="error questionFrom__error">This is required</p>)}
                {errors.Text && errors.Text.type === 'minLength' && (<p className="error questionFrom__error">Min lenght 8</p>)} */}

                <button type="submit" className="button button__presets questionFrom__button questionFrom__button-submith" >Send</button>
            </fieldset>
        </form>
    )
}

export default QuestionFrom;