// // //Eercicio 1

function rectangulo (a=3,b=5) {
    
return a*b;
}

const resultado = rectangulo(3 , 5);
console.log (resultado)


// // Ejercicio 2

function convertirGradosCelsius (grados) {

    return ((grados * 9 /5) + 32 ); // el resultado será en Farenheit
    
}



// //Ejercicios 3 
// // He aplicado Math.floor , porque no quiero que el resultado final sea con decimales. 
// // Sin embargo, si queremos decimales no hay mas que omitirlo.


const numberRandomTwo = (min, max)=> {
    console.log(Math.floor(Math.random() * (max - min + 1 ) + min));

}   

numberRandomTwo (5,10);

// //Ejercicio 4

function calculateCircumference(radius) {
    return Math.PI.tofixed(2) * radius**2;
  }


//Ejercicio 5

// function letsFutur()  {

// }
