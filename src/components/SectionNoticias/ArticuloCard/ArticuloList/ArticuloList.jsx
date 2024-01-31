import ArticuloCard from "../ArticuloCard";

const ArticuloList = ({listaArticulos}) => {
    

    return (
        <>
            {listaArticulos.map(articulo => 
            
            
            <ArticuloCard articulo = {articulo}/>
           
            )
            }
        </>
    );
}

export default ArticuloList;