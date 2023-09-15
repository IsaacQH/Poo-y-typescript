
window.addEventListener('load', () => {

//TIPOS DE DATOS EN TYPESCRIPT  

//String:
let cadena: string = "ahsoka";   //Forma convencional TS
console.log(cadena)

//Number:
let numero: number = 12;        //Forma convencional TS
console.log(numero)

//Booleano
let trueORFalse: boolean = true;
console.log(trueORFalse)

//Any 
let cualquiera: any = "hola"
cualquiera = 77
console.log(cualquiera)

//Arrays
let arr: Array<string> = ['PHP', 'JS', 'C']

let years: number[] = [12,234,6,2]
console.log(arr, years)

//Muchos tipos de datos
let muchos: string | number = "anakin"
muchos = 13
console.log(muchos)

//Tipos de datos personalizados
type binarioNumero = number | boolean
let valor: binarioNumero = true
console.log(valor)







})