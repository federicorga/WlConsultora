import './SectionMiembros.css'
import LineSepar from '../ComponentesAccesorios/LineSepar/LineSepar';
import Subtitleh2 from '../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import ContactoForm from '../ContactoForm/ContactoForm';
import PortadaSections from '../PortadaSections/PortadaSections';
import Member from './Member/Member';


function SectionMiembros() {
  return (
    <>
      <PortadaSections titlePortada={"miembros"} imagen={"https://st4.depositphotos.com/1046751/23211/i/450/depositphotos_232110166-stock-photo-close-up-a-group-of.jpg"}/>
    <div className='linetitleMiembros'>
    <Subtitleh2 text={"NUESTROS MIEMBROS"}/>
      <LineSepar/>
     
      <section className='Seccion-Content-Miembros'>
      <div className='div-ContentAll-Miembros'>
      <Member nombre={"WILHELM LEIFERMANN"} titulo={"Abogado | Consultor"} imgurl={"Willy.jpeg"}/>

      </div>
      <ContactoForm/>
      </section>
      </div>

    </>

  );
}

export default SectionMiembros;
