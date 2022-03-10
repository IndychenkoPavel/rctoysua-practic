import React from 'react';
import './css/modalCar.css'

const ModalCar = ({active, setActive, context}) => {
  return (
    <div className={active ? "modal-car active" : "modal-car" }>
        <div className="modal-content">
          <div className="modal-close" onClick={() => setActive(false)}></div>
          <div className="context">
            {context}
          </div>
        </div>
    </div>
  )
}

export default ModalCar