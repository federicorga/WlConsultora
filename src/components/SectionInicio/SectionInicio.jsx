import "./SectionInicio.css"
import Titles from "../ComponentesAccesorios/Titles/Titles";
import Subtitleh2 from "../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import InfoServicio from "./InfoServicio/InfoServicio";
import Subtitleh3 from "../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3";
import BtnSection from "../BtnSection/BtnSection";

import MiniLineSepar from "../ComponentesAccesorios/MiniLineSepar/MiniLineSepar";

const SectionInicio = () => {

  return (
 <>
    <div className='fondoInicio'>
    <Titles fontSize="30px" textTitle={`Defendemos Tus Intereses, Impulsamos Tu Negocio`}/> 
    </div>


    <div className="inicio-secB">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"NUESTROS SERVICIOS"}/>
    <InfoServicio/>
    </div>

    <div className="inicio-secA">
    <Subtitleh2 text={"¿NECESITAS ESTAR TRANQUILO CON LA SITUACON LEGAL DE TU EMPRESA O EMPRENDIMIENTO?"}></Subtitleh2>
    <Subtitleh3 text={"Podemos Acompañarte y Asesorarte en las distintas Alternativas"}></Subtitleh3>
    <div className="inicio-SecA-btnsect">
    <BtnSection titleBtn={"CONTACTANOS!"} url={"/contacto"}/>
    </div>
    </div>

    <div className="inicio-secC">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"¿Por que elegirnos?"}></Subtitleh2>
    <div className="content-inicio-p-sub-line-all">
      
    <div className="content-inicio-sub-lin">
      <Subtitleh2 text={"Superando Obstáculos"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text">Sabemos lo difícil que es animarse a emprender y crear empresas: los miedos y las expectativas, salir de la zona de confort y animarse a ofrecer productos y servicios que mejoren la calidad de vida de las personas, que ahorren tiempo de trabajo, que contribuyan al desarrollo de la sociedad. La incertidumbre que generan los procesos nuevos, aun los más positivos, pueden llegar a representan un factor de desgaste inicial de fuerzas que no debe cargar el emprendedor. Aquí es donde entra WL Consultora: ¡nos encanta iniciar empresas! Lo que generalmente es un factor de confusión para muchos emprendedores, es un factor de proceso de satisfacción para nuestra consultora.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin">
      <Subtitleh2 text={"Adaptándonos al Futuro"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text">Entendemos al mundo de hoy como uno expuesto a procesos de automatización surgidos de nuevas tecnologías que reinventaran el mercado laboral existente, excluyendo a algunos y transformando las funciones de otros. Este proceso de adaptación a un nuevo mundo en constante desarrollo, significa una oportunidad de crear nuevas formas de ingresos patrimoniales que excedan la tradicional relación en dependencia y permitan fundar las bases de nuestro sello personal en el mundo.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin">
      <Subtitleh2 text={"De la Idea al Impacto"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text">A la hora de materializar una idea en un proyecto, un proyecto en un negocio, y un negocio en una empresa que contribuirá a la sociedad y generara puestos de trabajo, cumpliendo un rol social fundamental en el desarrollo económico local, el empresario puede verse abrumado por una variedad de aspectos legales, contractuales y legislativos que sienta que amenacen su emprendimiento. Por eso debe contar con todo el conocimiento que nuestros profesionales de diversas ramas del conocimiento pueden brindar a través de la facilidad y comodidad que brindan las nuevas tecnologías en comunicaciones que se consolidaron en nuestro país durante la pandemia.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin">
      <Subtitleh2 text={"Delegando para Enfocarse"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text">Si aun debidamente asesorado el emprendedor considera que debe enfocarse exclusivamente a su vocación, podrá dejar en nuestras manos la gestión relativa a la formalización jurídica de su empresa, esto es, la constitución legal de su proyecto en una sociedad registrada, la habilitación comercial de inmuebles, la formalización y seguimiento de contratos civiles y comerciales, la transferencia de fondos de comercio y la gestión de las diligencias que los órganos administrativos de control requieren.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin">
      <Subtitleh2 text={"Visión Integral"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text">Resumiremos la visión de WL Consultora en la célebre frase del matemático Alfred North Whitehead: “La civilización avanza al aumentar el número de operaciones que podemos realizar sin tener que pensar en ellas”</p>
    </div>
    </div>


   

    
 
  

   
  
   
    
    

   

 
    </>
  );
}

export default SectionInicio;
