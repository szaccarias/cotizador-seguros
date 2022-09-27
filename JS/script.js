/* Simulador - Cotizador de Automotores*/

function multiplicacion(a, b){
    return a * b
}

const primaAutos = 1500

const rcAutos = 2000
const cFull = 2200
const todoRiesgo = 2500

/* Marcas de Autos*/

let toyota = 1.8
let volkswagen = 1.4
let ford = 1.05
let chevrolet = 1.15
let renault = 1.08
let peugeot = 1.5
 
let precioParcial = 0
    
/*switch(brand){
    case "toyota":
        return precioParcial = multiplicacion(primaAutos, toyota)
    

        alert ("Su precio parcial es:" + " " + "$"+ precioParcial)
        break
}*/

function seleccioneMarca (){
    let brand = prompt ("La marca de su vehículo:")
            if(brand == "Toyota" || brand == "TOYOTA" || brand == "toyota"){
                precioParcial = multiplicacion(primaAutos, toyota)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
               
                }

            else if(brand == "Volkswagen" || brand == "VOLKSWAGEN" || brand == "volkswagen"){
                precioParcial = multiplicacion(primaAutos, volkswagen)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
             
                }

             else if(brand.toUpperCase == "Ford" || brand == "FORD" || brand == "ford"){
                precioParcial = multiplicacion(primaAutos, ford)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
        
                }

            else if(brand.toUpperCase == "Chevrolet" || brand == "CHEVROLET" || brand == "chevrolet"){
                /*precioParcial = multiplicacion(primaAutos, chevrolet)*/
                
                }

            else if(brand.toUpperCase == "Renault" || brand == "RENAULT" || brand == "renault"){
                precioParcial = multiplicacion(primaAutos, renault)
                /*alert ("Su precio parcial es:" + " " + "$"+ precioParcial)*/
              
                }

            else if(brand.toUpperCase == "peugeot" || brand == "peugeot" || brand == "peugeot"){
                precioParcial = multiplicacion(primaAutos, peugeot)
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
const constanteRC = 0.3
const constanteCF = 0.5
const constanteTR = 0.6


function precioPorTipo(){
    let type = prompt ("Que cobertura que quiere cotizar?: \n 1- Resposabilidad Civil\n 2- Terceros Completos\n 3- Todo Riesgo")
    switch(type){
        case "1":
            if (type == 1){
             precioType = precioParcial2 * constanteRC;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        case "2":
            if (type == 2){
             precioType =  precioParcial2 * constanteCF;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        case "3":
            if (type == 3){
             precioType = precioParcial2 * constanteTR;
            }
            /*alert("Se le adicionará:" + " " + "$" + precioType + " " + "por este tipo de seguro");*/
            break;
        default:
            alert("Ingrese un tipo de cobertura valida")
        
    }
}

precioPorTipo()
function costoTotal (){
premioTotal = precioType + precioParcial2
alert("El costo total es:" + " " + "$" +premioTotal)
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

alert("Gracias por cotizar con nosotros!")




    




/*let respuesta = alert ("Los datos ingresados son:" + "\n" + brand +"\n" + year + "\n" + type)*/
