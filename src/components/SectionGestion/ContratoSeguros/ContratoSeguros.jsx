import Gestion from "../Gestion/Gestion";

function ContratoSeguros() {
  const textos = [
    'Los contratos de seguros son los instrumentos jurídicos regulado en la Ley 17.418 por medio del cual un asegurador se obliga a resarcir un daño o cumplir una prestación previamente convenida en caso de ocurrir un evento también previamente establecido por medio del pago de una prima por parte del asegurado. De esta forma, el asegurador asume el riesgo de su asegurado, obligándose a responder por las consecuencias que le provoque a su asegurado un hecho determinado. ',
'Se entiende por riesgo a la eventualidad de que suceda un hecho futuro e incierto del cual podría derivarse un daño para el interés del asegurado. En el contrato de seguro debe estar bien especificado cual es el riesgo asumido por el asegurador, el precio que percibirá el asegurador por el riesgo asumido y la póliza facilitada por el éste último en donde se formalizan por escrito las condiciones de contratación del seguro. ',
'Si bien generalmente el contrato de seguros plantea un esquema sencillo de entender pueden configurarse situaciones que excedan las expectativas del emprendedor, como por ejemplo que existan más actores que los que supone, en principio, solamente dos partes: un asegurado y un asegurador. Por ejemplo, puede configurarse el caso de que la figura del asegurado, esto es, el titular del bien y/o interés asegurable, difiera del beneficiario, quien sería la persona que efectivamente cobrase la indemnización acordada, o hasta del tomador, quien sería el sujeto que contrató el seguro y carga con la obligación de pagar la prima. ',
'Este tipo de contrato goza de una multiplicidad de aspectos a tener presentes por el emprendedor que para que este pueda desarrollar su actividad comercial con la tranquilidad de cumplir con todos los recaudos que la ley le exige para su seguridad patrimonial y la de terceros. '

  ];

  return (
    <>
      <Gestion titulo={"Contratos de Seguros"} textoServicio={textos}/>
    </>
  );

}

export default ContratoSeguros;
