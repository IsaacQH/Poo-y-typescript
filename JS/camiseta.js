//CLASES EN TS CON POO
//Una Clase, es un molde con el cual podemos crear infinidad de objetos con características parecidas. En una clase tendremos propiedades que definirán al objeto o algunas podrán estar predefinidas. También, en una clase tenemos lo que llamamos métodos, que se refiere a las funciones o acciones que el objeto realizará.
var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Métodos
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla; //Accede a la clase y cambia el vlaor privado de talla por el parametro indicado
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio; //Regresa el parámetro precio de la clase
    };
    return Camiseta;
}());
var camisa = new Camiseta('Azul', 'Playera', 'Tommy', 'M', '40 dls');
console.log(camisa);
//Sin constructor...
/*var playera = new Camiseta()                        //Se crea un objeto con el molde Camiseta en variable Playera
playera.color = "verde"                               //Se definen algunas propiedades públicas
playera.modelo = "Polo"
playera.marca = "Zara"
playera.setTalla("M")                                 //Se hace un setTalla para cambiar la propiedad priv
console.log(playera, playera.getPrecio())             //Imprime en consola objeto playera y el precio
*/
