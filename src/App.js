
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Componnents

import NavBar from './components/NavBar/NavBar';
import SectionFooter from './components/SectionFooter/SectionFooter';
import SectionInicio from './components/SectionInicio/SectionInicio';
import SectionNoticias from './components/SectionNoticias/SectionNoticias';
import SectionAsesoria from './components/SectionAsesoria/SectionAsesoria';
import SectionMiembros from './components/SectionMiembros/SectionMiembros';
import SectionGestion from './components/SectionGestion/SectionGestion';
import SectionContact from './components/SectionContact/SectionContact';
import SectionFAQ from './components/SectionFAQ/SectionFAQ';

//AREA DE ASESORIA
import DetailArticuloContainer from './components/SectionNoticias/DetailArticuloContainer/DetailArticuloContainer';
import ContratosAdhesion from './components/SectionAsesoria/ContratosAdhesion/ContratosAdhesion';
import SociedadComercial from './components/SectionAsesoria/SociedadComercial/SociedadComercial';
import RelacionesConsumo from './components/SectionAsesoria/RelacionesConsumo/RelacionesConsumo';
import LeyContratoTrabajo from './components/SectionAsesoria/LeyContratoTrabajo/LeyContratoTrabajo';
import DerechoLaboral from './components/SectionAsesoria/DerechoLaboral/DerechoLaboral';
import RiesgoTrabajo from './components/SectionAsesoria/RiesgoTrabajo/RiesgoTrabajo';
import ContratoSeguros from './components/SectionAsesoria/ContratoSeguros/ContratoSeguros';
import ResponsabilidadPenal from './components/SectionAsesoria/ResponsabilidadPenal/ResponsabilidadPenal'
import NormaISO9001 from './components/SectionAsesoria/NormasIso/NormaISO9001';
import NormaISO45001 from './components/SectionAsesoria/NormasIso/NormaISO45001';

//AREA DE GESTION
import ConstitucionSocietaria from './components/SectionGestion/ConstitucionSocietaria/ConstitucionSocietaria';
import ContratoLocObra from './components/SectionGestion/ContratoLocObra/ContratoLocObra';
import ContratoLocServicios from './components/SectionGestion/ContratoLocServicios/ContratoLocServicios';
import FondosComercio from './components/SectionGestion/FondoComercio/FondosComercio';
import Habilitaciones from './components/SectionGestion/Habilitaciones/Habilitaciones';
import LocacionInmobiliaria from './components/SectionGestion/LocacionInmobiliaria/LocacionInmobiliaria';
import WhatsappAccesor from './components/WhatsappAccesor/WhatsappAccesor';


function App() {

  return (
   <>
   <Router>
    <WhatsappAccesor/>
    <NavBar/>
    <Routes>
    <Route path='/' element={<SectionInicio/>}/>
    <Route path='/noticias' element={<SectionNoticias/>}/>
    <Route path='/noticias/articulo/:id' element={ <DetailArticuloContainer/>}/>
    <Route path='/asesoria-legal' element={<SectionAsesoria/>}/>
    <Route path='/asesoria-legal/sociedad-comercial' element={<SociedadComercial/>}/>
    <Route path='/asesoria-legal/relaciones-de-consumo' element={<RelacionesConsumo/>}/>
    <Route path='/asesoria-legal/contratos-de-adhesion' element={<ContratosAdhesion/>}/>
    <Route path='/asesoria-legal/ley-contrato-de-trabajo' element={<LeyContratoTrabajo/>}/>
    <Route path='/asesoria-legal/derecho-laboral-colectivo' element={<DerechoLaboral/>}/>
    <Route path='/asesoria-legal/riesgo-de-trabajo' element={<RiesgoTrabajo/>}/>
    <Route path='/asesoria-legal/responsabilidad-penal-empresaria' element={<ResponsabilidadPenal/>}/>
    <Route path='/asesoria-legal/contratos-seguros' element={<ContratoSeguros/>}/>
    <Route path='/asesoria-legal/normas-iso9001' element={<NormaISO9001/>}/>
    <Route path='/asesoria-legal/normas-iso45001' element={<NormaISO45001/>}/>


    <Route path='/gestion/constitucion-societaria' element={<ConstitucionSocietaria/>}/>
    <Route path='/gestion/contratos-locacion-obra' element={<ContratoLocObra/>}/>
    <Route path='/gestion/contratos-locacion-servicios' element={<ContratoLocServicios/>}/>
    <Route path='/gestion/fondos-comercio' element={<FondosComercio/>}/>
    <Route path='/gestion/habilitaciones' element={<Habilitaciones/>}/>
    <Route path='/gestion/locacion-inmobiliaria' element={<LocacionInmobiliaria/>}/>


    <Route path='/gestion' element={<SectionGestion/>}/>
    <Route path='/miembros' element={<SectionMiembros/>}/>
    <Route path='/faq' element={<SectionFAQ/>}/>
    <Route path='/contacto' element={<SectionContact/>}/>
    
    </Routes>
  <SectionFooter/>
   </Router>
   
   </>
  );
}

export default App;
