import './ContactoForm.css';
import React from 'react';


function ContactoForm({ title = "Contactenos" }) {


  return (
    <>
      <div className="card">
        <span className="title">{title}</span>
        <form onSubmit={""} className="form">
          <div className="group">
            <input placeholder="" type="text" name="nombre" required />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="group">
            <input placeholder="" type="phone" id="phone" name="telefono" />
            <label htmlFor="email">Telefono</label>
          </div>
          <div className="group">
            <input placeholder="" type="email" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <label htmlFor="comment">Consulta</label>
            <textarea
              placeholder=""
              id="comment"
              name="comentario"
              rows={5}
              required
              defaultValue={""}
            />
          </div>
          <div className='group btnsubmit-div'>
            <button type="submit">Solicitar Asesoría</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactoForm;
