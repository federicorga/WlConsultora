
import './BtnIndice.css'

function BtnIndice({text}) {
  const texto= text.toUpperCase()
  return (
    <>
      <li >
                       
        <p className='btnIndicep'>{texto}</p>
                   
        </li>
    </>
  );
}


export default BtnIndice;
