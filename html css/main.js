let miVariable = 0  //variable redefinible
console.log(miVariable)
miVariable = "pepito" 
console.log(miVariable)

const constante = 0 //constante, no es modificable 
console.log(constante)

const array = [] //similar a la lista de python, se accede a la posicion por medio del corchete
const array2 = [2,"fede"]

console.log(array2[0])

for(let i = 0; i<array2.length ; i++){ //iteracion de un array, se define desde la posicion que arranca, hasta donde va, con el i<array.length y como va sumando i++ 
    console.log("arreglo posicion", i,array2[i]) 
}


const objetoNombres = { //objeto esta compuesto por claves valor, la clave es una variable identificadora, del otro lado toma el valor 
    nombre: "Grego",
    edad: 18
}

console.log("objeto", objetoNombres)
console.log(objetoNombres.edad)


function miFuncion(objeto){
    console.log("muestra esta funcion")
    console.log(objeto.nombre)
}

miFuncion(objetoNombres)

//Declara una función tradicional que tome un número como argumento y devuelva su triple.

function triple(num){
    let variable = num * 3
    return variable;
}

console.log("el triple es",triple(3))