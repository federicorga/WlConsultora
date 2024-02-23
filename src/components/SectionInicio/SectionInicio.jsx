import "./SectionInicio.css"
import Titles from "../ComponentesAccesorios/Titles/Titles";
import Subtitleh2 from "../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import InfoServicio from "./InfoServicio/InfoServicio";
import Subtitleh3 from "../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3";
import BtnSection from "../BtnSection/BtnSection";
import Aos from "aos";
import { useEffect } from "react";
import MiniLineSepar from "../ComponentesAccesorios/MiniLineSepar/MiniLineSepar";
import { scrollToTop } from "../../assets/main";
import { Link } from "react-router-dom";
import CardServicios from "../CardServicios/CardServicios";
const SectionInicio = () => {

  const AosData="flip-up";
  useEffect(() => {
    Aos.init({
      
      offset: -900,
      duration: 800, // Duración de las animaciones en milisegundos
      easing: 'ease-in-out', // Tipo de easing (opcional)
      once: false, // Solo activar las animaciones una vez
    });
  }, []);

  return (
 <>
    <div className='fondoInicio'>
    <Titles fontSize="35px" textTitle={`Defendemos Tus Intereses, Impulsamos Tu Negocio`}/> 
    </div>

    <div className="inicio-secA">
    <Subtitleh2 text={"¿NECESITAS ESTAR TRANQUILO CON LA SITUACON LEGAL DE TU EMPRESA O EMPRENDIMIENTO?"}></Subtitleh2>
    <Subtitleh3 text={"Podemos Acompañarte y Asesorarte en las distintas Alternativas"}></Subtitleh3>
    <div className="inicio-SecA-btnsect">
    <BtnSection titleBtn={"CONTACTANOS!"} url={"/contacto"}/>
    </div>
    </div>


    <div className="inicio-secB">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"NUESTROS SERVICIOS"}/>
    <InfoServicio/>
    </div>

 

    <div className="inicio-secC">
    <div data-aos="flip-left">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"¿Por que elegirnos?"} ></Subtitleh2>
    </div>
    <div className="content-inicio-p-sub-line-all">
      
    <div className="content-inicio-sub-lin" data-aos="fade-right">
      <Subtitleh2 text={"Superando Obstáculos"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text " data-aos="fade-up">Sabemos lo difícil que es animarse a emprender y crear empresas: los miedos y las expectativas, salir de la zona de confort y animarse a ofrecer productos y servicios que mejoren la calidad de vida de las personas, que ahorren tiempo de trabajo, que contribuyan al desarrollo de la sociedad. La incertidumbre que generan los procesos nuevos, aun los más positivos, pueden llegar a representan un factor de desgaste inicial de fuerzas que no debe cargar el emprendedor. Aquí es donde entra WL Consultora: ¡nos encanta iniciar empresas! Lo que generalmente es un factor de confusión para muchos emprendedores, es un factor de proceso de satisfacción para nuestra consultora.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right"
     >
      <Subtitleh2 text={"Adaptándonos al Futuro"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up">Entendemos al mundo de hoy como uno expuesto a procesos de automatización surgidos de nuevas tecnologías que reinventaran el mercado laboral existente, excluyendo a algunos y transformando las funciones de otros. Este proceso de adaptación a un nuevo mundo en constante desarrollo, significa una oportunidad de crear nuevas formas de ingresos patrimoniales que excedan la tradicional relación en dependencia y permitan fundar las bases de nuestro sello personal en el mundo.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right"
     >
      <Subtitleh2 text={"De la Idea al Impacto"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up">A la hora de materializar una idea en un proyecto, un proyecto en un negocio, y un negocio en una empresa que contribuirá a la sociedad y generara puestos de trabajo, cumpliendo un rol social fundamental en el desarrollo económico local, el empresario puede verse abrumado por una variedad de aspectos legales, contractuales y legislativos que sienta que amenacen su emprendimiento. Por eso debe contar con todo el conocimiento que nuestros profesionales de diversas ramas del conocimiento pueden brindar a través de la facilidad y comodidad que brindan las nuevas tecnologías en comunicaciones que se consolidaron en nuestro país durante la pandemia.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right"
     >
      <Subtitleh2 text={"Delegando para Enfocarse"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up">Si aun debidamente asesorado el emprendedor considera que debe enfocarse exclusivamente a su vocación, podrá dejar en nuestras manos la gestión relativa a la formalización jurídica de su empresa, esto es, la constitución legal de su proyecto en una sociedad registrada, la habilitación comercial de inmuebles, la formalización y seguimiento de contratos civiles y comerciales, la transferencia de fondos de comercio y la gestión de las diligencias que los órganos administrativos de control requieren.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right">
      <Subtitleh2 text={"Visión Integral"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up" >Resumiremos la visión de WL Consultora en la célebre frase del matemático Alfred North Whitehead: “La civilización avanza al aumentar el número de operaciones que podemos realizar sin tener que pensar en ellas”</p>
    </div>
  </div>


    <div className="inicio-secD">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"NUESTRAS AREAS"} />
    <div data-aos="flip-left">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"Asesoramiento"} data-aos="flip-left" />
    </div>
    <div data-aos="zoom-in">
      <div className="inicio-area-asesoria">
      
        <div className='group-Card'>
        <Link className='link-articuloCard'  to={`/asesoria-legal/sociedad-comercial`} onClick={scrollToTop}>
        <CardServicios titulo={"Sociedad Comercial"} img="Asesoramiento/sociedadComercial.jpg"/></Link>
        <Link className='link-articuloCard'  to={`/asesoria-legal/relaciones-de-consumo`} onClick={scrollToTop}>
        <CardServicios titulo={"Relaciones de Consumo"} img="Asesoramiento/relacionesConsumo.webp"/></Link>
        <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-de-adhesion`} onClick={scrollToTop}>
        <CardServicios titulo={"Contratos de Adhesion"} img="Asesoramiento/contratosAderidos.jpg"/></Link>
        
        </div>
        <div className='group-Card'>
        <Link className='link-articuloCard'   to={`/asesoria-legal/ley-contrato-de-trabajo`} onClick={scrollToTop}>
        <CardServicios titulo={"Ley de Contrato de Trabajo"} img="Asesoramiento/leycontrattrabajo.jpg"/></Link>
        <Link className='link-articuloCard'  to={`/asesoria-legal/derecho-laboral-colectivo`} onClick={scrollToTop}>
        <CardServicios titulo={"Derecho Laboral Colectivo"} img="Asesoramiento/derecholaboralColetivo.jpg"/></Link>
        
        <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-seguros`} onClick={scrollToTop}>
        <CardServicios titulo={"Contratos de Seguros"} img="Asesoramiento/contratoseguros.jpg"/></Link>
      
        </div>
        <div className='group-Card'>
      
        
        <Link className='link-articuloCard'   to={`/asesoria-legal/responsabilidad-penal-empresaria`} onClick={scrollToTop}>
        <CardServicios titulo={"Responsabilidad Penal Empresaria"} img="Asesoramiento/responsabilidadpenalempresarial.jpg"/></Link>
        <Link className='link-articuloCard'  to={`/asesoria-legal/planificacion-del-transporte`} onClick={scrollToTop}>
        <CardServicios titulo={"Planificación del transporte"} img="Asesoramiento/plantransp.webp"/></Link> 
        <Link className='link-articuloCard'  to={`/asesoria-legal/Incoterms`} onClick={scrollToTop}>
        <CardServicios titulo={"Contratos de comercio exterior"} img="Asesoramiento/comercio-exterior.jpg"/></Link> 
        </div>
      <div className='group-Card'>
        <Link className='link-articuloCard'  to={`/asesoria-legal/riesgo-de-trabajo`} onClick={scrollToTop}>
        <CardServicios titulo={"Riesgos de Trabajo"} img="Asesoramiento/riesgoDeTrabajo.jpg"/></Link>
        <Link className='link-articuloCard'   to={`/asesoria-legal/normas-iso9001`} onClick={scrollToTop}>
        <CardServicios titulo={"Normas ISO 9001"} img="Asesoramiento/normaiso9001.jpg"/></Link>
        <Link className='link-articuloCard'  to={`/asesoria-legal/normas-iso45001`} onClick={scrollToTop}>
        <CardServicios titulo={"Normas ISO 45001"} img="Asesoramiento/normaiso45001.png"/></Link>
      </div>
    
    </div>
    </div>

    <div data-aos="flip-left">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"Gestión"}  />
    </div>
  <div data-aos="zoom-in">
    <div className="inicio-area-gestion">

      <div className='group-Card'>
      <Link className='link-articuloCard' to={`/gestion/constitucion-societaria`} onClick={scrollToTop}>
      <CardServicios titulo={"Constitucion Societaria"} img="Gestion/constitucionsocietaria.jpeg"/></Link>
      <Link className='link-articuloCard' to={`/gestion/locacion-inmobiliaria`} onClick={scrollToTop}>
      <CardServicios titulo={"Locación Inmobiliaria"} img="Gestion/contratoinmobiliaria.jpg"/></Link>
      <Link className='link-articuloCard' to={`/gestion/fondos-comercio`} onClick={scrollToTop}>
      <CardServicios titulo={"Fondos de Comercio"} img="Gestion/fondocomercio.webp"/></Link>
      </div>
      <div className='group-Card'>
      <Link className='link-articuloCard' to={`/gestion/habilitaciones`} onClick={scrollToTop}>
      <CardServicios titulo={"Habilitaciones"} img="Gestion/habilitaciones.jpg"/></Link>
      <Link className='link-articuloCard' to={`/gestion/contratos-locacion-servicios`} onClick={scrollToTop}>
      <CardServicios titulo={"Contratos de Locación de Servicios"} img="Gestion/contratoservicios.jpg"/></Link>
      <Link className='link-articuloCard' to={`/gestion/contratos-locacion-obra`} onClick={scrollToTop}>
      <CardServicios titulo={"Contratos de Locación de Obra"} img="Gestion/contratoobra.jpg"/></Link>
      </div>
   
    </div>
    </div>
    </div>
    
   

    
 
  

   
  
   
    
    

   

 
    </>
  );
}

export default SectionInicio;
