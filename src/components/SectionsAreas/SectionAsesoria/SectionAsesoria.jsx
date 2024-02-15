import './SectionAsesoria.css'
import PortadaSections from '../../PortadaSections/PortadaSections';
import CardServicios from '../../CardServicios/CardServicios';
import { Link } from 'react-router-dom';
import LineSepar from '../../ComponentesAccesorios/LineSepar/LineSepar';
import Subtitleh2 from '../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import Subtitleh3 from '../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';
import { scrollToTop } from '../../../assets/main';

const SectionAsesoria = () => {

  return (
    <>
 <PortadaSections titlePortada={"Asesoria Legal"} imagen={"https://www.diariosigloxxi.com/multimedia/images/img_4a3f1239125d0dbafebe54d7c78d65f4.jpg"}/>

 
 <section className='section-contain-Asesoria-all'>
 <section className="section-Asesoria" >
      <Subtitleh2 text={"NUESTROS SERVICIOS DE ASESORIA"}/>
      <div className='tamlinasesor' id="Ases">
      <LineSepar/>
      </div>
        <div className="section-articulos">
          <Subtitleh3 text={"¿De qué se trata la Asesoría Virtual?​​"}/>
      <p>En la actualidad precisamos la agilidad en cada aspecto de nuestras vidas, por ello queremos estar cerca y brindarte rápida respuesta a tus consultas.</p>
      <p>En linea con nuestro compromiso de brindar la excelencia en nuestro servicio y soluciones concretas privilegiando los intereses de nuestros clientes incorporamos una nueva forma de comunicación. </p>
      <p>En linea con nuestro compromiso de brindar la excelencia en nuestro servicio y soluciones concretas privilegiando los intereses de nuestros clientes incorporamos una nueva forma de comunicación. </p>
        </div>
      </section>
 <section className='Seccion-CardsServicios'>

    <Link className='link-articuloCard'  to={`/asesoria-legal/sociedad-comercial`} onClick={scrollToTop}>
    <CardServicios titulo={"Sociedad Comercial"} img="Asesoramiento/sociedadComercial.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/relaciones-de-consumo`} onClick={scrollToTop}>
    <CardServicios titulo={"Relaciones de Consumo"} img="Asesoramiento/relacionesConsumo.webp"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-de-adhesion`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Adhesion"} img="Asesoramiento/contratosAderidos.jpg"/></Link>
    <Link className='link-articuloCard'   to={`/asesoria-legal/ley-contrato-de-trabajo`} onClick={scrollToTop}>
    <CardServicios titulo={"Ley de Contrato de Trabajo"} img="Asesoramiento/leycontrattrabajo.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/derecho-laboral-colectivo`} onClick={scrollToTop}>
    <CardServicios titulo={"Derecho Laboral Colectivo"} img="Asesoramiento/derecholaboralColetivo.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/riesgo-de-trabajo`} onClick={scrollToTop}>
    <CardServicios titulo={"Riesgos de Trabajo"} img="Asesoramiento/riesgoDeTrabajo.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-seguros`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Seguros"} img="Asesoramiento/contratoseguros.jpg"/></Link>
    <Link className='link-articuloCard'   to={`/asesoria-legal/responsabilidad-penal-empresaria`} onClick={scrollToTop}>
    <CardServicios titulo={"Responsabilidad Penal Empresaria"} img="Asesoramiento/responsabilidadpenalempresarial.jpg"/></Link>
    <Link className='link-articuloCard'   to={`/asesoria-legal/normas-iso9001`} onClick={scrollToTop}>
    <CardServicios titulo={"Normas ISO 9001"} img="Asesoramiento/normaiso9001.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/normas-iso45001`} onClick={scrollToTop}>
    <CardServicios titulo={"Normas ISO 45001"} img="Asesoramiento/normaiso45001.png"/></Link>
    </section>
    </section>
    </>
  );
}

export default SectionAsesoria;
