/* Simulador - Cotizador de Automotores*/

function Cotizaciones (seleccioneMarca, precioPorYear, precioPorTipo) {
  this.brand = seleccioneMarca;
  this.brand = precioPorYear;
  this.brand = precioPorTipo;  
}

/* Función Multiplicar */

function multiplicacion(a, b){
    return a * b
}

const primaAutos = 2000

/* Marcas de Autos*/
/* Objetos de las Marcas de Autos */

/*let marcasDeAutos = {
    toyota: 1.8,
    volkswagen: 1.4,
    ford: 1.05,
    chevrolet: 1.15,
    renault: 1.08,
    peugeot: 1.5
}*/

/* Modificacion: Hice un objeto contructor de cada Marca*/

const idGenerator = () => {
    return Math.round(Math.random() * 100)}

function Cars (id, brands, costoPrima){
    this.id = id
    this.brands = brands
    this.costoPrima = costoPrima
}

let marcaToyota = new Cars(idGenerator(), "Toyota", 1.8)
let marcaVolkswagen = new Cars(idGenerator(), "Volkswagen", 1.4)
let marcaFord = new Cars(idGenerator(), "Ford", 1.05)
let marcaChevrolet = new Cars(idGenerator(), "Chevrolet", 1.15)
let marcaRenault = new Cars(idGenerator(), "Renault", 1.08)
let marcaPeugeot = new Cars(idGenerator(), "Peugeot", 1.5)

/*Arrays: Solamente con el nombre de las Marcas*/

const arrayMarcas = [marcaToyota, marcaVolkswagen, marcaFord, marcaChevrolet, marcaRenault, marcaPeugeot]
const listaMarcas = []

for (nombreMarca of arrayMarcas) {
    listaMarcas.push(nombreMarca.brands)
}
console.log(listaMarcas.join(", "))

/* Probando Includes() */

const filtradoMarcas = listaMarcas.filter((searchBrands) => searchBrands.includes("T"))
console.log(filtradoMarcas)

/*const filtradoNombre = arrayMarcas.filter((searchBrands) => searchBrands.costoPrima > 1.2)
console.log(filtradoNombre)*/

/*Map aumento de precios*/

const brandPrice = arrayMarcas.map((el) => el.costoPrima*1.2) 
console.log(brandPrice)

/* Probando Map ID generados*/

let idMarcas = arrayMarcas.map((prod) => prod.id)
/*console.log(idMarcas)*/

/*let seleccionTipoDeCobertura = {
    rcAutos: 2000,
    cFull: 2500,
    todoRiesgo: 3000
}
const rcAutos = 2000
const cFULL = 2500
const todoRiesgo = 3000
*/

let precioParcial = 0
    
/*switch(brand){
    case "toyota":
        return precioParcial = multiplicacion(primaAutos, toyota)
    

        alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
        break
}*/

/* Datos Personales del Usuario*/
const datosPersonales = []
let nombre = prompt("Ingrese su Nombre y Apellido:")
let dni = prompt("Ingrese su nro de documento:")
let fechaNac = prompt("Ingrese año de su nacimiento:")
datosPersonales.push(nombre.toUpperCase())
datosPersonales.push(dni.toUpperCase())
datosPersonales.push(fechaNac.toUpperCase())
datosPersonales.join("\n")
datosPersonales.forEach ((data) =>{console.log (data)})

/*const clientNames = datosPersonales.filter((cliente) => cliente.nombre.includes("A"))
console.log(clientNames)*/

function precioSegunMarca(base, marca) {
    precioParcial = multiplicacion(base, marca)
}

function seleccioneMarca (){
    let brand = prompt ("La marca de su vehículo:")
            if(brand.toUpperCase() == "TOYOTA"){
                precioSegunMarca(primaAutos, brandPrice[0]) /* Modificacion en "marcaToyota.costoPrima": reflejamos el aumento de costo con el MAP */
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
               
                }

            else if(brand.toUpperCase() == "VOLKSWAGEN"){
                precioSegunMarca(primaAutos, marcaVolkswagen.costoPrima)
                /*precioParcial = multiplicacion(primaAutos, marcasDeAuto.volkswagen)*/
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
             
                }

             else if(brand.toUpperCase() == "FORD"){
                precioSegunMarca(primaAutos, marcaFord.costoPrima)
                /*precioParcial = multiplicacion(primaAutos, marcasDeAuto.ford)*/
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
        
                }

            else if(brand.toUpperCase() == "CHEVROLET"){
                precioSegunMarca(primaAutos, marcaChevrolet.costoPrima)
                /*precioParcial = multiplicacion(primaAutos, marcasDeAuto.chevrolet)*/
                /*precioParcial = multiplicacion(primaAutos, chevrolet)*/
                
                }

            else if(brand.toUpperCase() == "RENAULT"){
                precioSegunMarca(primaAutos, marcaRenault.costoPrima)
                /*precioParcial = multiplicacion(primaAutos, marcasDeAuto.renault)*/
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
              
                }

            else if(brand.toUpperCase() == "PEUGEOT"){
                precioSegunMarca(primaAutos, marcaPeugeot.costoPrima)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
                }

            else {
                alert("Ingrese una marca valida")
               
            }}
            seleccioneMarca()
          

                
/* Calculo de costo por año del vehículo*/

let precioParcial2

function precioPorYear(){
let year = prompt ("Año de su vehículo?:")
const añoActual = 2022

if(year!=""){
let diferencia = añoActual - year
let calculoDiferenciaPorAño = ((diferencia * precioParcial) * 3 )/ 100 /* Lo que aumenta (Calculando el 3% de la diferencia en relación al precio parcial)*/

precioParcial2 = precioParcial + calculoDiferenciaPorAño
}
else{
    alert("Ingrese un año válido")

}

}
precioPorYear()

/*alert ("Su precio parcial es:" + " " + "$" + precioParcial)*/

/*Aumentos por tipo de Cobertura seleccionada:
Responsabilidad Civil: Aumenta un 30%
Terceros completos aumenta un 50%
Todo Riesgo: Aumenta un 60%
*/

let premioTotal

/* Objeto de los tipos de Coberturas*/

/* Funcion constructora de los tipos de Coberturas*/

function Type(tipo, costoPorTipo, _nombre){
    this.tipo = tipo;
    this.costoPorTipo = costoPorTipo;
    this._nombre = _nombre
}

let rcAutos = new Type (1, 0.3, "1- Responsabilidad Civil")
let cFull = new Type (2, 0.5, "2- Terceros Completos")
let todoRiesgo = new Type (3, 0.6, "3- Todo Riesgo")

const productosSeguro = [rcAutos, cFull, todoRiesgo] 

let listaNombreProducto = []

for (const productoSeguro of productosSeguro){
    listaNombreProducto.push(productoSeguro._nombre)
}
console.log(listaNombreProducto)

/*let tipoDeCobertura = {
    rcAutos 0.3,
    cFull 0.5,
    todoRiesgo: 0.6
}*/

/*\n 1- Resposabilidad Civil\n 2- Terceros Completos\n 3- Todo Riesgo*/

function precioPorTipo(){
    let type = prompt ("Que cobertura desea cotizar?:\n" +  listaNombreProducto.join("\n"))
    switch(type){
        case "1":
            if (type == rcAutos.tipo){
             precioType = precioParcial2 * rcAutos.costoPorTipo;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        case "2":
            if (type == cFull.tipo){
             precioType =  precioParcial2 * cFull.costoPorTipo;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        case "3":
            if (type == todoRiesgo.tipo){
             precioType = precioParcial2 * todoRiesgo.costoPorTipo;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        default:
            alert("Ingrese un tipo de cobertura valida")
        
    }
}

precioPorTipo()

/* Calculo final costo total del Seguro*/

function costoTotal (){
precioTotal = Math.round(precioType + precioParcial2)
alert("El costo total es:" + " " + "$" + precioTotal)
}
costoTotal()


   

let continuar = prompt ("Cotizamos otra cobertura? \n 1- Seguir Cotizando \n 2- Salir ")

while(continuar == 1){
        seleccioneMarca()
        precioPorYear()
        precioPorTipo()
        costoTotal()
        continuar = prompt ("Cotizamos otra cobertura? \n 1- Seguir Cotizando \n 2- Salir ")
}

alert("Gracias por cotizar con nosotros!!")

/* Por ahora no encuentro funcionalidad para el FIND() en este proyecto*/

/*let respuesta = alert ("Los datos ingresados son:" + "\n" + brand +"\n" + year + "\n" + type)*/
