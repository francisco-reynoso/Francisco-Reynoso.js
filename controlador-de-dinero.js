/*
1- debemos ingresar nuestro dinero para gastar.
2- debemos ingresar los gastos.
3- ver si nuestro gasto ingresado es <= a nuestro dinero disponible.
4- preguntar si desea volver a hacer la operacion.
5- si no quiere hacer de nuevo la operacion mostrar el dinero con el que comenzo y el 
    dinero con el que termino.
*/
function Control() {
    alert("bienvenido/a a su controlador de sueldo")
    let monto= +prompt("ingrese su sueldo");
    let sueldo= monto;
    let continuar;

    do{
        let gasto = +prompt("ingrese su gasto, su dinero disponible es de $" +monto);
        if (monto >= gasto  ) {
            monto -= gasto; 
        }else{
            alert("su dinero es insuficiente para este gasto");
        }
        continuar = prompt("¿desea hacer otro gasto?");
        while (continuar !="si" && continuar != "no") {
            continuar = prompt('ingrese "si" o "no"');
        }
    } while (continuar == "si");
    return(alert("su sueldo inicial fue de $"+ sueldo + " y su dinero sobrante es de $" +monto));   
}
Control();





