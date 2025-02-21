export default function Test({edad,estudiantes}){
console.log(edad)
//siempre que se genere un map, el contenedor padre debe tener la key
return(
    <>{edad} 
    <div className="borde">
        {estudiantes.map((estudiante,index)=>(
             <div key={index}>
                <h2> {estudiante.nombre}</h2>
                <h3>{estudiante.curso}</h3>   
             </div>
        ))}
    </div>
    
    </>
)
}