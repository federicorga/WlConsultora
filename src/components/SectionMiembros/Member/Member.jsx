import './Member.css'

function Member({nombre, titulo,imgurl}) {
  return (
    <div className='div-Content-Miembro'>
      <img src={`/img/Miembros/${imgurl}`} alt=""/>
      <div className='div-info-Miembro'>
      <h2>{nombre}</h2>
      <h3>{titulo}</h3>
      </div>
    </div>
  );
}

export default Member;
