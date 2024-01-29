import './DetailArticulo.css';
import LineSepar from '../../ComponentesAccesorios/LineSepar/LineSepar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BuscarArticuloPorId } from '../../../assets/connectToJson';


function DetailArticulo ({id})  {
  const [item, setArticulo] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
       return await BuscarArticuloPorId(id).then(prod => setArticulo(prod));
       
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchData();

  }, [id]); 
  return (
    <>
      {item? (
        <div className='Articulo-detail-content'>
          <h2>{item.tituloArt}</h2>
          <Link className='link-Noticias' to={`/noticias`}>Volver al Menu</Link>
          <LineSepar/>
          
        </div>
      ) : (
        <p>Cargando Articulo...</p>
      )}
   
    </>
  );
};

export default DetailArticulo;
