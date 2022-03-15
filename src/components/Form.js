import React from 'react';
import { useState } from 'react';
import './css/form.css';
// import InputMask from 'react-input-mask';

const Form = () => {

    const [ name, setName ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ mass, setMass ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newObj = {
            name: name,
            tel: tel,
            mass: mass,
        }
        console.log(newObj);
    }
        
  return (
        <form onSubmit={onSubmit} action="telegram.php" className="form-body" method="POST">
            <h3 className="form-title">Замовити зворотній дзвінок</h3>
            <div className="contact-form-item">
                <p className="form-label" >Ваше ім'я </p>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="form-input _req" minLength={3} />
                <span className="span-error" style={{display: "none"}}>Заповніть поле</span>
            </div>
            <div className="form-item">
                <label className="form-label">Ваш телефон
                <input value={tel} onChange={(e) => setTel(e.target.value)} className="form-input _req _tel" name="phone" type="tel" maxLength={20}
                required={true} placeholder="+38(___)___-__-__" />
                </label>
                <span className="span-error" style={{display: "none"}}>Заповніть поле</span>
            </div>
            <div className="form-item">
                <label className="form-label" >Ваше повідомлення
                <textarea value={mass} onChange={(e) => setMass(e.target.value)} className="form-input" name="message"></textarea>
                </label>
            </div>
            <input type="submit" className="form-button" value="відправити" />
        </form>
  )
}

export default Form;