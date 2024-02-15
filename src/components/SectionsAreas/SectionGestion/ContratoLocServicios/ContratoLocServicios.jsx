import Gestion from "../Gestion/Gestion";

function ContratoLocServicios() {
  const textos = [
    'El contrato de locación de servicios tiene lugar cuando una de las partes se compromete a prestar un servicio determinado, ya sea material o inmaterial, de su oficio o profesión, y la otra parte se compromete a pagar un precio también determinado por dicho servicio, en donde interesan las especiales características del prestador del servicio, lo cual constituye el factor determinante de contratación. ',
'Este tipo de contratos generalmente se encuentra en la relación jurídica que se establece entre los profesionales, esto es, abogados, medico, contadores, etc. y sus clientes. Debiendo el objeto del servicio ser necesariamente prestado en forma independiente sin que exista una relación de dependencia encubierta, concepto el cual es abordado oportunamente por la Ley de Contrato de Trabajo. ',
'El contrato entre abogado y cliente es un contrato de servicios si se obliga a asesorar sobre diversos asuntos o a tramitar un expediente judicial, pues no podría garantizar el resultado del pleito. A su vez, estaríamos ante un contrato de locación de obra si el mismo abogado se comprometiera a evacuar por escrito una consulta o a redactar el estatuto de una sociedad, pues ahí si se tendría en vista el resultado de su trabajo. ',
'En el ámbito de la medicina, la relación entre un médico puede dar lugar a un contrato de servicios si se encarga de atender a una persona durante cierto tiempo o por una cantidad determinada de visitas. A su vez, puede dar lugar a un contrato de obra si el profesional se compromete a realizar una operación o una determinada curación de su paciente. '

  ];

  return (
    <>
      <Gestion titulo={"Contratos de Locacion de Servicios"} textoServicio={textos}/>
    </>
  );
}

export default ContratoLocServicios;
