window.onload = inicializar;
var formConvalidaciones;
var refConvalidaciones;



function inicializar(){
   formConvalidaciones = document.getElementById("form-convalidaciones");
   formConvalidaciones.addEventListener("submit", enviarConvalidacionesAFirebase,false);

   refConvalidaciones = firebase.database().ref().child("convalidaciones");
}

function enviarConvalidacionesAFirebase(event){

    event.preventDefault();
    refConvalidaciones.push({
        asistencia: event.target.asistencia-a.value,
        nombre: event.target.nombre-a.value,
        rut: event.target.rut-a.value
    });
   
}