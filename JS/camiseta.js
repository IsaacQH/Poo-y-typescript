//CLASES EN TS CON POO
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decoradores: Nos permiten hacer una copia, modificarla y accionarla mediante la definición de parámetros
function Estampar(logo) {
    return function (target, key) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//@Estampar('Gucci')                                   //Decorador
var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        if (color === void 0) { color = 'none'; }
        if (modelo === void 0) { modelo = 'none'; }
        if (marca === void 0) { marca = 'none'; }
        if (talla === void 0) { talla = 'none'; }
        if (precio === void 0) { precio = 'none'; }
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
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camisa = new Camiseta('Azul', 'Playera', 'Tommy', 'M', '40 dls'); //Esto define al objeto, no se mainpulan valores
console.log(camisa);
var hoodie = new Sudadera('Rojo', 'Polo', 'Zara', 'S', '30 dls');
hoodie.setCapucha(true);
hoodie.setTalla('G');
console.log(hoodie);
//Sin constructor... tenemos que hacer lo siguiente, tomando en cuenta que se manipulan valores
/*var playera = new Camiseta()                        //Se crea un objeto con el molde Camiseta en variable Playera
playera.color = "verde"                               //Se definen algunas propiedades públicas
playera.modelo = "Polo"
playera.marca = "Zara"
playera.setTalla("M")                                 //Se hace un setTalla para cambiar la propiedad priv
console.log(playera, playera.getPrecio())             //Imprime en consola objeto playera y el precio
*/
