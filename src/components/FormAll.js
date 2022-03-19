import React from 'react';
import './css/formAll.css'
import { useState } from 'react';
import InputMask from "react-input-mask";


const FormAll = ({active, setActive, text, product, texteria}) => {
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
    <div className={active ? "modal-form active" : "modal-form" }>
        <div className="modal-form-content">
            <div className="modal-form-close" onClick={() => setActive(false)}> <img src="./img/modal-img/close-icon.png" alt="" /> </div>
            <h3 className="form-title">{text} : <br /> {product}</h3>
            <div className="modal-form-block">
            <form onSubmit={onSubmit} action="telegram.php" className="form-body" method="POST">
            <div className="contact-form-item">
                <p className="form-label" >Ваше ім'я </p>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="form-input _req" minLength={3} />
                <span className="span-error" style={{display: "none"}}>Заповніть поле</span>
            </div>
            <div className="form-item">
                <label className="form-label">Ваш телефон
                <InputMask value={tel} className="form-input _req _tel" mask="+38(999)-999-99-99" onChange={(e) => setTel(e.target.value)} name="phone" type="tel"
                required={true} placeholder="+38(___)___-__-__" />
                {/* <input value={tel} onChange={(e) => setTel(e.target.value)} className="form-input _req _tel" name="phone" type="tel" maxLength={20}
                required={true} placeholder="+38(___)___-__-__" /> */}
                </label>
                <span className="span-error" style={{display: "none"}}>Заповніть поле</span>
            </div>
            <div className="form-item">
                <label className="form-label">Додаткова інформація
                <textarea placeholder={texteria} value={mass} onChange={(e) => setMass(e.target.value)} className="form-input" name="message"></textarea>
                </label>
            </div>
            <input type="submit" className="form-button" value="відправити" />
        </form>
            </div>
        </div>
    </div>
  )
}

export default FormAll