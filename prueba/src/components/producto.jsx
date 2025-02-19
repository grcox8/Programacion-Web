export default function Productos({listaProductos}){

    const texto = "adsadsad"


    return(
        <ol> 

            {listaProductos.map((item, index)=>(
                <li>
                {item}
                </li>
            ))}
            
        </ol>
    )
}