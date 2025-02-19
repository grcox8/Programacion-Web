export default function Saludo({nombre}){

//arreglos 
const array =  ["hola", 123, [], true]
//arrays o arreglos tienen posiciones y para acceder a ellas se usa el nombre del arreglo y seguido corchetes con el numero de posicion, siempre arrancan en cero
console.log(array[0]) //console.log es para mostrar por consola 


//objetos
//los objetos los identificamos por las llaves y adentro tienen una clave y un valor. Para acceder al valor usamos el nombre de la variable y despues punto(.)
const persona = {
    edad: 18,
    escuela: "ETEC",
    objeto: { 
        clave: "valor"
    }
}
console.log(persona.objeto.clave)

//declaracion funciones regulares 
function recorrerArreglo(juancito){
    const newArray = juancito.map((item, index)=> (
        console.log(item, index)
    ))

    return newArray
}


//ejecucion de la funcion
recorrerArreglo(array)



    return(

        <>hola {nombre}
        
        <ul>datos 

            {array.map((item, index)=>(
                <li>{item}
                
                <p>{index}</p>
                </li>
            ))}

        </ul>
        </>
    )
}