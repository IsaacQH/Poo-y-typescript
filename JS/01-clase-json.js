window.addEventListener('load',() => {
    console.log("Ha cargado la web correctamente.")


    //Objetos en Json: 
    // Las clases (instancias) son las plantillas que nos sirven para encapsular diferentes métodos (funciones) y atributos (propiedades) que nos permiten reutilizar en diferentes partes de un código. Cuando utilizamos dicha clase y la definimos con ciertos valores, es decir que llenamos la plantilla, se dice que se creó un objeto.


    var bicicleta ={                                                  //Creando objeto un objeto JSON
        model: "BMW",                                                 //Atributos
        color: "Rojo",
        year: "2022",
        velocity: "60km/hr",
        cambiaColor: function(nuevoColor){                            //Método cambia color (funcion)
            //bicicleta.color = "nuevoColor"
            this.color = nuevoColor                                   //Usa this para usar bicicleta en vez de el comando completo
            console.log(this)                                         //print en consola el bicileta
        }
    };               

    bicicleta.cambiaColor("Verde")
    console.log(bicicleta);




})