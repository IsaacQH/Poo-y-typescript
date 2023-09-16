
//CLASES EN TS CON POO

//Una Clase, es un molde con el cual podemos crear infinidad de objetos con características parecidas. En una clase tendremos propiedades que definirán al objeto o algunas podrán estar predefinidas. También, en una clase tenemos lo que llamamos métodos, que se refiere a las funciones o acciones que el objeto realizará.

class Camiseta{                                        //Definimos la clase Camistea

    //Propiedades (caracterírticas del objeto)
    public color: string;                              //Definimos caraterítuca pública como string
    public modelo: string;
    public marca: string;
    private talla: string;                             //Definimos caracterítica privada como string
    protected precio: string;                          //Definimos caracteristica protected como string


    //Constructor
    constructor(color, modelo, marca, talla, precio){
        this.color = color
        this.modelo =  modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio
    }

    //Métodos

    public setTalla(talla:string){                    //Método para cambiar color, acepta talla como parámetro en string
        this.talla = talla                            //Accede a la clase y cambia el vlaor privado de talla por el parametro indicado
    }

    public getPrecio(){                               //Método para obtener parámetro precio
        return this.precio                            //Regresa el parámetro precio de la clase
    }
}

var camisa = new Camiseta('Azul', 'Playera', 'Tommy', 'M', '40 dls')

console.log(camisa)

//Sin constructor...
/*var playera = new Camiseta()                        //Se crea un objeto con el molde Camiseta en variable Playera 
playera.color = "verde"                               //Se definen algunas propiedades públicas
playera.modelo = "Polo"
playera.marca = "Zara"
playera.setTalla("M")                                 //Se hace un setTalla para cambiar la propiedad priv
console.log(playera, playera.getPrecio())             //Imprime en consola objeto playera y el precio
*/
