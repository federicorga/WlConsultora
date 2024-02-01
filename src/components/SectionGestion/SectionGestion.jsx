import PortadaSections from "../PortadaSections/PortadaSections";
import "./SectionGestion.css"
import { scrollToTop } from "../../assets/main";
import { Link } from "react-router-dom";
import CardServicios from "../CardServicios/CardServicios";
import LineSepar from "../ComponentesAccesorios/LineSepar/LineSepar";
import Subtitleh2 from "../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
function SectionGestion() {
  return (
    <>
      <PortadaSections titlePortada={"Gestión"} imagen={"https://europadigital.es/wp-content/uploads/2021/10/Abogados-para-empresas.jpeg"}/>
      <section className="section-Gestion" >
      <Subtitleh2 text={"NUESTROS SERVICIOS DE GESTIÓN"}/>
      <div className='tamlinasesor' id="Ases">
      <LineSepar/>
      </div>
      </section>
 <section className='Seccion-CardsServicios'>

    <Link className='link-articuloCard' to={`/gestion/constitucion-societaria`} onClick={scrollToTop}>
    <CardServicios titulo={"Constitucion Societaria"} img="Gestion/constitucionsocietaria.jpeg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/locacion-inmobiliaria`} onClick={scrollToTop}>
    <CardServicios titulo={"Locación Inmobiliaria"} img="Gestion/contratoinmobiliaria.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/fondos-comercio`} onClick={scrollToTop}>
    <CardServicios titulo={"Fondos de Comercio"} img="Gestion/fondocomercio.webp"/></Link>
    <Link className='link-articuloCard' to={`/gestion/habilitaciones`} onClick={scrollToTop}>
    <CardServicios titulo={"Habilitaciones"} img="Gestion/habilitaciones.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/contratos-locacion-servicios`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Locación de Servicios"} img="Gestion/contratoservicios.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/contratos-locacion-obra`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Locación de Obra"} img="Gestion/contratoobra.jpg"/></Link>
    
    </section>
    </>
   
  );
}

export default SectionGestion;
