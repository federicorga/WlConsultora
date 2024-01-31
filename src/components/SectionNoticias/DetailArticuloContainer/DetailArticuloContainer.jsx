import './DetailArticuloContainer.css'


import DetailArticulo from '../DetailArticulo/DetailArticulo';
import { useParams } from 'react-router-dom';
import PortadaSections from '../../PortadaSections/PortadaSections';
import Articulo from '../Articulo/Articulo';


function DetailArticuloContainer() {
  const id = Number(useParams().id);


  return (
    <>
     <PortadaSections titlePortada={"NOTICIAS"} imagen={"https://www.colegioabogesquel.com/wp-content/uploads/2018/09/maza-footerFinal.jpg"} />
     <section className="Section-Contanier-Articulo-Descripcion">
      <DetailArticulo id={id}/>
      </section>
      <Articulo />
    </>
  );
}

export default DetailArticuloContainer;
