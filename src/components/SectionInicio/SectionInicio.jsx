import "./SectionInicio.css"
import Titles from "../ComponentesAccesorios/Titles/Titles";
import FAQLIST from "../SectionFAQ/FAQ/FAQLIST";
import faqData from "../../assets/FAQData";
import Subtitleh2 from "../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import InfoServicio from "./InfoServicio/InfoServicio";
import Subtitleh3 from "../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3";
import BtnSection from "../BtnSection/BtnSection";

const SectionInicio = () => {

  return (
 <>
    <div className='fondoInicio'>
    <Titles fontSize="30px" textTitle={`Defendemos Tus Intereses, Impulsamos Tu Negocio`}/> 
    </div>

    <div className="inicio-secA">
    <Subtitleh2 text={"¿NECESITAS ESTAR TRANQUILO CON LA SITUACON LEGAL DE TU EMPRESA O EMPRENDIMIENTO?"}></Subtitleh2>
    <Subtitleh3 text={"Podemos Acompañarte y Asesorarte en las distintas Alternativas"}></Subtitleh3>
    <div className="inicio-SecA-btnsect">
    <BtnSection titleBtn={"CONTACTANOS!"} url={"/contacto"}/>
    </div>
    </div>
   
    <div className="inicio-secB">
    <Subtitleh2 text={"NUESTROS SERVICIOS"}/>
    <InfoServicio/>
    </div>
    
    <div className="inicio-secC">
     <div className="inicio-secC-title"> 
    <Subtitleh2 text={"FAQS"}/>
    </div>
    <FAQLIST faqData={faqData} />;
    </div>
    </>
  );
}

export default SectionInicio;
