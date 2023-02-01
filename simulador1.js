/* simulador de consulta de guardia obstetrica*/

/*funcion para derivar al paciente si la condicion se cumple*/
function localizar (guardiaCaba,guardiaPba){
    alert ("dirijase a :"+guardiaCaba+ " o/a "+guardiaPba);
}
let guardiaCaba= "Sanatorio Ciudad Autonoma de Buenos Aires telefono 01140456759";
let guardiaPba= "Sanatorio Provincial telefono 01145266575";

/*funcion de despedida cuando el ciclo se haya cumplido*/

function despedida(){
    alert("espero haber despejado sus dudas")
}
/****INICIO DE LA SIMULACION */

alert ("bienvenidos a la asistencia virtual obstetrica");
let consulta;
do{
    let consulta=parseInt(prompt("indique el motivo de consulta: coloque el numero segun corresponda a su consulta \n1-perdida de tapon mucoso \n2-perdida de liquido \n3-disminucion de movimientos fetales \n4-contracciones uterinas \n5-perdida de sangre"));
    if (consulta==0){
    break;
    }
    console.log (consulta);

    switch (consulta){
        case 1:
            alert ("ha elegido:'perdida de tapon mucoso'");
            if (consulta==1);
            alert("no debe alarmarse, las perdidas de tapon mucoso no son signos de parto inminente, puede presentarse hasta 10 dias antes del inicio del trabajo de parto, para mas información, puede solicitar un consulta con su obstetra de cabecera y partera")
            despedida();
            break;
        case 2:
            alert ("elegiste:'perdida de liquido'");
            if (consulta==2);
            alert("coloque un aposito con algodon y gasa y corrobore unos minutos el color del liquido")
            let colorDeliquido=parseInt(prompt("indique el color del liquido presente en el aposito de entre las siguientes opciones;\n1-transparente, \n2-rosado, \n3-amarillento,\n4-verde"))
            if(colorDeliquido===1){
                alert("llame a su partera para su mejor seguimiento");
                despedida();
                break;
            }else if (colorDeliquido===2){
                alert("llame a su partera para su mejor seguimiento");
                despedida();
                break;
            }else if (colorDeliquido===3){
                alert("llame a su partera para su mejor seguimiento");
                despedida();
                break;
            }else if (colorDeliquido===4){
                alert("consulte a la guardia para su evaluacion inmediatamente");
                localizar(guardiaCaba,guardiaPba);
                despedida();
                break
            }else{
                alert("no se ha identificado su respuesta ingrese al menu principal");
                break;  
            }
        case 3:
            alert ("elegiste:'disminucion de movimientos fetales'");
            if (consulta==3);
            alert ("ingiera alimentos ricos en azucar y estimule el abdomen, si se produce movientos espontaneos luego de esta acción, puede asociarlo con buenos parametros de vitalidad, si no se producen movimientos luego de esta accion concurra a la guardia");
            despedida();
            break
        case 4:
            alert ("elegiste:'contracciones uterinas'");
            if (consulta==4);
            alert("coloque el numero de contracciones percibidas en 10 minutos");
            let cantidadDecontracciones=parseInt(prompt("coloque el numero de contracciones percibidas"));
            if(cantidadDecontracciones<=2){
                alert("las contracciones aun son irregulares y pueden estar asociadas a movimientos fetales o a contracciones de tipo B, descanse y consulte nuevamente en caso de presentar contracciones regulares")
                despedida();
                break;
            }else if (cantidadDecontracciones<=3){
                alert("comuniquese con su partera para continuar el control evolutivo");
                despedida();
                break;
            }else if (cantidadDecontracciones>=5){
                alert("consulte con su partera y dirijase a la guardia");
                localizar(guardiaCaba,guardiaPba); 
                despedida();
                break;
            }else{
                alert("consulte a la guardia");
                localizar(guardiaCaba,guardiaPba); 
                despedida();
            }
            break;
        case 5:
            alert ("elegiste:'perdida de sangre'");
            if (consulta==5);
            alert("consulte a la guardia mas cercana");
            localizar(guardiaCaba,guardiaPba); 
            despedida();      
            break;
        default:
            alert ('ha ingresado un numero incorrecto, ingrese nuevamente la opcion deseada del 1 al 5, o 0 para salir ');
        
    }
    consulta=prompt ("si desea salir de menu precione el numero 0 si desea volver al menu principal precione cualquier letra")
}while(consulta!=0)