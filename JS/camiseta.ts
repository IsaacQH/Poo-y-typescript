
//CLASES EN TS CON POO

//Una Clase, es un molde con el cual podemos crear infinidad de objetos con características parecidas. En una clase tendremos propiedades que definirán al objeto o algunas podrán estar predefinidas. También, en una clase tenemos lo que llamamos métodos, que se refiere a las funciones o acciones que el objeto realizará.


//Interfaz: Contrato de propiedades y métodos obligatorios 
interface CamisetaBase{
    setTalla(talla:string);
    getPrecio();
}



class Camiseta implements CamisetaBase{                                        //Definimos la clase Camistea 
 // export class Camiseta{                             //Definimos la clase Camistea //exportamos la clase

    //Propiedades (caracterírticas del objeto)
    public color: string;                              //Definimos caraterítuca pública como string
    public modelo: string;
    public marca: string;
    private talla: string;                             //Definimos caracterítica privada como string
    protected precio: string;                          //Definimos caracteristica protected como string


    //Constructor
    constructor(color='none', modelo='none', marca='none', talla='none', precio='none'){
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


//Clase hija
class Sudadera extends Camiseta{                      //Se crea clase Sudadrera que hereda a Camiseta
    public capucha:boolean;                           //propiedad publica capucha

    setCapucha(capucha:boolean){                      //método de nombrar capucha con valor introducido
        this.capucha = capucha;
    }                   
    getCapucha():boolean{                             //Método que regresa booleano el valor de capucha
        return this.capucha
    }
}



var camisa = new Camiseta('Azul', 'Playera', 'Tommy', 'M', '40 dls')   //Esto define al objeto, no se mainpulan valores
console.log(camisa)
var hoodie = new Sudadera('Rojo', 'Polo', 'Zara', 'S', '30 dls');
hoodie.setCapucha(true);
hoodie.setTalla('G')
console.log(hoodie)




//Sin constructor... tenemos que hacer lo siguiente, tomando en cuenta que se manipulan valores
/*var playera = new Camiseta()                        //Se crea un objeto con el molde Camiseta en variable Playera 
playera.color = "verde"                               //Se definen algunas propiedades públicas
playera.modelo = "Polo"
playera.marca = "Zara"
playera.setTalla("M")                                 //Se hace un setTalla para cambiar la propiedad priv
console.log(playera, playera.getPrecio())             //Imprime en consola objeto playera y el precio
*/



