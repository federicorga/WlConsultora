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
    
      <section className='Seccion-Content-Miembros-text'>
        <p>Los miembros de WLConsultora son profesionales de diversas ramas del conocimiento orientados a la creación y puesta en marcha de empresas que cuentan con vasta experiencia en la materia, consolidada en la práctica diaria de resolución de cuestiones propias a la iniciativa de comenzar y ejercer emprendimientos comerciales.</p>
        <div className='content-form-miembros'>

         
              <div className='div-ContentAll-Miembros'>
              <Member nombre={"Wilhelm Leifermann "} titulo={"undador de WL Consultora. Abogado y Magíster en Política y Planificación del Transporte. Especializado en asesoramiento legal a pequeñas y medianas empresas. A lo largo de su carrera profesional se ha desempeñado como apoderado de empresas privadas concesionarias de servicios públicos y consultor de emprendimientos comerciales. Complementa su formación profesional con el dominio de los idiomas inglés y portugués."} imgurl={"Willy.png"}/>
              <Member nombre={"Lucas Peña"} titulo={"Licenciado en Higiene y Seguridad Laboral - Medioambiente. A lo largo de su carrera ha auditado la ejecución de proyectos en carácter de Responsable de Área en obras publicas tanto para el Estado Nacional como para la Provincia de Buenos Aires. A su vez se ha desempeñado como asesor particular para emprendimientos comerciales."} imgurl={"LucasPena.png"}/>
              <Member nombre={"Gabriel Suarez Van Ker Koven"} titulo={"Contador publicado especializado en liquidación de sueldos y cargas sociales. A lo largo de su carrera se ha desempeñado como asesor impositivo y auditor interno de empresas. Su experiencia se consolida en el desarrollo de su profesión tanto como consultor independiente como asesor gerencial. Su formación profesional abarca aspectos previsionales y de recursos humanos, complementándose con el dominio del idioma inglés"} imgurl={"GabrielSuarez.png"}/>
              </div>
          <ContactoForm/>
        </div>
      </section>
      
    </div>

    </>

  );
}

export default SectionMiembros;
