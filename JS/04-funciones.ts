

//FUNCIONES Y TIPADO    

//E

//Forma habitual como JS
function getNumber(numero:number = 12):string{             //Numero = 12 default
    return "El número es: " + numero
}
console.log(getNumber())
console.log(getNumber(5))