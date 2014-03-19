/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function init(){
    var regDate= /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
    var fechaCorrecta=false;
    var campoFecha= document.getElementById("fecha");
    campoFecha.onblur= validarFecha;
    //campoFecha.onblur= formatDate;
    var meses= new Array();

    meses["01"]= "Enero";
    meses["02"]= "Febrero";
    meses["03"]= "Marzo";
    meses["04"]= "Abril";
    meses["05"]= "Mayo";
    meses["06"]= "Junio";
    meses["07"]= "Julio";
    meses["08"]= "Agosto";
    meses["09"]= "Septiembre";
    meses["10"]= "Octubre";
    meses["11"]= "Noviembre";
    meses["12"]= "Diciembre";
    
    
    function validarFecha(){
        var fecha= document.getElementById("fecha").value;
        if(regDate.test(fecha)){
            fechaCorrecta=true;
        }
        if(fechaCorrecta){
            alert("fecha correcta");
            formatDate();
        }
        else{
            alert("fecha incorrecta");
        }
    }
    
    
    function formatDate() {
        var fechaMensaje=" ";
        var date = new Array();
        var mensaje= document.getElementById("mensaje");
        var p= document.createElement("p");
        var mes = "";
        var dat = document.getElementById("fecha").value;
        date = dat.split("/");
        for (var i = 0; i < date.length; i++) {
            if (i === 1) {
                for (var index in meses) {
                    if (index == date[i]) {
                        mes = meses[index];
                        fechaMensaje += mes + " ";
                    }
                }
            }
            if (i !== 1) {
                fechaMensaje += date[i] + " ";
            }
        }
        p.innerHTML= "";
        p.innerHTML= fechaMensaje;
        mensaje.appendChild(p);
    }
    
}
