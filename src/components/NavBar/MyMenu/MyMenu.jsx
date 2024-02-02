import"./MyMenu.css"

import BtnIndice from '../BtnIndice/BtnIndice';
import { Link } from 'react-router-dom';
import { scrollToTop } from "../../../assets/main";
function MyMenu() {
 
  return (
    <>
      <ul className='nav-list'>
        <Link to={"/"} onClick={scrollToTop}><BtnIndice text={'Inicio'}  /></Link>
        <Link to={"/noticias"} onClick={scrollToTop}> <BtnIndice text={'Noticias'} /></Link>
       <Link to={"/asesoria-legal"} onClick={scrollToTop}> <BtnIndice text={'Area de asesoramiento'} /></Link>
       <Link to={"/gestion"} onClick={scrollToTop}> <BtnIndice text={'Area de gestión'} /></Link>
       <Link to={"/miembros"} onClick={scrollToTop}> <BtnIndice text={'Miembros'} /></Link> 
       <Link to={"/faq"} onClick={scrollToTop}> <BtnIndice text={'FAQ'} /></Link>
       <Link to={"/contacto"} onClick={scrollToTop}> <BtnIndice text={'Contacto'} /></Link>
    
      </ul>
    </>
  );
}

export default MyMenu;
