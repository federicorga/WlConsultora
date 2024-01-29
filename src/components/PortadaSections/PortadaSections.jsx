import "./PortadaSection.css"

import Titles from "../ComponentesAccesorios/Titles/Titles";
function PortadaSections({imagen,titlePortada}) {



    const estiloDiv={
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("${imagen}")`
    }
  return (
   
       <div className={`section-title divCenterText`} style={estiloDiv}>
      <Titles textTitle={titlePortada} />
    </div>
    
  );
}

export default PortadaSections;
