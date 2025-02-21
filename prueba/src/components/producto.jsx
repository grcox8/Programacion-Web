export default function Productos({listaProductos}){

    


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