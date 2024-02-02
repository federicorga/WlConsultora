
import './ContactoForm.css'
function ContactoForm( {title="Contactenos"}) {
  return (
    <div>
      <div className="card">
  <span className="title">{title}</span>
  <form className="form">
    <div className="group">
      <input placeholder="" type="text" required />
      <label htmlFor="name">Nombre</label>
    </div>
    <div className="group">
      <input placeholder="" type="phone" id="phone" name="phone"/>
      <label htmlFor="email">Telefono</label>
    </div>
    <div className="group">
      <input placeholder="" type="email" id="email" name="email" required />
      <label htmlFor="email">Email</label>
    </div>
    <div className="group">
      <textarea
        placeholder=""
        id="comment"
        name="comment"
        rows={5}
        required
        defaultValue={""}
      />
     
      <label htmlFor="comment">Comentario</label>
    </div>
    <div className='group btnsubmit-div'>
    <button type="submit">Solicitar una cita</button>
    </div>
  </form>
</div>

    </div>
  );
}

export default ContactoForm;
